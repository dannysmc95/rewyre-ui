import { Framework } from 'rewyre';
import { resolve } from 'path';
import { renderSync } from 'sass';
import { writeFileSync } from 'fs';

export function AssetsHook(_: unknown, framework: Framework): void {

	// Define base paths.
	const assetsPath = resolve(__dirname, '../assets');
	const stylesPath = resolve(assetsPath, './styles');

	// Compile the styles.
	const compiledStyles = renderSync({ file: resolve(stylesPath, './index.scss') });
	writeFileSync(resolve(stylesPath, './index.css'), compiledStyles.css.toString('utf-8'));
}
