"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class MasterZDMixin {
    ReceiveAnyDamage(Damage, DamageType, InstigatedBy, DamageCauser) {
        if (this.AC_Health.IsAlive) {
            this.AC_Health.DamageHealth(Damage);
            if (!this.AC_Health.IsAlive) {
                console.log("Mixin MasterZD Death");
                this.AnimationComponent.AnimInstance.JumpToNode("Death", "Movement");
            }
        }
    }
}
exports.default = MasterZDMixin;
//# sourceMappingURL=MasterZDMixin.js.map