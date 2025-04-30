<script lang="ts">
</script>

<div class="timeline-container">
    <div class="timeline-box first">
        <span class="ball"> </span>
        <div class="timeline-item">
            <h2>2024</h2>
            <h3>2024-08-10</h3>
            <p>
                Digital Virtues GmbH invests in <a href="https://www.getrecall.ai/" target="_blank"
                    >recall</a
                >
            </p>
            <h3>2024-05-03</h3>
            <p>
                After many years of successful partnership, Digital Virtues is happy to invest in <a
                    href="https://www.deine-zweisamkeit.de/"
                    target="_blank">Deine Zweisamkeit.</a
                >
            </p>
        </div>
    </div>
    <div class="timeline-box even second">
        <span class="ball"> </span>
        <div class="timeline-item">
            <h2>2019</h2>
            <h3>2019-08-16</h3>
            <p>
                Extending gartenhuehner.de with <a
                    href="https://web.archive.org/web/20190816201515/https://gartenhuehner.de/huehnerrassen/"
                    target="_blank">Rasseverzeichnis</a
                >
            </p>
        </div>
    </div>
    <div class="timeline-box third">
        <span class="ball"> </span>
        <div class="timeline-item">
            <h2>2012</h2>
            <h3>2012-08-06</h3>
            <p>
                Digital Virtues GbR is excited to announce the launch of <a
                    href="https://web.archive.org/web/20120806020154/http://gartenhuehner.de/"
                    target="_blank">gartenhuehner.de</a
                >, a dedicated platform for private chicken keeping enthusiasts. This special
                interest website offers expert advice, practical tips, and a vibrant community for
                those passionate about sustainable living and backyard farming.
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .timeline-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 1000px;
        @media only screen and (max-width: 1000px) {
            width: 800px;
        }
        @media only screen and (max-width: 810px) {
            width: 100%;
            padding: 0 1rem;
        }

        // gap: 2rem;

        .first,
        .third {
            border-bottom: 0px;
            border-top: 2px solid #00ffff;
            border-left: 0;
            border-right: 3px solid #00ffff;
            border-style: solid;
            span {
                right: -22px;
                top: -4%;
            }
        }

        .second {
            width: 500px;
            border-bottom: 0px;
            border-top: 2px solid #00ffff;
            border-left: 3px solid #00ffff;
            border-right: 0px;
            border-style: solid;
            margin-right: 1px;
            span {
                left: -22px;
                top: -4%;
                @media only screen and (max-width: 810px){
                    right: -22px;
                    top: -4%;
                    left: unset;
                }
            }

            @media only screen and (max-width: 810px) {
                border-top: 3px solid #00ffff;
                border-right: 3px solid #00ffff;
            border-left: 0px solid rgb(0 67 255);

        }
        }

        .timeline-box {
            // width: 400px;
            max-width: 500px;
            height: 500px;
            position: relative;
            @media only screen and (max-width: 1000px) {
                width: 400px;
            }
            @media only screen and (max-width: 810px) {
                width: 100%;

                }

            &.even {
                align-self: flex-end;
                padding-left: 30px;
                @media only screen and (max-width: 810px) {
                    align-self: flex-start;
                padding-left: 0px;

                }
                .timeline-item {
                    padding: 25px 0 25px 25px;
                    @media only screen and (max-width: 810px) {
                        padding: 25px 0 0 0;
                    }
                }
            }

            span {
                width: 40px;
                height: 40px;
                border-radius: 100%;
                position: absolute;
                background-color: #00ffff;
                border: 8px solid #000627;

                @media only screen and (max-width: 810px) {
                    border: 4px solid #000627;
                    width: 30px;
                    height: 30px;
                    display: none;
                }
            }

            /* Target specifically the second box */

            .timeline-item {
                display: flex;
                flex-direction: column;
                gap: 20px;
                padding: 25px 30px 30px 25px;


                h2 {
                    font-size: 48px;
                }
                h3 {
                    font-size: 32px;
                    color: #00ffff;
                }
            }
        }
    }
</style>
