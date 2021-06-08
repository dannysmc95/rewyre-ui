import { Framework } from 'rewyre';
import { resolve } from 'path';
import { renderSync } from 'sass';
import { writeFileSync } from 'fs';

export function AssetsHook(state: string, framework: Framework): void {
	if (state !== 'pre_init') return;

	// Define the logger.
	const logger = framework.getLogger();

	// Define base paths.
	const assetsPath = resolve(__dirname, '../assets');
	const stylesPath = resolve(assetsPath, './styles');

	// Compile the styles.
	const start = new Date().valueOf();
	logger.verbose('HOOK', 'Starting SCSS compilation...');
	const compiledStyles = renderSync({ file: resolve(stylesPath, './index.scss') });
	writeFileSync(resolve(stylesPath, './index.css'), compiledStyles.css.toString('utf-8'));
	logger.verbose('HOOK', `SCSS was compiled successfully in ${new Date().valueOf() - start}ms.`);

	// Setup the paths.
	framework.useStatic(assetsPath, '/ui/assets');
}
