<script lang="ts">
	interface Props {
		title: string;
		description: string;
		thumbnail: string;
	}

	const props: Props = $props();
</script>

<div class="project-card">
	<div class="thumbnail">
		<img src={props.thumbnail} alt={`Projektbild för projektet "${props.title}"`} />
		<span class="tag">ASP.NET</span>
	</div>
	<h3>{props.title}</h3>
	<p>{props.description}</p>
</div>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;
	@use '$lib/scss/mixins.scss' as *;

	.project-card {
		& > h3 {
			margin-top: 0.75rem;
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
		height: 20rem;
		background: rgb(220, 220, 220);
		border-radius: $borderRadius;

		img {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
			border-radius: $borderRadius;
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
