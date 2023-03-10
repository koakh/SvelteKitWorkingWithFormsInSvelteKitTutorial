import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
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
