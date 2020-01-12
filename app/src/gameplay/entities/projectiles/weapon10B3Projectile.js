class Weapon10B3Projectile extends _DamagingProjectile {

    // ==================== constructor ====================
    constructor(parentEntity, direction, x, y){
        // super constructor
        super(parentEntity, direction, x, y);

        this.speed = 0.08;
        this.minDmg = 2;
        this.maxDmg = 4;
        this.duration = 100;
        this.accuracy = 98;
        
        this.tileX = 2;
        this.tileY = 3;
        
        this.collisionSize = 0.6;
        this.displaySize = 0.8;
        this.collidesMonster = true;
    }

    animate(){
        // TODO
    }

    _onCollisionWithMonster(m){
        m.takeDmg(this.calculateDamage());
        // this one does not expire on collision WITH MONSTER
    }

}