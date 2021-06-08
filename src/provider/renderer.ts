import { Provide, AbstractProvider, Registry } from 'rewyre';
import { compile, AsyncTemplateFunction } from 'ejs';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

@Provide('renderer', 'shared')
export class Renderer extends AbstractProvider {

	public registry!: Registry;
	protected viewsDirectory: string;
	protected wrapper?: AsyncTemplateFunction;

	public constructor() {
		super();
		this.viewsDirectory = resolve(__dirname, '../view');
		this.prepare();
	}

	public async getScripts(): Promise<Array<string>> {
		return [];
	}

	public async render(data: any): Promise<string> {

		// Define the page data.
		const pageData = await this.buildPageData(data);

		// Render the page.
		if (!this.wrapper) return 'Template not ready.';
		return await this.wrapper(pageData);
	}

	protected async buildPageData(data: any): Promise<any> {

		// Define the base data.
		const baseData = {
			meta: [],
			scripts: [],
			styles: [],
			sidebar: {
				navigation: this.registry.get('UI_SIDEBAR') || [],
				name: this.registry.get('UI_NAME') || 'Rewyre UI',
			},
		};

		// Merge and return data.
		return Object.assign(baseData, data);
	}

	protected async prepare(): Promise<void> {
		const wrapperHtml = (await readFile(`${this.viewsDirectory}/wrapper.ejs`)).toString('utf8');
		this.wrapper = compile(wrapperHtml, { async: true, filename: `${this.viewsDirectory}/wrapper.ejs` });
	}
}
