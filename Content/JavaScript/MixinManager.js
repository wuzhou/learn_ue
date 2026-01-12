"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixinManager = void 0;
const UE = require("ue");
const puerts_1 = require("puerts");
const ACHealthMixin_1 = require("./Mixins/ACHealthMixin");
const MasterZDMixin_1 = require("./Mixins/MasterZDMixin");
const GameModeMixin_1 = require("./Mixins/GameModeMixin");
const AIMonsterMixin_1 = require("./Mixins/AIMonsterMixin");
const MasterMonsterMixin_1 = require("./Mixins/MasterMonsterMixin");
const PlayerHeroMixin_1 = require("./Mixins/PlayerHeroMixin");
const TAHitboxMixin_1 = require("./Mixins/TAHitboxMixin");
const GameWidgetMixin_1 = require("./Mixins/GameWidgetMixin");
class MixinManager {
    baseClassArray = UE.NewArray(UE.Class);
    constructor() {
    }
    MixinBeforeLevel(levelIndex) {
        console.log("MinxinBeforeLevel ", levelIndex);
        if (levelIndex == 0) {
            this.MixinBeforeLevel0();
        }
    }
    MixinBeforeLevel0() {
        let acHealthClass = UE.Class.Load("/Game/Blueprint/Components/AC_Health.AC_Health_C");
        this.baseClassArray.Add(acHealthClass);
        const acHealthBPJs = puerts_1.blueprint.tojs(acHealthClass);
        puerts_1.blueprint.mixin(acHealthBPJs, ACHealthMixin_1.default);
        let masterZDClass = UE.Class.Load("/Game/Blueprint/Characters/BP_MasterZD.BP_MasterZD_C");
        this.baseClassArray.Add(masterZDClass);
        const masterZDBPJs = puerts_1.blueprint.tojs(masterZDClass);
        puerts_1.blueprint.mixin(masterZDBPJs, MasterZDMixin_1.default);
        let modeBPClass = UE.Class.Load("/Game/Blueprint/BP_Cpp_ProjectGameMode.BP_Cpp_ProjectGameMode_C");
        this.baseClassArray.Add(modeBPClass);
        const modeBPJs = puerts_1.blueprint.tojs(modeBPClass);
        puerts_1.blueprint.mixin(modeBPJs, GameModeMixin_1.default);
        let aiMonsterClass = UE.Class.Load("/Game/Blueprint/AI/AI_Monster.AI_Monster_C");
        this.baseClassArray.Add(aiMonsterClass);
        const aiMonsterBPJs = puerts_1.blueprint.tojs(aiMonsterClass);
        puerts_1.blueprint.mixin(aiMonsterBPJs, AIMonsterMixin_1.default);
        let masterMonsterClass = UE.Class.Load("/Game/Blueprint/Characters/BPC_MasterMonster.BPC_MasterMonster_C");
        this.baseClassArray.Add(masterMonsterClass);
        const masterMonsterBPJs = puerts_1.blueprint.tojs(masterMonsterClass);
        puerts_1.blueprint.mixin(masterMonsterBPJs, MasterMonsterMixin_1.default);
        let playerHeroClass = UE.Class.Load("/Game/Blueprint/Characters/Hero/BPC_PlayerHero.BPC_PlayerHero_C");
        this.baseClassArray.Add(playerHeroClass);
        const playerHeroBPJs = puerts_1.blueprint.tojs(playerHeroClass);
        puerts_1.blueprint.mixin(playerHeroBPJs, PlayerHeroMixin_1.default);
        let taHitboxClass = UE.Class.Load("/Game/Blueprint/GA/TA_Hitbox.TA_Hitbox_C");
        this.baseClassArray.Add(taHitboxClass);
        const taHitboxBPJs = puerts_1.blueprint.tojs(taHitboxClass);
        puerts_1.blueprint.mixin(taHitboxBPJs, TAHitboxMixin_1.default);
        let gameWidgetClass = UE.Class.Load("/Game/Blueprint/UI/BP_GameWidget.BP_GameWidget_C");
        this.baseClassArray.Add(gameWidgetClass);
        const gameWidgetBPJs = puerts_1.blueprint.tojs(gameWidgetClass);
        puerts_1.blueprint.mixin(gameWidgetBPJs, GameWidgetMixin_1.default);
    }
}
exports.MixinManager = MixinManager;
//# sourceMappingURL=MixinManager.js.map