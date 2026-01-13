import * as UE from "ue";
import * as puerts from "puerts";

interface MasterZDMixin extends UE.Game.Blueprint.Characters.BP_MasterZD.BP_MasterZD_C {};

class MasterZDMixin {
    
    private timerHandle = new UE.TimerHandle();

    ReceiveAnyDamage(Damage: number, DamageType: UE.DamageType, InstigatedBy: UE.Controller, DamageCauser: UE.Actor)
    {

        if (this.AC_Health.IsAlive)
        {
            this.AC_Health.DamageHealth(Damage);

            if (!this.AC_Health.IsAlive)
            {
                console.log("Mixin MasterZD Death");
                this.AnimationComponent.AnimInstance.JumpToNode("Death", "Movement");
            }
            else
            {
                this.Sprite.SetSpriteColor(new UE.LinearColor(1, 0, 0, 1));
                UE.KismetSystemLibrary.K2_ClearTimer(this, "ResetColor");
                this.timerHandle = UE.KismetSystemLibrary.K2_SetTimer(this, "ResetColor", 0.2, false);
            }
        }
    }

    ResetColor()
    {
        console.log("Mixin MasterZD ResetColor");
        this.Sprite.SetSpriteColor(new UE.LinearColor(1, 1, 1, 1));
    }

    ABPostInitializeComponents()
    {
        let abSet = this.ASC.GetAttributeSet(UE.ABCharacterAttributeSet.StaticClass()) as UE.ABCharacterAttributeSet;
        console.log("Mixin MasterZD ABPostInitializeComponents", abSet.MaxHealth.CurrentValue);
    }

    ShowDamageEffect()
    {
        this.Sprite.SetSpriteColor(new UE.LinearColor(1, 0, 0, 1));
        UE.KismetSystemLibrary.K2_ClearTimer(this, "ResetColor");
        this.timerHandle = UE.KismetSystemLibrary.K2_SetTimer(this, "ResetColor", 0.2, false);
    }
}

export default MasterZDMixin;