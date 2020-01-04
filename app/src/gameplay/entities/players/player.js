class Player extends _Character {

    // ==================== fields ====================
    maxRedEnergy = 100;
    currentRedEnergy = 0;
    maxBlueEnergy = 100; 
    currentBlueEnergy = 0;
    maxYellowEnergy = 100;
    currentYellowEnergy = 0;

    weaponsUnlockedState = [
        true,       // default 
        false,      // red 1
        false,      // red 2
        false,      // red 3
        false,      // blue 1
        false,      // blue 2
        false,      // blue 3
        false,      // yellow 1
        false,      // yellow 2
        false,      // yellow 3
    ];

    weaponActions = [];

    // ==================== constructor ====================
    constructor(){
        super();
        // todo init weapon actions here
    }

    // weapon usage
    unlockWeapon(i){
        this.weaponsUnlockedState[i] = true;
    }

    fireWeapon(i){
        if(this.weaponsUnlockedState[i]){
            this.weaponActions[i].execute();
        }
    }

    // red energy
    hasRedEnergy(n){
        return this.currentRedEnergy > n;
    }
    gainRedEnergy(n){
        this.currentRedEnergy += n;
        if(this.currentRedEnergy > this.maxRedEnergy){
            this.currentRedEnergy = this.maxRedEnergy;
        }
    }
    payRedEnergy(n){
        if(!this.hasRedEnergy(n)){
            return false;
        }
    }

    // blue energy
    hasBlueEnergy(n){
        return this.currentBlueEnergy > n;
    }
    gainBlueEnergy(n){
        this.currentBlueEnergy += n;
        if(this.currentBlueEnergy > this.maxBlueEnergy){
            this.currentBlueEnergy = this.maxBlueEnergy;
        }
    }
    payBlueEnergy(n){
        if(!this.hasBlueEnergy(n)){
            return false;
        }
    }

    // yellow energy
    hasYellowEnergy(n){
        return this.currentYellowEnergy > n;
    }
    gainYellowEnergy(n){
        this.currentYellowEnergy += n;
        if(this.currentYellowEnergy > this.maxYellowEnergy){
            this.currentYellowEnergy = this.maxYellowEnergy;
        }
    }
    payYellowEnergy(n){
        if(!this.hasYellowEnergy(n)){
            return false;
        }
    }

}