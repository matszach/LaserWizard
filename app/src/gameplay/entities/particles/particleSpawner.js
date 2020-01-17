const ParticleSpawner = {

    /**
     * @param {extends _Particle} particleClass 
     * @param {number} originX 
     * @param {number} originY 
     * @param {number} direction (optional)
     */
    spawn(particleClass, originX, originY, direction){
        var dir = direction ? direction : Math.random() * 360;
        var p = new particleClass(dir, originX, originY);
        StageManager.currentStage.particles.push(p);
        p.awaken();
    }

}