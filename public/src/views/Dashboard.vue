<template>
	<div>
		<p>Dashboard</p>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'Home',
	})
	export default class HomeView extends Vue {
		public mounted(): void {
			console.log(this.$router, this.$route);
		}
	}
</script>
