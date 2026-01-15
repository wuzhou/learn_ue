"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class HpBarMixin {
    InitProgress(AttributeSet) {
        this.MaxHealth = AttributeSet.MaxHealth.CurrentValue;
        this.CurHealth = AttributeSet.Health.CurrentValue;
        this.Refresh();
    }
    Refresh() {
        let percent = this.CurHealth / this.MaxHealth;
        console.log("Refresh hp bar", percent);
        this.FrontProgressBar.SetPercent(percent);
    }
}
exports.default = HpBarMixin;
//# sourceMappingURL=HpBarMixin.js.map