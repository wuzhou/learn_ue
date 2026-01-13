"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
;
class MasterMonsterMixin {
    FollowPlayer(WorldDirection) {
        if (this.AC_Health && this.AC_Health.IsAlive) {
            this.AddMovementInput(WorldDirection, 1.0, false);
        }
    }
    BndEvt__BPC_MasterMonster_HitBox_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent, OtherActor, OtherComp, OtherBodyIndex, bFromSweep, SweepResult) {
        // console.log("overlap other component ", OtherComp.GetName());
        // let Player = OtherActor as UE.Game.Blueprint.Characters.Hero.BPC_PlayerHero.BPC_PlayerHero_C;
        // if (Player && Player.DemageBox == OtherComp)
        // {
        //     UE.GameplayStatics.ApplyDamage(Player, 1.0, null, null, null);
        // }
        this.ASC.TryActivateAbilitiesByTag(UE.BlueprintGameplayTagLibrary.MakeGameplayTagContainerFromTag(new UE.GameplayTag("Character.Ability.HitCheck")));
    }
    ReceivePossessed(Controller) {
        let hitCheckAbility = UE.Class.Load("/Game/Blueprint/GA/BPGA_HitCheckMonster.BPGA_HitCheckMonster_C");
        this.ASC.K2_GiveAbility(hitCheckAbility);
    }
}
exports.default = MasterMonsterMixin;
//# sourceMappingURL=MasterMonsterMixin.js.map