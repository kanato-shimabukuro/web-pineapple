/*
    オープニングアニメーション JS
    作成: kanato-shimabukuro
*/

class OpeningAnimation {
    constructor() {
        this.backgroundA = null;
        this.backgroundB = null;
        this.backgroundC = null;
        this.content     = null;

        this.fadeBackgroundA = null;
        this.fadeBackgroundB = null;
        this.fadeBackgroundC = null;
        this.fadeContent     = null;

        this.remove = null;
    }

    prepare(contentHTML = '', blur = '5rem', colorA = '#fdd000', colorB = '#34221c') {
        const body        = document.body;
        const backgroundA = document.createElement('div');
        const backgroundB = document.createElement('div');
        const backgroundC = document.createElement('div');
        const content     = document.createElement('p');

        const style = `
            position: fixed;

            top: 0; left: 0;

            width: 100%; height: 100%;

            z-index: 9999;

            user-select: none;
        `;

        backgroundA.style = style + `
            backdrop-filter: blur(${blur});

            transition: opacity 0.5s ease;
        `;

        backgroundA.className = 'opening-animation-background';

        backgroundB.style = style + `
            background-color: ${colorB};

            transition: left 0.45s ease;
        `;

        backgroundB.className = 'opening-animation-background';

        backgroundC.style = style + `
            background-color: ${colorA};

            transition: left 0.5s ease;
        `;

        backgroundC.className = 'opening-animation-background';

        content.style = style + `            
            display: flex; justify-content: center; align-items: center;

            transition: opacity 0.5s ease;
        `;

        content.innerHTML = contentHTML;
        content.className = 'opening-animation-content';

        body.append(backgroundA);
        body.append(backgroundB);
        body.append(backgroundC);
        body.append(content);

        this.backgroundA = backgroundA;
        this.backgroundB = backgroundB;
        this.backgroundC = backgroundC;
        this.content     = content;

        return this;
    }

    play(time = 2000) {
        if(!this.fadeBackgroundA) {
            this.fadeBackgroundA = setTimeout(() => {
                this.backgroundA.style.opacity = 0;
            }, time + 500);
        }

        if(!this.fadeBackgroundB) {
            this.fadeBackgroundB = setTimeout(() => {
                this.backgroundB.style.left = '-100%';
            }, time + 100);
        }

        if(!this.fadeBackgroundC) {
            this.fadeBackgroundC = setTimeout(() => {
                this.backgroundC.style.left = '-100%';
            }, time);
        }

        if(!this.fadeContent) {
            this.fadeContent = setTimeout(() => {
                this.content.style.opacity = 0;
            }, time + 500);
        }

        if(!this.remove) {
            this.remove = setTimeout(() => {
                this.backgroundA.remove();
                this.backgroundB.remove();
                this.backgroundC.remove();
                this.content    .remove();
            }, time + 1000);
        }

        return this;
    }
}

export default OpeningAnimation;