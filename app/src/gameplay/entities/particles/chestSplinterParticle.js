"use strict";
class ChestSplinterParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(30, 80);
        this.displaySize = Util.randFloat(0.2, 0.5);
        this.speed = Util.randFloat(0.01, 0.05);
        this.tileX = Util.randInt(0, 3);
        this.tileY = 7;
    }
    
    animate(){
        this.rotate(3);
    }

}