import { IPlugin } from 'rewyre';
import * as packageJson from '../package.json';

// Import all plugin modules.
import { AdminController } from './controller/admin';
import { BuildHook } from './hook/build';
import { SidebarHook } from './hook/sidebar';
import { RolesModel } from './model/roles';
import { UsersModel } from './model/users';
import { Renderer } from './provider/renderer';
import { ViewRegistry } from './module/view-registry';

// Define plugin.
const plugin: IPlugin = {
	hooks: [
		{ type: 'init', func: SidebarHook },
		{ type: 'start', func: BuildHook },
	],
	modules: [
		AdminController,
		RolesModel,
		UsersModel,
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
	AdminController,
	RolesModel,
	UsersModel,
	Renderer,
	ViewRegistry,
};

// Export default for plugin.
export default plugin;
