"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIManager = void 0;
const UE = require("ue");
class UIManager {
    gameInstance;
    application;
    constructor(application, gameInstance) {
        this.application = application;
        this.gameInstance = gameInstance;
    }
    LoadUI(uiName) {
        console.log("LoadUI: " + uiName);
        if (uiName == "MainUI") {
            this.LoadMainUI();
        }
    }
    LoadMainUI() {
        let world = this.gameInstance.GetWorld();
        let mainWidgetClass = UE.Class.Load("/Game/Blueprint/UI/BP_MainWidget.BP_MainWidget_C");
        let mainWidget = this.gameInstance.CreateWidgetInstance(world, mainWidgetClass);
        mainWidget.AddToViewport();
        mainWidget.ButtonStart.OnClicked.Add(() => {
            console.log("ButtonStart Clicked");
            this.application.MixinBeforeLevel(0);
            UE.GameplayStatics.OpenLevel(world, "ThirdPersonMap");
        });
    }
}
exports.UIManager = UIManager;
//# sourceMappingURL=UIManager.js.map