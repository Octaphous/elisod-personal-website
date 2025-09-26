<script lang="ts">
	import type { ProjectConfig } from '$lib/projects';

	interface Props {
		project: ProjectConfig;
	}

	const { project }: Props = $props();
</script>

<div class="project-card">
	<div class="thumbnail">
		<img src={project.thumbnail} alt={`Projektbild för projektet "${project.title}"`} />
		<span class="tag">{project.tag}</span>
	</div>
	<h3>{project.title}</h3>
	<p>{project.shortDescription}</p>
</div>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;
	@use '$lib/scss/mixins.scss' as *;

	.project-card {
		& > h3 {
			margin-top: 1.25rem;
			font-weight: 700;
		}

		& > p {
			@include paragraph;
			margin-top: 0.25rem;
		}

		&:hover > h3 {
			text-decoration: underline;
		}
	}

	.thumbnail {
		position: relative;
		aspect-ratio: 16/9;
		background: rgb(240, 240, 240);
		border-radius: $borderRadius;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: end;

		img {
			height: 80%;
			display: block;
			object-fit: cover;
			border-radius: $borderRadius $borderRadius 0 0;
		}

		.tag {
			position: absolute;
			top: 1rem;
			right: 1rem;
			background: rgba(0, 0, 0, 0.7);
			color: #fff;
			padding: 0.25rem 0.5rem;
			border-radius: $borderRadius;
			font-size: 0.75rem;
		}
	}
</style>
