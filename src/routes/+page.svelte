<script lang="ts">
    import Person from '$lib/components/Person.svelte';
    import LogoDv from '$lib/assets/logo-dv-white.svg';
    import LogoText from '$lib/assets/logo-text-white.svg';

    import pillarImg from '$lib/assets/img/res/stars-bg.jpg';
    import blendImage from '$lib/assets/img/res/imageBlend.jpg';
    // import dBlueLight from '$lib/assets/logo-d-blue-light.svg';
    // import vBlueLight from '$lib/assets/logo-v-blue-light.svg';

    import { base } from '$app/paths';
    import Timeline from '$lib/components/Timeline.svelte';
    let { data } = $props();
</script>

<section class="hero-section">
    <nav>
        <div class="content">
            <a href="{base}/" class="brand">
                <img class="logo-text" src={LogoText} alt="Digital Virtues GmbH" />
            </a>
            <ul role="list">
                <li><a href="{base}/#mission">Mission</a></li>
                <li><a href="{base}/#team">Team</a></li>
                <li><a href="{base}/#references">References</a></li>
                <li><a href="{base}/#timeline">Timeline</a></li>
            </ul>
        </div>
    </nav>
    <div class="hero">
        <div class="overlay">
            <div class="container">
                <img src={LogoDv} alt="Digital Virtues logo" class="logo-dv" />
            </div>
            <div class="blend-bg"></div>
        </div>
    </div>
</section>
<div class="main-content">
    <section id="mission">
        <div class="container">
            <h2>
                <blockquote>
                    We build, operate and invest in digital revenue models with an emphasis on
                    crypto and big data.<br />
                    We invest in people and ideas, build and operate software, and maintain long-term
                    personal relationships that reflect our passion for digital innovation.
                </blockquote>
            </h2>
        </div>
    </section>
    <section id="vision">
        <div class="container">
            <h2>Vision</h2>
            <p>
                To be a driving force in digital transformation by empowering exceptional
                entrepreneurs, creating sustainable digital value, and fostering an ecosystem of
                innovation through meaningful relationships and hands-on engagement.
            </p>
        </div>
    </section>

    <section id="values">
        <div class="container">
            <h2>Values</h2>
            <dl>
                <dt>Digital Transformation</dt>
                <dd>
                    We embrace and drive the evolution of digital technologies and business models.
                </dd>
                <dt>Digital Sustainability ("Digitale Erneuerbarkeit")</dt>
                <dd>We create and support digital solutions that are sustainable and renewable.</dd>
                <dt>Digital Innovation</dt>
                <dd>We constantly seek and develop new digital approaches and solutions.</dd>
                <dt>Personal Engagement</dt>
                <dd>
                    We build genuine, long-term relationships and engage on a personal level with
                    founders and partners.
                </dd>
                <dt>Hands-on Value Creation</dt>
                <dd>
                    We provide real value by actively contributing our expertise and resources,
                    increasing efficiency and effectiveness for our partners.
                </dd>
                <dt>Adaptability</dt>
                <dd>
                    We value teams and individuals who can adapt to changing challenges in the
                    digital landscape.
                </dd>
                <dt>Knowledge Sharing</dt>
                <dd>
                    We share our expertise through consulting, mentoring, and strategic support for
                    entrepreneurs and startup teams.
                </dd>
            </dl>
        </div>
    </section>

    <!-- img="peter-eulberg.jpg" -->
    <section id="team">
        <div class="team-bg-blend"></div>
        <div class="container">
            <h2>Team</h2>
            <div class="team-info">
                <Person
                    firstName="Peter"
                    lastName="Eulberg"
                    description="Successful blockchain startup founder with executive leadership experience, specializing in organizational development, portfolio management, and expertise spanning entrepreneurship, web3, technology, and business process analysis."
                    role="CEO"
                    company="Digital Virtues GmbH"
                    companyUrl="https://digitalvirtues.com/"
                    img="peter.png"
                    homepage="https://www.saschagoebel.com/"
                    linkedin="https://www.linkedin.com/in/eulberg/"
                />
                <Person
                    firstName="Sascha"
                    lastName="Göbel"
                    description="Data Wrangler, AI Whisperer, Code Monkey, Investor, Serial Entrepreneur, Helpdesk, Meme Connoisseur. I do stuff with computers."
                    role="CTO"
                    company="Digital Virtues GmbH"
                    companyUrl="https://digitalvirtues.com/"
                    img="Sascha.png"
                    homepage="https://www.saschagoebel.com/"
                    linkedin="https://www.linkedin.com/in/saschagoebel/"
                />
            </div>
        </div>
    </section>
    <section id="pillars">
        <div class="pillar-bg-blend"></div>

        <div class="container">
            <h2>Pillars of Operation</h2>
            <div class="pillars">
                <div class="pillar pillar-invest">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-euro-icon lucide-euro"
                        ><path d="M4 10h12" /><path d="M4 14h9" /><path
                            d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
                        /></svg
                    >
                    <h3>Venture Capital / Business Angel Activities</h3>
                    <ul>
                        <li>
                            We invest in strong founder teams with exceptional know how and skills
                            that are able to adapt to changing challenges
                        </li>
                        <li>
                            Our investments have superb access or at least a unique angle into their
                            markets
                        </li>
                        <li>
                            We love to engange on a personal level and very hands-on. Depending on
                            the individual preferences and needs of the founders we often have 1-2
                            calls a month and at least one yearly workshop. We are providing real
                            value i.e. increasing efficiency and effectiveness significantly as well
                            as adding raw productivity output if needed.
                        </li>
                    </ul>
                </div>

                <div class="pillar pillar-projects">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-rocket-icon lucide-rocket"
                        ><path
                            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                        /><path
                            d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                        /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path
                            d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
                        /></svg
                    >
                    <h3>Projects, Activities & Interests</h3>
                    <ul>
                        <li>
                            <a href="{base}/anyblock-analytics/" target="_blank"
                                >Anyblock Analytics GmbH (Crypto Analytics)</a
                            >
                        </li>
                        <li>Digital Virtues Media Services</li>
                        <li>
                            <a href="https://www.dielichtmatrosen.de/" target="_blank"
                                >Die Lichtmatrosen (Photography)</a
                            >
                        </li>
                        <li>
                            <a href="https://peachandlime.shop/" target="_blank"
                                >Peach & Lime (Business- & IT-Consulting)</a
                            >
                        </li>
                        <li>
                            <a href="https://www.deine-zweisamkeit.de/" target="_blank"
                                >Deine Zweisamkeit (Business-, AI- & IT-Consulting)</a
                            >
                        </li>
                        <li>
                            <a href="https://finomet.de/" target="_blank"
                                >Finomet (Business- & IT-Consulting)</a
                            >
                        </li>
                        <li>More to come, watch this space</li>
                        <!-- <li>Oli</li> -->
                        <!-- <li>Blockchain Founders</li> -->
                        <!-- <li>Valid</li> -->
                        <!-- <li>Creator Cartel</li> -->
                        <!-- <li>Curator</li> -->
                        <!-- <li>Knowledge Extension</li> -->
                        <!-- <li>Proxy Manager</li> -->
                    </ul>
                </div>
                <div class="pillar pillar-consult">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-square-user-icon lucide-square-user"
                        ><rect width="18" height="18" x="3" y="3" rx="2" /><circle
                            cx="12"
                            cy="10"
                            r="3"
                        /><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /></svg
                    >
                    <h3>Consulting</h3>
                    <p>
                        Our consulting activities are very diverse reflecting our personal expertise
                        and experiences. They are mainly centered around personal, business and
                        strategic development. Lately we cover mostly entrepreneural topics like
                        scoping, sales and HR as well as specific questions in crypto, software or
                        infrastructre projects.
                    </p>
                    Following a few examples:
                    <ul>
                        <li>Mentoring of students and (future) founders</li>
                        <li>
                            Supporting entrepreneurs and startup teams on a monthly basis regarding
                            prioritization, growth, HR and a wide range of other questions and needs
                            as they arise.
                        </li>
                        <li>IT- process design and advisory</li>
                        <li>
                            Information technology consulting, i.e. make or buy, decision support
                            regarding software and implementation options, design and implementation
                            of architecture and infrastructure, ...
                        </li>
                        <li>
                            As certified project managers we support our customers and partners in
                            any aspect of project and portfolio management.
                        </li>
                    </ul>
                </div>
                <div class=" pillar-img">
                    <img src={pillarImg} alt="" />
                </div>
            </div>
        </div>
    </section>

    <section id="references">
        <div class="test-bg-blend"></div>
        <div class="container">
            <h2>Testimonials</h2>
            <div class="sliders">
                <div class="testimonials">
                    {#each data.testimonials as testimonial}
                        <testimonial.default id="testimonial-{testimonial.slug}" />
                    {/each}
                </div>
            </div>
        </div>
    </section>
    <!-- <div class="blendimage">
            <img src={blendImage} alt="" srcset="" />
        </div> -->
</div>

<!-- <section id="timeline">
        <div class="container">
            <h2>News / Timeline</h2>
            {#each data.news as news}
                <div class="timeline-year">
                    <h3>{news[0]}</h3>
                    {#each news[1] as item}
                        <item.default id="news-item-{item.slug}" />
                    {/each}
                </div>
            {/each}
        </div>
    </section> -->
<section id="timeline">
    <div class="container">
        <h2>News / Timeline</h2>
        <Timeline />
    </div>
</section>

<style lang="scss">
    /* Sections */

    section {
        vertical-align: middle;
        // padding: 6rem 0;
        position: relative;
        color: var(--color-white);

        :global(a) {
            color: var(--color-cyan);
        }

        .container {
            padding: 6rem 0;
        }

        &#mission,
        &#vision,
        &#values {
            background-color: #000627;
        }

        &#vision,
        &#values,
        &#pillars,
        &#team,
        &#references,
        &#timeline {
            h2 {
                font-weight: 900;
                line-height: 4.3rem;
                text-align: center;
                font-size: 4rem;
                margin-bottom: 1em;
            }
        }
    }
    .hero-section {
        width: 100%;
        height: 110vh;
        position: relative;

        nav {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            z-index: 1000;

            .content {
                display: flex;
                align-items: center;
                width: 100%;
                row-gap: 30px;
                padding: 1.5rem 1rem;
                justify-content: space-between;
                max-width: 1280px;
                margin: 0 auto;

                .brand {
                    width: 15rem;
                    text-decoration: none;
                    img {
                        height: 2rem;
                    }
                }

                @media only screen and (max-width: 768px) {
                    flex-direction: column;
                    row-gap: 6px;
                    justify-content: center;
                    padding: 0.5rem;
                }
            }

            a {
                color: #f8f8f8;
                text-decoration: none;
                transition: all 0.5s ease-in-out;

                // margin-bottom: 0.75rem;

                @media (min-width: 1024px) {
                    margin-bottom: 0;
                }

                &:hover {
                    text-decoration: underline;
                    text-underline-offset: 0.2rem;
                    color: aquamarine;
                }
            }

            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                font-weight: 600;
                padding-left: 0;
                line-height: 19px;
                gap: 3rem;
                margin-bottom: 0px;

                @media only screen and (max-width: 768px) {
                    gap: 1rem;
                }
            }
        }

        .hero {
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 0;
            background: url('$lib/assets/img/res/hero.jpg') center center / cover no-repeat;
            .overlay {
                display: flex;
                position: relative;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                background-color: rgb(from var(--color-blue-dark) r g b / 0.25);
            }

            .blend-bg {
                position: absolute;
                bottom: 0;
                background-image: url('$lib/assets/img/res/Verlauf.jpg');
                background-position: top;
                background-repeat: no-repeat;
                background-blend-mode: lighten;
                background-color: #000627;
                background: linear-gradient(1800deg, #000627 0%, rgba(255, 255, 255, 0) 100%);
                left: 0;
                width: 100%;
                height: 40%;
                opacity: 1;
            }
            .logo-dv {
                width: 200px;
                margin-top: 25px;
                height: auto;
                @media only screen and (max-width: 450px) {
                    width: 150px;
                }
            }
        }
    }

    /* Mission Section */
    section#mission {
        padding: 0rem 0.7rem;
        h2 {
            font-size: 1.75rem;
            font-weight: 900;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        blockquote {
            position: relative;
            font-size: 3rem;
            text-align: center;
            font-weight: 700;
            line-height: 55px;
            padding: 1em 0.5em;
            text-wrap: pretty;
            // max-width: 900px;

            @media only screen and (max-width: 768px) {
                font-size: 1.75rem;
                line-height: 2rem;
            }
        }

        blockquote::before {
            content: url('$lib/assets/logo-d-blue-light.svg');
            min-width: 1.5em;
            min-height: 1.5em;
            position: absolute;
            right: 0;
            top: 0;
        }

        blockquote::after {
            content: url('$lib/assets/logo-v-blue-light.svg');
            min-width: 1.25em;
            min-height: 1.25em;
            position: absolute;
            left: 0;
            bottom: 0;
        }

        @media (min-width: 768px) {
            h2 {
                font-size: 3rem;
            }

            blockquote {
                padding: 1em 3em;

                &::before {
                    right: 1.75em;
                }

                &::after {
                    left: 2em;
                }
            }
        }
    }

    section#vision {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0rem 0.7rem;

        p {
            font-size: 1.25rem;
            text-align: center;
            text-wrap: pretty;
            max-width: 900px;
        }
    }

    /* Values Section */
    section#values {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            max-width: 900px;
        }
        dl {
            margin: auto;
            text-align: center;

            dt {
                font-weight: 700;
                font-size: 1.5em;
            }

            dd {
                padding: 0 0.75rem;
                line-height: 1.5;
                font-weight: 500;
                text-align: center;
                font-size: 1.25rem;
                margin-bottom: 1.5em;
                text-wrap: pretty;
                max-width: 900px;
            }
        }
    }

    /* Pillars Section */
    section#pillars {
        // position: relative;

        .pillar-bg-blend {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
            height: 100%;
            background: #000627;
            background: linear-gradient(
                0deg,
                rgba(0, 6, 39, 0) 0%,
                rgba(0, 6, 39, 1) 34%,
                rgba(0, 6, 39, 1) 67%,
                rgba(0, 67, 255, 1) 100%
            );
        }
        .container{
            position: relative;
            z-index: 2;
        }
        .pillars {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            align-items: stretch;
            justify-content: center;
            gap: 1.5rem;
            padding: 1rem 6rem 0 6rem;

            @media only screen and (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
                grid-template-rows: repeat(1, 1fr);
                padding: 0 0.7rem;
            }

            .pillar {
                cursor: pointer;
                background-color: rgb(0 67 255);
                border-radius: 12px;
                padding: 1em;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
                color: #f8f8f8;
                transition: all 0.5s ease-in-out;
                // max-width: 450px;
                // border: 3px solid #00ffff;
                list-style-image: url('$lib/assets/logo-dv-white.svg');
                &:hover {
                    background-color: #00ffff;
                    color: rgb(0 67 255);
                    list-style-image: url('$lib/assets/logo-dv-blue-light.svg');

                    a {
                        color: rgb(0 67 255);
                        text-decoration: underline;
                    }

                    svg {
                        color: rgb(0 67 255);
                    }
                }

                a {
                    color: #f8f8f8;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.25rem;
                    line-height: 2rem;
                }

                svg {
                    width: 94px;
                    height: 94px;
                    margin-bottom: 1.5rem;
                    color: #f8f8f8;
                }

                @media (min-width: 1024px) {
                    padding: 2em;
                    border-radius: 2rem;
                }

                h3 {
                    font-size: 2.25rem;
                    margin-bottom: 0.5em;
                    text-align: center;
                    font-weight: bold;
                    line-height: 44px;
                }

                ul li a,
                p {
                    font-size: 1rem;
                    line-height: 14.4pt;
                    margin-bottom: 0.5em;
                    text-align: left;
                }

                ul li {
                    margin-left: 0.75em;
                    padding-left: 0.25em;
                }
            }
            .pillar-img {
                background: #000;
                display: flex;
                padding: 0px;
                justify-content: center;
                align-items: start;
                border-radius: 1rem;
                // flex: 1 1 95%;
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    border-radius: 1rem;

                    height: auto;
                    object-fit: cover;
                }
            }
        }
    }

    /* Team Section */
    section#team {
        background-color: rgb(0 67 255);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .team-bg-blend {
            position: absolute;
            top: 0;
            width: 100%;
            height: 50%;
            background: #000627;
            background: linear-gradient(180deg, rgba(0, 6, 39, 1) 0%, rgba(0, 67, 255, 1) 100%);
        }

        .team-info {
            display: flex;
            flex-direction: column;
            gap: 4rem;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            // 717px
            @media (min-width: 768px) {
                max-width: var(--breakpoint-desktop);
                margin: auto;
            }
        }
        h2 {
            margin-bottom: 1em;
        }
    }

    /* References Section */
    section#references {
        position: relative;

        .test-bg-blend {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50%;
            background: #000627;
            background: linear-gradient(0deg, rgba(0, 6, 39, 1) 0%, rgba(0, 67, 255, 0) 100%);
        }
        .container {
            padding: 6rem 0rem;
            max-width: 100%;
        }
        .sliders {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            margin: 0 auto;

            .testimonials {
                display: grid;
                grid-template-columns: repeat(3, 70%);
                width: 100%;
                gap: 24px;
                padding: 0 3rem;
                overflow: auto;
                scrollbar-width: none;
                @media only screen and (max-width: 768px) {
                    padding: 0 1.5rem;
                    grid-template-columns: repeat(1, 100%);
                }
                // background-color: rgb(from var(--color-blue-dark) r g b / 0.5);

                // @media (min-width: 768px) {
                //     max-width: var(--breakpoint-desktop);
                //     margin: auto;
                //     flex-direction: row;
                //     flex-wrap: wrap;
                //     justify-content: center;
                //     align-items: stretch;
                // }
            }
        }
    }

    /* Timeline Section */
    section#timeline {
        background-color: #000627;
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 5rem 0;
        }
        h2 {
            margin-bottom: 2em;
        }
    }

    //Background

    .main-content {
        background-image: url('$lib/assets/img/res/imageBlend.jpg');
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;

    }

    // .image-blend {
    //     height: 100%;
    //     width: 2600px;

    //     position: relative;
    //     // overflow: hidden;

    //     .blendimage {
    //         width: 100%;
    //         position: absolute;
    //         bottom: 0;
    //         z-index: -3;
    //         // right: 50%;

    //         img {
    //             width: 100%;
    //         }
    //     }
    // }

    /* Background Animation */
    // @property --a {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --b {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --c {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --d {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --e {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --f {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --g {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --h {
    //     syntax: '<percentage>';
    //     inherits: false;
    //     initial-value: 0%;
    // }

    // @property --i {
    //     syntax: '<angle>';
    //     inherits: false;
    //     initial-value: 20deg;
    // }

    // :global(main) {
    //     background-color: var(--color-blue-light);
    // }

    // :global(main > .main-content) {
    //     --a: 31%;
    //     --b: -11%;
    //     --c: -24%;
    //     --d: 29%;
    //     --e: 49%;
    //     --f: 102%;
    //     --g: 56%;
    //     --h: 112%;
    //     --i: 35deg;

    //     background-color: var(--color-blue-dark);

    //     background:
    //         radial-gradient(
    //             ellipse at var(--a) var(--b),
    //             rgb(from var(--color-cyan) r g b / 0.5),
    //             transparent 45%,
    //             transparent
    //         ),
    //         radial-gradient(
    //             ellipse at var(--c) var(--d),
    //             rgb(from var(--color-blue-dark) r g b / 0.75),
    //             transparent 75%,
    //             transparent
    //         ),
    //         radial-gradient(
    //             ellipse at var(--e) var(--f),
    //             rgb(from var(--color-blue-light) r g b / 0.75),
    //             transparent 55%,
    //             transparent
    //         ),
    //         radial-gradient(
    //             ellipse at var(--g) var(--h),
    //             rgb(from var(--color-white) r g b / 0.25),
    //             transparent 65%,
    //             transparent
    //         ),
    //         linear-gradient(var(--i), var(--color-blue-dark), var(--color-blue-light));

    //     animation:
    //         a 26s linear infinite alternate,
    //         b 24s linear infinite alternate,
    //         c 42s linear infinite alternate,
    //         d 23s linear infinite alternate,
    //         e 22s linear infinite alternate,
    //         f 44s linear infinite alternate,
    //         g 28s linear infinite alternate,
    //         h 39s linear infinite alternate,
    //         i 20s linear infinite alternate;
    // }

    // @keyframes a {
    //     from {
    //         --a: 31%;
    //     }
    //     25% {
    //         --a: 36%;
    //     }
    //     50% {
    //         --a: 22%;
    //     }
    //     75% {
    //         --a: 35%;
    //     }
    //     to {
    //         --a: 92%;
    //     }
    // }

    // @keyframes b {
    //     from {
    //         --b: -11%;
    //     }
    //     25% {
    //         --b: 107%;
    //     }
    //     50% {
    //         --b: 48%;
    //     }
    //     75% {
    //         --b: 122%;
    //     }
    //     to {
    //         --b: 5%;
    //     }
    // }

    // @keyframes c {
    //     from {
    //         --c: -24%;
    //     }
    //     25% {
    //         --c: 65%;
    //     }
    //     50% {
    //         --c: 17%;
    //     }
    //     75% {
    //         --c: 22%;
    //     }
    //     to {
    //         --c: 34%;
    //     }
    // }

    // @keyframes d {
    //     from {
    //         --d: 29%;
    //     }
    //     25% {
    //         --d: 52%;
    //     }
    //     50% {
    //         --d: -21%;
    //     }
    //     75% {
    //         --d: 92%;
    //     }
    //     to {
    //         --d: 61%;
    //     }
    // }

    // @keyframes e {
    //     from {
    //         --e: 49%;
    //     }
    //     25% {
    //         --e: -20%;
    //     }
    //     50% {
    //         --e: 38%;
    //     }
    //     75% {
    //         --e: -3%;
    //     }
    //     to {
    //         --e: 111%;
    //     }
    // }

    // @keyframes f {
    //     from {
    //         --f: 102%;
    //     }
    //     25% {
    //         --f: 30%;
    //     }
    //     50% {
    //         --f: 100%;
    //     }
    //     75% {
    //         --f: 111%;
    //     }
    //     to {
    //         --f: 72%;
    //     }
    // }

    // @keyframes g {
    //     from {
    //         --g: 56%;
    //     }
    //     25% {
    //         --g: 98%;
    //     }
    //     50% {
    //         --g: 105%;
    //     }
    //     75% {
    //         --g: 76%;
    //     }
    //     to {
    //         --g: 14%;
    //     }
    // }

    // @keyframes h {
    //     from {
    //         --h: 112%;
    //     }
    //     25% {
    //         --h: 98%;
    //     }
    //     50% {
    //         --h: 32%;
    //     }
    //     75% {
    //         --h: -25%;
    //     }
    //     to {
    //         --h: 64%;
    //     }
    // }

    // @keyframes i {
    //     from {
    //         --i: 35deg;
    //     }
    //     25% {
    //         --i: 211deg;
    //     }
    //     50% {
    //         --i: 151deg;
    //     }
    //     75% {
    //         --i: 62deg;
    //     }
    //     to {
    //         --i: 186deg;
    //     }
    // }
</style>
