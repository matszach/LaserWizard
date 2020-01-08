class EnergyBattery extends _Item {

    energyRestored;

    constructor(){
        super();
        this.energyRestored = 15;
        this.displaySize = 0.7;
        this.collisionSize = 0.6;
    }

}


class RedEnergyBattery extends EnergyBattery{

    constructor(){
        super();
        this.tileX = 0;
        this.tileY = 0;
    }

    shouldPickUp(player){
        return player.currentRedEnergy < player.maxRedEnergy;
    }

    onPickUp(player){
        player.gainRedEnergy(this.energyRestored);
    }

}


class BlueEnergyBattery extends EnergyBattery{

    constructor(){
        super();
        this.tileX = 1;
        this.tileY = 0;
    }

    shouldPickUp(player){
        return player.currentBlueEnergy < player.maxBlueEnergy;
    }

    onPickUp(player){
        player.gainBlueEnergy(this.energyRestoBlue);
    }

}


class YellowEnergyBattery extends EnergyBattery{

    constructor(){
        super();
        this.tileX = 2;
        this.tileY = 0;
    }

    shouldPickUp(player){
        return player.currentYellowEnergy < player.maxYellowEnergy;
    }

    onPickUp(player){
        player.gainYellowEnergy(this.energyRestoYellow);
    }

}