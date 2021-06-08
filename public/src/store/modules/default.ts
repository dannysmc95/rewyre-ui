import { ActionContext } from 'vuex';

export default {
	state: {
		app: {
			sidebar: true,
		},
	},
	mutations: {
		SET_SIDEBAR: (state: any, status: boolean) => {
			state.app.sidebar = status;
		},
	},
	actions: {
		setSidebarStatus: (context: ActionContext<any, any>, status: boolean) => {
			context.commit('SET_SIDEBAR', status);
		},
	},
};
