"use strict";
class _Armor extends _Item {

    maxArmor = 80;
    armorGranted = 25;
    armorStep = 5;

    constructor(){
        super();
        this.displaySize = 1.0;
        this.collisionSize = 0.9;
    }

    shouldPickUp(player){
        return true;
    }

}

class HeadArmor extends _Armor{
    constructor(){
        super();
        this.tileX = 3;
        this.tileY = 2;
    }

    onPickUp(player){
        if(!player.gear.head){
            player.gear.head = true;
            player.defence += this.armorGranted;
        } else {
            player.defence += this.armorStep;
        }
        player.defence = player.defence <= this.maxArmor ? player.defence : this.maxArmor;
    }
    
}

class ChestArmor extends _Armor{
    constructor(){
        super();
        this.tileX = 4;
        this.tileY = 2;
    }

    onPickUp(player){
        if(!player.gear.chest){
            player.gear.chest = true;
            player.defence += this.armorGranted;
        } else {
            player.defence += this.armorStep;
        }
        player.defence = player.defence <= this.maxArmor ? player.defence : this.maxArmor;
    }
    
}