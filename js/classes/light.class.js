class Light extends MovableObject {
    posY = 0;
    width = 350;
    height = 150;


    constructor() {
        super().loadImage('img/3_background/layers/1_light/1.png')
        this.animate();
    }


    animate() {
        setInterval(() => {
this.posX = world.character.posX - 50;
        }, 1000 / 100);
    }
}