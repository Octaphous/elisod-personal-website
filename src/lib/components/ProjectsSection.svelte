<script>
	import projects from '$lib/projects';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="projects-section" id="projects">
	<h2>Mina projekt</h2>

	<ul>
		{#each projects as project}
			<li>
				<a href="https://example.com/projekt-1">
					<ProjectCard
						thumbnail={project.thumbnail}
						title={project.title}
						description={project.shortDescription}
					/>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as *;

	.projects-section {
		padding-top: 8rem;

		& > h2 {
			@include heading;
		}
	}

	ul {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
		row-gap: 4rem;
	}
</style>
