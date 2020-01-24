"use strict";
class BoneParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(90, 120);
        this.displaySize = Util.randFloat(0.3, 0.8);
        this.speed = Util.randFloat(0.01, 0.04);
        this.tileX = Util.randInt(8, 11);
        this.tileY = 6;
    }

    animate(){
        this.rotate(3);
    }

}