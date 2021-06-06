import { Provide, AbstractProvider } from 'rewyre';
import { compile, AsyncTemplateFunction } from 'ejs';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

@Provide('renderer', 'shared')
export class Renderer extends AbstractProvider {

	protected viewsDirectory: string;
	protected wrapper?: AsyncTemplateFunction;

	public constructor() {
		super();
		this.viewsDirectory = resolve(__dirname, '../view');
		this.prepare();
	}

	public async render(data: any): Promise<string> {
		if (!this.wrapper) return 'Template not ready.';
		return await this.wrapper(data);
	}

	protected async prepare(): Promise<void> {
		const wrapperHtml = (await readFile(`${this.viewsDirectory}/wrapper.ejs`)).toString('utf8');
		this.wrapper = compile(wrapperHtml, { async: true, filename: `${this.viewsDirectory}/wrapper.ejs` });
	}
}
