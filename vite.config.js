import { sveltekit } from '@sveltejs/kit/vite';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';
const config = {
    plugins: [
        sveltekit(),
        nodeLoaderPlugin(),
    ],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    // server: {
    //   port: 8080,
    // }
    // build: {
    //   sourcemap: true,
    // },
    // css: {
    //   devSourcemap: true
    // },
};
export default config;
//# sourceMappingURL=vite.config.js.map