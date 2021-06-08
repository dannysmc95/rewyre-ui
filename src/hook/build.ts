import { Framework } from 'rewyre';
import { ViewRegistry } from '../module/view-registry';
import { resolve } from 'path';
import { writeFile } from 'fs/promises';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';

export async function BuildHook(state: string, framework: Framework): Promise<void> {
	if (state !== 'pre_start') return;

	// Define the logger.
	const logger = framework.getLogger();

	// Build the components.json file.
	const vreg = ViewRegistry.getRegistry();
	if (vreg.size === 0) {
		await writeFile(resolve(process.cwd(), 'public/src/data/components.json'), '[]', 'utf-8');
	} else {
		const components: Array<any> = [];
		vreg.forEach((reg: any, path: string) => {
			components.push({ path: path, name: reg.name, meta: reg.meta, view: reg.component });
		});
		await writeFile(resolve(process.cwd(), 'public/src/data/components.json'), JSON.stringify(components), 'utf-8');
	}

	// Build application.
	try {
		logger.info('BUILD', 'Building application, please wait...');
		await build({
			root: resolve(process.cwd(), 'public'),
			mode: 'production',
			plugins: [vue()],
			publicDir: resolve(process.cwd(), 'public/public'),
			logLevel: 'silent',
		});
		logger.info('BUILD', 'Build has finished successfully.');
	} catch(err) {
		logger.error('BUILD', 'There was an error building the application.', err);
	}

	// Setup the paths.
	framework.useStatic(resolve(process.cwd(), 'public/dist'), '/admin');
	framework.useStatic(resolve(process.cwd(), 'public/dist/assets'), '/assets');
}
