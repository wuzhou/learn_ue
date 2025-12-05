import * as UE from "ue";
import { Application } from "./Application";

class UIManager {
    private gameInstance: UE.TsGameInstance;
    private application: Application;

    constructor(application: Application, gameInstance: UE.TsGameInstance) {
        this.application = application;
        this.gameInstance = gameInstance;
    }

    LoadUI(uiName : string) {
        console.log("LoadUI: " + uiName);
        if (uiName == "MainUI") {
            this.LoadMainUI();
        }
    }

    private LoadMainUI() {
        let world = this.gameInstance.GetWorld();
        let mainWidgetClass = UE.Class.Load("/Game/Blueprint/UI/BP_MainWidget.BP_MainWidget_C");
        let mainWidget = this.gameInstance.CreateWidgetInstance(world, mainWidgetClass) as UE.Game.Blueprint.UI.BP_MainWidget.BP_MainWidget_C;
        mainWidget.AddToViewport();
        mainWidget.ButtonStart.OnClicked.Add(() => {
            console.log("ButtonStart Clicked");
            this.application.MixinBeforeLevel(0);
            UE.GameplayStatics.OpenLevel(world, "ThirdPersonMap");
        });
    }
}

export { UIManager };