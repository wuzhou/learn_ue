"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const UIManager_1 = require("./UIManager");
const MixinManager_1 = require("./MixinManager");
class Application {
    static instance;
    isInitialized;
    uiManager;
    mixinManager;
    static GetInstance() {
        if (!Application.instance) {
            Application.instance = new Application();
        }
        return Application.instance;
    }
    Init(gameInstance) {
        if (this.isInitialized) {
            return;
        }
        this.uiManager = new UIManager_1.UIManager(this, gameInstance);
        this.mixinManager = new MixinManager_1.MixinManager();
        this.isInitialized = true;
    }
    LoadUI(uiName) {
        if (!this.isInitialized) {
            return;
        }
        this.uiManager.LoadUI(uiName);
    }
    MixinBeforeLevel(levelIndex) {
        if (!this.isInitialized) {
            return;
        }
        this.mixinManager.MixinBeforeLevel(levelIndex);
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map