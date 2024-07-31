class Light extends MovableObject {
    posY = 0;
    width = 350;
    height = 150;
    constructor() {
        super().loadImage('img/3_background/layers/1_light/1.png')
        this.posX = -50;
        this.moveX();
    }
    moveX() {
        setInterval(function () { this.posX-- }, 500);
        setInterval(() => {
            if (this.posX > -350) {
                this.posX -= 0.2;
            }
            else { this.posX = 250 }
        },
            1000 / 60)
    }
}