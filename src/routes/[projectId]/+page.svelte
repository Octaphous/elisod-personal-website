<script lang="ts">
	import ProjectPageBanner from '$lib/components/ProjectPageBanner.svelte';
	import ProjectPageGallery from '$lib/components/ProjectPageGallery.svelte';
	import ProjectPageInfo from '$lib/components/ProjectPageInfo.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	const { data }: Props = $props();
</script>

<header>
	<ProjectPageBanner image={data.project.thumbnail} />
</header>

<main>
	<ProjectPageInfo project={data.project} />
	<ProjectPageGallery images={data.project.gallery} />
</main>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as *;

	main {
		@include wrapper;
	}
</style>
