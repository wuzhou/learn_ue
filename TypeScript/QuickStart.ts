import * as UE from 'ue'
import { argv } from 'puerts';

import { Application } from './Application';


console.log("------------------------0----------------------------");
console.log("Hello World!!!!")

const app = Application.GetInstance();
let tsInstance = argv.getByName("GameInstance") as UE.TsGameInstance;
app.Init(tsInstance);

tsInstance.LoadUI.Bind((inUIName)=>{
    app.LoadUI(inUIName);
});

// let acHealthClass = UE.Class.Load("/Game/Blueprint/Components/AC_Health.AC_Health_C");
// const acHealthBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Components.AC_Health.AC_Health_C>(acHealthClass);

// blueprint.mixin(acHealthBPJs, ACHealthMixin);

// let masterZDClass = UE.Class.Load("/Game/Blueprint/Characters/BP_MasterZD.BP_MasterZD_C");
// const masterZDBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Characters.BP_MasterZD.BP_MasterZD_C>(masterZDClass);

// blueprint.mixin(masterZDBPJs, MasterZDMixin);

// let modeBPClass = UE.Class.Load("/Game/Blueprint/BP_Cpp_ProjectGameMode.BP_Cpp_ProjectGameMode_C");
// const modeBPJs = blueprint.tojs<typeof UE.Game.Blueprint.BP_Cpp_ProjectGameMode.BP_Cpp_ProjectGameMode_C>(modeBPClass);

// blueprint.mixin(modeBPJs, GameModeMixin);

// let aiMonsterClass = UE.Class.Load("/Game/Blueprint/AI/AI_Monster.AI_Monster_C");
// const aiMonsterBPJs = blueprint.tojs<typeof UE.Game.Blueprint.AI.AI_Monster.AI_Monster_C>(aiMonsterClass);

// blueprint.mixin(aiMonsterBPJs, AIMonsterMixin);

// let masterMonsterClass = UE.Class.Load("/Game/Blueprint/Characters/BPC_MasterMonster.BPC_MasterMonster_C");
// const masterMonsterBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Characters.BPC_MasterMonster.BPC_MasterMonster_C>(masterMonsterClass);

// blueprint.mixin(masterMonsterBPJs, MasterMonsterMixin);

// let playerHeroClass = UE.Class.Load("/Game/Blueprint/Characters/Hero/BPC_PlayerHero.BPC_PlayerHero_C");
// const playerHeroBPJs = blueprint.tojs<typeof UE.Game.Blueprint.Characters.Hero.BPC_PlayerHero.BPC_PlayerHero_C>(playerHeroClass);

// blueprint.mixin(playerHeroBPJs, PlayerHeroMixin);