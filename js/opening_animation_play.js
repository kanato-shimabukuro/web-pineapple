/*
    読み込まれたページでオープニングアニメーションを再生する
    作成: kanato-shimabukuro
*/

import OpeningAnimation from '../js/opening_animation.js';

export const openingAnimation = new OpeningAnimation();

openingAnimation
    .prepare('PineApple')
    .play();