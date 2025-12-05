import * as UE from "ue";
import { $ref, $unref } from "puerts";

interface PlayerHeroMixin extends UE.Game.Blueprint.Characters.Hero.BPC_PlayerHero.BPC_PlayerHero_C {};

class PlayerHeroMixin {
    InpActEvt_IA_Movement_K2Node_EnhancedInputActionEvent_1(ActionValue: UE.InputActionValue, ElapsedTime: number, TriggeredTime: number, SourceAction: UE.InputAction)
    {
        if (this.AC_Health && this.AC_Health.IsAlive)
        {
            let Vector = UE.EnhancedInputLibrary.Conv_InputActionValueToAxis2D(ActionValue);
            this.AddMovementInput(new UE.Vector(1, 0, 0), Vector.X);
            this.AddMovementInput(new UE.Vector(0, 1, 0), Vector.Y);
        }
    }

    InpActEvt_IA_Attack_K2Node_EnhancedInputActionEvent_0(ActionValue: UE.InputActionValue, ElapsedTime: number, TriggeredTime: number, SourceAction: UE.InputAction)
    {
        if (this.AC_Health && this.AC_Health.IsAlive)
        {
            this.PlayAttackAnim();
        }
    }

    AttackHitbox()
    {
        if (this.AC_Health && this.AC_Health.IsAlive)
        {
            let actorsRef = $ref(UE.NewArray(UE.Actor));
            let masterMonsterClass = UE.Class.Load("/Game/Blueprint/Characters/Monster/BPC_MasterMonster.BPC_MasterMonster_C");
            this.HitBox.GetOverlappingActors(actorsRef, masterMonsterClass);

            let actors = $unref(actorsRef);
            for (let i = 0; i < actors.Num(); i++)
            {
                let actor = actors.Get(i);
                UE.GameplayStatics.ApplyDamage(actor, 1.0, null, null, null);
            }
        }
    }
}

export default PlayerHeroMixin;