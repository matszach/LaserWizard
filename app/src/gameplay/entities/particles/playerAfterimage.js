"use strict";
class PlayerAfterimageParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = 20;
        this.displaySize = 1;
        this.speed = 0;
        this.tileX = 4;
        this.tileY = 7;
        this.opacity = 0.3;
    }

}
