class Level {
    enemies;
    lights;
    backgrounds;
    levelEndX = (backgroundLength - 2) * 720;


    constructor(enemies, lights, backgrounds) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgrounds = backgrounds;
    }
}