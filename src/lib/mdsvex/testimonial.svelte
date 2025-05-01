<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';

    let { date, author, role, company, url, img, id, textContent, children } = $props();

    const loadedImage = loadImageModule(img);
</script>

<figure class="testimonial" {id}>
    <figcaption>
        {#if loadedImage}
            <enhanced:img
                src={loadedImage}
                sizes="(min-width: 1216px) 50vw, (min-width: 1024px) 80vw, 100vw"
                alt="Picture of {author}"
                class="photo"
            />
        {/if}
    </figcaption>
    <div class="content">
        <h3>{author}</h3>
        <h4>{role} at <a href={url}>{company}</a></h4>
        <JsonLd
            type="Review"
            data={{
                author: {
                    '@type': 'Person',
                    name: author
                },
                reviewBody: textContent,
                datePublished: new Date(date).toISOString().slice(0, 10),
                itemReviewed: {
                    '@type': 'Organization',
                    name: 'Digital Virtues GmbH',
                    url: 'https://digitalvirtues.com'
                }
            }}
        />

        <blockquote>
            {@render children?.()}
        </blockquote>
    </div>
</figure>

<style lang="scss">

    .testimonial {
        text-align: center;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        background-color: rgb(0, 67, 255);

        @media only screen and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            margin-bottom: 0rem;
        }   

        figcaption{
            picture{
                img,.photo{
                width: 16rem;
                height: auto;
                border-radius: 50%;
                margin: 1rem auto;
                
            }
            }
            
        }
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 12px;
            max-width: 900px;

            @media only screen and (max-width: 768px) {
                gap:4px;
                width: 100%;
                align-items: center;
            
                h3{
                    font-size: 1.75rem;
                margin: 0;

                }
                h4{
                    font-size:1.25rem ;
                margin-bottom: 0.2rem;

                }
                blockquote{
                    font-size: 1rem;
                    text-align: center;
                }
        }   

            h3 {
                font-weight: 700;
                font-size: 2.25rem;
                margin-bottom: 0.5rem;
            }

            h4 {
                font-weight: 700;
                font-size: 1.5rem;
                margin-bottom: 0.75rem;
                text-align: left;
            }

            p {
                margin-bottom: 1rem;
                line-height: 14.4pt;
                margin: 0;
                color: var(--color-text-secondary);
            }
        }

        blockquote {
            // max-width: var(--breakpoint-mobile);
            position: relative;
            text-align: left;
            font-size: 1.25rem;
            max-width: 600px;
            overflow-wrap: break-word;

            /* &::before {
                content: url('$lib/assets/logo-v-white.svg');
                min-width: 1.25em;
                min-height: 1.25em;
                position: absolute;
                left: 0;
                bottom: 0;
            }

            &::after {
                content: url('$lib/assets/logo-d-white.svg');
                min-width: 1.25em;
                min-height: 1.25em;
                position: absolute;
                right: 0;
                top: 0;
            } */
        }

        .photo {
            width: 10rem;
            height: auto;
            border-radius: 5rem;
            margin: 1rem auto;
        }
    }
</style>
