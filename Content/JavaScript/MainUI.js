"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let world = puerts_1.argv.getByName("GameInstance").GetWorld();
console.log("Load MainUI");
let mainWidgetClass = UE.Class.Load("/Game/Blueprint/UI/BP_MainWidget.BP_MainWidget_C");
let tsInstance = puerts_1.argv.getByName("GameInstance");
let mainWidget = tsInstance.CreateWidgetInstance(world, mainWidgetClass);
mainWidget.AddToViewport();
mainWidget.ButtonStart.OnClicked.Add(() => {
    console.log("ButtonStart Clicked");
    UE.GameplayStatics.OpenLevel(world, "ThirdPersonMap");
});
//# sourceMappingURL=MainUI.js.map