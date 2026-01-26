// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { CONSTS } from "./consts";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), sitemap()],

	site: CONSTS.SITE_DOMAIN,

	adapter: vercel(),

	output: "server"
});
