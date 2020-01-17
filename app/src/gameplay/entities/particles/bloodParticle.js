class BloodParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = 50 + Math.random() * 50;
        this.displaySize = 0.2 + Math.random() * 0.5;
        this.speed = 0.02 + Math.random() * 0.06;
        this.tileX = Math.floor(Math.random() * 12);
        this.tileY = 0;
    }

    animate(){
        this.rotate(5);
    }

}