class Endboss extends MovableObject {
    height = 250;
    width = 300;
    posY = -50;
    imagesFloating = [
        'img/2_enemy/3_final_enemy/2_floating/1.png',
        'img/2_enemy/3_final_enemy/2_floating/2.png',
        'img/2_enemy/3_final_enemy/2_floating/3.png',
        'img/2_enemy/3_final_enemy/2_floating/4.png',
        'img/2_enemy/3_final_enemy/2_floating/5.png',
        'img/2_enemy/3_final_enemy/2_floating/6.png',
        'img/2_enemy/3_final_enemy/2_floating/7.png',
        'img/2_enemy/3_final_enemy/2_floating/8.png',
        'img/2_enemy/3_final_enemy/2_floating/9.png',
        'img/2_enemy/3_final_enemy/2_floating/10.png',
        'img/2_enemy/3_final_enemy/2_floating/11.png',
        'img/2_enemy/3_final_enemy/2_floating/12.png',
        'img/2_enemy/3_final_enemy/2_floating/13.png',
    ]


    constructor() {
        super().loadImage('img/2_enemy/3_final_enemy/2_floating/1.png')
        this.loadImages(this.imagesFloating);
        this.posX = 250;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesFloating);
        }, 1000 / 6);
        // this.moveLeft();
    }
}