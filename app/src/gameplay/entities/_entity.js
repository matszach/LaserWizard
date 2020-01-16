class _Entity {

    // ==================== fields ====================
    collisionSize;         // - used in collision detection
    displaySize;            // - used when the entity's image is drawn
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
    tileX;                  // - x position in tileset (can be changed through animations)
    tileY;                  // - y position in tileset (can be changed through animations)

    lifecycleInterval;      // - entity's lifecycle interval reference

    // ==================== constructor ====================
    constructor(){
        // default values
        this.collisionSize = 1;
        this.displaySize = 1;
        this.image = null; // todo: default, fallback image
        this.x = 0;
        this.y = 0;
        this.direction = 0;
        this.expired = false;
        this.xPrev = 0;
        this.yPrev = 0;
        this.speed = 0.05;
        this.checksCollisions = false;
        this.collisoonCheckFrequency = 5;
        this.collisionCheckTimer = 0;
        this.collidesPlayer = false;
        this.collidesMonster = false;
        this.collidesBarrier = false;
        this.collidesProjectile = false;
        this.collidesItem = false;
        this.tileX = 0;
        this.tileY = 0;
    }

    // ==================== methods ====================
    // lifecycle
    _doExist(thisEntity){
        // abstract
    }

    awaken(){
        if(!this.lifecycleInterval){
            this.lifecycleInterval = setInterval(this._doExist, 10, this);
        }
    }

    sleep(){
        if(this.lifecycleInterval){
            clearInterval(this.lifecycleInterval);
            // interval has to be nulled after clearing, otherwise next .awaken() would fail
            this.lifecycleInterval = null; 
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
        this._savePosition();
        this.x += Math.sin(d * Math.PI/180) * v;
        this.y -= Math.cos(d * Math.PI/180) * v;
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
        this._move(direction, this.speed);
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
        var maxR = (this.collisionSize + entity.collisionSize) * 0.5;
        return dr < maxR;
    }

    _shouldCheckCollisions(){
        if(this.checksCollisions){
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
            st.monsters.filter(e => {return !e.expired}).forEach(e => {
                if(this._isCollisionWithEntity(e)){
                    this._onCollisionWithMonster(e);
                }
            });
        }
        if(this.collidesProjectile){
            st.projectiles.filter(e => {return !e.expired}).forEach(e => {
                if(this._isCollisionWithEntity(e)){
                    this._onCollisionWithProjectile(e);
                }
            });
        }
        if(this.collidesBarrier){
            st.barriers.filter(e => {return !e.expired}).forEach(e => {
                if(this._isCollisionWithEntity(e)){
                    this._onCollisionWithBarrier(e);
                }
            });
        }
        if(this.collidesItem){
            st.items.filter(e => {return !e.expired}).forEach(e => {
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

    

    // stopping on wall
    _isInWall(){
        return StageManager.currentStage.collisionMap[Math.round(this.x)][Math.round(this.y)] == 1;
    }

    checkForInWall(){
        if(this._isInWall()){
            this._onIsInWall();
        }
    }

    _onIsInWall(){
        // abstract
    }


    // misc
    getDirectionToPoint(x, y){
        var dx = x - this.x;
        var dy = y - this.y;
        var dir = Math.atan(dy/dx) * 180 / Math.PI + 90;
        if(dx < 0) dir += 180;
        return dir;
    }

}