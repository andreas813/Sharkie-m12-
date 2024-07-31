class Background extends MovableObject {
    // posY = 25;
    // posX = 0;
    width = 300;
    height = 150;
    constructor(path, posX) {
        super().loadImage(path)
        this.posX = posX;
        this.posY = 150 - this.height;
    }
}