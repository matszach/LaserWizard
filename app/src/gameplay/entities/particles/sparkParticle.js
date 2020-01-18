class _SparkParticle extends _Particle {

    constructor(direction, x, y){
        super(direction, x, y);
        this.duration = Util.randInt(30, 60);
        this.displaySize = Util.randFloat(0.2, 0.4);
        this.speed = Util.randFloat(0.05, 0.08);
    }

    animate(){
        this.rotate(8);
    }

}

class RedSparkParticle extends _SparkParticle {
    constructor(direction, x, y){
        super(direction, x, y);   
        this.tileX = Util.randInt(0, 3);
        this.tileY = 3;
    }
}

class YellowSparkParticle extends _SparkParticle {
    constructor(direction, x, y){
        super(direction, x, y);   
        this.tileX = Util.randInt(4, 7);
        this.tileY = 3;
    }
}

class BlueSparkParticle extends _SparkParticle {
    constructor(direction, x, y){
        super(direction, x, y);   
        this.tileX = Util.randInt(8, 11);
        this.tileY = 3;
    }
}

class GreenSparkParticle extends _SparkParticle {
    constructor(direction, x, y){
        super(direction, x, y);   
        this.tileX = Util.randInt(0, 3);
        this.tileY = 4;
    }
}

class MagentaSparkParticle extends _SparkParticle {
    constructor(direction, x, y){
        super(direction, x, y);   
        this.tileX = Util.randInt(4, 7);
        this.tileY = 4;
    }
}

class CyanSparkParticle extends _SparkParticle {
    constructor(direction, x, y){
        super(direction, x, y);   
        this.tileX = Util.randInt(8, 11);
        this.tileY = 4;
    }
}
