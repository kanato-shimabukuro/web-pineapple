/*
    オープニングアニメーション JS
    作成: kanato-shimabukuro
*/

class OpeningAnimation {
    constructor() {
        this.backgroundA = null;
        this.backgroundB = null;
        this.content     = null;

        this.fadeBackgroundA = null;
        this.fadeBackgroundB = null;
        this.fadeContent     = null;

        this.remove = null;
    }

    prepare(contentHTML = '') {
        const body        = document.body;
        const backgroundA = document.createElement('div');
        const backgroundB = document.createElement('div');
        const content     = document.createElement('p');

        backgroundA.style = `
            position: fixed;

            top: 0; left: 0;

            width: 100%; height: 100%;

            background-color: #34221c;

            transition: left 0.45s ease;

            z-index: 9999;
        `;

        backgroundA.className = 'opening-animation-background';

        backgroundB.style = `
            position: fixed;

            top: 0; left: 0;

            width: 100%; height: 100%;

            background-color: #fdd000;

            transition: left 0.5s ease;

            z-index: 9999;
        `;

        backgroundB.className = 'opening-animation-background';

        content.innerHTML = contentHTML;

        content.style = `
            position: fixed;

            top: 0; left: 0;

            width: 100%; height: 100%;
            
            display: flex; justify-content: center; align-items: center;

            transition: opacity 0.5s ease;

            z-index: 9999;
        `;

        content.className = 'opening-animation-content';

        body.append(backgroundA);
        body.append(backgroundB);
        body.append(content);

        this.backgroundA = backgroundA;
        this.backgroundB = backgroundB;
        this.content     = content;

        return this;
    }

    play() {
        if(!this.fadeBackgroundA) {
            this.fadeBackgroundA = setTimeout(() => {
                this.backgroundA.style.left = '-100%';
            }, 2100);
        }

        if(!this.fadeBackgroundB) {
            this.fadeBackgroundB = setTimeout(() => {
                this.backgroundB.style.left = '-100%';
            }, 2000);
        }

        if(!this.fadeContent) {
            this.fadeContent = setTimeout(() => {
                this.content.style.opacity = 0;
            }, 2500);
        }

        if(!this.remove) {
            this.remove = setTimeout(() => {
                this.backgroundA.remove();
                this.backgroundB.remove();
                this.content    .remove();
            }, 3000);
        }

        return this;
    }
}

export default OpeningAnimation;