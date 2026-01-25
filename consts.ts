export const CONSTS = {
	SITE_NAME: "PORTFOLIO",
	SITE_DOMAIN: import.meta.env.DEV
		? "http://localhost:4321/"
		: `https://${import.meta.env.VERCEL_URL}`,
	SITE_DESCRIPTION: "Personal website of oonawa",
} as const;
