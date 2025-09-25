<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowLeft from './icons/ArrowLeft.svelte';

	let scrolled = false;

	function updateScrolled() {
		scrolled = window.scrollY > 0;
	}

	onMount(() => {
		window.addEventListener('scroll', updateScrolled);
		updateScrolled();
	});
</script>

<header class:scrolled>
	<div class="wrapper">
		<a href="/">
			<ArrowLeft />
			<span>Tillbaka till startsidan</span>
		</a>
	</div>
</header>

<style lang="scss">
	@use '$lib/scss/mixins.scss' as *;

	header {
		z-index: 1;
		padding-block: 1.5rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		transition: background 0.2s ease;
		opacity: 0;
		animation: fade-in 0.5s 0.5s ease forwards;

		&.scrolled {
			background: rgba(255, 255, 255, 0.9);
			backdrop-filter: blur(1rem);
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.025);
		}

		.wrapper {
			@include wrapper;
		}

		a {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding-block: 0.5rem;

			&:hover {
				text-decoration: underline;
			}
		}

		:global(.svg-icon) {
			width: 1rem;
			height: 1rem;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
