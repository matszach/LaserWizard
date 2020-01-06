const StageManager = {
    
    currentStage: null,


    sleepAll(){
        if(this.currentStage){
            this.currentStage.items.forEach(e => e.sleep());
            this.currentStage.monsters.forEach(e => e.sleep());
            this.currentStage.particles.forEach(e => e.sleep());
            this.currentStage.projectiles.forEach(e => e.sleep());
            this.currentStage.barriers.forEach(e => e.sleep());
            this.currentStage.player.sleep()
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
        }
    }

}