# NOTES

- [Working With Forms In SvelteKit](https://www.youtube.com/watch?v=XNbCp7ZJi-8)
- [Working With Forms In SvelteKit](https://joyofcode.xyz/working-with-forms-in-sveltekit)

## Try Debug Links

- [r/sveltejs - How do you debug SvelteKit server-side code in VSCode ?](https://www.reddit.com/r/sveltejs/comments/pahufd/how_do_you_debug_sveltekit_serverside_code_in/)
- [Debugging SvelteKit endpoints and load function using the debugger](https://www.youtube.com/watch?v=ubeOpB9FlZE)
- [How to debug SvelteKit server-side code with Chromium DevTools](https://index.garden/fix/sveltekit-server-side-debugging/)

## Vite

- [Run the Vite dev server on a custom port](https://koenwoortman.com/vitejs-run-dev-server-on-different-port/)

    // "debug": "node --inspect ./node_modules/.bin/vite dev",
    // "dev:debug": "node --inspect-brk ./node_modules/vite/bin/vite.js -- --port 8000",

## TODO: Finish and Polish bellow notes with only the Essencial parts and Instructions in NOTES and TLDR of How to Use it

almost ok
"debug": "node --inspect ./node_modules/vite/bin/vite.js dev",

- [Vite](https://vitejs.dev/config/build-options.html#build-sourcemap)


- [Enable sourcemaps in Vue-Vite](https://stackoverflow.com/questions/66275174/enable-sourcemaps-in-vue-vite)

### Instructions of How to Use

pnpm dev
run `Launch Chrome against localhost : Frontend Code`
  need `debugger;` in place
  (work with .svelte typescript files)
  UPDATE: work only with breakpoints to if open vscode in a non syn link folder, and must add breakpoints before launch debug
  after browser open if we add more breakpoints we need to close debug browser and open it again

run `Launch via NPM : Server Code`
  need `debugger;` or just regular breakpoint's
  (only work without sourceMaps)

- [Debug Node.js Apps using Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_can-i-debug-if-im-using-symlinks)  

UPDATE: `Launch via NPM : Server Code`  works same way with `dev` and `debug` script