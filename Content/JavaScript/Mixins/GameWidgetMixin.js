"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class GameWidgetMixin {
    Refresh() {
        let hpStr = Math.floor(this.CurrentHealth).toString() + "/" + Math.floor(this.MaxHealth).toString();
        console.log("Refresh", hpStr);
        this.HealthText.SetText(hpStr);
    }
}
exports.default = GameWidgetMixin;
//# sourceMappingURL=GameWidgetMixin.js.map