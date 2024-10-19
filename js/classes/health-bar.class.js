class HealthBar extends StatusBar {
    posY = 70;
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
        this.setPercentage(100);
    }


}