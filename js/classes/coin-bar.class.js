class CoinBar extends StatusBar {
    posY = 110;
    images = [
        'img/4_marcadores/green/coin/100_copia_4.png',
        'img/4_marcadores/green/coin/80_copia_4.png',
        'img/4_marcadores/green/coin/60_copia_4.png',
        'img/4_marcadores/green/coin/40_copia_4.png',
        'img/4_marcadores/green/coin/20_copia_2.png',
        'img/4_marcadores/green/coin/0_copia_4.png',
    ]


    constructor() {
        super();
        this.loadImages(this.images);
        this.setPercentage(100);
    }


}