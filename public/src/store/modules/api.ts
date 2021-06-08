let baseUrl: string;
if (window.location.hostname === 'localhost') {
	baseUrl = `http://localhost:${window.location.port}`;
} else {
	baseUrl = window.location.origin;
}

export default {
	namespaced: true,
	state: {
		endpoint: baseUrl,
		options: {
			emulateJSON: true,
		},
	},
	mutations: {},
	actions: {},
};
