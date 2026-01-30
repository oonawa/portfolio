export const CONSTS = {
	SITE_NAME: "PORTFOLIO",
	SITE_DOMAIN: import.meta.env.DEV
		? "http://localhost:4321"
		: `https://${import.meta.env.VERCEL_URL}`,
	SITE_DESCRIPTION: "Personal website of oonawa",
	PRD_SITE_DOMAIN: "https://oonawa-portfolio.vercel.app",
} as const;
