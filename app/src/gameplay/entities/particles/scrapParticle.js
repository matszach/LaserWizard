class ScrapParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = 90 + Math.random() * 80;
        this.displaySize = 0.1 + Math.random() * 0.9;
        this.speed = 0.01 + Math.random() * 0.03;
        this.tileX = Math.floor(Math.random() * 12);
        this.tileY = 2;
    }

    animate(){
        this.rotate(2);
    }

}