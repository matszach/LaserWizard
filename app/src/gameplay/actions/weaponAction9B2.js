class WeaponAction9B2 extends _WeaponAction{

    cost = 0.5;

    constructor(player){
        super(player);
        this.cooldownDuration = 50;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon9B2Projectile, this.player, this.player.x, this.player.y, this.player.direction);
    }

    test(){
        return this.player.payBlueEnergy(this.cost);
    }

}