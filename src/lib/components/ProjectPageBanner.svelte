<script lang="ts">
	interface Props {
		image: string;
	}

	const { image }: Props = $props();
</script>

<div class="project-banner">
	<img src={image} alt="Projektbild" />
</div>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;
	@use '$lib/scss/mixins.scss' as *;

	div {
		background: rgb(240, 240, 240);
		height: 20rem;
		display: flex;
		justify-content: center;
		align-items: end;
		overflow: hidden;
		padding-inline: 1rem;

		@include desktop {
			padding-inline: 2rem;
		}

		img {
			max-width: 30rem;
			width: 100%;
			border-radius: $borderRadius $borderRadius 0 0;
			opacity: 0;
			animation: banner-popup 1.5s cubic-bezier(0, 1, 0, 1) forwards;
		}
	}

	@keyframes banner-popup {
		from {
			transform: translateY(4rem);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
