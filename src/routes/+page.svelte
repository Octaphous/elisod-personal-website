<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
</script>

<header>
	<HeroSection />
</header>

<main>
	<ProjectsSection />
</main>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as *;

	header,
	main {
		@include wrapper;
	}
</style>
