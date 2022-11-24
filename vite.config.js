import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: '/lotto-analysis/',
	plugins: [sveltekit()]
};

export default config;
