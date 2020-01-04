class _Projectile extends _Entity {

    // ==================== fields ====================
    duration;                // - duration left in animation ticks
    accuracy;                // - projectiles accuracy, 100 = perfect, 0 = fully random
    parentEntity;            // - entity that's the origin of the projectile
    
    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super();
        // default values
        this.duration = 100;
        this.accuracy = 100;
        // on-init calculated values
        this.collidesBarrier = true;
        this.collidesMonster = !(parentEntity instanceof _Monster);
        this.collidesPlayer = !(parentEntity instanceof Player);
        this.parentEntity = parentEntity;
        this.x = x;
        this.y = y;
        this.direction = direction + 180 * (100 - this.accuracy) * (Math.random() * 2 - 1);
    }

    // ==================== methods ====================
    tickDuration(){
        this.duration -= 1;
        if(this.duration < 0){
            this.expire();
        }
    }

    _doExist(){
        this.travel(this.direction);
        this.checkCollisions();
        this.tickDuration();
    }

}