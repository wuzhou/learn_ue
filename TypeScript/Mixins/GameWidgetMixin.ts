import * as UE from 'ue'

interface GameWidgetMixin extends UE.Game.Blueprint.UI.BP_GameWidget.BP_GameWidget_C {};

class GameWidgetMixin {
    Refresh() {
        let hpStr = Math.floor(this.CurrentHealth).toString() + "/" + Math.floor(this.MaxHealth).toString();
        console.log("Refresh", hpStr);
        this.HealthText.SetText(hpStr);
    }
}

export default GameWidgetMixin;