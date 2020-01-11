class WeaponAction7Y3 extends _WeaponAction{

    cost = 5;

    constructor(player){
        super(player);
        this.cooldownDuration = 1500;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon7Y3Projectile, this.player, this.player.x, this.player.y, this.player.direction);
    }

    test(){
        return this.player.payYellowEnergy(this.cost);
    }

}