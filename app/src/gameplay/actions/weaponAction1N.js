"use strict";
class WeaponAction1N extends _WeaponAction{

    constructor(player){
        super(player);
        this.cooldownDuration = 600;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon1NProjectile, this.player, this.player.x, this.player.y, this.player.direction);
    }

}