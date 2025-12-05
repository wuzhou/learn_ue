import * as UE from "ue";

interface ACHealthMixin extends UE.Game.Blueprint.Components.AC_Health.AC_Health_C {};

class ACHealthMixin {
    ReceiveBeginPlay() {
        this.CurrentHealth = this.MaxHealth;
    }

    DamageHealth(DamageAmount: number) {
        console.log("ReceiveAnyDamage ", DamageAmount);
        this.CurrentHealth = UE.KismetMathLibrary.Max(this.CurrentHealth - DamageAmount, 0);
        this.IsAlive = this.CurrentHealth > 0;
    }
}

export default ACHealthMixin;