class StatusBar extends DrawableObject {
    percentage = 100;
    images = [
        'img/4_marcadores/green/life/0_copia_3.png',
        'img/4_marcadores/green/life/20_copia_4.png',
        'img/4_marcadores/green/life/40_copia_3.png',
        'img/4_marcadores/green/life/60_copia_3.png',
        'img/4_marcadores/green/life/80_copia_3.png',
        'img/4_marcadores/green/life/100_copia_2.png',
    ]


    constructor() {
        super();
        this.loadImages(this.images);
        this.posX = 10;
        this.posY = 10;
        this.height = 53;
        this.width = 200;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage >= 100) { return 5; }
        else if (this.percentage >= 80) { return 4; }
        else if (this.percentage >= 60) { return 3; }
        else if (this.percentage >= 40) { return 2; }
        else if (this.percentage >= 20) { return 1; }
        else { return 0 };
    }
}