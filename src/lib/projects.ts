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
		id: 'hembilder',
		tag: 'SvelteKit',
		title: 'Hembilder',
		shortDescription: 'Bokningssystem och tjänster för fotografer.',
		description:
			'Ett bokningssystem och tjänster för fotografer att hantera sina kunder och bokningar enkelt.',
		thumbnail: '/projects/hembilder/thumbnail.webp',
		gallery: [
			'/projects/hembilder/1.webp',
			'/projects/hembilder/2.webp',
			'/projects/hembilder/3.webp',
			'/projects/hembilder/4.webp'
		],
		liveDemo: 'https://hembilder.se'
	},
	{
		id: 'tusentio-cms',
		tag: 'SvelteKit',
		title: 'Tusentio CMS',
		shortDescription: 'Kundanpassat innehållshanteringssystem.',
		description:
			'Ett huvudlöst innehållshanteringssystem byggt från grunden för att kunna byggas om och struktureras efter kundens behov.',
		thumbnail: '/projects/tusentiocms/thumbnail.webp',
		gallery: [
			'/projects/tusentiocms/1.webp',
			'/projects/tusentiocms/2.webp',
			'/projects/tusentiocms/3.webp',
			'/projects/tusentiocms/4.webp'
		]
	}
];

export default projects;
