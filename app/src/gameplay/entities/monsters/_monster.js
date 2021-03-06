"use strict";
class _Monster extends _Character {

    constructor(){
        super();
    }

    _doExist(thisEntity){
        var p = StageManager.currentStage.player;
        var dir = thisEntity.getDirectionToPoint(p.x, p.y);
        thisEntity.turn(dir);
        thisEntity.travel(dir);
        thisEntity.checkForInWall();
    }
    
}