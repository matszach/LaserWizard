"use strict";
const StageManager = {
    
    currentStage: null,
    
    beaconTestInterval: null,

    cullEntitiesInterval: null,


    sleepAll(){
        if(this.currentStage){
            this.currentStage.items.forEach(e => e.sleep());
            this.currentStage.monsters.forEach(e => e.sleep());
            this.currentStage.particles.forEach(e => e.sleep());
            this.currentStage.projectiles.forEach(e => e.sleep());
            this.currentStage.barriers.forEach(e => e.sleep());
            this.currentStage.player.sleep();
            clearInterval(this.beaconTestInterval);
            clearInterval(this.cullEntitiesInterval);
        }

    },

    awakenAll(){
        if(this.currentStage){
            this.currentStage.items.forEach(e => e.awaken());
            this.currentStage.monsters.forEach(e => e.awaken());
            this.currentStage.particles.forEach(e => e.awaken());
            this.currentStage.projectiles.forEach(e => e.awaken());
            this.currentStage.barriers.forEach(e => e.awaken());
            this.currentStage.player.awaken();
            this.beaconTestInterval = setInterval(this.testAllBeacons, 200);
            this.cullEntitiesInterval = setInterval(this.cullEntityLists, 5000);
        }
    },

    testAllBeacons(){
        StageManager.currentStage.beacons.forEach(e => e.test());
    },

    cullEntityLists(){
        var cs = StageManager.currentStage;
        cs.items = cs.items.filter(e => !e.expired);
        cs.monsters = cs.monsters.filter(e => !e.expired);
        cs.particles = cs.particles.filter(e => !e.expired);
        cs.projectiles = cs.projectiles.filter(e => !e.expired);
        cs.barriers = cs.barriers.filter(e => !e.expired);
        cs.numberAnimations = cs.numberAnimations.filter(e => !e.expired);
    },

    recycle(){
        this.sleepAll();
        this.currentStage = null;
        StagePainter.clearCanvas(StagePainter.calcDisplaySizes());
    }

}