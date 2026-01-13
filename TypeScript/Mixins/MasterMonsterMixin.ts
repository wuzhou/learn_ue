import * as UE from "ue";

interface MasterMonsterMixin extends UE.Game.Blueprint.Characters.BPC_MasterMonster.BPC_MasterMonster_C {};

class MasterMonsterMixin {
    FollowPlayer(WorldDirection: UE.Vector)
    {
        if (this.AC_Health && this.AC_Health.IsAlive)
        {
            this.AddMovementInput(WorldDirection, 1.0, false);
        }
    }

    BndEvt__BPC_MasterMonster_HitBox_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: UE.PrimitiveComponent, OtherActor: UE.Actor, OtherComp: UE.PrimitiveComponent, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: UE.HitResult)
    {
        // console.log("overlap other component ", OtherComp.GetName());
        // let Player = OtherActor as UE.Game.Blueprint.Characters.Hero.BPC_PlayerHero.BPC_PlayerHero_C;
        // if (Player && Player.DemageBox == OtherComp)
        // {
        //     UE.GameplayStatics.ApplyDamage(Player, 1.0, null, null, null);
        // }

        this.ASC.TryActivateAbilitiesByTag(UE.BlueprintGameplayTagLibrary.MakeGameplayTagContainerFromTag(new UE.GameplayTag("Character.Ability.HitCheck")))
    }

    ReceivePossessed(Controller: UE.Controller)
    {
        let hitCheckAbility = UE.Class.Load("/Game/Blueprint/GA/BPGA_HitCheckMonster.BPGA_HitCheckMonster_C");
        this.ASC.K2_GiveAbility(hitCheckAbility);
    }
}

export default MasterMonsterMixin;