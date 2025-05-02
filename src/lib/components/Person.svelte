<script lang="ts">
    import { loadImageModule } from '$lib/loadImageModule';
    import JsonLd from '$lib/components/JSON-LD.svelte';
    import dvBlueDark from '$lib/assets/logo-dv-blue-dark.svg';

    let { firstName, lastName, description, role, company, companyUrl, img, homepage, linkedin } =
        $props();

    const loadedImage = loadImageModule(img);
</script>

<div class="person">
    <JsonLd
        type="Person"
        data={{
            familyName: lastName,
            givenName: firstName,
            name: `${firstName} ${lastName}`,
            jobTitle: role,
            url: homepage,
            image: loadedImage?.img.src
        }}
    />

    <div class="photo-container">   
        {#if loadedImage}
            <enhanced:img
                src={loadedImage}
                sizes="(min-width: 1216px) 50vw, (min-width: 1024px) 80vw, 100vw"
                alt="Photo of {firstName} {lastName}"
                class="photo"
            />
        {/if}
    </div>

    <div class="person-info">
        <h3>{firstName} {lastName}</h3>
        <h4><a href={companyUrl} target="_blank">{role} {company}</a></h4>
        <p>{description}</p>

        <div class="links">
            <a href={homepage} target="_blank">Homepage</a>
            <a href={linkedin} target="_blank">LinkedIn</a>
        </div>
    </div>
</div>

<style lang="scss">
    .person {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1.5rem;

        &:nth-child(even) {
            flex-direction: row-reverse;
            text-align: right;
            .person-info {
                .links {
                    justify-content: end;
                }
            }
        }

        @media only screen and (max-width: 768px) {
            flex-direction: column;
            gap: 6px;
            justify-content: center;
            text-align: center;
            padding: 0.5rem;

            &:nth-child(even) {
                flex-direction: column;
                gap: 6px;
                justify-content: center;
                text-align: center;
                .person-info {
                    .links {
                        justify-content: center;
                    }
                }
            }
        }

        .photo-container {
            position: relative;
            width: 18rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            // border-radius: 50%;
            overflow: hidden;
            background-color: var(--color-background);
        }

        .person-info {
            @media only screen and (max-width: 768px) {
            }
            h3 {
                font-weight: 700;
                font-size: 2.25rem;
                margin-bottom: 0.5rem;
                @media only screen and (max-width: 768px) {
                    font-size: 2rem;
                    line-height: 2rem;
                    padding: 0.5rem 0;
                }
            }

            h4 {
                font-weight: 700;
                font-size: 1.75rem;
                margin-bottom: 0.75rem;

                @media only screen and (max-width: 768px) {
                    font-size: 1.5rem;
                    line-height: 1.5rem;
                }
            }

            p {
                margin-bottom: 1.25rem;
                line-height: 1.5rem;
                max-width: 700px;
                @media only screen and (max-width: 768px) {
                    font-size: 1rem;
                }
            }
            .links {
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 1rem;
                @media only screen and (max-width: 520px) {
                    justify-content: center;
                    font-size: 1rem;
                }
            }
            a {
                text-decoration: none;
                // color: var(--color-primary);
                font-weight: 700;
                font-size: 1.5rem;
                transition: all 0.5s ease-in-out;
                cursor: pointer;

                @media only screen and (max-width: 768px) {
                    font-size: 1.15rem;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .photo {
            width: 100%;
        }

        @media (min-width: 768px) {
            max-width: var(--breakpoint-desktop);
            .photo {
            }
        }

        &::after {
            content: '';
            clear: both;
            display: table;
        }
    }
</style>
