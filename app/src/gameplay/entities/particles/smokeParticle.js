"use strict";
class RocketSmokeParticle extends _Particle {

    constructor(direction, x, y){
        super(Util.randInt(1, 360), x, y);
        this.duration = 30;
        this.displaySize = Util.randFloat(0.4, 0.7);
        this.speed = 0;
        this.tileX = Util.randInt(0, 11);
        this.tileY = 5
    }

    animate(){
        this.rotate(1);
    }

}
