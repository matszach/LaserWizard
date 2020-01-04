class _Entity {

    // ==================== fields ====================
    collisionSizeRadius;    // - used in collision detection
    displaySizeRadius;      // - used when the entity's image is drawn
    image;                  // - reference to the entity's sprites
    x;                      // - current character's X position
    y;                      // - current character's Y position 
    direction;              // - current direction the character is facing
    expired;                // - marks the entity as expired, so that it can be removed from entity registry etc.
    xPrev;                  // - previous character's X position (for backtracing / drawing afterimages)
    yPrev;                  // - previous character's Y position
    speed;                  // - units per animation frame traveled
    checksCollisions;       // - states if the entity checks for collisions
    collisoonCheckFrequency;// - how many frames between 
    collisionCheckTimer;    // - current collison check timer
    collidesPlayer;         // - states if the entity checks for collision with a player
    collidesMonster;        // - states if the entity checks for collision with a monster
    collidesProjectile;     // - states if the entity checks for collision with a projectile
    collidesBarrier;        // - states if the entity checks for collision with a barrier
    collidesItem;           // - states if the entity checks for collision with an item
    stopsOnWall;            // - states if the entity can pass through walls

    lifecycleInterval;      // - entity's lifecycle interval reference

    // ==================== constructor ====================
    constructor(){
        // default values
        this.collisionSizeRadius = 1;
        this.displaySizeRadius = 1;
        this.image = null; // todo: default, fallback image
        this.x = 0;
        this.y = 0;
        this.direction = 0;
        this.expired = false;
        this.xPrev = 0;
        this.yPrev = 0;
        this.speed = 0.1;
        this.checksCollisions = false;
        this.collisoonCheckFrequency = 5;
        this.collisionCheckTimer = 0;
        this.collidesPlayer = false;
        this.collidesMonster = false;
        this.collidesBarrier = false;
        this.collidesProjectile = false;
        this.collidesItem = false;
        this.stopsOnWall = true;
    }

    // ==================== methods ====================
    // lifecycle
    _doExist(thisEntity){
        // abstract
    }

    awaken(){
        if(!this.lifecycleInterval){
            setInterval(this._doExist, 10, this);
        }
    }

    sleep(){
        if(this.lifecycleInterval){
            clearInterval(this.lifecycleInterval);
        }
    }

    expire(){
        this.expired = true;
        this.sleep();
        this._onExpire();
    }

    // movement and turning
    _savePosition(){
        this.xPrev = this.x;
        this.yPrev = this.y;
    }

    _move(d, v){
        dx += Math.cos(d) * v;
        dy += Math.sin(d) * v;
        this.place(dx, dy);
    }

    restorePreviousPosition(){
        this.x = this.xPrev;
        this.y = this.yPrev;
    }

    turn(d){
        this.direction = d;
    }

    place(x, y){
        this._savePosition();
        this.x = x;
        this.y = y;
    }

    travel(direction) {
        this.move(direction, this.speed);
        this._onTravel(direction);
    }

    // collision
    _isCollisionWithEntity(entity){
        if(this == entity) {
            return false;
        }
        var dx = this.x - entity.x;
        var dy = this.y - entity.y;
        var dr = Math.sqrt(dx*dx + dy*dy);
        var maxR = this.collisionSizeRadius + entity.collisionSizeRadius;
        return dr < maxR;
    }

    _shouldCheckCollisions(){
        if(this.checksCollision){
            this.collisionCheckTimer += 1;
            if(this.collisionCheckTimer == this.collisoonCheckFrequency){
                this.collisionCheckTimer = 0;
                return true;
            }
        }
        return false;
    }

    doCheckCollisions(){
        if(!this._shouldCheckCollisions()){
            return;
        }
        var st = StageManager.currentStage;
        if(this.collidesPlayer){
            if(this._isCollisionWithEntity(st.player)){
                this._onCollisionWithPlayer(st.player);
            }
        }
        if(this.collidesMonster){
            st.monsters.forEach(e => {
                if(this._isCollisionWithEntity(e)){
                    this._onCollisionWithMonster(e);
                }
            });
        }
        if(this.collidesProjectile){
            st.projectiles.forEach(e => {
                if(this._isCollisionWithEntity(e)){
                    this._onCollisionWithProjectile(e);
                }
            });
        }
        if(this.collidesBarrier){
            st.barriers.forEach(e => {
                if(this._isCollisionWithEntity(e)){
                    this._onCollisionWithBarrier(e);
                }
            });
        }
        if(this.collidesItem){
            st.items.forEach(e => {
                if(this._isCollisionWithEntity(e)){
                    this._onCollisionWithItem(e);
                }
            });
        }
    }

    // "on" triggers
    _onExpire(){
        // abstract
    }

    _onTravel(direction){
        // abstract
    }

    _onCollisionWithPlayer(entity){
        // abstract
    }

    _onCollisionWithMonster(entity){
        // abstract
    }

    _onCollisionWithProjectile(entity){
        // abstract
    }

    _onCollisionWithBarrier(entity){
        // abstract
    }

    _onCollisionWithItem(entity){
        // abstract
    }

}