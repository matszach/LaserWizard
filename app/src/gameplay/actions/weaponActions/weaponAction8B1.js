"use strict";
class WeaponAction8B1 extends _WeaponAction{

    cost = 2;

    constructor(player){
        super(player);
        this.cooldownDuration = 600;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon8B1Projectile, this.player, this.player.x, this.player.y, this.player.direction);
    }

    test(){
        return this.player.payBlueEnergy(this.cost);
    }

}