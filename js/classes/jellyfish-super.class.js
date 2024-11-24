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
    imagesDead = [
        [
            'img/2_enemy/2_jelly_fish/dead/green/g1.png',
            'img/2_enemy/2_jelly_fish/dead/green/g2.png',
            'img/2_enemy/2_jelly_fish/dead/green/g3.png',
            'img/2_enemy/2_jelly_fish/dead/green/g4.png',
        ],
        [
            'img/2_enemy/2_jelly_fish/dead/pink/p1.png',
            'img/2_enemy/2_jelly_fish/dead/pink/p2.png',
            'img/2_enemy/2_jelly_fish/dead/pink/p3.png',
            'img/2_enemy/2_jelly_fish/dead/pink/p4.png',
        ],

    ]
    offset = {
        top: -10,
        left: -5,
        right: -15,
        bottom: -30
    };


    constructor() {
        super().loadImage('img/2_enemy/2_jelly_fish/super_dangerous/green_1.png')
        const color = Math.round(Math.random());
        this.loadImages(this.imagesSwim[color]);
        this.loadImages(this.imagesDead[color]);
        this.posX = levelEndX * (0.75 + 0.2 * Math.random());
        this.speed = 0.25 + Math.random() * 0.5;
        this.animate(color);
    }


    /** This function plays animations based on the current state of the enemy. 
    * @param {string} color - The color key used to select the appropriate animation frames from `imagesDead` and `imagesSwim` properties.
    */
    animate(color) {
        setInterval(() => {
            if (this.energy < 1) {
                this.playAnimation(this.imagesDead[color]);
                setTimeout(() => { this.removeObject(this); }, 750);
            }
            else { this.playAnimation(this.imagesSwim[color]); };
        }, 1000 / 4);
        setInterval(() => { this.moveLeft(); }, 1000 / 60);
    }


}