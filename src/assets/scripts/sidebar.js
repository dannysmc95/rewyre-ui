if (typeof window.vm === 'undefined') window.vm = {};
window.vm.sidebar = Vue.createApp({
	data(){return{
		navigation: [],
	}},
	methods: {
		isActivePath: function(path) {
			return window.location.pathname === path;
		},
	},
	mounted() {
		const container = this.$refs.navinit;
		this.navigation = JSON.parse(container.getAttribute('data-init'));
	},
}).mount('#sidebar');