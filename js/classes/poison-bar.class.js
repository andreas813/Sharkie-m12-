class PoisonBar extends StatusBar {
    images = [
        'img/4_marcadores/green/poisoned_bubbles/100_copia_3.png',
        'img/4_marcadores/green/poisoned_bubbles/80_copia_2.png',
        'img/4_marcadores/green/poisoned_bubbles/60_copia_2.png',
        'img/4_marcadores/green/poisoned_bubbles/40_copia_2.png',
        'img/4_marcadores/green/poisoned_bubbles/20_copia_3.png',
        'img/4_marcadores/green/poisoned_bubbles/0_copia_2.png',
    ]


    constructor() {
        super();
        this.loadImages(this.images);
        this.setPercentage(100);
    }

    
}