<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	interface Props {
		icon: Component;
		children?: Snippet;
	}

	const props: Props = $props();
</script>

<button class="icon-button">
	<span>{@render props.children?.()}</span>
	<props.icon />
</button>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;

	button {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
		padding: 0.75rem 1rem;
		background: transparent;
		border: 0.1rem solid #000;
		border-radius: $borderRadius;
		cursor: pointer;
		font-size: 1rem;

		&:hover {
			background: #000;
			color: #fff;
		}

		:global(.svg-icon) {
			width: 1rem;
			height: 1rem;
		}
	}
</style>
