class Pufferfish extends MovableObject {
    height = 35;
    width = 55;
    posY = 100;
    imagesSwim = [
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim1.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim2.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim3.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim4.png',
        'img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim5.png',
    ]
    constructor() {
        super().loadImage('img/2_enemy/1_puffer_fish_3_color_options/1_swim/1_swim1.png')
        this.loadImages(this.imagesSwim);
        this.posX = 100 + Math.random() * 150;
        this.speed = 0.2 + Math.random() * 0.3
        this.animate();
    }
    animate() {
        setInterval(() => {
            if (this.currentImage >= this.imagesSwim.length) {
                this.currentImage = 0;
            }
            let path = this.imagesSwim[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 6);
        this.moveLeft();
    }
}