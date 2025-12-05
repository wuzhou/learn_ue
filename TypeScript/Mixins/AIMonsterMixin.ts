import * as UE from "ue";

interface AIMonsterMixin extends UE.Game.Blueprint.AI.AI_Monster.AI_Monster_C {};

class AIMonsterMixin {

    ReceiveBeginPlay() {
        this.Player = UE.GameplayStatics.GetPlayerPawn(this.GetWorld(), 0);
        console.log("Mixined AIMonsterMixin ReceiveBeginPlay");
    }

    ReceivePossess(Pawn: UE.Pawn) {
      this.PossessedPawn = Pawn as UE.Game.Blueprint.Characters.BPC_MasterMonster.BPC_MasterMonster_C;
      console.log("Mixined AIMonsterMixin ReceivePossess");
    }

    ReceiveTick(DeltaSeconds: number) {
        let targetLocation = this.Player.K2_GetActorLocation();
        let selfLocation = this.PossessedPawn.K2_GetActorLocation();
        let direction = UE.KismetMathLibrary.FindLookAtRotation(selfLocation, targetLocation);
        let forward = UE.KismetMathLibrary.GetForwardVector(direction);
        this.PossessedPawn.FollowPlayer(forward);
    }
}

export default AIMonsterMixin;