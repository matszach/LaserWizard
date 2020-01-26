"use strict";
class GelBlobParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(30, 60);
        this.displaySize = Util.randFloat(0.1, 0.3);
        this.speed = Util.randFloat(0.01, 0.04);
        this.tileX = Util.randInt(0, 3);
        this.tileY = 6;
    }
    
    animate(){
        this.rotate(2);
    }

}