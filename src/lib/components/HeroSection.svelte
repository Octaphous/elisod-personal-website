<script>
	import ArrowDown from './icons/ArrowDown.svelte';
	import Github from './icons/Github.svelte';
	import IconButton from './IconButton.svelte';
</script>

<section class="hero-section">
	<h1>Elias Söderlund</h1>
	<p>Jag gillar att arbeta med media, design och utveckling av nya digitala lösningar.</p>

	<ul class="link-list">
		<li>
			<a href="mailto:eliassoderlund@gmail.com">eliassoderlund@gmail.com</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/eliassoderlund"
				target="_blank"
				rel="noopener noreferrer"
			>
				linkedin.com/in/eliassoderlund
			</a>
		</li>
	</ul>

	<ul class="button-list">
		<li>
			<a href="#projects">
				<IconButton icon={ArrowDown}>Mina projekt</IconButton>
			</a>
		</li>
		<li>
			<a href="https://github.com/Octaphous" target="_blank" rel="noopener noreferrer">
				<IconButton icon={Github}>GitHub</IconButton>
			</a>
		</li>
	</ul>
</section>

<style lang="scss">
	@use '$lib/scss/variables.scss' as *;
	@use '$lib/scss/mixins.scss' as *;

	.hero-section {
		padding-top: 4rem;

		@include desktop {
			padding-top: 8rem;
		}

		& > h1 {
			@include heading;
		}

		& > p {
			margin-top: 0.5rem;
		}
	}

	.link-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 2rem;

		a {
			color: $colorTextGray;
			text-decoration: underline;
		}
	}

	.button-list {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
	}
</style>
