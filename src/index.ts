import { IPlugin } from 'rewyre';
import * as packageJson from '../package.json';

// Import all plugin modules.
import { Registry } from './provider/registry';

// Define plugin.
const plugin: IPlugin = {
	hooks: [],
	modules: [
		Registry,
	],
	config: {
		collection_prefix: 'ui_',
	},
	meta: {
		name: 'RewyreUI',
		config_name: 'rewyreui',
		version: packageJson.version,
		author: 'Danny SMc',
		author_email: 'danny.smc95@gmail.com',
		author_url: 'https://dannysmc.com',
		license: packageJson.license,
	},
};

// Export for type hinting by plugin users.
export {
	Registry,
};

// Export default for plugin.
export default plugin;
