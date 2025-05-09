import { loadContent } from '$lib/loadContent';

export const csr = true;

export async function load() {
    const testimonials = (
        await loadContent(
            import.meta.glob(`/src/content/testimonials/*.{md,svx,svelte.md}`) as Record<
                string,
                App.MdsvexResolver
            >
        )
    )
        .filter((item) => item.metadata?.status === 'published')
        .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

    const news = (
        await loadContent(
            import.meta.glob(`/src/content/news/*.{md,svx,svelte.md}`) as Record<
                string,
                App.MdsvexResolver
            >
        )
    ).filter((item) => item.metadata?.status === 'published');

    const sortedNews: Record<string, App.MdsvexFile[]> = {};

    for (const item of news.reverse()) {
        const date = new Date(item.metadata.date);
        const year = date.getFullYear() as unknown as string;
        if (!sortedNews[year]) {
            sortedNews[year] = [];
        }
        sortedNews[year].push(item);
    }

    return {
        testimonials,
        news: Object.entries(sortedNews).sort((a, b) => b[0].localeCompare(a[0]))
    };
}
