"use strict";
const ProjectileSpawner = {

    /**
     * @param {extends _Projectile} projectileClass 
     * @param {_Entity} originEntity 
     * @param {number} originX 
     * @param {number} originY 
     * @param {number} direction
     */
    spawn(projectileClass, originEntity, originX, originY, direction){
        var p = new projectileClass(originEntity, direction, originX, originY);
        StageManager.currentStage.projectiles.push(p);
        p.travelDirection = direction + 180 * (100 - p.accuracy)/100 * (Math.random() * 2 - 1);
        p.direction = p.travelDirection;
        p.awaken();
    }

} 