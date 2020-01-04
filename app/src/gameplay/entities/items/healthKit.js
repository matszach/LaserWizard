class HealthKit extends _Item {

    // ==================== fields ====================
    hpHealed;

    // ==================== constructor ====================
    constructor(hp){
        super();
        this.hpHealed = hp;
    }

    // ==================== methods ====================
    shouldPickUp(player){
        return player.hp < player.maxHp;
    }

    onPickUp(player){
        player.healDmg(this.hpHealed);
    }

}

class SmallHealthKit extends HealthKit {
    constructor(){
        super(15);
        this.tileX = 3;
        this.tileY = 0;
        this.displaySize = 0.6;
    }
}

class MediumHealthKit extends HealthKit {
    constructor(){
        super(30);
        this.tileX = 4;
        this.tileY = 0;
        this.displaySize = 0.75;
    }
}

class LargeHealthKit extends HealthKit {
    constructor(){
        super(50);
        this.tileX = 5;
        this.tileY = 0;
        this.displaySize = 0.9;
    }
}