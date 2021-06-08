import { Provide, AbstractProvider, Registry } from 'rewyre';
import { resolve } from 'path';

// Vite config.
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';

@Provide('renderer', 'shared')
export class Renderer extends AbstractProvider {

	public registry!: Registry;
	protected basePath: string;

	public constructor() {
		super();
		this.basePath = resolve(__dirname, '../../');
		this.prepare();
	}

	public async render(data: any): Promise<string> {
		return '';
	}

	protected async prepare(): Promise<void> {
		// await build({
		// 	root: resolve(this.basePath, 'public'),
		// 	mode: 'production',
		// 	plugins: [vue()],
		// 	publicDir: resolve(this.basePath, 'public/public'),
		// });
	}
}
