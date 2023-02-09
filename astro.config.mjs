import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://Om-Thorat.github.io',
  integrations: [svelte(), tailwind(), mdx()],
  "server":{
    headers: { "Access-Control-Allow-Origin": "*" }
  }
});