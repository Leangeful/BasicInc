import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),

		paths: {
			base: process.env.NODE_ENV === 'production' ? '/basicinc' : ''
		}
	}
};
export default config;
