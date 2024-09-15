class Pufferfish extends MovableObject {
    height = 90;
    width = 110;
    posY = 350;
    imagesSwim = [
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim1.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim2.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim3.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim4.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim5.png',
    ]
    offset = {
        top: -5,
        left: -5,
        right: -15,
        bottom: -30
    };


    constructor() {
        super().loadImage('img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim1.png')
        this.loadImages(this.imagesSwim);
        this.posX = 300 + Math.random() * 450;
        this.speed = 0.2 + Math.random() * 0.3
        this.animate();
    }

    
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesSwim);
        }, 1000 / 6);
        setInterval(() => {
            if (this.posX <= -350) { this.posX = 250 }
            this.moveLeft();
        }, 1000 / 60);
    }
}