class Weapon extends _Item {

    weaponIndex;

    constructor(weaponIndex){
        super();
        this.weaponIndex = weaponIndex; 
        this.displaySize = 1.2;
        this.collisionSize = 1.0; 
    }

    shouldPickUp(player){
        return true;
    }

    onPickUp(player){
        player.unlockWeapon(this.weaponIndex);
    }

}


class WeaponRed1 extends Weapon {
    constructor(){
        super(1);
        this.tileX = 1;
        this.tileY = 1;
    }
}

class WeaponRed2 extends Weapon {
    constructor(){
        super(2);
        this.tileX = 2;
        this.tileY = 1;
    }
}

class WeaponRed3 extends Weapon {
    constructor(){
        super(3);
        this.tileX = 3;
        this.tileY = 1;
    }
}


class WeaponYellow1 extends Weapon {
    constructor(){
        super(4);
        this.tileX = 4;
        this.tileY = 1;
    }
}

class WeaponYellow2 extends Weapon {
    constructor(){
        super(5);
        this.tileX = 5;
        this.tileY = 1;
    }
}

class WeaponYellow3 extends Weapon {
    constructor(){
        super(6);
        this.tileX = 6;
        this.tileY = 1;
    }
}

class WeaponBlue1 extends Weapon {
    constructor(){
        super(7);
        this.tileX = 7;
        this.tileY = 1;
    }
}

class WeaponBlue2 extends Weapon {
    constructor(){
        super(8);
        this.tileX = 8;
        this.tileY = 1;
    }
}

class WeaponBlue3 extends Weapon {
    constructor(){
        super(9);
        this.tileX = 9;
        this.tileY = 1;
    }
}