import rss from "@astrojs/rss";
import { getBlogList } from "../lib/cms-client";
import type { APIContext } from "astro";
import { CONSTS } from "../../consts";

export async function GET(context: APIContext) {
	const blogs = await getBlogList();

	return rss({
		title: CONSTS.SITE_NAME,
		description: CONSTS.SITE_DESCRIPTION,
		site: context.site?.origin || CONSTS.SITE_DOMAIN,
		items: blogs.map((blog) => ({
			title: blog.title,
			description: blog.summary,
			link: `/blog/${blog.id}`,
			pubDate: new Date(blog.createdAt),
		})),
	});
}
