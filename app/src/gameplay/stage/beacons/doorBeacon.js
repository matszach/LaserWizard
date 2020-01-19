"use strict";
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
            this._onTileRemoved(t[0], t[1]);
        });
    }

    _onTileRemoved(x, y){
        // abstract
    }

}

class MagentaDoorBeacon extends DoorBeacon {
    _shoudlFire(){
        return StageManager.currentStage.player.keys.magenta;
    }

    _onTileRemoved(x, y){
        ParticleSpawner.createExplosion(MagentaSparkParticle, x, y, Util.randInt(20, 40)); 
    }
}

class CyanDoorBeacon extends DoorBeacon {
    _shoudlFire(){
        return StageManager.currentStage.player.keys.cyan;
    }

    _onTileRemoved(x, y){
        ParticleSpawner.createExplosion(CyanSparkParticle, x, y, Util.randInt(20, 40)); 
    }
}