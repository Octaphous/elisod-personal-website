<script lang="ts">
	import type { ProjectConfig } from '$lib/projects';
	import IconLink from './IconLink.svelte';
	import ArrowDown from './icons/ArrowDown.svelte';
	import ArrowTopRight from './icons/ArrowTopRight.svelte';
	import Github from './icons/Github.svelte';

	interface Props {
		project: ProjectConfig;
	}

	const { project }: Props = $props();
</script>

<div class="project-info">
	<div class="project-info-header">
		<h1>{project.title}</h1>

		<div class="project-actions">
			{#if project.githubRepo}
				<IconLink href={project.githubRepo} icon={Github}>Github</IconLink>
			{/if}

			{#if project.liveDemo}
				<IconLink href={project.liveDemo} icon={ArrowTopRight}>Besök</IconLink>
			{/if}
		</div>
	</div>
	{#each project.description as paragraph}
		<p>{paragraph}</p>
	{/each}
</div>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as *;

	.project-info {
		padding-top: 2rem;

		& > p {
			@include paragraph;
			margin-top: 1.5rem;
		}
	}

	.project-info-header {
		margin-bottom: 1rem;

		@include desktop {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		h1 {
			@include heading;
			flex: 1;
		}
	}

	.project-actions {
		display: flex;
		gap: 0.5rem;

		& > :global(a) {
			flex: 1;
			margin-top: 1.5rem;

			@include desktop {
				margin-top: 0;
			}

			:global(button) {
				width: 100%;
			}
		}
	}
</style>
