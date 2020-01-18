"use strict";
class ScrapParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(90, 140);
        this.displaySize = Util.randFloat(0.1, 0.8);
        this.speed = Util.randFloat(0.01, 0.04);
        this.tileX = Util.randInt(0, 11);
        this.tileY = 2;
    }

    animate(){
        this.rotate(2);
    }

}