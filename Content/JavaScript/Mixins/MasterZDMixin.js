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
                this.ShowDamageEffect();
            }
        }
    }
    ResetColor() {
        console.log("Mixin MasterZD ResetColor");
        this.Sprite.SetSpriteColor(new UE.LinearColor(1, 1, 1, 1));
    }
    ABPostInitializeComponents() {
        let abSet = this.ASC.GetAttributeSet(UE.ABCharacterAttributeSet.StaticClass());
        console.log("Mixin MasterZD ABPostInitializeComponents", abSet.MaxHealth.CurrentValue);
    }
    ShowDamageEffect() {
        this.Sprite.SetSpriteColor(new UE.LinearColor(1, 0, 0, 1));
        UE.KismetSystemLibrary.K2_ClearTimer(this, "ResetColor");
        this.timerHandle = UE.KismetSystemLibrary.K2_SetTimer(this, "ResetColor", 0.2, false);
    }
}
exports.default = MasterZDMixin;
//# sourceMappingURL=MasterZDMixin.js.map