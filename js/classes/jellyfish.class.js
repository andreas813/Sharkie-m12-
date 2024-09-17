class Jellyfish extends MovableObject {
    height = 150;
    width = 105;
    posY = 325;
    imagesSwim = [
        [
            'img/2_enemy/2_jelly_fish/regular_damage/lila_1.png',
            'img/2_enemy/2_jelly_fish/regular_damage/lila_2.png',
            'img/2_enemy/2_jelly_fish/regular_damage/lila_3.png',
            'img/2_enemy/2_jelly_fish/regular_damage/lila_4.png',
        ],
        [
            'img/2_enemy/2_jelly_fish/regular_damage/yellow_1.png',
            'img/2_enemy/2_jelly_fish/regular_damage/yellow_2.png',
            'img/2_enemy/2_jelly_fish/regular_damage/yellow_3.png',
            'img/2_enemy/2_jelly_fish/regular_damage/yellow_4.png',
        ],
    ]
    offset = {
        top: -15,
        left: -15,
        right: -30,
        bottom: -40
    };


    constructor() {
        super().loadImage('img/2_enemy/2_jelly_fish/regular_damage/lila_1.png')
        const color = Math.round(Math.random());
        this.loadImages(this.imagesSwim[color]);
        this.posX = levelEndX * (0.4 + 0.2 * Math.random());
        this.speed = 0.5 + Math.random() * 0.1;
        this.animate(color);
    }


    animate(color) {
        setInterval(() => {
            this.playAnimation(this.imagesSwim[color]);
        }, 1000 / 4);
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}