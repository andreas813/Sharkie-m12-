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
    showHitboxes;


    /** This function creates an image object by a given path. */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /** This function draws an image with given source, coordinates and sizes. */
    draw(ctx) {
        ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }


    /** This function iterates through an array containing multiple images and loads them. */
    loadImages(array) {
        array.forEach(
            path => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;
            });
    }


    /** This function draws frames around the character, enemies and pickups for visualizing the hitboxes. */
    drawFrame(ctx) {
        if (
            (this instanceof Character || this instanceof Pufferfish || this instanceof Endboss || this instanceof Jellyfish || this instanceof JellyfishSuper || this instanceof Coin || this instanceof Poison) && this.showHitboxes
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


    /** This function is used as a delay with a give amount of milliseconds in async for loops. */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    /** This function removes objects by deleting their properties. */
    removeObject(obj) {
        delete obj.posX;
        delete obj.posY;
    }


}