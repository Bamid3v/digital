<script lang="ts">
    import JsonLd from '$lib/components/JSON-LD.svelte';

    let { date, tags, id, textContent, children } = $props();
</script>

<div class="timeline-item" {id}>
    <JsonLd
        type="Article"
        data={{
            datePublished: new Date(date).toISOString(),
            articleBody: textContent,
            keywords: tags
                ?.split(',')
                .map((e: string) => e.trim())
                .filter((e: string) => !!e),
            author: {
                '@type': 'Organization',
                name: 'Digital Virtues GmbH',
                url: 'https://digitalvirtues.com'
            }
        }}
    />

    <h3>{new Date(date).toISOString().slice(0, 10)}</h3>
    {@render children?.()}
    <!-- Tags: {tags
        ?.split(',')
        .map((e: string) => e.trim())
        .filter((e: string) => !!e)
        .join(', ')} -->
</div>

<style lang="scss">
    .timeline-item {
        margin-bottom: 2rem;
        text-wrap: pretty;
        animation: item linear both;
        animation-timeline: view();
        animation-range: cover 25% cover 50%;
        @media only screen and (max-width: 768px) {
            animation: itemMob linear both;
            animation-timeline: view();
            animation-range: cover 15% cover 35%;
        }

        &:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        h3 {
            font-size: 32px;
            color: #00ffff;
            margin-bottom: 1rem;
        }
    }

    @keyframes item {
        0% {
            transform: translateX(100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
    
    @keyframes itemMob {
        0% {
            transform: translateX(50px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
</style>
