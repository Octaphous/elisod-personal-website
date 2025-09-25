<script lang="ts">
	const { children } = $props();
</script>

<div class="wrapper">
	{@render children?.()}
</div>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;

	.wrapper {
		max-width: $desktopBreakpoint;
		width: 100%;
		margin: 0 auto;
		padding: 0 2rem;
	}
</style>
