class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    posX = 0;
    posY = 50;
    height = 200;
    width = 200;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };


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
        if (
            this instanceof Character ||
            this instanceof Pufferfish ||
            this instanceof Endboss ||
            this instanceof Jellyfish ||
            this instanceof JellyfishSuper ||
            this instanceof Coin
        ) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.posX - this.offset.left,
                this.posY - this.offset.top,
                this.width + this.offset.right,
                this.height + this.offset.bottom
            );
            ctx.stroke();
        }
    }


    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    removeObject(obj) {
        delete obj.posX;
        delete obj.posY;
        // for (let key in obj) {
        //     if (obj.hasOwnProperty(key)) { delete obj[key]; };
        // };
    }
}