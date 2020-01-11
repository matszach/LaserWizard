class WeaponAction2R2 extends _WeaponAction{

    cost = 2;

    constructor(player){
        super(player);
        this.cooldownDuration = 800;
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon2R2Projectile, this.player, this.player.x, this.player.y, this.player.direction);    
    }

    test(){
        return this.player.payRedEnergy(this.cost);
    }

}