class ThrowableObject extends MovableObject {
    constructor(posX, posY) {
        super().loadImage('img/4_marcadores/posion/dark_-_left.png');
        this.posX = posX;
        this.posY = posY;
        this.width = 80;
        this.height = 122;
        this.throw();
    }


    throw() {
        this.speedY = 2;
        this.applyGravity();
        setInterval(() => {
            this.posX += 2;
        }, 1000 / 60);
    }
}