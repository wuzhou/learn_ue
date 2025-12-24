"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
;
class TAHitboxMixin {
    GetHitboxOverlapActors(InSourceActor) {
        console.log("GetHitboxOverlapActors");
        let player = InSourceActor;
        if (player && player.HitBox) {
            let actorsRef = (0, puerts_1.$ref)(UE.NewArray(UE.Actor));
            let masterMonsterClass = UE.Class.Load("/Game/Blueprint/Characters/Monster/BPC_MasterMonster.BPC_MasterMonster_C");
            player.HitBox.GetOverlappingActors(actorsRef, masterMonsterClass);
            let actors = (0, puerts_1.$unref)(actorsRef);
            console.log("actors.length", actors.Num());
            return actors;
        }
        return UE.NewArray(UE.Actor);
    }
}
exports.default = TAHitboxMixin;
//# sourceMappingURL=TAHitboxMixin.js.map