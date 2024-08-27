class Light extends MovableObject {
    posY = 0;
    width = 700;
    height = 300;


    constructor() {
        super().loadImage('img/3_background/layers/1_light/1.png')
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.posX = world.character.posX + 50;
        }, 1000 / 100);
    }
}