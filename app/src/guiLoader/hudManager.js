const HudManager = {

    // used to get an 'ease-in' type animation when a resource is gained or lost
    onDisplayValues: {
        hp: 0,
        redEnergy: 0,
        yellowEnergy: 0,
        blueEnergy: 0
    },

    interval: null,

    minHpHeartOpacity: 0.1,

    manage(){
        var p = StageManager.currentStage.player;
        var dv = HudManager.onDisplayValues;
        HudManager.applyEnergyDisplayChange(p, dv);
        HudManager.applyHpDisplayChage(p, dv);
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
        
        if(dv.hp < 20){
            $('#hp-icon-1').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-2').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-3').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-4').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-5').css('opacity', this.minHpHeartOpacity + (1 - this.minHpHeartOpacity) * dv.hp/20);
        } else if(dv.hp < 40){
            $('#hp-icon-1').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-2').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-3').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-4').css('opacity', this.minHpHeartOpacity + (1 - this.minHpHeartOpacity) * (dv.hp - 20)/20);
            $('#hp-icon-5').css('opacity', 1);
        } else if(dv.hp < 60){
            $('#hp-icon-1').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-2').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-3').css('opacity', this.minHpHeartOpacity + (1 - this.minHpHeartOpacity) * (dv.hp - 40)/20);
            $('#hp-icon-4').css('opacity', 1);
            $('#hp-icon-5').css('opacity', 1);
        } else if(dv.hp < 80){
            $('#hp-icon-1').css('opacity', this.minHpHeartOpacity);
            $('#hp-icon-2').css('opacity', this.minHpHeartOpacity + (1 - this.minHpHeartOpacity) * (dv.hp - 60)/20);
            $('#hp-icon-3').css('opacity', 1);
            $('#hp-icon-4').css('opacity', 1);
            $('#hp-icon-5').css('opacity', 1);
        } else if(dv.hp < 100){
            $('#hp-icon-1').css('opacity', this.minHpHeartOpacity + (1 - this.minHpHeartOpacity) * (dv.hp - 80)/20);
            $('#hp-icon-2').css('opacity', 1);
            $('#hp-icon-3').css('opacity', 1);
            $('#hp-icon-4').css('opacity', 1);
            $('#hp-icon-5').css('opacity', 1);
        } else {
            $('#hp-icon-1').css('opacity', 1);
            $('#hp-icon-2').css('opacity', 1);
            $('#hp-icon-3').css('opacity', 1);
            $('#hp-icon-4').css('opacity', 1);
            $('#hp-icon-5').css('opacity', 1);
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
            redEnergy: 0,
            yellowEnergy: 0,
            blueEnergy: 0
        };
    }
}