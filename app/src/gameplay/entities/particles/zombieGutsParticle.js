class ZombieGutsParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = 70 + Math.random() * 70;
        this.displaySize = 0.4 + Math.random() * 0.8;
        this.speed = 0.01 + Math.random() * 0.04;
        this.tileX = Math.floor(Math.random() * 12);
        this.tileY = 1;
    }

    animate(){
        this.rotate(2);
    }

}