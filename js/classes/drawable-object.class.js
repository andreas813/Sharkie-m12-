class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    posX = 0;
    posY = 50;
    height = 200;
    width = 200;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height)
    }


    loadImages(array) {
        array.forEach(
            path => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;
            });
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.posX, this.posY, this.width, this.height);
            ctx.stroke();
        }
    }

    
}