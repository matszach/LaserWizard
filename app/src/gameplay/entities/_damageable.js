"use strict";
class _Damageable extends _Entity{

    // ==================== fields ====================
    maxHp;                  // - maximum hit points
    hp;                     // - current hit points
    defence;                // - reduces/increases damage taken, ranges -100 : 100
    
    // ==================== constructor ====================
    constructor(){
        // super constructor
        super();
        // default values
        this.maxHp = 100;
        this.hp = 100;
        this.defence = 0;
    }

    // ==================== methods ====================
    // damage and death
    takeDmg(d){
        var trueDmg = d * (100 - this.defence)/100;
        this.hp -= trueDmg;
        if(this.hp <= 0){
            this.expire();
        }
        this._onDamaged(trueDmg);
    }

    healDmg(h){
        var trueHealing = this.maxHp - this.hp > h ? h : this.maxHp - this.hp;
        this.hp += trueHealing;
        this._onHealed(trueHealing);
    }

    // "on" triggers
    _onDamaged(damage){
        StageManager.currentStage.numberAnimations.push(new FadingNumber(damage, this.x, this.y, '#ff0000'));
    }

    _onHealed(healing){
        if(healing >= 1){
            StageManager.currentStage.numberAnimations.push(new FadingNumber(healing, this.x, this.y, '#00ff00'));
        }
    }

}