export interface ProjectConfig {
	id: string;
	tag: string;
	title: string;
	shortDescription: string;
	description: string;
	thumbnail: string;
	gallery: string[];
}

const projects: ProjectConfig[] = [
	{
		id: 'react-project',
		tag: 'react',
		title: 'React Project',
		shortDescription: 'A project built with React.',
		description: 'This is a detailed description of the React project.',
		thumbnail: '/test-img.png',
		gallery: ['/test-img.png', '/test-img.png', '/test-img.png', '/test-img.png']
	},
	{
		id: 'svelte-project',
		tag: 'svelte',
		title: 'Svelte Project',
		shortDescription: 'A project built with Svelte.',
		description: 'This is a detailed description of the Svelte project.',
		thumbnail: '/test-img.png',
		gallery: ['/test-img.png', '/test-img.png', '/test-img.png', '/test-img.png']
	}
];

export default projects;
