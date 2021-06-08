import { Framework } from 'rewyre';

/**
 * Will automatically register the base framework sidebar options.
 * 
 * @param _ Ignore.
 * @param framework The framework instance.
 */
export function SidebarHook(state: string, framework: Framework): void {
	if (state !== 'pre_init') return;

	// Define the sidebar.
	const sidebar: Array<any> = [
		{ icon: 'fas fa-tachometer-alt', name: 'Dashboard', path: '/admin' },
		{ icon: 'fas fa-users', name: 'User Manager ', path: '/admin/users' },
		{ icon: 'fas fa-plug', name: 'Plugins ', path: '/admin/plugins' },
		{ icon: 'fas fa-sliders-h', name: 'Settings', path: '/admin/settings' },
	];

	// Get the registry.
	const registry = framework.getRegistry();
	registry.set('UI_SIDEBAR', sidebar);
}
