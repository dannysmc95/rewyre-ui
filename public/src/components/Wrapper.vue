<template>
	<p>Hello <strong v-text="name"></strong></p>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'Wrapper',
	})
	export default class WrapperComponent extends Vue {
		public name = 'Hello, World!';
	}
</script>
