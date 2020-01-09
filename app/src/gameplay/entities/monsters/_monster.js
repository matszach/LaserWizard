class _Monster extends _Character {

    constructor(){
        super();
        this.speed = 0.02;
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        thisEntity.turn(dir);
        thisEntity.travel(dir);
        thisEntity.checkForInWall();
    }
    
}