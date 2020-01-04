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
        p.awaken();
    }

} 