import { IPlugin } from 'rewyre';
import * as packageJson from '../package.json';

// Import all plugin modules.
import { AdminController } from './controller/admin';
import { RolesModel } from './model/roles';
import { UsersModel } from './model/users';
import { Registry } from './provider/registry';
import { Renderer } from './provider/renderer';

// Define plugin.
const plugin: IPlugin = {
	hooks: [],
	modules: [
		AdminController,
		RolesModel,
		UsersModel,
		Registry,
		Renderer,
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
