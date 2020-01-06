class EnergyOrb extends _Item {

    energyRestored;

    constructor(){
        super();
        this.energyRestored = 15;
        this.displaySize = 0.5;
        this.collisionSize = 0.4;
    }

}


class RedEnergyOrb extends EnergyOrb{

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


class BlueEnergyOrb extends EnergyOrb{

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


class YellowEnergyOrb extends EnergyOrb{

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