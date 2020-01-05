const StageManager = {
    
    currentStage: null,


    sleepAll(){


    },


    awakenAll(){
        if(this.currentStage){
            this.currentStage.items.forEach(e => e.awaken());
            this.currentStage.player.awaken();
        }
    }

}