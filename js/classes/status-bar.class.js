class StatusBar extends DrawableObject {
    percentage = 100;
    posX = 20;
    posY = 30;
    height = 53;
    width = 200;
    upgradeSound = new Audio('audio/upgrade.mp3');


    /** This function sets the percentage of a status bar to a given value. */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        if (!soundMuted && percentage <= 0 && !(this instanceof HealthBar)) {
            this.upgradeSound.volume = 0.2;
            this.upgradeSound.play();
        }
    }


    /** This functions resolves the image index for the status bar for given percentage steps. */
    resolveImageIndex() {
        if (this.percentage >= 100) { return 5; }
        else if (this.percentage >= 80) { return 4; }
        else if (this.percentage >= 60) { return 3; }
        else if (this.percentage >= 40) { return 2; }
        else if (this.percentage >= 20) { return 1; }
        else { return 0 };
    }

    
}