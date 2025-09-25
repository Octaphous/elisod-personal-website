<script lang="ts">
	//import favicon from '$lib/assets/favicon.svg';
	import '$lib/scss/base.scss';

	let { children } = $props();
</script>

<svelte:head>
	<!--<link rel="icon" href={favicon} />-->
	<title>Elias Söderlund - Portfolio</title>
</svelte:head>

{@render children?.()}
