"use strict";
class FireParticle extends _Particle {

    constructor(direction, x, y){
        super(Util.randInt(1, 360), x, y);
        this.duration = Util.randInt(30, 50);
        this.displaySize = Util.randFloat(1.2, 1.5);
        this.speed = Util.randFloat(0.03, 0.07);
        this.tileX = Util.randInt(4, 7);
        this.tileY = 6;
        this.opacity = 0.6;
    }

    animate(){
        this.rotate(2);
        this.opacity -= 0.005;
    }

}
