import * as UE from 'ue'

interface HpBarMixin extends UE.Game.Blueprint.UI.WBP_HealthBar.WBP_HealthBar_C {};

class HpBarMixin {
    InitProgress(AttributeSet: UE.ABCharacterAttributeSet)
    {
        this.MaxHealth = AttributeSet.MaxHealth.CurrentValue;
        this.CurHealth = AttributeSet.Health.CurrentValue;
        this.Refresh();
    }

    Refresh() {
        let percent =  this.CurHealth / this.MaxHealth;
        console.log("Refresh hp bar", percent);
        this.FrontProgressBar.SetPercent(percent);
    }
}

export default HpBarMixin;