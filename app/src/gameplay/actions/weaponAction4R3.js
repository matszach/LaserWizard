class WeaponAction4R3 extends _WeaponAction{

    cost = 5;
    nofProjectiles = 10;

    constructor(player){
        super(player);
        this.cooldownDuration = 1200;
    }

    onSuccess(){
        for(var i = 0; i < this.nofProjectiles; i++){
            ProjectileSpawner.spawn(Weapon4R3Projectile, this.player, this.player.x, this.player.y, this.player.direction);
        }         
    }

    test(){
        return this.player.payRedEnergy(this.cost);
    }

}