class Light extends MovableObject {
    posY = 0;
    width = 350;
    height = 150;


    constructor() {
        super().loadImage('img/3_background/layers/1_light/1.png')
        this.posX = -50;
        this.animate();
    }


    animate() {
        this.moveLeft();
    }
}