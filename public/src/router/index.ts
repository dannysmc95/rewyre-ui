import { createRouter, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext, createWebHashHistory } from 'vue-router';
import { MetaGuard } from './meta-guard';
import Dashboard from '../views/Dashboard.vue';
import components from '../data/components.json';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Dashboard',
		meta: { title: 'Dashboard | Rewyre UI' },
		component: Dashboard,
	},
];

components.forEach((component: any) => {
	routes.push({
		path: component.path,
		name: component.name,
		meta: component.meta,
		component: () => import(component.view),
	});
});

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	MetaGuard(to, from, next);
});

export default router;
