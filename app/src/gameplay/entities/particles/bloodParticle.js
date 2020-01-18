class BloodParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(50, 100);
        this.displaySize = Util.randFloat(0.2, 0.5);
        this.speed = Util.randFloat(0.02, 0.06);
        this.tileX = Util.randInt(0, 11);
        this.tileY = 0;
    }

    animate(){
        this.rotate(5);
    }

}