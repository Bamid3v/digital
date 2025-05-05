<script lang="ts">
    import Person from '$lib/components/Person.svelte';
    import LogoDv from '$lib/assets/logo-dv-white.svg';
    import LogoText from '$lib/assets/logo-text-white.svg';
    import pillarImg from '$lib/assets/img/res/stars-bg.jpg';
    import { base } from '$app/paths';
    import { ChevronLeft, ChevronRight } from 'lucide-svelte';

    let { data } = $props();

    const slides = data.testimonials.map((testimonial) => {
        return {
            id: '#testimonial-' + testimonial.slug
        };
    });

    
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
            <div class="observer"></div>
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
                    homepage="https://eulberg.info/"
                    linkedin="https://www.linkedin.com/in/eulberg/"
                />
                <Person
                    firstName="Sascha"
                    lastName="Göbel"
                    description="Data Wrangler, AI Whisperer, Code Monkey, Investor, Serial Entrepreneur, Helpdesk, Meme Connoisseur. I do stuff with computers."
                    role="CTO"
                    company="Digital Virtues GmbH"
                    companyUrl="https://digitalvirtues.com/"
                    img="saschagoebel.png"
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
            <div class="arrows">
                <!-- {slides[count].id} -->
                <div class="arrows">
                    <a href={slides[0].id}><ChevronLeft size={40} /></a>
                    <a href={slides[2].id}><ChevronRight size={40} /></a>
                </div>
            </div>
            <div class="slider-wrapper">
                <div class="slider">

                    {#each data.testimonials as testimonial}
                        <testimonial.default id="testimonial-{testimonial.slug}" />
                    {/each}
                </div>
                <div class="slider-nav">
                    {#each data.testimonials as testimonial}
                        <a href="#testimonial-{testimonial.slug}">.</a>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</div>

<section id="timeline">
    <div class="container">
        <h2>News / Timeline</h2>
        <div class="timeline-container">
            {#each data.news as news}
                <div class="timeline-box">
                    <span class="line"></span>
                    <span class="ball"> <span class="inner-ball"></span> </span>
                    <div class="timeline-item">
                        <h2>{news[0]}</h2>
                        {#each news[1] as item}
                            <item.default id="news-item-{item.slug}" />
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    /* Sections */

    section {
        vertical-align: middle;
        position: relative;
        color: var(--color-white);

        :global(a) {
            color: var(--color-cyan);
        }

        .container {
            position: relative;
            padding: 6rem 0;
        }

        &#mission,
        &#vision,
        &#values {
            background-color: var(--color-blue-dark);
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
                animation: fade linear both;
                animation-timeline: view();
                animation-range: cover 0% cover 35%;

                @media only screen and (max-width: 768px) {
                    font-size: 2.8rem;
                    line-height: 115%;
                }
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
                color: var(--color-white);
                text-decoration: none;
                transition: all 0.5s ease-in-out;

                // margin-bottom: 0.75rem;

                @media (min-width: 1024px) {
                    margin-bottom: 0;
                }

                &:hover {
                    text-decoration: underline;
                    text-underline-offset: 0.2rem;
                    color: var(--color-cyan);
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
                background-color: var(--color-blue-dark);
                background: linear-gradient(
                    1800deg,
                    var(--color-blue-dark) 0%,
                    rgba(255, 255, 255, 0) 100%
                );
                left: 0;
                width: 100%;
                height: 40%;
                opacity: 1;
            }
            .logo-dv {
                width: 200px;
                margin-top: 25px;
                height: auto;
                animation: focus-in-contract 2s linear 0s 1 normal none;
                animation: rotate linear both;
                animation-timeline: view();
                animation-range: cover 50% cover 90%;
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
            animation: fade linear both;
            animation-timeline: view();
            animation-range: cover 0% cover 45%;

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

        .container h2 {
            animation: fade linear both;
            animation-timeline: view();
            animation-range: cover 0% cover 45%;
        }

        p {
            font-size: 1.25rem;
            text-align: center;
            text-wrap: pretty;
            max-width: 900px;
            animation: fade linear both;
            animation-timeline: view();
            animation-range: cover 0% cover 45%;
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
            animation: fade linear both;
            animation-timeline: view();
            animation-range: cover 0% cover 45%;

            @media only screen and (max-width: 425px) {
                animation-range: cover 0% cover 25%;
            }
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
        .pillar-bg-blend {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
            height: 100%;
            background: var(--color-blue-dark);
            background: linear-gradient(
                0deg,
                rgba(0, 6, 39, 0) 0%,
                rgba(0, 6, 39, 1) 34%,
                rgba(0, 6, 39, 1) 67%,
                rgba(0, 67, 255, 1) 100%
            );
        }
        .container {
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
                background-color: var(--color-blue-light);
                border-radius: 12px;
                padding: 1em;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
                color: var(--color-white);
                transition: all 0.5s ease-in-out;
                list-style-image: url('$lib/assets/logo-dv-white.svg');
                animation: fade linear both;
                animation-timeline: view();
                animation-range: cover 0% cover 35%;
                &:hover {
                    background-color: var(--color-cyan);
                    color: var(--color-blue-light);
                    list-style-image: url('$lib/assets/logo-dv-blue-light.svg');

                    a {
                        color: var(--color-blue-light);
                        text-decoration: underline;
                    }

                    svg {
                        color: var(--color-blue-light);
                    }
                }

                a {
                    color: var(--color-white);
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.25rem;
                    line-height: 2rem;
                }

                svg {
                    width: 94px;
                    height: 94px;
                    margin-bottom: 1.5rem;
                    color: var(--color-white);

                    @media only screen and (max-width: 768px) {
                        width: 72px;
                        height: 72px;
                    }
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

                    @media only screen and (max-width: 768px) {
                        font-size: 1.75rem;
                        line-height: 130%;
                    }
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
                    margin-bottom: 0.5rem;
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
                width: 100%;
                height: 100%;
                animation: fade linear both;
                animation-timeline: view();
                animation-range: cover 0% cover 35%;

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
        background-color: var(--color-blue-light);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .team-bg-blend {
            position: absolute;
            top: 0;
            width: 100%;
            height: 50%;
            background: var(--color-blue-dark);
            background: linear-gradient(180deg, rgba(0, 6, 39, 1) 0%, rgba(0, 67, 255, 1) 100%);
        }

        .container {
            z-index: 2;
        }

        .team-info {
            display: flex;
            flex-direction: column;
            gap: 4rem;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

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
            background: var(--color-blue-dark);
            background: linear-gradient(0deg, rgba(0, 6, 39, 1) 0%, rgba(0, 67, 255, 0) 100%);
        }
        .container {
            padding: 6rem 0rem;
            max-width: 100%;
            position: relative;

            .arrows {
                position: absolute;
                right: 0%;
                z-index: 5;
                top: 55%;
                width: 100%;
                display: flex;
                padding: 0 20px;
                justify-content: space-between;
                align-items: center;

                @media only screen and (max-width: 768px) {
                    display: none;
                }
            }

            .arrows a {
                border-radius: 50%;
                background-color: var(--color-cyan);
                color: var(--color-blue-dark);
                font-size: 30px;
                cursor: pointer;
                border: none;
                padding: 5px;
            }

        }
        .slider-wrapper {
            display: flex;
            max-width: 1300px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            margin: 0 auto;
            animation: slide-up linear both;
            animation-timeline: view();
            animation-range: cover 0% cover 25%;

            .slider {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                scroll-behavior: smooth;
                box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
                -ms-overflow-style: none; /* Hide scrollbar IE and Edge */
                scrollbar-width: none; /* Hide scrollbar Firefox */
                width: 100%;
                gap: 24px;
                padding: 0 3rem;
                overflow: auto;
                scrollbar-width: none;

                @media only screen and (max-width: 768px) {
                    padding: 0 0.7rem;
                    flex-direction: column;
                }
            }
            .slider-nav {
                display: flex;
                column-gap: 1rem;
                position: absolute;
                bottom: 0rem;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1;
                @media only screen and (max-width: 768px) {
                    display: none;
                }
            }

            

            .slider-nav a {
                width: 0.75rem;
                height: 0.75rem;
                border-radius: 50%;
                background-color: var(--color-cyan);
                opacity: 0.5;
                color: transparent;
                transition: opacity ease 250ms;
            }

            .slider-nav a:hover {
                opacity: 1;
            }

            .slider-nav a:active {
                opacity: 1;
            }
        }
    }

    /* Timeline Section */
    section#timeline {
        background-color: var(--color-blue-dark);
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 5rem 0;

            .timeline-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                width: 1000px;

                .timeline-box:nth-child(even) {
                    width: 500px;
                    border-bottom: 0px;
                    border-top: 0px;
                    border-left: 3px solid var(--color-blue-light);
                    border-right: 0px;
                    border-style: solid;
                    margin-right: 1px;
                    align-self: flex-end;
                    padding-left: 30px;
                    animation: stroke-left linear both;
                    animation-timeline: view();
                    animation-range: cover 0% cover 35%;

                    .timeline-item {
                        padding: 25px 0 25px 25px;
                        @media only screen and (max-width: 810px) {
                            padding: 25px 30px 30px 25px;
                        }
                    }
                    .line {
                        top: -2px;
                        left: 18px;
                        @media only screen and (max-width: 810px) {
                            left: 0px;
                        }
                    }
                    .ball {
                        left: -22px;
                        top: -4%;
                        @media only screen and (max-width: 810px) {
                            right: -22px;
                            top: -4%;
                            left: unset;
                        }
                    }
                    @media only screen and (max-width: 1000px) {
                        width: 400px;
                    }

                    @media only screen and (max-width: 810px) {
                        width: 100%;
                        align-self: flex-start;
                        padding-left: 0px;
                        border-right: 3px solid var(--color-blue-light);
                        border-left: 0px solid var(--color-blue-light);
                        animation: stroke-right linear both;
                        animation-timeline: view();
                        animation-range: cover 0% cover 35%;
                    }
                }

                @media only screen and (max-width: 1000px) {
                    width: 800px;
                }
                @media only screen and (max-width: 810px) {
                    width: 100%;
                    padding: 0 1rem;
                }
                .timeline-box {
                    max-width: 500px;
                    height: 500px;
                    position: relative;
                    border-bottom: 0px;
                    border-left: 0;
                    border-right: 3px solid var(--color-blue-light);
                    animation: stroke-right linear both;
                    animation-timeline: view();
                    animation-range: cover 0% cover 35%;
                    .line {
                        width: 30%;
                        top: -2px;
                        background-color: var(--color-blue-light);
                        height: 2px;
                        z-index: 2;
                        right: 18px;
                        display: block;
                        position: absolute;
                        animation: line-width linear both;
                        animation-timeline: view();
                        animation-range: cover 20% cover 35%;
                        @media only screen and (max-width: 810px) {
                            right: -2px;
                        }
                    }
                    .ball {
                        right: -22px;
                        top: -4%;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 100%;
                        position: absolute;
                        background-color: var(--color-blue-light);
                        border: 8px solid var(--color-blue-dark);
                        animation: ball linear both;
                        animation-timeline: view();
                        animation-range: cover 10% cover 35%;

                        .inner-ball {
                            width: 20px;
                            height: 20px;
                            border-radius: 100%;
                            background-color: var(--color-blue-dark);
                            animation: innerBall linear both;
                            animation-timeline: view();
                            animation-range: cover 20% cover 40%;
                        }

                        @media only screen and (max-width: 810px) {
                            border: 4px solid var(--color-blue-dark);
                            width: 30px;
                            height: 30px;
                            display: none;
                        }
                    }
                    @media only screen and (max-width: 1000px) {
                        width: 400px;
                    }
                    @media only screen and (max-width: 810px) {
                        width: 100%;
                    }

                    /* Target specifically the second box */

                    .timeline-item {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        align-items: start;
                        padding: 25px 30px 30px 25px;

                        h2 {
                            font-size: 48px;
                            margin-bottom: 0;
                            animation: year linear both;
                            animation-timeline: view();
                            animation-range: cover 0% cover 15%;
                        }
                    }
                }
            }
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

    // keyframes

    @keyframes fade-in-top {
        0% {
            transform: translateY(-100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes focus-in-contract {
        0% {
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-45deg);
        }
    }

    @keyframes fade {
        0% {
            scale: 0.6;
            transform: translateY(100px);
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            scale: 1;
            transform: translateY(0px);
            filter: blur(0);
            opacity: 1;
        }
    }
    @keyframes slide-up {
        0% {
            transform: translateY(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    @keyframes stroke-left {
        0% {
            border-left: 3px solid var(--color-blue-light);
        }
        100% {
            border-left: 3px solid var(--color-cyan);
        }
    }
    @keyframes stroke-right {
        0% {
            border-right: 3px solid var(--color-blue-light);
        }
        100% {
            border-right: 3px solid var(--color-cyan);
        }
    }

    @keyframes line-width {
        0% {
            width: 30%;
            background-color: rgba(0, 67, 255);
        }
        100% {
            width: 100%;
            background-color: var(--color-cyan);
        }
    }

    @keyframes year {
        0% {
            transform: translateY(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    @keyframes ball {
        0% {
            background-color: rgba(0, 67, 255);
        }
        100% {
            background-color: var(--color-cyan);
        }
    }
    @keyframes innerBall {
        0% {
            background-color: var(--color-blue-dark);
        }
        100% {
            background-color: transparent;
        }
    }
</style>
