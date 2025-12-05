"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
;
class ACHealthMixin {
    ReceiveBeginPlay() {
        this.CurrentHealth = this.MaxHealth;
    }
    DamageHealth(DamageAmount) {
        console.log("ReceiveAnyDamage ", DamageAmount);
        this.CurrentHealth = UE.KismetMathLibrary.Max(this.CurrentHealth - DamageAmount, 0);
        this.IsAlive = this.CurrentHealth > 0;
    }
}
exports.default = ACHealthMixin;
//# sourceMappingURL=ACHealthMixin.js.map