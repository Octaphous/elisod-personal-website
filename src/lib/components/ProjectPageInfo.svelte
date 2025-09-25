<script lang="ts">
	import type { ProjectConfig } from '$lib/projects';
	import IconButton from './IconButton.svelte';
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
				<a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
					<IconButton icon={Github}>Github</IconButton>
				</a>
			{/if}

			{#if project.liveDemo}
				<a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
					<IconButton icon={ArrowTopRight}>Besök</IconButton>
				</a>
			{/if}
		</div>
	</div>
	<p>
		{project.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores pariatur
		possimus alias natus deleniti sit aliquid fugit nam, temporibus accusamus explicabo quasi inventore
		quidem neque, recusandae amet adipisci nisi repellendus assumenda unde voluptas illo dolorem. Deleniti,
		reprehenderit! Tenetur iste a ipsa earum esse nesciunt culpa sit, quia fugiat molestias voluptatum,
		magnam doloribus laudantium, natus neque. Sint harum molestias officia perferendis eaque corporis
		vel, rerum excepturi quia odit temporibus labore minus magni facere quasi consequuntur fugit aliquam
		tempore provident quos id! Adipisci culpa voluptatum, fuga est minima vero ducimus cupiditate illum
		facere ipsum consectetur consequuntur necessitatibus dolor corporis tenetur dolores nulla.
	</p>
</div>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as *;

	.project-info {
		padding-top: 2rem;

		& > p {
			@include paragraph;
			margin-top: 1.75rem;
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

		a {
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
