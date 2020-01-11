class WeaponAction6Y2 extends _WeaponAction{

    cost = 3;

    constructor(player){
        super(player);
        this.cooldownDuration = 700;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon6Y2Projectile, this.player, this.player.x, this.player.y, this.player.direction);
    }

    test(){
        return this.player.payYellowEnergy(this.cost);
    }

}