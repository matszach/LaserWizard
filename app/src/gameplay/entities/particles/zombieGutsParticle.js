class ZombieGutsParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(70, 140);
        this.displaySize = Util.randFloat(0.4, 1.2);
        this.speed = Util.randFloat(0.01, 0.05);
        this.tileX = Util.randInt(0, 11);
        this.tileY = 1;
    }

    animate(){
        this.rotate(2);
    }

}