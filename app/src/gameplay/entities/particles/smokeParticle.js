"use strict";
class RocketSmokeParticle extends _Particle {

    constructor(direction, x, y){
        super(Util.randInt(1, 360), x, y);
        this.duration = 30;
        this.displaySize = Util.randFloat(0.4, 0.7);
        this.speed = Util.randFloat(0.01, 0.02);
        this.tileX = Util.randInt(0, 11);
        this.tileY = 5
        this.opacity = 0.3;
    }

    animate(){
        this.rotate(1);
    }

}


class LastingSmoke extends RocketSmokeParticle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(100, 150);
    }

}
