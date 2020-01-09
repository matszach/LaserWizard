class WeaponAction1n extends _WeaponAction{

    constructor(player){
        super(player);
    }

    onSuccess(){
        ProjectileSpawner.spawn(Weapon1NProjectile, this.player, this.player.x, this.player.y);
    }

}