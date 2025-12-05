import * as UE from 'ue'
import { blueprint } from 'puerts';

import ACHealthMixin from './Mixins/ACHealthMixin';
import MasterZDMixin from './Mixins/MasterZDMixin';
import GameModeMixin from './Mixins/GameModeMixin';
import AIMonsterMixin from './Mixins/AIMonsterMixin';
import MasterMonsterMixin from './Mixins/MasterMonsterMixin';
import PlayerHeroMixin from './Mixins/PlayerHeroMixin';

class MixinManager {

    private baseClassArray = UE.NewArray(UE.Class);

    constructor() {
    }

    public MixinBeforeLevel(levelIndex : number) {
        console.log("MinxinBeforeLevel ", levelIndex);

        if (levelIndex == 0) {
            this.MixinBeforeLevel0();
        }
    }

    private MixinBeforeLevel0() {
        let acHealthClass = UE.Class.Load("/Game/Blueprint/Components/AC_Health.AC_Health_C");
        this.baseClassArray.Add(acHealthClass);
        const acHealthBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Components.AC_Health.AC_Health_C>(acHealthClass);
        blueprint.mixin(acHealthBPJs, ACHealthMixin);

        let masterZDClass = UE.Class.Load("/Game/Blueprint/Characters/BP_MasterZD.BP_MasterZD_C");
        this.baseClassArray.Add(masterZDClass);
        const masterZDBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Characters.BP_MasterZD.BP_MasterZD_C>(masterZDClass);
        blueprint.mixin(masterZDBPJs, MasterZDMixin);

        let modeBPClass = UE.Class.Load("/Game/Blueprint/BP_Cpp_ProjectGameMode.BP_Cpp_ProjectGameMode_C");
        this.baseClassArray.Add(modeBPClass);
        const modeBPJs = blueprint.tojs<typeof UE.Game.Blueprint.BP_Cpp_ProjectGameMode.BP_Cpp_ProjectGameMode_C>(modeBPClass);
        blueprint.mixin(modeBPJs, GameModeMixin);

        let aiMonsterClass = UE.Class.Load("/Game/Blueprint/AI/AI_Monster.AI_Monster_C");
        this.baseClassArray.Add(aiMonsterClass);
        const aiMonsterBPJs = blueprint.tojs<typeof UE.Game.Blueprint.AI.AI_Monster.AI_Monster_C>(aiMonsterClass);
        blueprint.mixin(aiMonsterBPJs, AIMonsterMixin);

        let masterMonsterClass = UE.Class.Load("/Game/Blueprint/Characters/BPC_MasterMonster.BPC_MasterMonster_C");
        this.baseClassArray.Add(masterMonsterClass);
        const masterMonsterBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Characters.BPC_MasterMonster.BPC_MasterMonster_C>(masterMonsterClass);
        blueprint.mixin(masterMonsterBPJs, MasterMonsterMixin);

        let playerHeroClass = UE.Class.Load("/Game/Blueprint/Characters/Hero/BPC_PlayerHero.BPC_PlayerHero_C");
        this.baseClassArray.Add(playerHeroClass);
        const playerHeroBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Characters.Hero.BPC_PlayerHero.BPC_PlayerHero_C>(playerHeroClass);
        blueprint.mixin(playerHeroBPJs, PlayerHeroMixin);
    }
}

export { MixinManager };