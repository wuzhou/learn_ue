import * as UE from "ue"
import { $ref, $unref } from "puerts";

interface TAHitboxMixin extends UE.Game.Blueprint.GA.TA_Hitbox.TA_Hitbox_C {};

class TAHitboxMixin {
    GetHitboxOverlapActors(InSourceActor: UE.Actor) : UE.TArray<UE.Actor> {
        console.log("GetHitboxOverlapActors");
        let player = InSourceActor as UE.Game.Blueprint.Characters.Hero.BPC_PlayerHero.BPC_PlayerHero_C;
        if (player && player.HitBox) {
            let actorsRef = $ref(UE.NewArray(UE.Actor));
            //let masterMonsterClass = UE.Class.Load("/Game/Blueprint/Characters/Monster/BPC_MasterMonster.BPC_MasterMonster_C");
            player.HitBox.GetOverlappingActors(actorsRef);
            let actors = $unref(actorsRef);
            console.log("actors.length", actors.Num());
            return actors;
        }

        return UE.NewArray(UE.Actor);
    }
}

export default TAHitboxMixin;