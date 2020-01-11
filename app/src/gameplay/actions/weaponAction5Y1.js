class WeaponAction5Y1 extends _WeaponAction{

    cost = 1;

    constructor(player){
        super(player);
        this.cooldownDuration = 150;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon5Y1Projectile, this.player, this.player.x, this.player.y, this.player.direction);
    }

    test(){
        return this.player.payYellowEnergy(this.cost);
    }

}