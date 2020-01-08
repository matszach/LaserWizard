const HudManager = {

    // used to get an 'ease-in' type animation when a resource is gained or lost
    onDisplayValues: {
        hp: 0,
        redEnergy: 0,
        yellowEnergy: 0,
        blueEnergy: 0
    },

    interval: null,

    manage(){
        var p = StageManager.currentStage.player;
        var dv = HudManager.onDisplayValues;
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