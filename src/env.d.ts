/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly API_SERVICE_DOMAIN: string;
	readonly API_KEY: string;
	readonly VERCEL_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
