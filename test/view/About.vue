<template>
	<p>About Page</p>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'About',
	})
	export default class AboutView extends Vue {}
</script>
