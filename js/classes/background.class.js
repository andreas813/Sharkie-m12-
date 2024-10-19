class Background extends MovableObject {
    width = 720;
    height = 480;
    constructor(path, posX) {
        super().loadImage(path)
        this.posX = posX;
        this.posY = 0;
    }


}