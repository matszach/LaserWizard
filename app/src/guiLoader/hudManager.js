const HudManager = {

    // used to get an 'ease-in' type animation when a resource is gained or lost
    onDisplayValues: {
        hp: 0,
        prevHp : 0,
        redEnergy: 0,
        yellowEnergy: 0,
        blueEnergy: 0,
        selectedWeaponIndex: 0
    },

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

    manage(){
        var p = StageManager.currentStage.player;
        var dv = HudManager.onDisplayValues;
        HudManager.applyEnergyDisplayChange(p, dv);
        HudManager.applyHpDisplayChage(p, dv);
        HudManager.applyWeaponChange(p, dv);
    },


    applyEnergyDisplayChange(p, dv){
        if(p.currentRedEnergy > dv.redEnergy){
            dv.redEnergy++;
        } else {
            dv.redEnergy = p.currentRedEnergy
        }
        $('.hud-value-span.red').html(dv.redEnergy);
        if(p.currentYellowEnergy > dv.yellowEnergy){
            dv.yellowEnergy++;
        } else {
            dv.yellowEnergy = p.currentYellowEnergy
        }
        $('.hud-value-span.yellow').html(dv.yellowEnergy);
        if(p.currentBlueEnergy > dv.blueEnergy){
            dv.blueEnergy++;
        } else {
            dv.blueEnergy = p.currentBlueEnergy
        }
        $('.hud-value-span.blue').html(dv.blueEnergy);
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

    
    start(){
        this.reset();
        this.interval = setInterval(this.manage, 50);
    },


    stop(){
        clearInterval(this.interval);
    },


    reset(){
        this.onDisplayValues = {
            hp: 0,
            prevHp : 0,
            redEnergy: 0,
            yellowEnergy: 0,
            blueEnergy: 0,
            selectedWeaponIndex: 0
        };
    }
}