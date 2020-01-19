"use strict";
class WeaponAction10B3 extends _WeaponAction{

    cost = 8;

    constructor(player){
        super(player);
        this.cooldownDuration = 2000;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon10B3Projectile, this.player, this.player.x, this.player.y, this.player.direction);
    }

    test(){
        return this.player.payBlueEnergy(this.cost);
    }

}