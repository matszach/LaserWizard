class Chest extends _Breakable {

    constructor(){
        super();
        this.tileX = Util.randInt(8, 11);
        this.tileY = 5;
        this.defence = 35;
        this.maxHp = 15;
        this.displaySize = Util.randFloat(1.1, 1.3);
        this.direction = Util.randFloat(0, 360);
    }

    _onExpire(){
        super._onExpire();
        ParticleSpawner.createExplosion(ChestSplinterParticle, this.x, this.y, Util.randInt(10, 20));
    }

}

class RedChest extends Chest {
    constructor(){
        super();
        this.lootTable = [
            [0, 0.3, 1],
            [1, 0.1, 1],
            [3, 0.4, 2]
        ];
    }
}

class YellowChest extends Chest {
    constructor(){
        super();
        this.lootTable = [
            [0, 0.3, 1],
            [1, 0.1, 1],
            [4, 0.4, 2]
        ];
    }
}

class BlueChest extends Chest {
    constructor(){
        super();
        this.lootTable = [
            [0, 0.3, 1],
            [1, 0.1, 1],
            [5, 0.4, 2]
        ];
    }
}