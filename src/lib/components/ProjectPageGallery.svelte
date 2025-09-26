<script lang="ts">
	interface Props {
		images: string[];
	}

	const { images }: Props = $props();
</script>

<ul class="project-gallery">
	{#each images as image}
		<li>
			<a href={image} target="_blank" rel="noopener noreferrer">
				<img src={image} alt="Projektbild" />
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;
	@use '$lib/scss/mixins.scss' as *;

	.project-gallery {
		display: grid;
		gap: 2rem;
		grid-template-columns: minmax(0, 1fr);
		padding-top: 3rem;

		@include desktop {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		img {
			width: 100%;
			aspect-ratio: 19/10;
			object-fit: cover;
			border-radius: $borderRadius;
			box-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.1);
		}
	}
</style>
