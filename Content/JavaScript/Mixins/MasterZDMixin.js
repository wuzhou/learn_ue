"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
;
class MasterZDMixin {
    timerHandle = new UE.TimerHandle();
    ReceiveAnyDamage(Damage, DamageType, InstigatedBy, DamageCauser) {
        if (this.AC_Health.IsAlive) {
            this.AC_Health.DamageHealth(Damage);
            if (!this.AC_Health.IsAlive) {
                console.log("Mixin MasterZD Death");
                this.AnimationComponent.AnimInstance.JumpToNode("Death", "Movement");
            }
            else {
                this.Sprite.SetSpriteColor(new UE.LinearColor(1, 0, 0, 1));
            }
        }
    }
    ResetColor() {
        console.log("Mixin MasterZD ResetColor");
        this.Sprite.SetSpriteColor(new UE.LinearColor(1, 1, 1, 1));
    }
}
exports.default = MasterZDMixin;
//# sourceMappingURL=MasterZDMixin.js.map