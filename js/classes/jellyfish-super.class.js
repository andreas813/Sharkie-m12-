class JellyfishSuper extends MovableObject {
    height = 225;
    width = 158;
    posY = 225;
    imagesSwim = [
        [
            'img/2_enemy/2_jelly_fish/super_dangerous/green_1.png',
            'img/2_enemy/2_jelly_fish/super_dangerous/green_2.png',
            'img/2_enemy/2_jelly_fish/super_dangerous/green_3.png',
            'img/2_enemy/2_jelly_fish/super_dangerous/green_4.png',
        ],
        [
            'img/2_enemy/2_jelly_fish/super_dangerous/pink_1.png',
            'img/2_enemy/2_jelly_fish/super_dangerous/pink_2.png',
            'img/2_enemy/2_jelly_fish/super_dangerous/pink_3.png',
            'img/2_enemy/2_jelly_fish/super_dangerous/pink_4.png',
        ],
    ]
    offset = {
        top: -15,
        left: -15,
        right: -30,
        bottom: -40
    };


    constructor() {
        super().loadImage('img/2_enemy/2_jelly_fish/super_dangerous/green_1.png')
        const color = Math.round(Math.random());
        this.loadImages(this.imagesSwim[color]);
        this.posX = levelEndX * (0.6 + 0.2 * Math.random());
        this.speed = 0.25 + Math.random() * 0.5;
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