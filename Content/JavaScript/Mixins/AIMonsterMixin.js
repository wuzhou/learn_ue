"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
;
class AIMonsterMixin {
    ReceiveBeginPlay() {
        this.Player = UE.GameplayStatics.GetPlayerPawn(this.GetWorld(), 0);
        console.log("Mixined AIMonsterMixin ReceiveBeginPlay");
    }
    ReceivePossess(Pawn) {
        this.PossessedPawn = Pawn;
        console.log("Mixined AIMonsterMixin ReceivePossess");
    }
    ReceiveTick(DeltaSeconds) {
        let targetLocation = this.Player.K2_GetActorLocation();
        let selfLocation = this.PossessedPawn.K2_GetActorLocation();
        let direction = UE.KismetMathLibrary.FindLookAtRotation(selfLocation, targetLocation);
        let forward = UE.KismetMathLibrary.GetForwardVector(direction);
        this.PossessedPawn.FollowPlayer(forward);
    }
}
exports.default = AIMonsterMixin;
//# sourceMappingURL=AIMonsterMixin.js.map