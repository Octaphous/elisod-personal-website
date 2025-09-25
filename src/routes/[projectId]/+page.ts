import projects from '$lib/projects';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const { projectId } = params;
	const project = projects.find((project) => project.id === projectId);

	if (!project) {
		error(404, { message: 'Not found' });
	}

	return {
		project
	};
}
