"use strict";
class WeaponAction2R1 extends _WeaponAction{

    cost = 1;

    constructor(player){
        super(player);
        this.cooldownDuration = 180;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon2R1Projectile, this.player, this.player.x, this.player.y, this.player.direction);    
    }

    test(){
        return this.player.payRedEnergy(this.cost);
    }

}