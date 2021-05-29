import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import mdsvex from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [
		'.svelte',
	],
	preprocess: [preprocess({
		postcss: true,
		defaults: {
			style: 'postcss',
		},

	}), mdsvex.mdsvex()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
