import { createStore } from 'vuex';
import DefaultState from './modules/default';
import ApiState from './modules/api';

export default createStore({
	state: DefaultState.state,
	mutations: DefaultState.mutations,
	actions: DefaultState.actions,
	modules: {
		api: ApiState,
	},
});
