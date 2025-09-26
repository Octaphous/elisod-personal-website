export interface ProjectConfig {
	id: string;
	tag: string;
	title: string;
	shortDescription: string;
	description: string;
	thumbnail: string;
	gallery: string[];
	githubRepo?: string;
	liveDemo?: string;
}

const projects: ProjectConfig[] = [
	{
		id: 'scrapcad',
		tag: 'Node.js',
		title: 'ScrapCad',
		shortDescription: 'Lagerbaserat voxelmodelleringsprogram.',
		description:
			'Ett lagerbaserat voxelmodelleringsprogram för att skapa 3D-modeller av kuber. Programmet integrerades tidigare mot spelet Scrap Mechanic för att skapa anpassade modeller och objekt i spelet. Programmet är pluginbaserat där både selektering och generering av voxlar sker via plugins.',
		thumbnail: '/projects/scrapcad/thumbnail.webp',
		gallery: [
			'/projects/scrapcad/1-screen.webp',
			'/projects/scrapcad/2-screen.webp',
			'/projects/scrapcad/3-screen.webp',
			'/projects/scrapcad/4-screen.webp'
		],
		githubRepo: 'https://github.com/Octaphous/Scrapcad'
	},
	{
		id: 'tusentiocms',
		tag: 'SvelteKit',
		title: 'Tusentio CMS',
		shortDescription: 'Kundanpassat innehållshanteringssystem.',
		description:
			'Ett huvudlöst innehållshanteringssystem byggt från grunden för att kunna byggas om och struktureras efter kundens behov.',
		thumbnail: '/projects/tusentiocms/thumbnail.webp',
		gallery: [
			'/projects/tusentiocms/1-screen.webp',
			'/projects/tusentiocms/2-screen.webp',
			'/projects/tusentiocms/3-screen.webp',
			'/projects/tusentiocms/4-screen.webp'
		],
		liveDemo: 'https://kund.tusent.io'
	},
	{
		id: 'hembilder',
		tag: 'SvelteKit',
		title: 'Hembilder',
		shortDescription: 'Bokningssystem och tjänster för mäklarfotografering.',
		description:
			'Ett bokningssystem och tjänster för mäklarfotografer att hantera sina kunder och bokningar enkelt.',
		thumbnail: '/projects/hembilder/thumbnail.webp',
		gallery: [
			'/projects/hembilder/1-screen.webp',
			'/projects/hembilder/2-screen.webp',
			'/projects/hembilder/3-screen.webp',
			'/projects/hembilder/4-screen.webp'
		],
		liveDemo: 'https://hembilder.se'
	},
	{
		id: 'lucasfrisk',
		tag: 'Nuxt',
		title: 'Lucas Frisk',
		shortDescription: 'Portfoliosida för fotograferingstjänster.',
		description:
			'En portfoliosida för fotografen Lucas Frisk för att visa upp sina tjänster och tidigare arbeten.',
		thumbnail: '/projects/lucasfrisk/thumbnail.webp',
		gallery: ['/projects/lucasfrisk/1-screen.webp', '/projects/lucasfrisk/2-screen.webp'],
		liveDemo: 'https://lucasfrisk.se'
	}
];

export default projects;
