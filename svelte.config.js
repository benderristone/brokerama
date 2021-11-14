// svelte.config.js
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

export default {
    kit: {
        path: {
            base: dev ? '' : '/brokerama',
        },
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        })
    }
};
