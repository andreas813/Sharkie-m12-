class Level {
    enemies;
    lights;
    backgrounds;
    levelEndX = 1200;


    constructor(enemies, lights, backgrounds) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgrounds = backgrounds;
    }
}