import { Drivers, Framework } from 'rewyre';
import RewyreUI, { ViewRegistry } from '../src/index';
import { resolve } from 'path';

(async () => {

	// Create instance of framework.
	const framework = new Framework({
		port: 3010,
		database: true,
		log_levels: ['info', 'warn', 'error', 'verbose', 'debug'],
		databases: [
			{
				unique: 'main',
				host: 'localhost',
				port: 27017,
				name: 'rewyre-ui-testing',
				driver: Drivers.MONGO,
				default: true,
			},
		],
	});

	// Set the registry items.
	ViewRegistry.add('/about', {
		component: resolve(__dirname, './view/About.vue'),
		meta: { title: 'About | Rewyre UI' },
		name: 'About',
	});

	// Install and use the plugin.
	framework.use(RewyreUI);

	// Start the framework.
	await framework.start();
})();
