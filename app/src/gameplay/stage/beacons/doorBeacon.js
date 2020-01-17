class DoorBeacon extends _Beacon {

    // ===== fields =====
    doorTileIds = [];

    // ===== constructors =====
    constructor(x, y, range){
        super(x, y, range)
    }

    // ===== public =====
    addWallTile(x, y){
        this.doorTileIds.push([x, y]);
    }

    _fire(){
        this.doorTileIds.forEach(t => {
            StageManager.currentStage.wallIds[t[0]][t[1]] = [0, 0]; // empty tile 
            StageManager.currentStage.collisionMap[t[0]][t[1]] = 0; // pass-through tile
        });
    }

}

class MagentaDoorBeacon extends DoorBeacon {
    _shoudlFire(){
        return StageManager.currentStage.player.keys.magenta;
    }
}

class CyanDoorBeacon extends DoorBeacon {
    _shoudlFire(){
        return StageManager.currentStage.player.keys.cyan;
    }
}