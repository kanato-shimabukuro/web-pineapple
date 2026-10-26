/*
    (c) 2022 kanato-shimabukuro. All rights reserved.
*/

export default class App {

    constructor() {
        (async () => {
            await this.initialize();
        })();
    }

    async initialize() {
        Element.prototype.setHTMLWithFade = function(html, duration = 150) {
            return new Promise((resolve) => {
                let fade = this.animate([{ opacity: 1 }, { opacity: 0 }], {
                    duration, fill: 'forwards'
                });

                fade.onfinish = () => {
                    this.innerHTML = html;

                    fade = this.animate([{ opacity: 0 }, { opacity: 1 }], {
                        duration, fill: 'forwards'
                    });

                    fade.onfinish = () => resolve();
                };
            });
        };

        document.head.innerHTML += '<link rel="icon" href="https://github.com/kanato-shimabukuro.png">';

        document.title = 'PineApple';

        await document.body.setHTMLWithFade(`
            <main>
                <article>
                    <section class="banner">
                        <div class="item"></div>
                        <div class="item">
                            <img src="https://github.com/kanato-shimabukuro.png">
                            <div class="contents">
                                <div>
                                    <h1>タイトル</h1>
                                    <h2>新着商品情報</h2>
                                </div>
                                <p>新しいアルバムがリリース！</p>
                            </div>
                        </div>
                        <div class="item"></div>
                    </section>
                    <section>
                        <div class="title">
                            <h1>ベストセラー</h1>
                            <p>最近の売れ筋</p>
                        </div>
                        <div class="items">` + Array.from({ length: 15 }, () => `
                            <div class="item">
                                <img src="https://github.com/kanato-shimabukuro.png">
                                <div>
                                    <h1>タイトル</h1>
                                    <h2>アーティスト名</h2>
                                    <p>￥1000</p>
                                </div>
                            </div>`).join('') + `
                        </div>
                    </section>
                </article>
            </main>
            <header>
                <h1>${document.title}</h1>
                <p>
                    <a href="https://github.com/kanato-shimabukuro/web-pineapple" target="_blank">
                        <span class="mdi mdi-github"></span>
                    </a>
                </p>
            </header>
            <footer>
                <p>© 2021 <a href="https://kanato-shimabukuro.github.io" target="_blank">kanato-shimabukuro</a>. All rights reserved.</p>
            </footer>
            <splash style="position: fixed; inset: 0;">
                <div style="position: absolute; inset: 0; background: #fdd000; color: #333; display: flex; justify-content: center; align-items: center;">
                    <h1 style="font-family: 'Bitcount Single', system-ui; font-size: 1.75rem;">${document.title}</h1>
                </div>
            </splash>
        `);

        await new Promise(resolve => setTimeout(resolve, 2000));

        await document.querySelector('splash').setHTMLWithFade('', 350); document.querySelector('splash').remove();
    }

}