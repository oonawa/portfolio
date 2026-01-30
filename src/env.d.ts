/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly API_SERVICE_DOMAIN: string;
	readonly API_KEY: string;
	readonly VERCEL_URL: string;
	readonly UPSTASH_REDIS_REST_URL: string;
	readonly UPSTASH_REDIS_REST_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
