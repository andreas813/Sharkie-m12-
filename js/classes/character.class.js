class Character extends MovableObject {
    imagesIdle = [
        'img/1_sharkie/1_idle/1.png',
        'img/1_sharkie/1_idle/2.png',
        'img/1_sharkie/1_idle/3.png',
        'img/1_sharkie/1_idle/4.png',
        'img/1_sharkie/1_idle/5.png',
        'img/1_sharkie/1_idle/6.png',
        'img/1_sharkie/1_idle/7.png',
        'img/1_sharkie/1_idle/8.png',
        'img/1_sharkie/1_idle/9.png',
        'img/1_sharkie/1_idle/10.png',
        'img/1_sharkie/1_idle/11.png',
        'img/1_sharkie/1_idle/12.png',
        'img/1_sharkie/1_idle/13.png',
        'img/1_sharkie/1_idle/14.png',
        'img/1_sharkie/1_idle/15.png',
        'img/1_sharkie/1_idle/16.png',
        'img/1_sharkie/1_idle/17.png',
        'img/1_sharkie/1_idle/18.png',
    ];
    imagesSwim = [
        'img/1_sharkie/3_swim/2.png',
        'img/1_sharkie/3_swim/3.png',
        'img/1_sharkie/3_swim/5.png',
        'img/1_sharkie/3_swim/6.png',
    ]
    constructor() {
        super().loadImage('img/1_sharkie/3_swim/1.png');
        this.loadImages(this.imagesSwim);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.currentImage >= this.imagesSwim.length) {
                this.currentImage = 0;
            }
            let path = this.imagesSwim[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 8);
    }

    jump() {

    }
}