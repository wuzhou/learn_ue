import * as UE from "ue";

interface GameModeMixin extends UE.Game.Blueprint.BP_Cpp_ProjectGameMode.BP_Cpp_ProjectGameMode_C {};

class GameModeMixin {
    ReceiveBeginPlay() {
        console.log("Mixin Mode ReceiveBeginPlay");
    }
}

export default GameModeMixin;