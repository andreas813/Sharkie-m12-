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
        this.posX = levelEndX * (0.2 + 0.2 * Math.random());
        this.speed = 0.25 + Math.random() * 0.5;
        this.animate();
    }


    animate() {
        setInterval(() => { this.playAnimation(this.imagesSwim); }, 1000 / 6);
        setInterval(() => { this.moveLeft(); }, 1000 / 60);
    }
}