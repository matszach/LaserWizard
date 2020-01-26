"use strict";
const Hax = {

    unlockAllWeapons(){
        var p = StageManager.currentStage.player;
        for(var i = 0; i < p.weaponsUnlockedState.length; i++){
            p.unlockWeapon(i);
        }
    },

    refillAmmo(){
        var p = StageManager.currentStage.player;
        p.gainRedEnergy(100);
        p.gainYellowEnergy(100);
        p.gainBlueEnergy(100);
    },

    insaneAmmo(){
        var p = StageManager.currentStage.player;
        p.maxRedEnergy = 9999;
        p.maxYellowEnergy = 9999;
        p.maxBlueEnergy = 9999;
        p.gainRedEnergy(9999);
        p.gainYellowEnergy(9999);
        p.gainBlueEnergy(9999);
    },

    highDefence(){
        var p = StageManager.currentStage.player;
        p.defence = 75;
    },

    invulnerability(){
        var p = StageManager.currentStage.player;
        p.defence = 100;
    }

}