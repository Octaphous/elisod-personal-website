<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	interface Props {
		icon: Component;
		children?: Snippet;
		href: string;
	}

	const props: Props = $props();
</script>

<a href={props.href} class="icon-link">
	<span>{@render props.children?.()}</span>
	<props.icon />
</a>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;

	.icon-link {
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
