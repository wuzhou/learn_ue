"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
;
class PlayerHeroMixin {
    InpActEvt_IA_Movement_K2Node_EnhancedInputActionEvent_1(ActionValue, ElapsedTime, TriggeredTime, SourceAction) {
        if (this.AC_Health && this.AC_Health.IsAlive) {
            let Vector = UE.EnhancedInputLibrary.Conv_InputActionValueToAxis2D(ActionValue);
            this.AddMovementInput(new UE.Vector(1, 0, 0), Vector.X);
            this.AddMovementInput(new UE.Vector(0, 1, 0), Vector.Y);
        }
    }
    InpActEvt_IA_Attack_K2Node_EnhancedInputActionEvent_0(ActionValue, ElapsedTime, TriggeredTime, SourceAction) {
        if (this.AC_Health && this.AC_Health.IsAlive) {
            this.PlayAttackAnim();
        }
    }
    AttackHitbox() {
        if (this.AC_Health && this.AC_Health.IsAlive) {
            let actorsRef = (0, puerts_1.$ref)(UE.NewArray(UE.Actor));
            let masterMonsterClass = UE.Class.Load("/Game/Blueprint/Characters/Monster/BPC_MasterMonster.BPC_MasterMonster_C");
            this.HitBox.GetOverlappingActors(actorsRef, masterMonsterClass);
            let actors = (0, puerts_1.$unref)(actorsRef);
            for (let i = 0; i < actors.Num(); i++) {
                let actor = actors.Get(i);
                UE.GameplayStatics.ApplyDamage(actor, 1.0, null, null, null);
            }
        }
    }
}
exports.default = PlayerHeroMixin;
//# sourceMappingURL=PlayerHeroMixin.js.map