"use strict";
const HudManager = {

    getDisplayValues(){
        return {
            hp: 0,
            prevHp : 0,
            redEnergy: 0,
            yellowEnergy: 0,
            blueEnergy: 0,
            defence: 0,
            keyMagenta: false, // unused
            keyCyan: false, // unused
            selectedWeaponIndex: 0, 
            wheel: UserInputHandler.mouse.wheel
        }
    },

    // used to get an 'ease-in' type animation when a resource is gained or lost
    onDisplayValues: null,

    interval: null,

    minHpHeartOpacity: 0.1,

    weaponIcons: [
        'weapon-1-n',
        'weapon-2-r1',
        'weapon-3-r2',
        'weapon-4-r3',
        'weapon-5-y1',
        'weapon-6-y2',
        'weapon-7-y3',
        'weapon-8-b1',
        'weapon-9-b2',
        'weapon-10-b3'
    ],

    reset(){
        this.onDisplayValues = this.getDisplayValues();
        var p = StageManager.currentStage.player;
        this.refreshWeaponUnlockStateDisplay(p);
        this.refreshWeapomSelectionDisplay(p);

    },


    start(){
        this.reset();
        this.interval = setInterval(this.manage, 50);
    },


    stop(){
        clearInterval(this.interval);
    },


    manage(){
        if(!StageManager.currentStage){return;}
        var p = StageManager.currentStage.player;
        if(!p){return;}
        var dv = HudManager.onDisplayValues;
        HudManager.applyEnergyDisplayChange(p, dv);
        HudManager.applyStatsDisplayChange(p, dv);
        HudManager.applyHpDisplayChage(p, dv);
        HudManager.applyScrollSelectWeapon(p, dv);
        HudManager.applyWeaponChange(p, dv);
    },


    applyEnergyDisplayChange(p, dv){
        if(p.currentRedEnergy > dv.redEnergy){
            dv.redEnergy++;
        } else {
            dv.redEnergy = p.currentRedEnergy;
        }
        $('.hud-value-span.red').html(`${Math.floor(dv.redEnergy)}/${p.maxRedEnergy}`);
        if(p.currentYellowEnergy > dv.yellowEnergy){
            dv.yellowEnergy++;
        } else {
            dv.yellowEnergy = p.currentYellowEnergy;
        }
        $('.hud-value-span.yellow').html(`${Math.floor(dv.yellowEnergy)}/${p.maxYellowEnergy}`);
        if(p.currentBlueEnergy > dv.blueEnergy){
            dv.blueEnergy++;
        } else {
            dv.blueEnergy = p.currentBlueEnergy;
        }
        $('.hud-value-span.blue').html(`${Math.floor(dv.blueEnergy)}/${p.maxBlueEnergy}`);
    },

    applyStatsDisplayChange(p, dv){
        if(p.defence > dv.defence){
            dv.defence++;
        } else {
            dv.defence = Math.floor(p.defence);
        }
        $('.hud-value-span.defence').html(dv.defence);
        if(p.keys.magenta){
            $('#key-magenta').css('opacity', 1);
        } else {
            $('#key-magenta').css('opacity', 0.1);
        }
        if(p.keys.cyan){
            $('#key-cyan').css('opacity', 1);
        } else {
            $('#key-cyan').css('opacity', 0.1);
        }
    },

    applyHpDisplayChage(p, dv){
  
        if(p.hp > dv.hp){
            dv.hp++;
        } else {
            dv.hp = p.hp;
        }  

        if(dv.hp == dv.prevHp){
            // if the display value of player's health didnt change from previous iteration 
            // - do not update the opacity of the health containers
            return;
        } else {
            dv.prevHp = dv.hp;
        }

        var min = this.minHpHeartOpacity;
        
        if(dv.hp < 20){
            this.setHeartContainersOpacity(min, min, min, min, min + (1 - min) * dv.hp/20);
        } else if(dv.hp < 40){
            this.setHeartContainersOpacity(min, min, min, min + (1 - min) * (dv.hp - 20)/20, 1);
        } else if(dv.hp < 60){
            this.setHeartContainersOpacity(min, min, min + (1 - min) * (dv.hp - 40)/20, 1, 1);
        } else if(dv.hp < 80){
            this.setHeartContainersOpacity(min, min + (1 - min) * (dv.hp - 60)/20, 1, 1, 1);
        } else if(dv.hp < 100){
            this.setHeartContainersOpacity(min + (1 - min) * (dv.hp - 80)/20, 1, 1, 1, 1);
        } else {
            this.setHeartContainersOpacity(1, 1, 1, 1, 1);
        }
    },

    setHeartContainersOpacity(o1, o2, o3, o4, o5){
        $('#hp-icon-1').css('opacity', o1);
        $('#hp-icon-2').css('opacity', o2);
        $('#hp-icon-3').css('opacity', o3);
        $('#hp-icon-4').css('opacity', o4);
        $('#hp-icon-5').css('opacity', o5);
    },


    applyWeaponChange(p, dv){
        if(dv.selectedWeaponIndex != p.selectedWeaponIndex){
            dv.selectedWeaponIndex = p.selectedWeaponIndex;
            var path = `../app/assets/images/icons/${this.weaponIcons[dv.selectedWeaponIndex]}.png`;
            $('#selected-weapon-icon').attr("src", path);
        }
    },

    applyScrollSelectWeapon(p, dv){
        if(dv.wheel == UserInputHandler.mouse.wheel){
            return; // wheel did not change, no need to continue
        } else if (dv.wheel > UserInputHandler.mouse.wheel){
            p.selectNextWeapon();
        } else {
            p.selectPrevWeapon();
        }
        dv.wheel = UserInputHandler.mouse.wheel;
        this.refreshWeapomSelectionDisplay(p);
    },


    refreshWeaponUnlockStateDisplay(player){
        for(var i = 0; i < 10; i++){
            if(player.weaponsUnlockedState[i]){
                $(`#weapon-choice-${i+1}`).removeClass('locked');
            } else {
                $(`#weapon-choice-${i+1}`).addClass('locked');
            }
        }
    },

    refreshWeapomSelectionDisplay(player){
        $('.weapon-choice.selected').removeClass('selected');
        $(`#weapon-choice-${player.selectedWeaponIndex + 1}`).addClass('selected');
    }

}