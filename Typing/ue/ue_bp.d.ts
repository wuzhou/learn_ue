/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 184D25724AFED0B5055CFA97CAEA11E0
    namespace Engine.EngineDamageTypes.DmgTypeBP_Environmental {
        class DmgTypeBP_Environmental_C extends UE.DamageType {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DmgTypeBP_Environmental_C;
            static Load(InName: string): DmgTypeBP_Environmental_C;
        
            __tid_DmgTypeBP_Environmental_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 211F243F44C9706398935698783676E5
    namespace Game.ThirdPerson.Blueprints.BP_ThirdPersonCharacter {
        class BP_ThirdPersonCharacter_C extends UE.Cpp_ProjectCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_ThirdPersonCharacter_C;
            static Load(InName: string): BP_ThirdPersonCharacter_C;
        
            __tid_BP_ThirdPersonCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8857914A447B15D9E4D6258AD257E24F
    namespace Niagara.Enums.ENiagaraRandomnessMode {
        enum ENiagaraRandomnessMode { "Simulation Defaults", Determinisitic, "Non-Deterministic", ENiagaraRandomnessMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number);
            __FloatProperty: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class ABP_Manny_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_ApplyAdditive: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_Slot: UE.AnimNode_Slot;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            __CustomProperty_ShouldDoIKTrace_385011E94C94F6DE70691192D3E0622C: boolean;
            Character: UE.Character;
            MovementComponent: UE.CharacterMovementComponent;
            Velocity: UE.Vector;
            GroundSpeed: number;
            ShouldMove: boolean;
            IsFalling: boolean;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is initialized
             */
            BlueprintInitializeAnimation() : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Manny_AnimGraphNode_TransitionResult_305F37BB4A5AD886760B8E99A5C561E1() : void;
            ExecuteUbergraph_ABP_Manny(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_C;
            static Load(InName: string): ABP_Manny_C;
        
            __tid_ABP_Manny_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_131: string, __NameProperty_132: string, __NameProperty_133: string, __NameProperty_134: string, __IntProperty_135: number, __FloatProperty_136: number, __NameProperty_137: string, __IntProperty_138: number, __BoolProperty_139: boolean, __FloatProperty_140: number, __StructProperty_141: UE.InputScaleBiasClampConstants, __FloatProperty_142: number, __BoolProperty_143: boolean, __EnumProperty_144: UE.EAnimSyncMethod, __ByteProperty_145: UE.EAnimGroupRole, __NameProperty_146: string, __IntProperty_147: number, __NameProperty_148: string, __NameProperty_149: string, __IntProperty_150: number, __StructProperty_151: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_131: string;
            __NameProperty_132: string;
            __NameProperty_133: string;
            __NameProperty_134: string;
            __IntProperty_135: number;
            __FloatProperty_136: number;
            __NameProperty_137: string;
            __IntProperty_138: number;
            __BoolProperty_139: boolean;
            __FloatProperty_140: number;
            __StructProperty_141: UE.InputScaleBiasClampConstants;
            __FloatProperty_142: number;
            __BoolProperty_143: boolean;
            __EnumProperty_144: UE.EAnimSyncMethod;
            __ByteProperty_145: UE.EAnimGroupRole;
            __NameProperty_146: string;
            __IntProperty_147: number;
            __NameProperty_148: string;
            __NameProperty_149: string;
            __IntProperty_150: number;
            __StructProperty_151: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class ABP_Quinn_C extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.ABP_Manny_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_ABP_Quinn(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_C;
            static Load(InName: string): ABP_Quinn_C;
        
            __tid_ABP_Quinn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class CR_Mannequin_BasicFootIK_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ZOffset_L_Target: number;
            ZOffset_R_Target: number;
            ZOffset_L: number;
            ZOffset_R: number;
            ZOffset_Pelvis: number;
            ShouldDoIKTrace: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_BasicFootIK_C;
            static Load(InName: string): CR_Mannequin_BasicFootIK_C;
        
            __tid_CR_Mannequin_BasicFootIK_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___FootTrace_Ik_Foot_Bone__Const: UE.RigElementKey;
            LocalVariableDefault__FootTrace_AnimatedFloorLocation__Const: UE.Vector;
            FootTrace___FootTrace_MathVectorAdd_A__Const: UE.Vector;
            FootTrace___FootTrace_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            FootTrace___FootTrace_GetTransform_bInitial__Const: boolean;
            FootTrace___FootTrace_MathFloatAdd_B__Const: number;
            FootTrace___FootTrace_GetTransform_1_Item__Const: UE.RigElementKey;
            FootTrace___FootTrace_MathVectorAdd_B__Const: UE.Vector;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: UE.LinearColor;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
            FootTrace___FootTrace_MathVectorSub_B__Const: UE.Vector;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace___FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace___FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___FootTrace_1_Ik_Foot_Bone__Const: UE.RigElementKey;
            FootTrace_1___FootTrace_MathVectorAdd_A__Const: UE.Vector;
            FootTrace_1___FootTrace_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            FootTrace_1___FootTrace_GetTransform_bInitial__Const: boolean;
            FootTrace_1___FootTrace_MathFloatAdd_B__Const: number;
            FootTrace_1___FootTrace_GetTransform_1_Item__Const: UE.RigElementKey;
            FootTrace_1___FootTrace_MathVectorAdd_B__Const: UE.Vector;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: UE.LinearColor;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
            FootTrace_1___FootTrace_MathVectorSub_B__Const: UE.Vector;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___VariableNode_9_Value__Const: number;
            RigVMModel___AlphaInterp_Scale__Const: number;
            RigVMModel___AlphaInterp_Bias__Const: number;
            RigVMModel___AlphaInterp_bMapRange__Const: boolean;
            RigVMModel___AlphaInterp_InRange__Const: UE.InputRange;
            RigVMModel___AlphaInterp_bInterpResult__Const: boolean;
            RigVMModel___AlphaInterp_InterpSpeedIncreasing__Const: number;
            RigVMModel___ModifyTransforms_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_Mode__Const: UE.EControlRigModifyBoneMode;
            RigVMModel___ModifyTransforms_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___PBIK_Root__Const: string;
            RigVMModel___PBIK_Effectors__Const: TArray<UE.PBIKEffector>;
            RigVMModel___GetTransform_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___PBIK_BoneSettings__Const: TArray<UE.PBIKBoneSetting>;
            RigVMModel___PBIK_ExcludedBones__Const: TArray<string>;
            RigVMModel___PBIK_Settings__Const: UE.PBIKSolverSettings;
            RigVMModel___PBIK_Debug__Const: UE.PBIKDebug;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___FootTrace_Offset: UE.Vector;
            FootTrace___FootTrace_Entry_Ik_Foot_Bone: UE.RigElementKey;
            FootTrace___FootTrace_Return_Offset: UE.Vector;
            FootTrace___FootTrace_MathVectorAdd_Result: UE.Vector;
            FootTrace___FootTrace_GetTransform_Transform: UE.Transform;
            FootTrace___FootTrace_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace___FootTrace_MathFloatAdd_Result: number;
            FootTrace___FootTrace_MathFloatAdd_A: number;
            FootTrace___FootTrace_GetTransform_1_Transform: UE.Transform;
            FootTrace___FootTrace_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace___FootTrace_MathVectorAdd_A__IO: UE.Vector;
            FootTrace___FootTrace_MathVectorSub_Result: UE.Vector;
            FootTrace___FootTrace_MathVectorSub_A__IO: UE.Vector;
            FootTrace___FootTrace_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace___FootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            RigVMModel___FootTrace_1_Offset: UE.Vector;
            FootTrace_1___FootTrace_Entry_Ik_Foot_Bone: UE.RigElementKey;
            FootTrace_1___FootTrace_Return_Offset: UE.Vector;
            FootTrace_1___FootTrace_MathVectorAdd_Result: UE.Vector;
            FootTrace_1___FootTrace_GetTransform_Transform: UE.Transform;
            FootTrace_1___FootTrace_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1___FootTrace_MathFloatAdd_Result: number;
            FootTrace_1___FootTrace_MathFloatAdd_A: number;
            FootTrace_1___FootTrace_GetTransform_1_Transform: UE.Transform;
            FootTrace_1___FootTrace_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1___FootTrace_MathVectorAdd_A__IO: UE.Vector;
            FootTrace_1___FootTrace_MathVectorSub_Result: UE.Vector;
            FootTrace_1___FootTrace_MathVectorSub_A__IO: UE.Vector;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            RigVMModel___Branch_BlockToRun: string;
            RigVMModel___AlphaInterp_Result: number;
            RigVMModel___AlphaInterp_Value: number;
            RigVMModel___AlphaInterp_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___AlphaInterp_1_Result: number;
            RigVMModel___AlphaInterp_1_Value: number;
            RigVMModel___AlphaInterp_1_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___If_Result: number;
            RigVMModel___MathFloatLess_Result: boolean;
            RigVMModel___MathFloatLess_A: number;
            RigVMModel___MathFloatLess_B: number;
            RigVMModel___ModifyTransforms_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___ModifyTransforms_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___ModifyTransforms_1_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___PBIK_Effectors__IO: TArray<UE.PBIKEffector>;
            RigVMModel___PBIK_EffectorSolverIndices: TArray<TArray<number>>;
            RigVMModel___PBIK_BoneSettingToSolverBoneIndex: TArray<TArray<number>>;
            RigVMModel___PBIK_SolverBoneToElementIndex: TArray<TArray<number>>;
            RigVMModel___PBIK_Solver: TArray<UE.PBIKSolver>;
            RigVMModel___PBIK_bNeedsInit: TArray<boolean>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 94E6666941A4BFBB2F9A37A5029918C9
    namespace ChaosNiagara.ChaosDestructionListenerActor {
        class ChaosDestructionListenerActor_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ChaosDestructionListener: UE.ChaosDestructionListener;
            DefaultSceneRoot: UE.SceneComponent;
            BndEvt__ChaosDestructionListener_K2Node_ComponentBoundEvent_0_OnChaosCollisionEvents__DelegateSignature(CollisionEvents: TArray<UE.ChaosCollisionEventData>) : void;
            BndEvt__ChaosDestructionListener_K2Node_ComponentBoundEvent_1_OnChaosBreakingEvents__DelegateSignature(BreakingEvents: TArray<UE.ChaosBreakingEventData>) : void;
            BndEvt__ChaosDestructionListener_K2Node_ComponentBoundEvent_2_OnChaosTrailingEvents__DelegateSignature(TrailingEvents: TArray<UE.ChaosTrailingEventData>) : void;
            ExecuteUbergraph_ChaosDestructionListenerActor(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ChaosDestructionListenerActor_C;
            static Load(InName: string): ChaosDestructionListenerActor_C;
        
            __tid_ChaosDestructionListenerActor_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8EF62DCF4D3CF245D7B05BB356A467FF
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Body {
        class CR_Mannequin_Body_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["L Arm IK Mode"]: boolean;
            ["R Arm IK Mode"]: boolean;
            ["L Leg IK Mode "]: boolean;
            ["R Leg IK Mode"]: boolean;
            ["Spine IK Mode"]: boolean;
            ["Neck IK Mode"]: boolean;
            ["Spine Offsets"]: TArray<UE.Transform>;
            ["Spine Length"]: number;
            ["Neck Length"]: number;
            ["L Arm IK Align"]: boolean;
            ["R Arm IK Align"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Body_C;
            static Load(InName: string): CR_Mannequin_Body_C;
        
            __tid_CR_Mannequin_Body_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8EF62DCF4D3CF245D7B05BB356A467FF
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Body {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetTransform_8_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_8_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetTransform_8_bInitial__Const: boolean;
            RigVMModel___GetTransform_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_8_Weight__Const: number;
            RigVMModel___SetTransform_8_bPropagateToChildren__Const: boolean;
            RigVMModel___Forward_Spine_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Spine_IK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Spine_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Spine_Pelvis_Bone__Const: UE.RigElementKey;
            RigVMModel___Forward_Spine_Chest_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Spine_IKFK_Switch_Control__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetBoolAnimationChannel_8_Control__Const: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_8_Channel__Const: string;
            LocalVariableDefault__Forward_Spine_IK_Mode__Const: boolean;
            Forward_Spine___Forward_Spine_GetTransform_3_Space__Const: UE.ERigVMTransformSpace;
            Forward_Spine___Forward_Spine_GetTransform_3_bInitial__Const: boolean;
            Forward_Spine___Forward_Spine_MathFloatGreater_3_B__Const: number;
            Forward_Spine___Forward_Spine_ArrayRemove_Index__Const: number;
            Forward_Spine___Forward_Spine_Set_IKFK_Visibility_Show_Controls__Const: boolean;
            Set_IKFK_Visibility___Set_IKFK_Visibility_SetControlVisibility_2_Pattern__Const: string;
            Set_IKFK_Visibility___Set_IKFK_Visibility_If_1_False__Const: boolean;
            Set_IKFK_Visibility___Set_IKFK_Visibility_SetControlVisibility_2_1_Pattern__Const: string;
            Forward_Spine___Forward_Spine_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Forward_Spine___Forward_Spine_SetTransform_Weight__Const: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Is_First_or_Last_MathIntSub_B__Const: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ControlRigSplineFromPoints_Points__Const: TArray<UE.Vector>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ArrayGetAtIndex_3_Index__Const: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ArrayGetAtIndex_4_Index__Const: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ControlRigSplineFromPoints_SplineMode__Const: UE.ESplineType;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ControlRigSplineFromPoints_SamplesPerSegment__Const: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ControlRigSplineFromPoints_Compression__Const: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_MathQuaternionRotateVector_Vector__Const: UE.Vector;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_If_True__Const: UE.Transform;
            Project_to_New_Parent___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Space__Const: UE.ERigVMTransformSpace;
            Project_to_New_Parent___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_bInitial__Const: boolean;
            Project_to_New_Parent___Project_to_New_Parents_ProjectTransformToNewParent_12_1_bChildInitial__Const: boolean;
            Project_to_New_Parent___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Weight__Const: number;
            Forward_Spine___Forward_Spine_FK_Point_At_1_Point_At_Axis__Const: UE.Vector;
            Forward_Spine___Forward_Spine_FK_Point_At_1_Up_Vector_Axis__Const: UE.Vector;
            FK_Point_At_1___FK_Point_At_MathIntSub_B__Const: number;
            FK_Point_At_1___FK_Point_At_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            FK_Point_At_1___FK_Point_At_SetTransform_2_bInitial__Const: boolean;
            FK_Point_At_1___FK_Point_At_MathTransformMul_A__Const: UE.Transform;
            FK_Point_At_1___FK_Point_At_AimBoneMath_Primary__Const: UE.RigUnit_AimItem_Target;
            FK_Point_At_1___FK_Point_At_AimBoneMath_Secondary__Const: UE.RigUnit_AimItem_Target;
            FK_Point_At_1___FK_Point_At_AimBoneMath_Weight__Const: number;
            FK_Point_At_1___FK_Point_At_AimBoneMath_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            FK_Point_At_1___FK_Point_At_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            FK_Point_At_1___FK_Point_At_SetTransform_2_bPropagateToChildren__Const: boolean;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_GetTransformItemArray_Space__Const: UE.ERigVMTransformSpace;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_GetTransformItemArray_bInitial__Const: boolean;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_Index__Const: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_1_Index__Const: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_2_Index__Const: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_3_Index__Const: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Weight_1__Const: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Weight_2__Const: number;
            LocalVariableDefault__BSpline_Passing_thru_4_Points_Outputs__Const: TArray<UE.Vector>;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ArraySetNum_Num__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ArraySetAtIndex_Index__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ArraySetAtIndex_1_Index__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b0t1_MathFloatSub_A__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b0t1_MathFloatPow_B__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ArraySetAtIndex_2_Index__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ArraySetAtIndex_3_Index__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ControlRigSplineFromPoints_Points__Const: TArray<UE.Vector>;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ControlRigSplineFromPoints_SplineMode__Const: UE.ESplineType;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ControlRigSplineFromPoints_bClosed__Const: boolean;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ControlRigSplineFromPoints_SamplesPerSegment__Const: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ControlRigSplineFromPoints_Compression__Const: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_MathTransformMakeAbsolute_Local__Const: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ProjectTransformToNewParent_1_bChildInitial__Const: boolean;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_SetTransform_3_1_Weight__Const: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_SendEvent_1_Event__Const: UE.ERigEvent;
            Set_IKFK_Keys_1___Set_IKFK_Keys_SendEvent_1_OffsetInSeconds__Const: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_SendEvent_1_bEnable__Const: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_11_Control__Const: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_11_Channel__Const: string;
            RigVMModel___Forward_Neck_1_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Neck_1_IK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Neck_1_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Neck_1_Head_Orient_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Neck_1_IKFK_Switch_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Neck_1_Mid_IK_Null__Const: UE.RigElementKey;
            RigVMModel___Forward_Neck_1_Head_FK_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Neck_1_Head_IK_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Neck_1_Head_Orient_Reference__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetBoolAnimationChannel_9_Control__Const: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_9_Channel__Const: string;
            LocalVariableDefault__Forward_Neck_Local_Space__Const: boolean;
            LocalVariableDefault__Forward_Neck_Positions__Const: TArray<UE.Vector>;
            LocalVariableDefault__Forward_Neck_IK_Mode__Const: boolean;
            Forward_Neck_1___Forward_Neck_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Neck_1___Forward_Neck_GetTransform_1_1_bInitial__Const: boolean;
            Forward_Neck_1___Forward_Neck_MathFloatGreater_1_1_B__Const: number;
            Forward_Neck_1___Forward_Neck_Set_IKFK_Visibility_IK_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Neck_1___Forward_Neck_Set_IKFK_Visibility_Show_Controls__Const: boolean;
            Forward_Neck_1___Forward_Neck_ArrayGetAtIndex_1_Index__Const: number;
            Forward_Neck_1___Forward_Neck_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Forward_Neck_1___Forward_Neck_SetTransform_Value__Const: UE.Transform;
            Forward_Neck_1___Forward_Neck_SetTransform_Weight__Const: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ControlRigSplineFromPoints_Points__Const: TArray<UE.Vector>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayGetAtIndex_Index__Const: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ControlRigSplineFromPoints_SplineMode__Const: UE.ESplineType;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ControlRigSplineFromPoints_SamplesPerSegment__Const: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ControlRigSplineFromPoints_Compression__Const: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_Primary__Const: UE.RigUnit_AimItem_Target;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_Secondary__Const: UE.RigUnit_AimItem_Target;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_MathQuaternionRotateVector_1_Vector__Const: UE.Vector;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            Project_to_New_Parents___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Space__Const: UE.ERigVMTransformSpace;
            Project_to_New_Parents___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_bInitial__Const: boolean;
            Project_to_New_Parents___Project_to_New_Parents_ProjectTransformToNewParent_12_1_bChildInitial__Const: boolean;
            Project_to_New_Parents___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Weight__Const: number;
            Project_to_New_Parents_2___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Space__Const: UE.ERigVMTransformSpace;
            Project_to_New_Parents_2___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_bInitial__Const: boolean;
            Project_to_New_Parents_2___Project_to_New_Parents_ProjectTransformToNewParent_12_1_bChildInitial__Const: boolean;
            Project_to_New_Parents_2___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Weight__Const: number;
            Set_IKFK_Keys___Set_IKFK_Keys_SendEvent_1_Event__Const: UE.ERigEvent;
            Set_IKFK_Keys___Set_IKFK_Keys_SendEvent_1_OffsetInSeconds__Const: number;
            Set_IKFK_Keys___Set_IKFK_Keys_SendEvent_1_bEnable__Const: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_10_Channel__Const: string;
            RigVMModel___Forward_Clavicle_1_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Clavicle_1_Bone__Const: UE.RigElementKey;
            Forward_Clavicle_1___Forward_Clavicle_SetTransform_9_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Clavicle_1___Forward_Clavicle_SetTransform_9_1_1_bInitial__Const: boolean;
            Forward_Clavicle_1___Forward_Clavicle_ProjectTransformToNewParent_2_2_bChildInitial__Const: boolean;
            Forward_Clavicle_1___Forward_Clavicle_SetTransform_9_1_1_Weight__Const: number;
            RigVMModel___Forward_Clavicle_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Clavicle_Bone__Const: UE.RigElementKey;
            Forward_Clavicle___Forward_Clavicle_SetTransform_9_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Clavicle___Forward_Clavicle_SetTransform_9_1_1_bInitial__Const: boolean;
            Forward_Clavicle___Forward_Clavicle_ProjectTransformToNewParent_2_2_bChildInitial__Const: boolean;
            Forward_Clavicle___Forward_Clavicle_SetTransform_9_1_1_Weight__Const: number;
            RigVMModel___Forward_Arm_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Arm_IK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_Pole_Vector_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_IKFK_Switch_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_FK_Orient_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_Arm_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_FK_Orient_References__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Arm_Finger_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_1_Control__Const: string;
            RigVMModel___RigUnit_GetFloatAnimationChannel_1_Channel__Const: string;
            RigVMModel___Forward_Arm_IK_Orient_Null__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_IK_Orient_Control__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetBoolAnimationChannel_3_Channel__Const: string;
            LocalVariableDefault__Forward_Arm_IK_Mode__Const: boolean;
            Forward_Arm___Forward_Arm_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Arm___Forward_Arm_GetTransform_1_1_bInitial__Const: boolean;
            Forward_Arm___Forward_Arm_MathFloatGreater_1_B__Const: number;
            Forward_Arm___Forward_Arm_Set_IKFK_Visibility_IK_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Arm___Forward_Arm_Set_IKFK_Visibility_Show_Controls__Const: boolean;
            Forward_Arm___Forward_Arm_SetControlVisibility_1_Pattern__Const: string;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_7_Index__Const: number;
            Forward_Arm___Forward_Arm_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Forward_Arm___Forward_Arm_SetTransform_Value__Const: UE.Transform;
            Forward_Arm___Forward_Arm_MathFloatGreater_2_B__Const: number;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_8_Index__Const: number;
            Forward_Arm___Forward_Arm_SetTransform_Weight__Const: number;
            Forward_Arm___Forward_Arm_SendEvent_Event__Const: UE.ERigEvent;
            Forward_Arm___Forward_Arm_IK_2_Bones_Primary_Axis__Const: UE.Vector;
            Forward_Arm___Forward_Arm_IK_2_Bones_Secondary_Axis__Const: UE.Vector;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_4_Index__Const: number;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_4_Space__Const: UE.ERigVMTransformSpace;
            IK_2_Bones___IK_2_Bones_ProjectTransformToNewParent_11_bChildInitial__Const: boolean;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_4_1_Index__Const: number;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_4_2_Index__Const: number;
            IK_2_Bones___IK_2_Bones_ProjectTransformToNewParent_11_bNewParentInitial__Const: boolean;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_SecondaryAxisWeight__Const: number;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_PoleVector__Const: UE.Vector;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_PoleVectorKind__Const: UE.EControlRigVectorKind;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_StretchMaximumRatio__Const: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatGreater_B__Const: number;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_3_Space__Const: UE.ERigVMTransformSpace;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatMul_5_B__Const: number;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_DebugSettings__Const: UE.RigUnit_TwoBoneIKSimple_DebugSettings;
            IK_2_Bones___IK_2_Bones_DebugLineItemSpace_1_1_Color__Const: UE.LinearColor;
            IK_2_Bones___IK_2_Bones_DebugLineItemSpace_1_1_Thickness__Const: number;
            IK_2_Bones___IK_2_Bones_DebugLineItemSpace_1_1_WorldOffset__Const: UE.Transform;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_1_1_Index__Const: number;
            Forward_Arm___Forward_Arm_FK_Point_At_Up_Vector_Axis__Const: UE.Vector;
            FK_Point_At___FK_Point_At_MathIntSub_B__Const: number;
            FK_Point_At___FK_Point_At_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            FK_Point_At___FK_Point_At_SetTransform_2_bInitial__Const: boolean;
            FK_Point_At___FK_Point_At_MathTransformMul_A__Const: UE.Transform;
            FK_Point_At___FK_Point_At_AimBoneMath_Primary__Const: UE.RigUnit_AimItem_Target;
            FK_Point_At___FK_Point_At_AimBoneMath_Secondary__Const: UE.RigUnit_AimItem_Target;
            FK_Point_At___FK_Point_At_AimBoneMath_Weight__Const: number;
            FK_Point_At___FK_Point_At_AimBoneMath_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            FK_Point_At___FK_Point_At_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            FK_Point_At___FK_Point_At_SetTransform_2_bPropagateToChildren__Const: boolean;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_SetTransform_4_Space__Const: UE.ERigVMTransformSpace;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_SetTransform_4_bInitial__Const: boolean;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_bChildInitial__Const: boolean;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ArrayGetAtIndex_1_Index__Const: number;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_SetTransform_4_Weight__Const: number;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ArrayGetAtIndex_2_Index__Const: number;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_9_Index__Const: number;
            Get_Negative_Transform___Get_Negative_Transform_Return_Output__Const: UE.Transform;
            Get_Negative_Transform___Get_Negative_Transform_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            Get_Negative_Transform___Get_Negative_Transform_MathFloatAdd_B__Const: number;
            RigVMModel___RigUnit_GetBoolAnimationChannel_12_Channel__Const: string;
            RigVMModel___Forward_Arm_1_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Arm_1_IK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_1_Pole_Vector_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_1_IKFK_Switch_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_1_FK_Orient_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_1_Arm_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_1_FK_Orient_References__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Arm_1_Finger_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_1_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_Control__Const: string;
            RigVMModel___Forward_Arm_1_IK_Orient_Null__Const: UE.RigElementKey;
            RigVMModel___Forward_Arm_1_IK_Orient_Control__Const: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Arm_1___Forward_Arm_GetTransform_1_1_bInitial__Const: boolean;
            Forward_Arm_1___Forward_Arm_MathFloatGreater_1_B__Const: number;
            Forward_Arm_1___Forward_Arm_Set_IKFK_Visibility_IK_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Arm_1___Forward_Arm_Set_IKFK_Visibility_Show_Controls__Const: boolean;
            Forward_Arm_1___Forward_Arm_SetControlVisibility_1_Pattern__Const: string;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_7_Index__Const: number;
            Forward_Arm_1___Forward_Arm_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Forward_Arm_1___Forward_Arm_SetTransform_Value__Const: UE.Transform;
            Forward_Arm_1___Forward_Arm_MathFloatGreater_2_B__Const: number;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_8_Index__Const: number;
            Forward_Arm_1___Forward_Arm_SetTransform_Weight__Const: number;
            Forward_Arm_1___Forward_Arm_SendEvent_Event__Const: UE.ERigEvent;
            Forward_Arm_1___Forward_Arm_IK_2_Bones_Primary_Axis__Const: UE.Vector;
            Forward_Arm_1___Forward_Arm_IK_2_Bones_Secondary_Axis__Const: UE.Vector;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_1_1_Index__Const: number;
            Forward_Arm_1___Forward_Arm_FK_Point_At_Up_Vector_Axis__Const: UE.Vector;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_9_Index__Const: number;
            RigVMModel___RigUnit_GetBoolAnimationChannel_13_Channel__Const: string;
            RigVMModel___Forward_Fingers_4_Fingers_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Fingers_4_Metacarpals_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_2_Control__Const: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_2_Channel__Const: string;
            RigVMModel___Forward_Fingers_4_Base_Fingers_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_6_Control__Const: string;
            RigVMModel___Forward_Fingers_4_Proxy_Controls__Const: TArray<UE.RigElementKey>;
            LocalVariableDefault__Forward_Fingers_Loop_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Fingers_4___Forward_Fingers_SendEvent_Event__Const: UE.ERigEvent;
            Forward_Fingers_4___Forward_Fingers_SendEvent_Item__Const: UE.RigElementKey;
            Forward_Fingers_4___Forward_Fingers_SendEvent_OffsetInSeconds__Const: number;
            Forward_Fingers_4___Forward_Fingers_SendEvent_bEnable__Const: boolean;
            LocalVariableDefault__Interpolate_Interacting_Controls_Interacting_Item__Const: UE.RigElementKey;
            LocalVariableDefault__Interpolate_Interacting_Controls_Loop_Controls__Const: TArray<UE.RigElementKey>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Greater_B__Const: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayGetAtIndex_1_Index__Const: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Subtract_1_B__Const: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Interpolate_1_A__Const: UE.Transform;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_bInitial__Const: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Name__Const: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Subtract_2_A__Const: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_OffsetTransformForItem_1_Weight__Const: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_OffsetTransformForItem_1_bPropagateToChildren__Const: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_SendEvent_Event__Const: UE.ERigEvent;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_SendEvent_OffsetInSeconds__Const: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Greater_B__Const: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayGetAtIndex_1_Index__Const: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Subtract_1_B__Const: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Interpolate_1_A__Const: UE.Transform;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_bInitial__Const: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Name__Const: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Subtract_2_A__Const: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_OffsetTransformForItem_1_Weight__Const: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_OffsetTransformForItem_1_bPropagateToChildren__Const: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_SendEvent_Event__Const: UE.ERigEvent;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_SendEvent_OffsetInSeconds__Const: number;
            LocalVariableDefault__Find_Finger_Controls_Matching_Items__Const: TArray<UE.RigElementKey>;
            Find_Finger_Controls___Find_Finger_Controls_Contains_Search__Const: string;
            Find_Finger_Controls___Find_Finger_Controls_Contains_1_Search__Const: string;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_Count__Const: number;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_FromEnd__Const: boolean;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_1_Count__Const: number;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_1_FromEnd__Const: boolean;
            Find_Finger_Controls___Find_Finger_Controls_CollectionNameSearchArray_1_1_TypeToSearch__Const: UE.ERigElementType;
            Forward_Fingers_4___Forward_Fingers_RigUnit_GetTransform_3_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers_4___Forward_Fingers_RigUnit_GetTransform_3_bInitial__Const: boolean;
            Forward_Fingers_4___Forward_Fingers_OffsetTransformForItem_Weight__Const: number;
            Forward_Fingers_4___Forward_Fingers_SendEvent_2_Event__Const: UE.ERigEvent;
            Forward_Fingers_4___Forward_Fingers_RigUnit_SetTransform_1_Value__Const: UE.Transform;
            Forward_Fingers_4___Forward_Fingers_SetTransform_6_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers_4___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__Const: UE.RigElementKey;
            Forward_Fingers_4___Forward_Fingers_NameConcat_4_2_B__Const: string;
            Forward_Fingers_4___Forward_Fingers_SendEvent_1_Event__Const: UE.ERigEvent;
            RigVMModel___Forward_Fingers_Fingers_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Fingers_Metacarpals_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_5_Control__Const: string;
            RigVMModel___Forward_Fingers_Base_Fingers_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_7_Control__Const: string;
            RigVMModel___Forward_Fingers_Proxy_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Fingers___Forward_Fingers_SendEvent_Event__Const: UE.ERigEvent;
            Forward_Fingers___Forward_Fingers_SendEvent_Item__Const: UE.RigElementKey;
            Forward_Fingers___Forward_Fingers_SendEvent_OffsetInSeconds__Const: number;
            Forward_Fingers___Forward_Fingers_SendEvent_bEnable__Const: boolean;
            Forward_Fingers___Forward_Fingers_RigUnit_GetTransform_3_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers___Forward_Fingers_RigUnit_GetTransform_3_bInitial__Const: boolean;
            Forward_Fingers___Forward_Fingers_OffsetTransformForItem_Weight__Const: number;
            Forward_Fingers___Forward_Fingers_SendEvent_2_Event__Const: UE.ERigEvent;
            Forward_Fingers___Forward_Fingers_RigUnit_SetTransform_1_Value__Const: UE.Transform;
            Forward_Fingers___Forward_Fingers_SetTransform_6_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__Const: UE.RigElementKey;
            Forward_Fingers___Forward_Fingers_NameConcat_4_2_B__Const: string;
            Forward_Fingers___Forward_Fingers_SendEvent_1_Event__Const: UE.ERigEvent;
            RigVMModel___ProjectTransformToNewParent_24_OldParent__Const: UE.RigElementKey;
            RigVMModel___ArrayIterator_Array__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Reverse_Foot_BK_Buffers__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Reverse_Foot_BK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Reverse_Foot_Roll_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Reverse_Foot_Roll_Buffer__Const: UE.RigElementKey;
            RigVMModel___Forward_Reverse_Foot_IKFK_Switch_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Reverse_Foot_Roll_Clamp__Const: number;
            RigVMModel___RigUnit_GetControlFloat_Control__Const: string;
            LocalVariableDefault__Forward_Reverse_Foot_IK_Mode__Const: boolean;
            Forward_Reverse_Foot___Forward_Reverse_Foot_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            Forward_Reverse_Foot___Forward_Reverse_Foot_GetTransform_bInitial__Const: boolean;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatGreater_B__Const: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_SetControlVisibility_Pattern__Const: string;
            Forward_Reverse_Foot___Forward_Reverse_Foot_SetControlVisibility_1_Pattern__Const: string;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayGetAtIndex_2_Index__Const: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_2_A__Const: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatClamp_1_Minimum__Const: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatClamp_1_Maximum__Const: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_bInitial__Const: boolean;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetTransform_Weight__Const: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathIntSub_B__Const: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetRotation_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___Forward_Reverse_Foot_1_BK_Buffers__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Reverse_Foot_1_BK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Reverse_Foot_1_Roll_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Reverse_Foot_1_Roll_Buffer__Const: UE.RigElementKey;
            RigVMModel___Forward_Reverse_Foot_1_IKFK_Switch_Control__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetControlFloat_2_Control__Const: string;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_GetTransform_bInitial__Const: boolean;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatGreater_B__Const: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_SetControlVisibility_Pattern__Const: string;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_SetControlVisibility_1_Pattern__Const: string;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayGetAtIndex_2_Index__Const: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_2_A__Const: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatClamp_1_Minimum__Const: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatClamp_1_Maximum__Const: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_bInitial__Const: boolean;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetTransform_Weight__Const: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathIntSub_B__Const: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetRotation_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___Forward_Leg_1_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Leg_1_IK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Leg_1_IK_Effector__Const: UE.RigElementKey;
            RigVMModel___Forward_Leg_1_Pole_Vector_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Leg_1_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_2_Control__Const: string;
            RigVMModel___Forward_Leg_1_Pole_Vector_Null__Const: UE.RigElementKey;
            LocalVariableDefault__Forward_Leg_IK_Mode__Const: boolean;
            Forward_Leg_1___Forward_Leg_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Leg_1___Forward_Leg_GetTransform_1_1_bInitial__Const: boolean;
            Forward_Leg_1___Forward_Leg_MathFloatGreater_1_B__Const: number;
            Forward_Leg_1___Forward_Leg_Set_IKFK_Visibility_IK_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Leg_1___Forward_Leg_Set_IKFK_Visibility_Show_Controls__Const: boolean;
            Forward_Leg_1___Forward_Leg_ArrayGetAtIndex_2_Index__Const: number;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_RigUnit_SetTransform_2_1_Space__Const: UE.ERigVMTransformSpace;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_Primary__Const: UE.RigUnit_AimItem_Target;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_Secondary__Const: UE.RigUnit_AimItem_Target;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_Weight__Const: number;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_RigUnit_SetTransform_2_1_bPropagateToChildren__Const: boolean;
            Forward_Leg_1___Forward_Leg_IK_2_Bones_Primary_Axis__Const: UE.Vector;
            Forward_Leg_1___Forward_Leg_IK_2_Bones_Secondary_Axis__Const: UE.Vector;
            Forward_Leg_1___Forward_Leg_FK_Point_At_Up_Vector_Axis__Const: UE.Vector;
            RigVMModel___Forward_Leg_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Leg_IK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Leg_IK_Effector__Const: UE.RigElementKey;
            RigVMModel___Forward_Leg_Pole_Vector_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Leg_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_3_Control__Const: string;
            RigVMModel___Forward_Leg_Pole_Vector_Null__Const: UE.RigElementKey;
            Forward_Leg___Forward_Leg_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Leg___Forward_Leg_GetTransform_1_1_bInitial__Const: boolean;
            Forward_Leg___Forward_Leg_MathFloatGreater_1_B__Const: number;
            Forward_Leg___Forward_Leg_Set_IKFK_Visibility_IK_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Leg___Forward_Leg_Set_IKFK_Visibility_Show_Controls__Const: boolean;
            Forward_Leg___Forward_Leg_ArrayGetAtIndex_2_Index__Const: number;
            Forward_Leg___Forward_Leg_IK_2_Bones_Primary_Axis__Const: UE.Vector;
            Forward_Leg___Forward_Leg_IK_2_Bones_Secondary_Axis__Const: UE.Vector;
            Forward_Leg___Forward_Leg_FK_Point_At_Up_Vector_Axis__Const: UE.Vector;
            RigVMModel___Forward_Foot_IK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Foot_FK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Foot_Toes_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Foot_Bone__Const: UE.RigElementKey;
            LocalVariableDefault__Forward_Foot_IK_Mode__Const: boolean;
            Forward_Foot___Forward_Foot_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Foot___Forward_Foot_GetTransform_1_1_bInitial__Const: boolean;
            Forward_Foot___Forward_Foot_MathFloatGreater_1_B__Const: number;
            Forward_Foot___Forward_Foot_SetControlVisibility_4_1_Pattern__Const: string;
            Forward_Foot___Forward_Foot_SetControlVisibility_4_Pattern__Const: string;
            Forward_Foot___Forward_Foot_SetTransform_13_Space__Const: UE.ERigVMTransformSpace;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_bChildInitial__Const: boolean;
            Forward_Foot___Forward_Foot_SetTransform_13_Weight__Const: number;
            Forward_Foot___Forward_Foot_OffsetTransformForItem_OffsetTransform__Const: UE.Transform;
            Forward_Foot___Forward_Foot_SendEvent_2_1_2_Event__Const: UE.ERigEvent;
            Forward_Foot___Forward_Foot_SendEvent_2_1_2_OffsetInSeconds__Const: number;
            RigVMModel___Forward_Foot_1_IK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Foot_1_FK_Control__Const: UE.RigElementKey;
            RigVMModel___Forward_Foot_1_Toes_Space__Const: UE.RigElementKey;
            RigVMModel___Forward_Foot_1_Bone__Const: UE.RigElementKey;
            Forward_Foot_1___Forward_Foot_GetTransform_1_1_Space__Const: UE.ERigVMTransformSpace;
            Forward_Foot_1___Forward_Foot_GetTransform_1_1_bInitial__Const: boolean;
            Forward_Foot_1___Forward_Foot_MathFloatGreater_1_B__Const: number;
            Forward_Foot_1___Forward_Foot_SetControlVisibility_4_1_Pattern__Const: string;
            Forward_Foot_1___Forward_Foot_SetControlVisibility_4_Pattern__Const: string;
            Forward_Foot_1___Forward_Foot_SetTransform_13_Space__Const: UE.ERigVMTransformSpace;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_bChildInitial__Const: boolean;
            Forward_Foot_1___Forward_Foot_SetTransform_13_Weight__Const: number;
            Forward_Foot_1___Forward_Foot_OffsetTransformForItem_OffsetTransform__Const: UE.Transform;
            Forward_Foot_1___Forward_Foot_SendEvent_2_1_2_Event__Const: UE.ERigEvent;
            Forward_Foot_1___Forward_Foot_SendEvent_2_1_2_OffsetInSeconds__Const: number;
            RigVMModel___RigUnit_GetBoolAnimationChannel_16_Channel__Const: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_17_Channel__Const: string;
            RigVMModel___Forward_Fingers_1_Fingers_Bones__Const: TArray<UE.RigElementKey>;
            RigVMModel___Forward_Fingers_1_Metacarpals_Controls__Const: TArray<UE.RigElementKey>;
            Forward_Fingers_1___Forward_Fingers_SendEvent_Event__Const: UE.ERigEvent;
            Forward_Fingers_1___Forward_Fingers_SendEvent_Item__Const: UE.RigElementKey;
            Forward_Fingers_1___Forward_Fingers_SendEvent_OffsetInSeconds__Const: number;
            Forward_Fingers_1___Forward_Fingers_SendEvent_bEnable__Const: boolean;
            Forward_Fingers_1___Forward_Fingers_RigUnit_GetTransform_3_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers_1___Forward_Fingers_RigUnit_GetTransform_3_bInitial__Const: boolean;
            Forward_Fingers_1___Forward_Fingers_OffsetTransformForItem_Weight__Const: number;
            Forward_Fingers_1___Forward_Fingers_SendEvent_2_Event__Const: UE.ERigEvent;
            Forward_Fingers_1___Forward_Fingers_RigUnit_SetTransform_1_Value__Const: UE.Transform;
            Forward_Fingers_1___Forward_Fingers_SetTransform_6_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers_1___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__Const: UE.RigElementKey;
            Forward_Fingers_1___Forward_Fingers_NameConcat_4_2_B__Const: string;
            Forward_Fingers_1___Forward_Fingers_SendEvent_1_Event__Const: UE.ERigEvent;
            RigVMModel___Forward_Fingers_5_Fingers_Bones__Const: TArray<UE.RigElementKey>;
            Forward_Fingers_5___Forward_Fingers_SendEvent_Event__Const: UE.ERigEvent;
            Forward_Fingers_5___Forward_Fingers_SendEvent_Item__Const: UE.RigElementKey;
            Forward_Fingers_5___Forward_Fingers_SendEvent_OffsetInSeconds__Const: number;
            Forward_Fingers_5___Forward_Fingers_SendEvent_bEnable__Const: boolean;
            Forward_Fingers_5___Forward_Fingers_RigUnit_GetTransform_3_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers_5___Forward_Fingers_RigUnit_GetTransform_3_bInitial__Const: boolean;
            Forward_Fingers_5___Forward_Fingers_OffsetTransformForItem_Weight__Const: number;
            Forward_Fingers_5___Forward_Fingers_SendEvent_2_Event__Const: UE.ERigEvent;
            Forward_Fingers_5___Forward_Fingers_RigUnit_SetTransform_1_Value__Const: UE.Transform;
            Forward_Fingers_5___Forward_Fingers_SetTransform_6_Space__Const: UE.ERigVMTransformSpace;
            Forward_Fingers_5___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__Const: UE.RigElementKey;
            Forward_Fingers_5___Forward_Fingers_NameConcat_4_2_B__Const: string;
            Forward_Fingers_5___Forward_Fingers_SendEvent_1_Event__Const: UE.ERigEvent;
            RigVMModel___SetControlVisibility_1_Pattern__Const: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_22_Channel__Const: string;
            RigVMModel___ArrayIterator_1_1_Array__Const: TArray<UE.RigElementKey>;
            RigVMModel___Set_IKFK_Visibility_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Set_IKFK_Visibility_IK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Set_IKFK_Visibility_1_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Set_IKFK_Visibility_1_IK_Controls__Const: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_SetControlVisibility_2_Pattern__Const: string;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_If_1_False__Const: boolean;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_SetControlVisibility_2_1_Pattern__Const: string;
            RigVMModel___Set_IKFK_Visibility_1_1_IK_Controls__Const: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_SetControlVisibility_2_Pattern__Const: string;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_If_1_False__Const: boolean;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_SetControlVisibility_2_1_Pattern__Const: string;
            RigVMModel___Set_IKFK_Visibility_1_2_IK_Controls__Const: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_SetControlVisibility_2_Pattern__Const: string;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_If_1_False__Const: boolean;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_SetControlVisibility_2_1_Pattern__Const: string;
            RigVMModel___Set_IKFK_Visibility_1_2_1_FK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Set_IKFK_Visibility_1_2_1_IK_Controls__Const: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_SetControlVisibility_2_Pattern__Const: string;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_If_1_False__Const: boolean;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_SetControlVisibility_2_1_Pattern__Const: string;
            RigVMModel___Set_IKFK_Visibility_1_2_1_1_IK_Controls__Const: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_SetControlVisibility_2_Pattern__Const: string;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_If_1_False__Const: boolean;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_SetControlVisibility_2_1_Pattern__Const: string;
            RigVMModel___SetTransform_19_Item__Const: UE.RigElementKey;
            RigVMModel___ProjectTransformToNewParent_21_2_OldParent__Const: UE.RigElementKey;
            Backward_Spine___Backward_Spine_Project_to_New_Parent_1_Propagate_to_Children__Const: boolean;
            Project_to_New_Parent_1___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Space__Const: UE.ERigVMTransformSpace;
            Project_to_New_Parent_1___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_bInitial__Const: boolean;
            Project_to_New_Parent_1___Project_to_New_Parents_ProjectTransformToNewParent_12_1_bChildInitial__Const: boolean;
            Project_to_New_Parent_1___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_Weight__Const: number;
            Backward_Spine___Backward_Spine_ArrayGetAtIndex_Index__Const: number;
            Backward_Spine___Backward_Spine_RigUnit_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Backward_Spine___Backward_Spine_RigUnit_SetTransform_bInitial__Const: boolean;
            Backward_Spine___Backward_Spine_RigUnit_SetTransform_Weight__Const: number;
            Backward_Neck_1___Backward_Neck_SetTransform_1_Space__Const: UE.ERigVMTransformSpace;
            Backward_Neck_1___Backward_Neck_SetTransform_1_bInitial__Const: boolean;
            Backward_Neck_1___Backward_Neck_SetTransform_1_Value__Const: UE.Transform;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_bChildInitial__Const: boolean;
            Backward_Neck_1___Backward_Neck_ArrayGetAtIndex_1_Index__Const: number;
            Backward_Neck_1___Backward_Neck_SetTransform_1_Weight__Const: number;
            Backward_Clavicle_1___Backward_Clavicle_SetTransform_17_1_1_1_Space__Const: UE.ERigVMTransformSpace;
            Backward_Clavicle_1___Backward_Clavicle_SetTransform_17_1_1_1_bInitial__Const: boolean;
            Backward_Clavicle_1___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_bChildInitial__Const: boolean;
            Backward_Clavicle_1___Backward_Clavicle_SetTransform_17_1_1_1_Weight__Const: number;
            Backward_Clavicle___Backward_Clavicle_SetTransform_17_1_1_1_Space__Const: UE.ERigVMTransformSpace;
            Backward_Clavicle___Backward_Clavicle_SetTransform_17_1_1_1_bInitial__Const: boolean;
            Backward_Clavicle___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_bChildInitial__Const: boolean;
            Backward_Clavicle___Backward_Clavicle_SetTransform_17_1_1_1_Weight__Const: number;
            Backward_Arm___Backward_Arm_SetTransform_25_Space__Const: UE.ERigVMTransformSpace;
            Backward_Arm___Backward_Arm_SetTransform_25_bInitial__Const: boolean;
            Backward_Arm___Backward_Arm_SetTransform_25_Value__Const: UE.Transform;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_bChildInitial__Const: boolean;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_3_Index__Const: number;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_2_Index__Const: number;
            Backward_Arm___Backward_Arm_SetTransform_25_Weight__Const: number;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_1_1_Index__Const: number;
            Backward_Arm_1___Backward_Arm_SetTransform_25_Space__Const: UE.ERigVMTransformSpace;
            Backward_Arm_1___Backward_Arm_SetTransform_25_bInitial__Const: boolean;
            Backward_Arm_1___Backward_Arm_SetTransform_25_Value__Const: UE.Transform;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_bChildInitial__Const: boolean;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_3_Index__Const: number;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_2_Index__Const: number;
            Backward_Arm_1___Backward_Arm_SetTransform_25_Weight__Const: number;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_1_1_Index__Const: number;
            Backward_Fingers___Backward_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Backward_Fingers___Backward_Fingers_NameConcat_4_1_B__Const: string;
            Backward_Fingers___Backward_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Backward_Fingers___Backward_Fingers_SetTransform_2_bInitial__Const: boolean;
            Backward_Fingers___Backward_Fingers_ProjectTransformToNewParent_bChildInitial__Const: boolean;
            Backward_Fingers___Backward_Fingers_SetTransform_2_Weight__Const: number;
            Backward_Fingers_1___Backward_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Backward_Fingers_1___Backward_Fingers_NameConcat_4_1_B__Const: string;
            Backward_Fingers_1___Backward_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Backward_Fingers_1___Backward_Fingers_SetTransform_2_bInitial__Const: boolean;
            Backward_Fingers_1___Backward_Fingers_ProjectTransformToNewParent_bChildInitial__Const: boolean;
            Backward_Fingers_1___Backward_Fingers_SetTransform_2_Weight__Const: number;
            Backward_Leg___Backward_Leg_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Backward_Leg___Backward_Leg_SetTransform_bInitial__Const: boolean;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_bChildInitial__Const: boolean;
            Backward_Leg___Backward_Leg_SetTransform_Weight__Const: number;
            Backward_Leg___Backward_Leg_ArrayGetAtIndex_1_1_Index__Const: number;
            Backward_Leg___Backward_Leg_ArrayGetAtIndex_1_Index__Const: number;
            Backward_Leg_1___Backward_Leg_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Backward_Leg_1___Backward_Leg_SetTransform_bInitial__Const: boolean;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_bChildInitial__Const: boolean;
            Backward_Leg_1___Backward_Leg_SetTransform_Weight__Const: number;
            Backward_Leg_1___Backward_Leg_ArrayGetAtIndex_1_1_Index__Const: number;
            Backward_Leg_1___Backward_Leg_ArrayGetAtIndex_1_Index__Const: number;
            Backward_Foot_1___Backward_Foot_SetTransform_20_2_1_Space__Const: UE.ERigVMTransformSpace;
            Backward_Foot_1___Backward_Foot_SetTransform_20_2_1_bInitial__Const: boolean;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_bChildInitial__Const: boolean;
            Backward_Foot_1___Backward_Foot_SetTransform_20_2_1_Weight__Const: number;
            Backward_Foot___Backward_Foot_SetTransform_20_2_1_Space__Const: UE.ERigVMTransformSpace;
            Backward_Foot___Backward_Foot_SetTransform_20_2_1_bInitial__Const: boolean;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_bChildInitial__Const: boolean;
            Backward_Foot___Backward_Foot_SetTransform_20_2_1_Weight__Const: number;
            Backward_Fingers_2___Backward_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Backward_Fingers_2___Backward_Fingers_NameConcat_4_1_B__Const: string;
            Backward_Fingers_2___Backward_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Backward_Fingers_2___Backward_Fingers_SetTransform_2_bInitial__Const: boolean;
            Backward_Fingers_2___Backward_Fingers_ProjectTransformToNewParent_bChildInitial__Const: boolean;
            Backward_Fingers_2___Backward_Fingers_SetTransform_2_Weight__Const: number;
            Backward_Fingers_1_1___Backward_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Backward_Fingers_1_1___Backward_Fingers_NameConcat_4_1_B__Const: string;
            Backward_Fingers_1_1___Backward_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Backward_Fingers_1_1___Backward_Fingers_SetTransform_2_bInitial__Const: boolean;
            Backward_Fingers_1_1___Backward_Fingers_ProjectTransformToNewParent_bChildInitial__Const: boolean;
            Backward_Fingers_1_1___Backward_Fingers_SetTransform_2_Weight__Const: number;
            RigVMModel___RigUnit_SetTransform_Value__Const: UE.Transform;
            RigVMModel___GetTransform_5_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathTransformLerp_T__Const: number;
            LocalVariableDefault__Setup_Spine_IK_Offsets__Const: TArray<UE.Transform>;
            Setup_Spine___Setup_Spine_GetTransformItemArray_Space__Const: UE.ERigVMTransformSpace;
            Setup_Spine___Setup_Spine_GetTransformItemArray_bInitial__Const: boolean;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_Index__Const: number;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_1_Index__Const: number;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_2_Index__Const: number;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_3_Index__Const: number;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Weight_1__Const: number;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Weight_2__Const: number;
            Setup_Spine___Setup_Spine_SetTransform_28_bInitial__Const: boolean;
            Setup_Spine___Setup_Spine_SetTransform_28_Value__Const: UE.Transform;
            Setup_Spine___Setup_Spine_SetTransform_28_Weight__Const: number;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ControlRigSplineFromPoints_Points__Const: TArray<UE.Vector>;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ControlRigSplineFromPoints_SplineMode__Const: UE.ESplineType;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ControlRigSplineFromPoints_SamplesPerSegment__Const: number;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ControlRigSplineFromPoints_Compression__Const: number;
            Setup_Spine___Setup_Spine_TransformFromControlRigSpline_UpVector__Const: UE.Vector;
            LocalVariableDefault__Setup_Neck_Entry_Argument__Const: TArray<UE.RigElementKey>;
            Setup_Neck_1___Setup_Neck_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Setup_Neck_1___Setup_Neck_SetTransform_bInitial__Const: boolean;
            Setup_Neck_1___Setup_Neck_SetTransform_Value__Const: UE.Transform;
            Setup_Neck_1___Setup_Neck_MathIntSub_B__Const: number;
            Setup_Neck_1___Setup_Neck_GetTransform_bInitial__Const: boolean;
            Setup_Neck_1___Setup_Neck_SetTransform_Weight__Const: number;
            Setup_Neck_1___Setup_Neck_ControlRigSplineFromPoints_Points__Const: TArray<UE.Vector>;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_3_Index__Const: number;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_3_2_Index__Const: number;
            Setup_Neck_1___Setup_Neck_ControlRigSplineFromPoints_SplineMode__Const: UE.ESplineType;
            Setup_Neck_1___Setup_Neck_ControlRigSplineFromPoints_SamplesPerSegment__Const: number;
            Setup_Neck_1___Setup_Neck_ControlRigSplineFromPoints_Compression__Const: number;
            Setup_Clavicle___Setup_Clavicle_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Setup_Clavicle___Setup_Clavicle_SetTransform_bInitial__Const: boolean;
            Setup_Clavicle___Setup_Clavicle_GetTransform_bInitial__Const: boolean;
            Get_Negative_Transform_1___Get_Negative_Transform_Return_Output__Const: UE.Transform;
            Get_Negative_Transform_1___Get_Negative_Transform_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            Get_Negative_Transform_1___Get_Negative_Transform_MathFloatAdd_B__Const: number;
            Setup_Clavicle___Setup_Clavicle_SetTransform_Weight__Const: number;
            Setup_Clavicle_1___Setup_Clavicle_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Setup_Clavicle_1___Setup_Clavicle_SetTransform_bInitial__Const: boolean;
            Setup_Clavicle_1___Setup_Clavicle_GetTransform_bInitial__Const: boolean;
            Setup_Clavicle_1___Setup_Clavicle_SetTransform_Weight__Const: number;
            RigVMModel___Setup_Arm_IK_Parents__Const: TArray<UE.RigElementKey>;
            LocalVariableDefault__Setup_Arm_Transforms__Const: TArray<UE.Transform>;
            Setup_Arm___Setup_Arm_ArraySetAtIndex_Element__Const: UE.Transform;
            Setup_Arm___Setup_Arm_MathIntSub_1_B__Const: number;
            Setup_Arm___Setup_Arm_MathQuaternionFromRotator_2_Value__Const: UE.Rotator;
            Setup_Arm___Setup_Arm_MathFloatAdd_2_B__Const: number;
            Setup_Arm___Setup_Arm_GetTransformItemArray_1_Space__Const: UE.ERigVMTransformSpace;
            Setup_Arm___Setup_Arm_GetTransformItemArray_1_bInitial__Const: boolean;
            Setup_Arm___Setup_Arm_SetTransform_3_bInitial__Const: boolean;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_4_Index__Const: number;
            Setup_Arm___Setup_Arm_SetTransform_3_Weight__Const: number;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_Index__Const: number;
            Get_Negative_Transform_0___Get_Negative_Transform_Return_Output__Const: UE.Transform;
            Get_Negative_Transform_0___Get_Negative_Transform_MathQuaternionFromRotator_Value__Const: UE.Rotator;
            Get_Negative_Transform_0___Get_Negative_Transform_MathFloatAdd_B__Const: number;
            Setup_Arm___Setup_Arm_MathFloatDiv_B__Const: number;
            Setup_Arm___Setup_Arm_If_1_True__Const: UE.Vector;
            Setup_Arm___Setup_Arm_If_1_False__Const: UE.Vector;
            RigVMModel___Setup_Arm_1_IK_Parents__Const: TArray<UE.RigElementKey>;
            Setup_Arm_1___Setup_Arm_ArraySetAtIndex_Element__Const: UE.Transform;
            Setup_Arm_1___Setup_Arm_MathIntSub_1_B__Const: number;
            Setup_Arm_1___Setup_Arm_MathQuaternionFromRotator_2_Value__Const: UE.Rotator;
            Setup_Arm_1___Setup_Arm_MathFloatAdd_2_B__Const: number;
            Setup_Arm_1___Setup_Arm_GetTransformItemArray_1_Space__Const: UE.ERigVMTransformSpace;
            Setup_Arm_1___Setup_Arm_GetTransformItemArray_1_bInitial__Const: boolean;
            Setup_Arm_1___Setup_Arm_SetTransform_3_bInitial__Const: boolean;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_4_Index__Const: number;
            Setup_Arm_1___Setup_Arm_SetTransform_3_Weight__Const: number;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_Index__Const: number;
            Setup_Arm_1___Setup_Arm_MathFloatDiv_B__Const: number;
            Setup_Arm_1___Setup_Arm_If_1_True__Const: UE.Vector;
            Setup_Arm_1___Setup_Arm_If_1_False__Const: UE.Vector;
            Setup_Fingers___Setup_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Setup_Fingers___Setup_Fingers_GetTransform_6_bInitial__Const: boolean;
            Setup_Fingers___Setup_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Setup_Fingers___Setup_Fingers_NameConcat_4_1_B__Const: string;
            Setup_Fingers___Setup_Fingers_SetTransform_2_bInitial__Const: boolean;
            Setup_Fingers___Setup_Fingers_SetTransform_2_Value__Const: UE.Transform;
            Setup_Fingers___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__Const: UE.Rotator;
            Setup_Fingers___Setup_Fingers_MathFloatAdd_1_1_B__Const: number;
            Setup_Fingers___Setup_Fingers_If_1_1_True__Const: UE.Vector;
            Setup_Fingers___Setup_Fingers_If_1_1_False__Const: UE.Vector;
            Setup_Fingers___Setup_Fingers_SetTransform_2_Weight__Const: number;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Setup_Fingers_1___Setup_Fingers_GetTransform_6_bInitial__Const: boolean;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Setup_Fingers_1___Setup_Fingers_NameConcat_4_1_B__Const: string;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_bInitial__Const: boolean;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_Value__Const: UE.Transform;
            Setup_Fingers_1___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__Const: UE.Rotator;
            Setup_Fingers_1___Setup_Fingers_MathFloatAdd_1_1_B__Const: number;
            Setup_Fingers_1___Setup_Fingers_If_1_1_True__Const: UE.Vector;
            Setup_Fingers_1___Setup_Fingers_If_1_1_False__Const: UE.Vector;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_Weight__Const: number;
            RigVMModel___Setup_Leg_FK_Space__Const: UE.RigElementKey;
            RigVMModel___Setup_Leg_IK_Parents__Const: TArray<UE.RigElementKey>;
            LocalVariableDefault__Setup_Leg_Transforms__Const: TArray<UE.Transform>;
            LocalVariableDefault__Setup_Leg_GetTransform_Transform_Translation__Const: UE.Vector;
            Setup_Leg___Setup_Leg_GetTransformItemArray_1_Space__Const: UE.ERigVMTransformSpace;
            Setup_Leg___Setup_Leg_GetTransformItemArray_1_bInitial__Const: boolean;
            Setup_Leg___Setup_Leg_SetTransform_3_bInitial__Const: boolean;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_4_Index__Const: number;
            Setup_Leg___Setup_Leg_SetTransform_3_Weight__Const: number;
            Setup_Leg___Setup_Leg_SetTransform_2_1_Value__Const: UE.Transform;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_Index__Const: number;
            Setup_Leg___Setup_Leg_If_True__Const: UE.Vector;
            Setup_Leg___Setup_Leg_If_False__Const: UE.Vector;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_2_1_Index__Const: number;
            Setup_Leg___Setup_Leg_MathFloatDiv_B__Const: number;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_3_Index__Const: number;
            RigVMModel___Setup_Leg_1_FK_Space__Const: UE.RigElementKey;
            Setup_Leg_1___Setup_Leg_GetTransformItemArray_1_Space__Const: UE.ERigVMTransformSpace;
            Setup_Leg_1___Setup_Leg_GetTransformItemArray_1_bInitial__Const: boolean;
            Setup_Leg_1___Setup_Leg_SetTransform_3_bInitial__Const: boolean;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_4_Index__Const: number;
            Setup_Leg_1___Setup_Leg_SetTransform_3_Weight__Const: number;
            Setup_Leg_1___Setup_Leg_SetTransform_2_1_Value__Const: UE.Transform;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_Index__Const: number;
            Setup_Leg_1___Setup_Leg_If_True__Const: UE.Vector;
            Setup_Leg_1___Setup_Leg_If_False__Const: UE.Vector;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_2_1_Index__Const: number;
            Setup_Leg_1___Setup_Leg_MathFloatDiv_B__Const: number;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_3_Index__Const: number;
            Setup_Foot___Setup_Foot_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Setup_Foot___Setup_Foot_SetTransform_bInitial__Const: boolean;
            Setup_Foot___Setup_Foot_SetTransform_Value__Const: UE.Transform;
            Setup_Foot___Setup_Foot_GetTransform_2_bInitial__Const: boolean;
            Setup_Foot___Setup_Foot_If_1_True__Const: UE.Vector;
            Setup_Foot___Setup_Foot_If_1_False__Const: UE.Vector;
            Setup_Foot___Setup_Foot_SetTransform_Weight__Const: number;
            Setup_Foot___Setup_Foot_MathQuaternionFromRotator_2_Value__Const: UE.Rotator;
            Setup_Foot___Setup_Foot_MathFloatAdd_2_B__Const: number;
            Setup_Foot___Setup_Foot_MathQuaternionFromEuler_Euler__Const: UE.Vector;
            Setup_Foot___Setup_Foot_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            Setup_Foot___Setup_Foot_MathFloatAdd_B__Const: number;
            Setup_Foot_1___Setup_Foot_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Setup_Foot_1___Setup_Foot_SetTransform_bInitial__Const: boolean;
            Setup_Foot_1___Setup_Foot_SetTransform_Value__Const: UE.Transform;
            Setup_Foot_1___Setup_Foot_GetTransform_2_bInitial__Const: boolean;
            Setup_Foot_1___Setup_Foot_If_1_True__Const: UE.Vector;
            Setup_Foot_1___Setup_Foot_If_1_False__Const: UE.Vector;
            Setup_Foot_1___Setup_Foot_SetTransform_Weight__Const: number;
            Setup_Foot_1___Setup_Foot_MathQuaternionFromRotator_2_Value__Const: UE.Rotator;
            Setup_Foot_1___Setup_Foot_MathFloatAdd_2_B__Const: number;
            Setup_Foot_1___Setup_Foot_MathQuaternionFromEuler_Euler__Const: UE.Vector;
            Setup_Foot_1___Setup_Foot_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            Setup_Foot_1___Setup_Foot_MathFloatAdd_B__Const: number;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Setup_Fingers_2___Setup_Fingers_GetTransform_6_bInitial__Const: boolean;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Setup_Fingers_2___Setup_Fingers_NameConcat_4_1_B__Const: string;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_bInitial__Const: boolean;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_Value__Const: UE.Transform;
            Setup_Fingers_2___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__Const: UE.Rotator;
            Setup_Fingers_2___Setup_Fingers_MathFloatAdd_1_1_B__Const: number;
            Setup_Fingers_2___Setup_Fingers_If_1_1_True__Const: UE.Vector;
            Setup_Fingers_2___Setup_Fingers_If_1_1_False__Const: UE.Vector;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_Weight__Const: number;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_Space__Const: UE.ERigVMTransformSpace;
            Setup_Fingers_2_1___Setup_Fingers_GetTransform_6_bInitial__Const: boolean;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_Item__Const: UE.RigElementKey;
            Setup_Fingers_2_1___Setup_Fingers_NameConcat_4_1_B__Const: string;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_bInitial__Const: boolean;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_Value__Const: UE.Transform;
            Setup_Fingers_2_1___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__Const: UE.Rotator;
            Setup_Fingers_2_1___Setup_Fingers_MathFloatAdd_1_1_B__Const: number;
            Setup_Fingers_2_1___Setup_Fingers_If_1_1_True__Const: UE.Vector;
            Setup_Fingers_2_1___Setup_Fingers_If_1_1_False__Const: UE.Vector;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_Weight__Const: number;
            RigVMModel___Setup_Reverse_Foot_BK_Buffers__Const: TArray<UE.RigElementKey>;
            RigVMModel___Setup_Reverse_Foot_BK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Setup_Reverse_Foot_Bones__Const: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayGetAtIndex_3_Index__Const: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Setup_Reverse_Foot___Setup_Reverse_Foot_GetTransform_2_bInitial__Const: boolean;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_bInitial__Const: boolean;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_Value__Const: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Get_Negative_Transform_1_Input__Const: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_Weight__Const: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_MathIntSub_B__Const: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_If_1_True__Const: UE.Vector;
            Setup_Reverse_Foot___Setup_Reverse_Foot_If_1_False__Const: UE.Vector;
            RigVMModel___Setup_Reverse_Foot_1_BK_Buffers__Const: TArray<UE.RigElementKey>;
            RigVMModel___Setup_Reverse_Foot_1_BK_Controls__Const: TArray<UE.RigElementKey>;
            RigVMModel___Setup_Reverse_Foot_1_Bones__Const: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayGetAtIndex_3_Index__Const: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_Space__Const: UE.ERigVMTransformSpace;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_GetTransform_2_bInitial__Const: boolean;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_bInitial__Const: boolean;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_Value__Const: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Get_Negative_Transform_1_Input__Const: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_Weight__Const: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_MathIntSub_B__Const: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_If_1_True__Const: UE.Vector;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_If_1_False__Const: UE.Vector;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8EF62DCF4D3CF245D7B05BB356A467FF
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Body {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_8_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_8_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_8_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_8_CachedChannelHash: TArray<number>;
            Forward_Spine___Forward_Spine_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Forward_Spine___Forward_Spine_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Forward_Spine___Forward_Spine_Entry_Bones: TArray<UE.RigElementKey>;
            Forward_Spine___Forward_Spine_Entry_Pelvis_Bone: UE.RigElementKey;
            Forward_Spine___Forward_Spine_Entry_Chest_Space: UE.RigElementKey;
            Forward_Spine___Forward_Spine_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Spine___Forward_Spine_Entry_Enable_Stretch_: boolean;
            Forward_Spine___Forward_Spine_Entry_Spline_Offsets: TArray<UE.Transform>;
            Forward_Spine___Forward_Spine_Entry_Default_Length: number;
            Forward_Spine___Forward_Spine_Entry_Previous_IK_Mode: boolean;
            Forward_Spine___Forward_Spine_MathFloatGreater_3_Result: boolean;
            Forward_Spine___Forward_Spine_GetTransform_3_Transform: UE.Transform;
            Forward_Spine___Forward_Spine_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_MathFloatGreater_3_A: number;
            LocalVariable__Forward_Spine_IK_Mode: boolean;
            Forward_Spine___Forward_Spine_ArrayClone_Clone: TArray<UE.RigElementKey>;
            Forward_Spine___Forward_Spine_ArrayClone_1_Clone: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility___Set_IKFK_Visibility_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility___Set_IKFK_Visibility_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility___Set_IKFK_Visibility_Entry_IKFK_Switch: boolean;
            Set_IKFK_Visibility___Set_IKFK_Visibility_Entry_Show_Controls: boolean;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility___Set_IKFK_Visibility_If_1_Result: boolean;
            Set_IKFK_Visibility___Set_IKFK_Visibility_MathBoolNot_1_Result: boolean;
            Set_IKFK_Visibility___Set_IKFK_Visibility_SetControlVisibility_2_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_Index: number;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_Count: number;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_Ratio: number;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_BlockToRun: string;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility___Set_IKFK_Visibility_If_Result: boolean;
            Set_IKFK_Visibility___Set_IKFK_Visibility_SetControlVisibility_2_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_1_Index: number;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_1_Count: number;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_1_Ratio: number;
            Set_IKFK_Visibility___Set_IKFK_Visibility_ArrayIterator_2_1_1_BlockToRun: string;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_Transform: UE.Transform;
            Forward_Spine___Forward_Spine_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_If_Result: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Is_First_or_Last_MathBoolOr_Result: boolean;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Is_First_or_Last_MathIntEquals_Result: boolean;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayIterator_1_Index: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Is_First_or_Last_MathIntEquals_1_Result: boolean;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Is_First_or_Last_MathIntSub_Result: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayIterator_1_Count: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_MathTransformMakeAbsolute_Global: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayGetAtIndex_Element: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_TransformFromControlRigSpline_Transform: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ControlRigSplineFromPoints_Spline: UE.ControlRigSpline;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ArrayGetAtIndex_Element: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_GetTransformItemArray_Transforms: TArray<UE.Transform>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_GetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ArrayGetAtIndex_2_Element: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ArrayGetAtIndex_3_Element: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ArrayGetAtIndex_4_Element: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_Spline_From_Element_ControlRigSplineFromPoints_Points__IO: TArray<UE.Vector>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_MathQuaternionRotateVector_Result: UE.Vector;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_MathQuaternionSlerp_Result: UE.Quat;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_GetTransform_1_Transform: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayGetAtIndex_6_Element: UE.RigElementKey;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_MathQuaternionSlerp_A: UE.Quat;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_GetTransform_2_Transform: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayGetAtIndex_6_1_Element: UE.RigElementKey;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_UpVector_MathQuaternionSlerp_B: UE.Quat;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayIterator_1_Ratio: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_MathFloatMul_Result: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_If_1_Result: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_MathFloatMin_Result: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_MathFloatDiv_Result: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_MathFloatDiv_A: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_GetLengthControlRigSpline_Length: number;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ProjectTransformToNewParent_1_2_1_4_2_Transform: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayGetAtIndex_6_2_Element: UE.RigElementKey;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ProjectTransformToNewParent_1_2_1_4_2_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ProjectTransformToNewParent_1_2_1_4_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ProjectTransformToNewParent_1_2_1_4_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_If_True__IO: UE.Transform;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_Spine_IK_Solve_ArrayIterator_1_BlockToRun: string;
            Forward_Spine___Forward_Spine_ArrayClone_2_Clone: TArray<UE.RigElementKey>;
            Forward_Spine___Forward_Spine_ArrayClone_2_1_Clone: TArray<UE.RigElementKey>;
            Project_to_New_Parent___Project_to_New_Parents_Entry_Propagate_to_Children: boolean;
            Project_to_New_Parent___Project_to_New_Parents_ArrayIterator_3_Element: UE.RigElementKey;
            Project_to_New_Parent___Project_to_New_Parents_ProjectTransformToNewParent_12_1_Transform: UE.Transform;
            Project_to_New_Parent___Project_to_New_Parents_ArrayGetAtIndex_6_Element: UE.RigElementKey;
            Project_to_New_Parent___Project_to_New_Parents_ArrayIterator_3_Index: number;
            Project_to_New_Parent___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedChild: TArray<UE.CachedRigElement>;
            Project_to_New_Parent___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parent___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parent___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Project_to_New_Parent___Project_to_New_Parents_ArrayIterator_3_Count: number;
            Project_to_New_Parent___Project_to_New_Parents_ArrayIterator_3_Ratio: number;
            Project_to_New_Parent___Project_to_New_Parents_ArrayIterator_3_BlockToRun: string;
            FK_Point_At_1___FK_Point_At_Entry_FK_Controls: TArray<UE.RigElementKey>;
            FK_Point_At_1___FK_Point_At_Entry_Negative_Side: boolean;
            FK_Point_At_1___FK_Point_At_Entry_Point_At_Axis: UE.Vector;
            FK_Point_At_1___FK_Point_At_Entry_Up_Vector_Axis: UE.Vector;
            FK_Point_At_1___FK_Point_At_Entry_Up_Vector_Target: UE.Vector;
            FK_Point_At_1___FK_Point_At_MathIntGreaterEqual_Result: boolean;
            FK_Point_At_1___FK_Point_At_ArrayIterator_4_Index: number;
            FK_Point_At_1___FK_Point_At_MathIntSub_Result: number;
            FK_Point_At_1___FK_Point_At_ArrayIterator_4_Count: number;
            FK_Point_At_1___FK_Point_At_ArrayIterator_4_Element: UE.RigElementKey;
            FK_Point_At_1___FK_Point_At_If_2_Result: UE.Transform;
            FK_Point_At_1___FK_Point_At_AimBoneMath_Result: UE.Transform;
            FK_Point_At_1___FK_Point_At_ArrayGetAtIndex_11_Element: UE.Transform;
            FK_Point_At_1___FK_Point_At_GetTransformItemArray_Transforms: TArray<UE.Transform>;
            FK_Point_At_1___FK_Point_At_GetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            FK_Point_At_1___FK_Point_At_AimBoneMath_InputTransform__IO: UE.Transform;
            FK_Point_At_1___FK_Point_At_ArrayGetAtIndex_10_1_Element: UE.RigElementKey;
            FK_Point_At_1___FK_Point_At_MathIntAdd_Result: number;
            FK_Point_At_1___FK_Point_At_AimBoneMath_Primary__IO: UE.RigUnit_AimItem_Target;
            FK_Point_At_1___FK_Point_At_ArrayGetAtIndex_10_Element: UE.RigElementKey;
            FK_Point_At_1___FK_Point_At_AimBoneMath_Secondary__IO: UE.RigUnit_AimItem_Target;
            FK_Point_At_1___FK_Point_At_AimBoneMath_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            FK_Point_At_1___FK_Point_At_AimBoneMath_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            FK_Point_At_1___FK_Point_At_AimBoneMath_bIsInitialized: TArray<boolean>;
            FK_Point_At_1___FK_Point_At_MathTransformMul_Result: UE.Transform;
            FK_Point_At_1___FK_Point_At_MathQuaternionFromRotator_Result: UE.Quat;
            FK_Point_At_1___FK_Point_At_MathTransformMul_A__IO: UE.Transform;
            FK_Point_At_1___FK_Point_At_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            FK_Point_At_1___FK_Point_At_Branch_1_BlockToRun: string;
            FK_Point_At_1___FK_Point_At_ArrayIterator_4_Ratio: number;
            FK_Point_At_1___FK_Point_At_ArrayIterator_4_BlockToRun: string;
            FK_Point_At_1___FK_Point_At_ArrayGetAtIndex_12_Element: UE.RigElementKey;
            FK_Point_At_1___FK_Point_At_MathIntSub_1_Result: number;
            FK_Point_At_1___FK_Point_At_ArrayGetNum_Num: number;
            FK_Point_At_1___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_Transform: UE.Transform;
            FK_Point_At_1___FK_Point_At_ArrayGetAtIndex_12_1_Element: UE.RigElementKey;
            FK_Point_At_1___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            FK_Point_At_1___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            FK_Point_At_1___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            FK_Point_At_1___FK_Point_At_SetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_Entry_Offsets: TArray<UE.Transform>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_Element: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_GetTransformItemArray_Transforms: TArray<UE.Transform>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_GetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Point_0: UE.Vector;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_1_Element: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Point_1: UE.Vector;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_2_Element: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Point_2: UE.Vector;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_4_3_Element: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Point_3: UE.Vector;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Control_Points: TArray<UE.Vector>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_BSpline_Passing_thru_4_Points_1_Spline: UE.ControlRigSpline;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Entry_Point_1: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Entry_Point_2: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Entry_Point_3: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Return_Control_Points: TArray<UE.Vector>;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Return_Spline: UE.ControlRigSpline;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Entry_Auto_Weights: boolean;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Entry_Weight_1: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Entry_Weight_2: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathFloatAdd_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorDistance_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorDistance_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathFloatAdd_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorDistance_2_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathVectorScale_3_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathVectorSub_1_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorSub_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorSub_1_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorScale_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b0t1_MathFloatPow_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b0t1_MathFloatSub_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_If_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathFloatDiv_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_If_False: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorScale_1_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b3t1_MathFloatPow_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathVectorScale_2_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathVectorScale_1_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathVectorSub_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathVectorScale_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorSub_4_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorSub_1_3_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorScale_2_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b0t2_MathFloatPow_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b0t2_MathFloatSub_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_If_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathFloatDiv_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_If_1_False: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_MathVectorScale_1_1_Result: UE.Vector;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b3t2_MathFloatPow_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathFloatDiv_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t1_MathFloatMul_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t1_MathFloatMul_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t1_MathFloatMul_2_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t1_MathFloatSub_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t2_MathFloatMul_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t2_MathFloatMul_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t2_MathFloatMul_2_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b1t2_MathFloatSub_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathFloatDiv_4_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathFloatSub_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t1_MathFloatMul_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t1_MathFloatMul_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t1_MathFloatSub_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t1_MathFloatMul_2_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathFloatDiv_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathFloatMul_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t2_MathFloatMul_1_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t2_MathFloatMul_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t2_MathFloatSub_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_b2t2_MathFloatMul_2_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_Solve_MathFloatDiv_3_Result: number;
            BSpline_Passing_thru_4_Points_1___BSpline_Passing_thru_4_Points_ControlRigSplineFromPoints_Points__IO: TArray<UE.Vector>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_MathIntEquals_1_Result: boolean;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayIterator_2_1_Index: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayIterator_2_1_Element: UE.RigElementKey;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_MathTransformMakeAbsolute_Global: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ProjectTransformToNewParent_1_Transform: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_3_1_Element: UE.RigElementKey;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ProjectTransformToNewParent_1_CachedChild: TArray<UE.CachedRigElement>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ProjectTransformToNewParent_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ProjectTransformToNewParent_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayGetAtIndex_8_Element: UE.Vector;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_MathTransformMakeAbsolute_Parent__IO: UE.Transform;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_SetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_Branch_1_1_BlockToRun: string;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayIterator_2_1_Count: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayIterator_2_1_Ratio: number;
            Spine_Match_IK_onto_FK___Spine_Match_IK_onto_FK_ArrayIterator_2_1_BlockToRun: string;
            Forward_Spine___Forward_Spine_Branch_BlockToRun: string;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_1_Transform: UE.Transform;
            Forward_Spine___Forward_Spine_ArrayGetAtIndex_Element: UE.RigElementKey;
            Forward_Spine___Forward_Spine_MathIntSub_Result: number;
            Forward_Spine___Forward_Spine_ArrayGetNum_Num: number;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_ProjectTransformToNewParent_1_2_1_4_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Spine___Forward_Spine_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Set_IKFK_Keys_1___Set_IKFK_Keys_Entry_IK_Mode: boolean;
            Set_IKFK_Keys_1___Set_IKFK_Keys_Entry_Previous_IK_Mode: boolean;
            Set_IKFK_Keys_1___Set_IKFK_Keys_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Keys_1___Set_IKFK_Keys_Entry_IK_Controls_: TArray<UE.RigElementKey>;
            Set_IKFK_Keys_1___Set_IKFK_Keys_Entry_Switch_Control: UE.RigElementKey;
            Set_IKFK_Keys_1___Set_IKFK_Keys_MathBoolNotEquals_Result: boolean;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_Element: UE.RigElementKey;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_Index: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_Count: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_Ratio: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_BlockToRun: string;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_1_Element: UE.RigElementKey;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_1_Index: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_1_Count: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_1_Ratio: number;
            Set_IKFK_Keys_1___Set_IKFK_Keys_ArrayIterator_2_2_1_BlockToRun: string;
            Set_IKFK_Keys_1___Set_IKFK_Keys_Branch_1_1_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_11_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_11_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_11_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_9_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_9_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_9_CachedChannelHash: TArray<number>;
            Forward_Neck_1___Forward_Neck_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Forward_Neck_1___Forward_Neck_Entry_IK_Control: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Entry_Bones: TArray<UE.RigElementKey>;
            Forward_Neck_1___Forward_Neck_Entry_Head_Orient_Control: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Entry_Mid_IK_Null: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Entry_Head_FK_Space: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Entry_Head_IK_Space: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Entry_Head_Orient_Reference: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Entry_Length: number;
            Forward_Neck_1___Forward_Neck_Entry_Enable_Stretch: boolean;
            Forward_Neck_1___Forward_Neck_Entry_Previous_IK_Mode: boolean;
            Forward_Neck_1___Forward_Neck_MathFloatGreater_1_1_Result: boolean;
            Forward_Neck_1___Forward_Neck_GetTransform_1_1_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_MathFloatGreater_1_1_A: number;
            LocalVariable__Forward_Neck_IK_Mode: boolean;
            Forward_Neck_1___Forward_Neck_MathFloatGreater_1_Result: boolean;
            Forward_Neck_1___Forward_Neck_GetTransform_1_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_MathFloatGreater_1_A: number;
            LocalVariable__Forward_Neck_Local_Space: boolean;
            Forward_Neck_1___Forward_Neck_Set_IKFK_Visibility_IK_Controls__IO: TArray<UE.RigElementKey>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_If_Result: UE.Quat;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_If_True: UE.Quat;
            Forward_Neck_1___Forward_Neck_If_False: UE.Quat;
            Forward_Neck_1___Forward_Neck_SetTransform_Value__IO: UE.Transform;
            Forward_Neck_1___Forward_Neck_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_2_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_HierarchyGetParent_Parent: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_HierarchyGetParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_HierarchyGetParent_CachedParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_If_1_Result: UE.Quat;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_1_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_If_1_True: UE.Quat;
            Forward_Neck_1___Forward_Neck_If_1_False: UE.Quat;
            Forward_Neck_1___Forward_Neck_SetTransform_2_Value__IO: UE.Transform;
            Forward_Neck_1___Forward_Neck_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            LocalVariable__Forward_Neck_Positions: TArray<UE.Vector>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ControlRigSplineFromPoints_Spline: UE.ControlRigSpline;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_GetTransform_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayGetAtIndex_Element: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_RigUnit_GetTransform_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_RigUnit_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_GetTransform_2_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ControlRigSplineFromPoints_Points__IO: TArray<UE.Vector>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_PositionFromControlRigSpline_Position: UE.Vector;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ParameterAtPercentage_U: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_MathFloatMul_Result: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayIterator_Ratio: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_If_Result: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_MathFloatMin_Result: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_MathFloatDiv_Result: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_MathFloatDiv_A: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_GetLengthControlRigSpline_Length: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayAdd_Index: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayIterator_Element: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayIterator_Index: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayIterator_Count: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Get_Points_on_Spline_ArrayIterator_BlockToRun: string;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_At_and_Next_ArrayGetAtIndex_Element: UE.Vector;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_ArrayIterator_1_Index: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_If_1_Result: UE.Quat;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Is_Last_MathIntEquals_Result: boolean;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_Is_Last_MathIntSub_Result: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_ArrayIterator_1_Count: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_MathQuaternionMul_Result: UE.Quat;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_GetTransform_2_1_1_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_GetTransform_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_MathQuaternionMul_A: UE.Quat;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_MathQuaternionFromRotator_Result: UE.Quat;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_Result: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_InputTransform__IO: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_At_and_Next_ArrayGetAtIndex_2_Element: UE.Vector;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_At_and_Next_MathIntAdd_1_Result: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_Primary__IO: UE.RigUnit_AimItem_Target;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_MathQuaternionRotateVector_1_Result: UE.Vector;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_MathQuaternionSlerp_1_Result: UE.Quat;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_ArrayGetAtIndex_Element: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_HierarchyGetParent_Parent: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_HierarchyGetParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_HierarchyGetParent_CachedParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_First_Last_Rotation_MathQuaternionSlerp_1_A: UE.Quat;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_ArrayIterator_1_Ratio: number;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_Secondary__IO: UE.RigUnit_AimItem_Target;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_AimBoneMath_1_bIsInitialized: TArray<boolean>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_If_1_False: UE.Quat;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_SetTransform_1_1_Value__IO: UE.Transform;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_SetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Neck_IK_Neck_ArrayIterator_1_BlockToRun: string;
            Project_to_New_Parents___Project_to_New_Parents_Entry_Propagate_to_Children: boolean;
            Project_to_New_Parents___Project_to_New_Parents_ArrayIterator_3_Element: UE.RigElementKey;
            Project_to_New_Parents___Project_to_New_Parents_ProjectTransformToNewParent_12_1_Transform: UE.Transform;
            Project_to_New_Parents___Project_to_New_Parents_ArrayGetAtIndex_6_Element: UE.RigElementKey;
            Project_to_New_Parents___Project_to_New_Parents_ArrayIterator_3_Index: number;
            Project_to_New_Parents___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedChild: TArray<UE.CachedRigElement>;
            Project_to_New_Parents___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parents___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parents___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Project_to_New_Parents___Project_to_New_Parents_ArrayIterator_3_Count: number;
            Project_to_New_Parents___Project_to_New_Parents_ArrayIterator_3_Ratio: number;
            Project_to_New_Parents___Project_to_New_Parents_ArrayIterator_3_BlockToRun: string;
            Project_to_New_Parents_2___Project_to_New_Parents_Entry_Propagate_to_Children: boolean;
            Project_to_New_Parents_2___Project_to_New_Parents_ArrayIterator_3_Element: UE.RigElementKey;
            Project_to_New_Parents_2___Project_to_New_Parents_ProjectTransformToNewParent_12_1_Transform: UE.Transform;
            Project_to_New_Parents_2___Project_to_New_Parents_ArrayGetAtIndex_6_Element: UE.RigElementKey;
            Project_to_New_Parents_2___Project_to_New_Parents_ArrayIterator_3_Index: number;
            Project_to_New_Parents_2___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedChild: TArray<UE.CachedRigElement>;
            Project_to_New_Parents_2___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parents_2___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parents_2___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Project_to_New_Parents_2___Project_to_New_Parents_ArrayIterator_3_Count: number;
            Project_to_New_Parents_2___Project_to_New_Parents_ArrayIterator_3_Ratio: number;
            Project_to_New_Parents_2___Project_to_New_Parents_ArrayIterator_3_BlockToRun: string;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Neck_1___Forward_Neck_ArrayGetAtIndex_Element: UE.RigElementKey;
            Forward_Neck_1___Forward_Neck_MathIntSub_Result: number;
            Forward_Neck_1___Forward_Neck_ArrayGetNum_Num: number;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Neck_1___Forward_Neck_Branch_BlockToRun: string;
            Forward_Neck_1___Forward_Neck_Set_IKFK_Keys_IK_Controls___IO: TArray<UE.RigElementKey>;
            Set_IKFK_Keys___Set_IKFK_Keys_Entry_IK_Mode: boolean;
            Set_IKFK_Keys___Set_IKFK_Keys_Entry_Previous_IK_Mode: boolean;
            Set_IKFK_Keys___Set_IKFK_Keys_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Keys___Set_IKFK_Keys_Entry_IK_Controls_: TArray<UE.RigElementKey>;
            Set_IKFK_Keys___Set_IKFK_Keys_Entry_Switch_Control: UE.RigElementKey;
            Set_IKFK_Keys___Set_IKFK_Keys_MathBoolNotEquals_Result: boolean;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_Element: UE.RigElementKey;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_Index: number;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_Count: number;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_Ratio: number;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_BlockToRun: string;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_1_Element: UE.RigElementKey;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_1_Index: number;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_1_Count: number;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_1_Ratio: number;
            Set_IKFK_Keys___Set_IKFK_Keys_ArrayIterator_2_2_1_BlockToRun: string;
            Set_IKFK_Keys___Set_IKFK_Keys_Branch_1_1_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_10_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_10_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_10_CachedChannelHash: TArray<number>;
            Forward_Clavicle_1___Forward_Clavicle_ProjectTransformToNewParent_2_2_Transform: UE.Transform;
            Forward_Clavicle_1___Forward_Clavicle_ProjectTransformToNewParent_2_2_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Clavicle_1___Forward_Clavicle_ProjectTransformToNewParent_2_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Clavicle_1___Forward_Clavicle_ProjectTransformToNewParent_2_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Clavicle_1___Forward_Clavicle_SetTransform_9_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Clavicle___Forward_Clavicle_ProjectTransformToNewParent_2_2_Transform: UE.Transform;
            Forward_Clavicle___Forward_Clavicle_ProjectTransformToNewParent_2_2_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Clavicle___Forward_Clavicle_ProjectTransformToNewParent_2_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Clavicle___Forward_Clavicle_ProjectTransformToNewParent_2_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Clavicle___Forward_Clavicle_SetTransform_9_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_1_Value: number;
            RigVMModel___RigUnit_GetFloatAnimationChannel_1_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_1_CachedChannelHash: TArray<number>;
            RigVMModel___Forward_Arm_Softness: number;
            RigVMModel___RigUnit_GetBoolAnimationChannel_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_3_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_3_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_3_CachedChannelHash: TArray<number>;
            Forward_Arm___Forward_Arm_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Forward_Arm___Forward_Arm_Entry_IK_Control: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_IK_Effector: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_Pole_Vector_Control: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_FK_Orient_Control: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_Arm_Space: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_FK_Orient_References: TArray<UE.RigElementKey>;
            Forward_Arm___Forward_Arm_Entry_Finger_Space: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_Bones: TArray<UE.RigElementKey>;
            Forward_Arm___Forward_Arm_Entry_Softness: number;
            Forward_Arm___Forward_Arm_Entry_Enable_Stretch: boolean;
            Forward_Arm___Forward_Arm_Entry_Previous_IK_Mode: boolean;
            Forward_Arm___Forward_Arm_Entry_Negative_Side: boolean;
            Forward_Arm___Forward_Arm_Entry_IK_Orient_Null: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_IK_Orient_Control: UE.RigElementKey;
            Forward_Arm___Forward_Arm_Entry_IK_Orient: boolean;
            Forward_Arm___Forward_Arm_Entry_Previous_Align: boolean;
            Forward_Arm___Forward_Arm_MathFloatGreater_1_Result: boolean;
            Forward_Arm___Forward_Arm_GetTransform_1_1_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_MathFloatGreater_1_A: number;
            LocalVariable__Forward_Arm_IK_Mode: boolean;
            Forward_Arm___Forward_Arm_Set_IKFK_Visibility_IK_Controls__IO: TArray<UE.RigElementKey>;
            Forward_Arm___Forward_Arm_MathBoolAnd_Result: boolean;
            Forward_Arm___Forward_Arm_SetControlVisibility_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_7_Element: UE.RigElementKey;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_If_Result: UE.Quat;
            Forward_Arm___Forward_Arm_MathFloatGreater_2_Result: boolean;
            Forward_Arm___Forward_Arm_GetTransform_1_2_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_MathFloatGreater_2_A: number;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_8_Element: UE.RigElementKey;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_If_True: UE.Quat;
            Forward_Arm___Forward_Arm_If_False: UE.Quat;
            Forward_Arm___Forward_Arm_SetTransform_Value__IO: UE.Transform;
            Forward_Arm___Forward_Arm_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_DISPATCH_RigDispatch_CoreNotEquals_Result: boolean;
            Forward_Arm___Forward_Arm_GetTransform_1_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_Set_Transform_1_1_Value: UE.Quat;
            Forward_Arm___Forward_Arm_Set_Transform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_GetTransform_2_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_Set_Transform_1_Value: UE.Quat;
            Forward_Arm___Forward_Arm_Set_Transform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_Branch_3_BlockToRun: string;
            Forward_Arm___Forward_Arm_Branch_2_BlockToRun: string;
            IK_2_Bones___IK_2_Bones_Entry_IK_Control: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_Entry_Pole_Vector_Control: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_Entry_Softness: number;
            IK_2_Bones___IK_2_Bones_Entry_Negative_Side: boolean;
            IK_2_Bones___IK_2_Bones_Entry_Enable_Stretch: boolean;
            IK_2_Bones___IK_2_Bones_Entry_Primary_Axis: UE.Vector;
            IK_2_Bones___IK_2_Bones_Entry_Secondary_Axis: UE.Vector;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatAbs_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_4_Transform: UE.Transform;
            IK_2_Bones___IK_2_Bones_Softness_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatAbs_Value: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatAbs_1_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_5_Transform: UE.Transform;
            IK_2_Bones___IK_2_Bones_Softness_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatAbs_1_Value: number;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_4_2_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_4_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_4_1_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_ProjectTransformToNewParent_11_Transform: UE.Transform;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_ProjectTransformToNewParent_11_CachedChild: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_ProjectTransformToNewParent_11_CachedOldParent: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_ProjectTransformToNewParent_11_CachedNewParent: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_If_1_Result: UE.Vector;
            IK_2_Bones___IK_2_Bones_MathVectorNegate_Result: UE.Vector;
            IK_2_Bones___IK_2_Bones_If_2_Result: UE.Vector;
            IK_2_Bones___IK_2_Bones_MathVectorNegate_1_Result: UE.Vector;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatMul_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_If_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_MathBoolAnd_Result: boolean;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatGreater_Result: boolean;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatGreater_A: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatGreater_1_Result: boolean;
            IK_2_Bones___IK_2_Bones_Softness_MathVectorDistance_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_3_Transform: UE.Transform;
            IK_2_Bones___IK_2_Bones_Softness_ArrayGetAtIndex_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_Softness_MathVectorDistance_A: UE.Vector;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_2_Transform: UE.Transform;
            IK_2_Bones___IK_2_Bones_Softness_RigUnit_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_Softness_MathVectorDistance_B: UE.Vector;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatSub_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatAdd_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatMul_5_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatMul_4_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatMul_4_B: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatMax_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatDiv_2_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatAdd_1_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatMul_6_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatSub_2_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatExponential_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatNegate_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatDiv_1_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_Exponential_Softness_MathFloatSub_1_Result: number;
            IK_2_Bones___IK_2_Bones_Softness_MathFloatMul_1_Result: number;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_CachedItemAIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_CachedItemBIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_CachedEffectorItemIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_TwoBoneIKSimplePerItem_2_CachedPoleVectorSpaceIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_GetTransform_12_2_1_Transform: UE.Transform;
            IK_2_Bones___IK_2_Bones_ArrayGetAtIndex_5_Element: UE.RigElementKey;
            IK_2_Bones___IK_2_Bones_GetTransform_12_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_DebugLineItemSpace_1_1_A: UE.Vector;
            IK_2_Bones___IK_2_Bones_GetTransform_12_1_1_1_Transform: UE.Transform;
            IK_2_Bones___IK_2_Bones_GetTransform_12_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            IK_2_Bones___IK_2_Bones_DebugLineItemSpace_1_1_B: UE.Vector;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_1_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_Set_Transform_Value: UE.Quat;
            Forward_Arm___Forward_Arm_Set_Transform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_RigUnit_SetTransform_1_Value: UE.Quat;
            Forward_Arm___Forward_Arm_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_Branch_1_BlockToRun: string;
            FK_Point_At___FK_Point_At_Entry_FK_Controls: TArray<UE.RigElementKey>;
            FK_Point_At___FK_Point_At_Entry_Negative_Side: boolean;
            FK_Point_At___FK_Point_At_Entry_Point_At_Axis: UE.Vector;
            FK_Point_At___FK_Point_At_Entry_Up_Vector_Axis: UE.Vector;
            FK_Point_At___FK_Point_At_Entry_Up_Vector_Target: UE.Vector;
            FK_Point_At___FK_Point_At_MathIntGreaterEqual_Result: boolean;
            FK_Point_At___FK_Point_At_ArrayIterator_4_Index: number;
            FK_Point_At___FK_Point_At_MathIntSub_Result: number;
            FK_Point_At___FK_Point_At_ArrayIterator_4_Count: number;
            FK_Point_At___FK_Point_At_ArrayIterator_4_Element: UE.RigElementKey;
            FK_Point_At___FK_Point_At_If_2_Result: UE.Transform;
            FK_Point_At___FK_Point_At_AimBoneMath_Result: UE.Transform;
            FK_Point_At___FK_Point_At_ArrayGetAtIndex_11_Element: UE.Transform;
            FK_Point_At___FK_Point_At_GetTransformItemArray_Transforms: TArray<UE.Transform>;
            FK_Point_At___FK_Point_At_GetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            FK_Point_At___FK_Point_At_AimBoneMath_InputTransform__IO: UE.Transform;
            FK_Point_At___FK_Point_At_ArrayGetAtIndex_10_1_Element: UE.RigElementKey;
            FK_Point_At___FK_Point_At_MathIntAdd_Result: number;
            FK_Point_At___FK_Point_At_AimBoneMath_Primary__IO: UE.RigUnit_AimItem_Target;
            FK_Point_At___FK_Point_At_ArrayGetAtIndex_10_Element: UE.RigElementKey;
            FK_Point_At___FK_Point_At_AimBoneMath_Secondary__IO: UE.RigUnit_AimItem_Target;
            FK_Point_At___FK_Point_At_AimBoneMath_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            FK_Point_At___FK_Point_At_AimBoneMath_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            FK_Point_At___FK_Point_At_AimBoneMath_bIsInitialized: TArray<boolean>;
            FK_Point_At___FK_Point_At_MathTransformMul_Result: UE.Transform;
            FK_Point_At___FK_Point_At_MathQuaternionFromRotator_Result: UE.Quat;
            FK_Point_At___FK_Point_At_MathTransformMul_A__IO: UE.Transform;
            FK_Point_At___FK_Point_At_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            FK_Point_At___FK_Point_At_Branch_1_BlockToRun: string;
            FK_Point_At___FK_Point_At_ArrayIterator_4_Ratio: number;
            FK_Point_At___FK_Point_At_ArrayIterator_4_BlockToRun: string;
            FK_Point_At___FK_Point_At_ArrayGetAtIndex_12_Element: UE.RigElementKey;
            FK_Point_At___FK_Point_At_MathIntSub_1_Result: number;
            FK_Point_At___FK_Point_At_ArrayGetNum_Num: number;
            FK_Point_At___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_Transform: UE.Transform;
            FK_Point_At___FK_Point_At_ArrayGetAtIndex_12_1_Element: UE.RigElementKey;
            FK_Point_At___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            FK_Point_At___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            FK_Point_At___FK_Point_At_ProjectTransformToNewParent_12_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            FK_Point_At___FK_Point_At_SetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_Entry_IK_Control: UE.RigElementKey;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_Entry_Pole_Vector_Control: UE.RigElementKey;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_Transform: UE.Transform;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_CachedChild: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_CachedOldParent: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_CachedNewParent: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_SetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_1_Transform: UE.Transform;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_1_CachedChild: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_ProjectTransformToNewParent_13_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Match_IK_onto_FK___Match_2_Bones_IK_onto_FK_SetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_Branch_BlockToRun: string;
            Forward_Arm___Forward_Arm_Set_IKFK_Keys_IK_Controls___IO: TArray<UE.RigElementKey>;
            Forward_Arm___Forward_Arm_If_3_Result: UE.Transform;
            Forward_Arm___Forward_Arm_GetTransform_Transform: UE.Transform;
            Forward_Arm___Forward_Arm_ArrayGetAtIndex_9_Element: UE.RigElementKey;
            Forward_Arm___Forward_Arm_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm___Forward_Arm_Get_Negative_Transform_Output: UE.Transform;
            Get_Negative_Transform___Get_Negative_Transform_MathQuaternionFromRotator_Result: UE.Quat;
            Get_Negative_Transform___Get_Negative_Transform_MathQuaternionToRotator_Result: UE.Rotator;
            Get_Negative_Transform___Get_Negative_Transform_MathQuaternionToRotator_Value: UE.Quat;
            Get_Negative_Transform___Get_Negative_Transform_MathFloatAdd_Result: number;
            Get_Negative_Transform___Get_Negative_Transform_MathFloatAdd_A: number;
            Get_Negative_Transform___Get_Negative_Transform_MathQuaternionFromRotator_Value__IO: UE.Rotator;
            Get_Negative_Transform___Get_Negative_Transform_MathFloatNegate_Result: number;
            Get_Negative_Transform___Get_Negative_Transform_MathFloatNegate_Value: number;
            Forward_Arm___Forward_Arm_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_12_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_12_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_12_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_3_1_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_3_1_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_3_1_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_Value: number;
            RigVMModel___RigUnit_GetFloatAnimationChannel_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_CachedChannelHash: TArray<number>;
            RigVMModel___Forward_Arm_1_Softness: number;
            RigVMModel___RigUnit_GetBoolAnimationChannel_1_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_1_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_1_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_4_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_4_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_4_CachedChannelHash: TArray<number>;
            Forward_Arm_1___Forward_Arm_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Forward_Arm_1___Forward_Arm_Entry_IK_Control: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_IK_Effector: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_Pole_Vector_Control: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_FK_Orient_Control: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_Arm_Space: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_FK_Orient_References: TArray<UE.RigElementKey>;
            Forward_Arm_1___Forward_Arm_Entry_Finger_Space: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_Bones: TArray<UE.RigElementKey>;
            Forward_Arm_1___Forward_Arm_Entry_Softness: number;
            Forward_Arm_1___Forward_Arm_Entry_Enable_Stretch: boolean;
            Forward_Arm_1___Forward_Arm_Entry_Previous_IK_Mode: boolean;
            Forward_Arm_1___Forward_Arm_Entry_Negative_Side: boolean;
            Forward_Arm_1___Forward_Arm_Entry_IK_Orient_Null: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_IK_Orient_Control: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_Entry_IK_Orient: boolean;
            Forward_Arm_1___Forward_Arm_Entry_Previous_Align: boolean;
            Forward_Arm_1___Forward_Arm_MathFloatGreater_1_Result: boolean;
            Forward_Arm_1___Forward_Arm_GetTransform_1_1_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_MathFloatGreater_1_A: number;
            Forward_Arm_1___Forward_Arm_Set_IKFK_Visibility_IK_Controls__IO: TArray<UE.RigElementKey>;
            Forward_Arm_1___Forward_Arm_MathBoolAnd_Result: boolean;
            Forward_Arm_1___Forward_Arm_SetControlVisibility_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_7_Element: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_If_Result: UE.Quat;
            Forward_Arm_1___Forward_Arm_MathFloatGreater_2_Result: boolean;
            Forward_Arm_1___Forward_Arm_GetTransform_1_2_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_MathFloatGreater_2_A: number;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_8_Element: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_2_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_If_True: UE.Quat;
            Forward_Arm_1___Forward_Arm_If_False: UE.Quat;
            Forward_Arm_1___Forward_Arm_SetTransform_Value__IO: UE.Transform;
            Forward_Arm_1___Forward_Arm_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_DISPATCH_RigDispatch_CoreNotEquals_Result: boolean;
            Forward_Arm_1___Forward_Arm_GetTransform_1_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_Set_Transform_1_1_Value: UE.Quat;
            Forward_Arm_1___Forward_Arm_Set_Transform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_GetTransform_2_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_Set_Transform_1_Value: UE.Quat;
            Forward_Arm_1___Forward_Arm_Set_Transform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_Branch_3_BlockToRun: string;
            Forward_Arm_1___Forward_Arm_Branch_2_BlockToRun: string;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_1_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_Set_Transform_Value: UE.Quat;
            Forward_Arm_1___Forward_Arm_Set_Transform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_RigUnit_SetTransform_1_Value: UE.Quat;
            Forward_Arm_1___Forward_Arm_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_Branch_1_BlockToRun: string;
            Forward_Arm_1___Forward_Arm_Branch_BlockToRun: string;
            Forward_Arm_1___Forward_Arm_Set_IKFK_Keys_IK_Controls___IO: TArray<UE.RigElementKey>;
            Forward_Arm_1___Forward_Arm_If_3_Result: UE.Transform;
            Forward_Arm_1___Forward_Arm_GetTransform_Transform: UE.Transform;
            Forward_Arm_1___Forward_Arm_ArrayGetAtIndex_9_Element: UE.RigElementKey;
            Forward_Arm_1___Forward_Arm_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Arm_1___Forward_Arm_Get_Negative_Transform_Output: UE.Transform;
            Forward_Arm_1___Forward_Arm_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_13_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_13_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_13_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_4_1_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_4_1_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_4_1_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_2_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_2_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_2_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_6_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_6_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_6_CachedChannelHash: TArray<number>;
            Forward_Fingers_4___Forward_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Forward_Fingers_4___Forward_Fingers_Entry_Metacarpals_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_4___Forward_Fingers_Entry_Auto_Meta: boolean;
            Forward_Fingers_4___Forward_Fingers_Entry_Base_Fingers_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_4___Forward_Fingers_Entry_Auto_Base: boolean;
            Forward_Fingers_4___Forward_Fingers_Entry_Proxy_Controls: TArray<UE.RigElementKey>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_MathBoolAnd_Result: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_1_bIsInteracting: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_1_bIsTranslating: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_1_bIsRotating: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_1_bIsScaling: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_1_Items: TArray<UE.RigElementKey>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Greater_Result: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayGetNum_Num: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_2_Items: TArray<UE.RigElementKey>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_2_bIsInteracting: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_2_bIsTranslating: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_2_bIsRotating: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_IsInteracting_2_bIsScaling: boolean;
            LocalVariable__Interpolate_Interacting_Controls_Interacting_Item: UE.RigElementKey;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_CoreEquals_2_Result: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayFind_1_Index: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayFind_1_Success: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Subtract_1_Result: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayGetNum_1_Num: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_MathBoolOr_1_Result: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_CoreEquals_1_Result: boolean;
            LocalVariable__Interpolate_Interacting_Controls_Loop_Controls: TArray<UE.RigElementKey>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Branch_4_BlockToRun: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_CoreEquals_3_Result: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_1_Index: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_1_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Interpolate_1_Result: UE.Transform;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Make_Relative_1_Local: UE.Transform;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_Transform: UE.Transform;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Value: UE.Transform;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Cache: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Found: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Subtract_2_Result: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_1_Ratio: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Subtract_2_B: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Interpolate_1_T: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_OffsetTransformForItem_1_CachedIndex: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Branch_2_1_BlockToRun: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_1_Count: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_1_BlockToRun: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_Index: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_Count: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_Ratio: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_1_BlockToRun: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Branch_3_BlockToRun: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Branch_1_BlockToRun: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_Branch_BlockToRun: string;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_SetMetadata_1_Cache: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_RigUnit_GetTransform_2_Transform: UE.Transform;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_RigUnit_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_SetMetadata_1_Success: boolean;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_Index: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_Count: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_Ratio: number;
            Interpolate_Interacting_Controls___Interpolate_Interacting_Controls_ArrayIterator_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_MathBoolAnd_Result: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_1_bIsInteracting: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_1_bIsTranslating: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_1_bIsRotating: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_1_bIsScaling: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_1_Items: TArray<UE.RigElementKey>;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Greater_Result: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayGetNum_Num: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_2_Items: TArray<UE.RigElementKey>;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_2_bIsInteracting: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_2_bIsTranslating: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_2_bIsRotating: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_IsInteracting_2_bIsScaling: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_CoreEquals_2_Result: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayFind_1_Index: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayFind_1_Success: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Subtract_1_Result: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayGetNum_1_Num: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_MathBoolOr_1_Result: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_CoreEquals_1_Result: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Branch_4_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_CoreEquals_3_Result: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_1_Index: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_1_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Interpolate_1_Result: UE.Transform;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Make_Relative_1_Local: UE.Transform;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_Transform: UE.Transform;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_RigUnit_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Value: UE.Transform;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Cache: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_GetMetadata_1_Found: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Subtract_2_Result: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_1_Ratio: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Subtract_2_B: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Interpolate_1_T: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_OffsetTransformForItem_1_CachedIndex: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Branch_2_1_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_1_Count: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_1_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_Index: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_Count: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_Ratio: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_1_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Branch_3_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Branch_1_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_Branch_BlockToRun: string;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_Element: UE.RigElementKey;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_SetMetadata_1_Cache: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_RigUnit_GetTransform_2_Transform: UE.Transform;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_RigUnit_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_DISPATCH_RigDispatch_SetMetadata_1_Success: boolean;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_Index: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_Count: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_Ratio: number;
            Interpolate_Interacting_Controls_1___Interpolate_Interacting_Controls_ArrayIterator_BlockToRun: string;
            Forward_Fingers_4___Forward_Fingers_ArrayFind_Success: boolean;
            Forward_Fingers_4___Forward_Fingers_IsInteracting_Items: TArray<UE.RigElementKey>;
            Forward_Fingers_4___Forward_Fingers_IsInteracting_bIsInteracting: boolean;
            Forward_Fingers_4___Forward_Fingers_IsInteracting_bIsTranslating: boolean;
            Forward_Fingers_4___Forward_Fingers_IsInteracting_bIsRotating: boolean;
            Forward_Fingers_4___Forward_Fingers_IsInteracting_bIsScaling: boolean;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Fingers_4___Forward_Fingers_ArrayFind_Index: number;
            Forward_Fingers_4___Forward_Fingers_Find_Finger_Controls_Value: string;
            Forward_Fingers_4___Forward_Fingers_Find_Finger_Controls_Items: TArray<UE.RigElementKey>;
            Find_Finger_Controls___Find_Finger_Controls_MathBoolAnd_MathBoolAnd_1_Result: boolean;
            Find_Finger_Controls___Find_Finger_Controls_MathBoolAnd_MathBoolAnd_Result: boolean;
            Find_Finger_Controls___Find_Finger_Controls_MathBoolNot_Result: boolean;
            Find_Finger_Controls___Find_Finger_Controls_Contains_Result: boolean;
            Find_Finger_Controls___Find_Finger_Controls_ArrayIterator_Element: UE.RigElementKey;
            Find_Finger_Controls___Find_Finger_Controls_Contains_Name: string;
            Find_Finger_Controls___Find_Finger_Controls_MathBoolNot_1_Result: boolean;
            Find_Finger_Controls___Find_Finger_Controls_Contains_1_Result: boolean;
            Find_Finger_Controls___Find_Finger_Controls_EndsWith_1_Result: boolean;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_Chopped: string;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_Remainder: string;
            Find_Finger_Controls___Find_Finger_Controls_ArrayAdd_1_Index: number;
            Find_Finger_Controls___Find_Finger_Controls_Branch_1_BlockToRun: string;
            Find_Finger_Controls___Find_Finger_Controls_CollectionNameSearchArray_1_1_Items: TArray<UE.RigElementKey>;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_1_Chopped: string;
            Find_Finger_Controls___Find_Finger_Controls_Chop_1_1_Remainder: string;
            Find_Finger_Controls___Find_Finger_Controls_ArrayIterator_Index: number;
            Find_Finger_Controls___Find_Finger_Controls_ArrayIterator_Count: number;
            Find_Finger_Controls___Find_Finger_Controls_ArrayIterator_Ratio: number;
            Find_Finger_Controls___Find_Finger_Controls_ArrayIterator_BlockToRun: string;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_1_Element: UE.RigElementKey;
            Forward_Fingers_4___Forward_Fingers_RigUnit_GetTransform_3_Transform: UE.Transform;
            Forward_Fingers_4___Forward_Fingers_RigUnit_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_4___Forward_Fingers_OffsetTransformForItem_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_1_Index: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_1_Count: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_1_Ratio: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_1_BlockToRun: string;
            Forward_Fingers_4___Forward_Fingers_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_4___Forward_Fingers_Branch_BlockToRun: string;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_Index: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_Count: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_Ratio: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_1_BlockToRun: string;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Forward_Fingers_4___Forward_Fingers_ProjectTransformToNewParent_19_Transform: UE.Transform;
            Forward_Fingers_4___Forward_Fingers_NameConcat_4_2_Result: string;
            Forward_Fingers_4___Forward_Fingers_NameConcat_4_2_A: string;
            Forward_Fingers_4___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__IO: UE.RigElementKey;
            Forward_Fingers_4___Forward_Fingers_ProjectTransformToNewParent_19_NewParent__IO: UE.RigElementKey;
            Forward_Fingers_4___Forward_Fingers_ProjectTransformToNewParent_19_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Fingers_4___Forward_Fingers_ProjectTransformToNewParent_19_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Fingers_4___Forward_Fingers_ProjectTransformToNewParent_19_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Fingers_4___Forward_Fingers_SetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_Index: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_Count: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_Ratio: number;
            Forward_Fingers_4___Forward_Fingers_ArrayIterator_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_5_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_5_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_5_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_7_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_7_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_7_CachedChannelHash: TArray<number>;
            Forward_Fingers___Forward_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Forward_Fingers___Forward_Fingers_Entry_Metacarpals_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers___Forward_Fingers_Entry_Auto_Meta: boolean;
            Forward_Fingers___Forward_Fingers_Entry_Base_Fingers_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers___Forward_Fingers_Entry_Auto_Base: boolean;
            Forward_Fingers___Forward_Fingers_Entry_Proxy_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers___Forward_Fingers_ArrayFind_Success: boolean;
            Forward_Fingers___Forward_Fingers_IsInteracting_Items: TArray<UE.RigElementKey>;
            Forward_Fingers___Forward_Fingers_IsInteracting_bIsInteracting: boolean;
            Forward_Fingers___Forward_Fingers_IsInteracting_bIsTranslating: boolean;
            Forward_Fingers___Forward_Fingers_IsInteracting_bIsRotating: boolean;
            Forward_Fingers___Forward_Fingers_IsInteracting_bIsScaling: boolean;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Fingers___Forward_Fingers_ArrayFind_Index: number;
            Forward_Fingers___Forward_Fingers_Find_Finger_Controls_Value: string;
            Forward_Fingers___Forward_Fingers_Find_Finger_Controls_Items: TArray<UE.RigElementKey>;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_1_Element: UE.RigElementKey;
            Forward_Fingers___Forward_Fingers_RigUnit_GetTransform_3_Transform: UE.Transform;
            Forward_Fingers___Forward_Fingers_RigUnit_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers___Forward_Fingers_OffsetTransformForItem_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_1_Index: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_1_Count: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_1_Ratio: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_1_BlockToRun: string;
            Forward_Fingers___Forward_Fingers_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers___Forward_Fingers_Branch_BlockToRun: string;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_Index: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_Count: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_Ratio: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_1_BlockToRun: string;
            Forward_Fingers___Forward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Forward_Fingers___Forward_Fingers_ProjectTransformToNewParent_19_Transform: UE.Transform;
            Forward_Fingers___Forward_Fingers_NameConcat_4_2_Result: string;
            Forward_Fingers___Forward_Fingers_NameConcat_4_2_A: string;
            Forward_Fingers___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__IO: UE.RigElementKey;
            Forward_Fingers___Forward_Fingers_ProjectTransformToNewParent_19_NewParent__IO: UE.RigElementKey;
            Forward_Fingers___Forward_Fingers_ProjectTransformToNewParent_19_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Fingers___Forward_Fingers_ProjectTransformToNewParent_19_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Fingers___Forward_Fingers_ProjectTransformToNewParent_19_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Fingers___Forward_Fingers_SetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers___Forward_Fingers_ArrayIterator_Index: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_Count: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_Ratio: number;
            Forward_Fingers___Forward_Fingers_ArrayIterator_BlockToRun: string;
            RigVMModel___ArrayIterator_Element: UE.RigElementKey;
            RigVMModel___ProjectTransformToNewParent_24_Transform: UE.Transform;
            RigVMModel___ProjectTransformToNewParent_24_CachedChild: TArray<UE.CachedRigElement>;
            RigVMModel___ProjectTransformToNewParent_24_CachedOldParent: TArray<UE.CachedRigElement>;
            RigVMModel___ProjectTransformToNewParent_24_CachedNewParent: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_16_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ArrayIterator_Index: number;
            RigVMModel___ArrayIterator_Count: number;
            RigVMModel___ArrayIterator_Ratio: number;
            RigVMModel___ArrayIterator_BlockToRun: string;
            RigVMModel___RigUnit_GetControlFloat_FloatValue: number;
            RigVMModel___RigUnit_GetControlFloat_Minimum: number;
            RigVMModel___RigUnit_GetControlFloat_Maximum: number;
            RigVMModel___RigUnit_GetControlFloat_CachedControlIndex: TArray<UE.CachedRigElement>;
            RigVMModel___Forward_Reverse_Foot_Roll_Blend: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_Entry_BK_Buffers: TArray<UE.RigElementKey>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_Entry_BK_Controls: TArray<UE.RigElementKey>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_Entry_Roll_Control: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_Entry_Roll_Buffer: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_Entry_Roll_Clamp: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_Entry_Roll_Blend: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatGreater_Result: boolean;
            Forward_Reverse_Foot___Forward_Reverse_Foot_GetTransform_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatGreater_A: number;
            LocalVariable__Forward_Reverse_Foot_IK_Mode: boolean;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_SetControlVisibility_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_1_Index: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_1_Count: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_1_Ratio: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_1_BlockToRun: string;
            Forward_Reverse_Foot___Forward_Reverse_Foot_SetControlVisibility_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_2_Result: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionFromRotator_Result: UE.Quat;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatClamp_1_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionToRotator_Result: UE.Rotator;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionToRotator_Value: UE.Quat;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatClamp_1_Value: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionFromRotator_Value__IO: UE.Rotator;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_2_A__IO: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_Result: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMakeAbsolute_Global: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_1_Result: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMakeRelative_Local: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_1_B__IO: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayClone_Clone: TArray<UE.RigElementKey>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatMul_1_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatMul_1_B: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_1_1_Result: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_1_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionFromRotator_1_1_Result: UE.Quat;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatNegate_2_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatClamp_2_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatSub_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatNegate_1_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionToRotator_1_Result: UE.Rotator;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_2_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionToRotator_1_Value: UE.Quat;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatNegate_1_Value: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathFloatMul_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathIntToFloat_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_Index: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_If_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathIntEquals_Result: boolean;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathIntSub_Result: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_Count: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathQuaternionFromRotator_1_1_Value__IO: UE.Rotator;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_1_1_B__IO: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetRotation_1_1_Value: UE.Quat;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetRotation_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_Ratio: number;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayIterator_BlockToRun: string;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayGetAtIndex_3_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_4_Result: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_GetTransform_1_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_4_A__IO: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_3_Result: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMakeAbsolute_1_Global: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_1_2_Result: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMakeRelative_1_Local: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_1_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_MathTransformMul_1_2_B__IO: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_1_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Reverse_Foot___Forward_Reverse_Foot_HierarchyGetParent_Parent: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ArrayGetAtIndex_Element: UE.RigElementKey;
            Forward_Reverse_Foot___Forward_Reverse_Foot_HierarchyGetParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_HierarchyGetParent_CachedParent: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetRotation_Value: UE.Quat;
            Forward_Reverse_Foot___Forward_Reverse_Foot_RigUnit_SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetControlFloat_2_FloatValue: number;
            RigVMModel___RigUnit_GetControlFloat_2_Minimum: number;
            RigVMModel___RigUnit_GetControlFloat_2_Maximum: number;
            RigVMModel___RigUnit_GetControlFloat_2_CachedControlIndex: TArray<UE.CachedRigElement>;
            RigVMModel___Forward_Reverse_Foot_1_Roll_Blend: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_Entry_BK_Buffers: TArray<UE.RigElementKey>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_Entry_BK_Controls: TArray<UE.RigElementKey>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_Entry_Roll_Control: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_Entry_Roll_Buffer: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_Entry_Roll_Clamp: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_Entry_Roll_Blend: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatGreater_Result: boolean;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_GetTransform_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatGreater_A: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_SetControlVisibility_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_1_Index: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_1_Count: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_1_Ratio: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_1_BlockToRun: string;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_SetControlVisibility_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_2_Result: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionFromRotator_Result: UE.Quat;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatClamp_1_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionToRotator_Result: UE.Rotator;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionToRotator_Value: UE.Quat;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatClamp_1_Value: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionFromRotator_Value__IO: UE.Rotator;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_2_A__IO: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_Result: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMakeAbsolute_Global: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_1_Result: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMakeRelative_Local: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_1_B__IO: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayClone_Clone: TArray<UE.RigElementKey>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatMul_1_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatMul_1_B: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_1_1_Result: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_1_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionFromRotator_1_1_Result: UE.Quat;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatNegate_2_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatClamp_2_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatSub_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatNegate_1_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionToRotator_1_Result: UE.Rotator;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_2_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionToRotator_1_Value: UE.Quat;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatNegate_1_Value: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathFloatMul_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathIntToFloat_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_Index: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_If_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathIntEquals_Result: boolean;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathIntSub_Result: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_Count: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathQuaternionFromRotator_1_1_Value__IO: UE.Rotator;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_1_1_B__IO: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetRotation_1_1_Value: UE.Quat;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetRotation_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_Ratio: number;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayIterator_BlockToRun: string;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayGetAtIndex_3_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_4_Result: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_GetTransform_1_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_4_A__IO: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_3_Result: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMakeAbsolute_1_Global: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_1_2_Result: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMakeRelative_1_Local: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_1_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_MathTransformMul_1_2_B__IO: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_1_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_GetTransform_1_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_HierarchyGetParent_Parent: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ArrayGetAtIndex_Element: UE.RigElementKey;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_HierarchyGetParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_HierarchyGetParent_CachedParent: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetRotation_Value: UE.Quat;
            Forward_Reverse_Foot_1___Forward_Reverse_Foot_RigUnit_SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_2_Value: number;
            RigVMModel___RigUnit_GetFloatAnimationChannel_2_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_2_CachedChannelHash: TArray<number>;
            RigVMModel___Forward_Leg_1_Softness: number;
            RigVMModel___RigUnit_GetBoolAnimationChannel_14_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_14_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_14_CachedChannelHash: TArray<number>;
            Forward_Leg_1___Forward_Leg_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Forward_Leg_1___Forward_Leg_Entry_IK_Control: UE.RigElementKey;
            Forward_Leg_1___Forward_Leg_Entry_IK_Effector: UE.RigElementKey;
            Forward_Leg_1___Forward_Leg_Entry_Pole_Vector_Control: UE.RigElementKey;
            Forward_Leg_1___Forward_Leg_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Leg_1___Forward_Leg_Entry_Bones: TArray<UE.RigElementKey>;
            Forward_Leg_1___Forward_Leg_Entry_Softness: number;
            Forward_Leg_1___Forward_Leg_Entry_Enable_Stretch: boolean;
            Forward_Leg_1___Forward_Leg_Entry_Previous_IK_Mode: boolean;
            Forward_Leg_1___Forward_Leg_Entry_Negative_Side: boolean;
            Forward_Leg_1___Forward_Leg_Entry_Pole_Vector_Null: UE.RigElementKey;
            Forward_Leg_1___Forward_Leg_MathFloatGreater_1_Result: boolean;
            Forward_Leg_1___Forward_Leg_GetTransform_1_1_Transform: UE.Transform;
            Forward_Leg_1___Forward_Leg_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Leg_1___Forward_Leg_MathFloatGreater_1_A: number;
            LocalVariable__Forward_Leg_IK_Mode: boolean;
            Forward_Leg_1___Forward_Leg_Set_IKFK_Visibility_IK_Controls__IO: TArray<UE.RigElementKey>;
            Forward_Leg_1___Forward_Leg_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_Entry_Foot_Control: UE.RigElementKey;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_Entry_Root_Bone: UE.RigElementKey;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_Entry_Pole_Vector_Null: UE.RigElementKey;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_Entry_Initial: boolean;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_Result: UE.Transform;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_RigUnit_GetTransform_4_1_Transform: UE.Transform;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_RigUnit_GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_Primary__IO: UE.RigUnit_AimItem_Target;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_Secondary__IO: UE.RigUnit_AimItem_Target;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_AimBoneMath_bIsInitialized: TArray<boolean>;
            Compute_Pole_Vector_Parent___Compute_Pole_Vector_Parent_RigUnit_SetTransform_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Leg_1___Forward_Leg_Branch_BlockToRun: string;
            Forward_Leg_1___Forward_Leg_Set_IKFK_Keys_IK_Controls___IO: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_3_Value: number;
            RigVMModel___RigUnit_GetFloatAnimationChannel_3_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetFloatAnimationChannel_3_CachedChannelHash: TArray<number>;
            RigVMModel___Forward_Leg_Softness: number;
            RigVMModel___RigUnit_GetBoolAnimationChannel_15_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_15_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_15_CachedChannelHash: TArray<number>;
            Forward_Leg___Forward_Leg_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Forward_Leg___Forward_Leg_Entry_IK_Control: UE.RigElementKey;
            Forward_Leg___Forward_Leg_Entry_IK_Effector: UE.RigElementKey;
            Forward_Leg___Forward_Leg_Entry_Pole_Vector_Control: UE.RigElementKey;
            Forward_Leg___Forward_Leg_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Leg___Forward_Leg_Entry_Bones: TArray<UE.RigElementKey>;
            Forward_Leg___Forward_Leg_Entry_Softness: number;
            Forward_Leg___Forward_Leg_Entry_Enable_Stretch: boolean;
            Forward_Leg___Forward_Leg_Entry_Previous_IK_Mode: boolean;
            Forward_Leg___Forward_Leg_Entry_Negative_Side: boolean;
            Forward_Leg___Forward_Leg_Entry_Pole_Vector_Null: UE.RigElementKey;
            Forward_Leg___Forward_Leg_MathFloatGreater_1_Result: boolean;
            Forward_Leg___Forward_Leg_GetTransform_1_1_Transform: UE.Transform;
            Forward_Leg___Forward_Leg_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Leg___Forward_Leg_MathFloatGreater_1_A: number;
            Forward_Leg___Forward_Leg_Set_IKFK_Visibility_IK_Controls__IO: TArray<UE.RigElementKey>;
            Forward_Leg___Forward_Leg_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Forward_Leg___Forward_Leg_Branch_BlockToRun: string;
            Forward_Leg___Forward_Leg_Set_IKFK_Keys_IK_Controls___IO: TArray<UE.RigElementKey>;
            Forward_Foot___Forward_Foot_Entry_IK_Control: UE.RigElementKey;
            Forward_Foot___Forward_Foot_Entry_FK_Control: UE.RigElementKey;
            Forward_Foot___Forward_Foot_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Foot___Forward_Foot_Entry_Toes_Space: UE.RigElementKey;
            Forward_Foot___Forward_Foot_Entry_Bone: UE.RigElementKey;
            Forward_Foot___Forward_Foot_Entry_Previous_IK_Mode: boolean;
            Forward_Foot___Forward_Foot_MathFloatGreater_1_Result: boolean;
            Forward_Foot___Forward_Foot_GetTransform_1_1_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_MathFloatGreater_1_A: number;
            LocalVariable__Forward_Foot_IK_Mode: boolean;
            Forward_Foot___Forward_Foot_SetControlVisibility_4_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Foot___Forward_Foot_MathBoolNot_3_Result: boolean;
            Forward_Foot___Forward_Foot_SetControlVisibility_4_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_SetTransform_13_Value: UE.Quat;
            Forward_Foot___Forward_Foot_SetTransform_13_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_Make_Relative_1_Local: UE.Transform;
            Forward_Foot___Forward_Foot_Make_Absolute_Global: UE.Transform;
            Forward_Foot___Forward_Foot_Add_Result: UE.Vector;
            Forward_Foot___Forward_Foot_Make_Relative_Local: UE.Transform;
            Forward_Foot___Forward_Foot_GetTransform_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_GetTransform_1_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_Add_A: UE.Vector;
            Forward_Foot___Forward_Foot_GetTransform_1_3_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_Add_B: UE.Vector;
            Forward_Foot___Forward_Foot_Make_Absolute_Local__IO: UE.Transform;
            Forward_Foot___Forward_Foot_OffsetTransformForItem_OffsetTransform__IO: UE.Transform;
            Forward_Foot___Forward_Foot_OffsetTransformForItem_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_SetTransform_13_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_Branch_4_1_1_1_BlockToRun: string;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_SetTransform_13_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_SetTransform_13_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_Branch_BlockToRun: string;
            Forward_Foot___Forward_Foot_MathBoolNotEquals_2_1_Result: boolean;
            Forward_Foot___Forward_Foot_Branch_4_1_1_2_BlockToRun: string;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot___Forward_Foot_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_Entry_IK_Control: UE.RigElementKey;
            Forward_Foot_1___Forward_Foot_Entry_FK_Control: UE.RigElementKey;
            Forward_Foot_1___Forward_Foot_Entry_IKFK_Switch_Control: UE.RigElementKey;
            Forward_Foot_1___Forward_Foot_Entry_Toes_Space: UE.RigElementKey;
            Forward_Foot_1___Forward_Foot_Entry_Bone: UE.RigElementKey;
            Forward_Foot_1___Forward_Foot_Entry_Previous_IK_Mode: boolean;
            Forward_Foot_1___Forward_Foot_MathFloatGreater_1_Result: boolean;
            Forward_Foot_1___Forward_Foot_GetTransform_1_1_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_MathFloatGreater_1_A: number;
            Forward_Foot_1___Forward_Foot_SetControlVisibility_4_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Foot_1___Forward_Foot_MathBoolNot_3_Result: boolean;
            Forward_Foot_1___Forward_Foot_SetControlVisibility_4_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_SetTransform_13_Value: UE.Quat;
            Forward_Foot_1___Forward_Foot_SetTransform_13_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_Make_Relative_1_Local: UE.Transform;
            Forward_Foot_1___Forward_Foot_Make_Absolute_Global: UE.Transform;
            Forward_Foot_1___Forward_Foot_Add_Result: UE.Vector;
            Forward_Foot_1___Forward_Foot_Make_Relative_Local: UE.Transform;
            Forward_Foot_1___Forward_Foot_GetTransform_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_GetTransform_1_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_Add_A: UE.Vector;
            Forward_Foot_1___Forward_Foot_GetTransform_1_3_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_Add_B: UE.Vector;
            Forward_Foot_1___Forward_Foot_Make_Absolute_Local__IO: UE.Transform;
            Forward_Foot_1___Forward_Foot_OffsetTransformForItem_OffsetTransform__IO: UE.Transform;
            Forward_Foot_1___Forward_Foot_OffsetTransformForItem_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_SetTransform_13_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_Branch_4_1_1_1_BlockToRun: string;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_SetTransform_13_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_3_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_SetTransform_13_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_Branch_BlockToRun: string;
            Forward_Foot_1___Forward_Foot_MathBoolNotEquals_2_1_Result: boolean;
            Forward_Foot_1___Forward_Foot_Branch_4_1_1_2_BlockToRun: string;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_Transform: UE.Transform;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Foot_1___Forward_Foot_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_16_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_16_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_16_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_17_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_17_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_17_CachedChannelHash: TArray<number>;
            Forward_Fingers_1___Forward_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Forward_Fingers_1___Forward_Fingers_Entry_Metacarpals_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_1___Forward_Fingers_Entry_Auto_Meta: boolean;
            Forward_Fingers_1___Forward_Fingers_Entry_Base_Fingers_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_1___Forward_Fingers_Entry_Auto_Base: boolean;
            Forward_Fingers_1___Forward_Fingers_Entry_Proxy_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_1___Forward_Fingers_ArrayFind_Success: boolean;
            Forward_Fingers_1___Forward_Fingers_IsInteracting_Items: TArray<UE.RigElementKey>;
            Forward_Fingers_1___Forward_Fingers_IsInteracting_bIsInteracting: boolean;
            Forward_Fingers_1___Forward_Fingers_IsInteracting_bIsTranslating: boolean;
            Forward_Fingers_1___Forward_Fingers_IsInteracting_bIsRotating: boolean;
            Forward_Fingers_1___Forward_Fingers_IsInteracting_bIsScaling: boolean;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Fingers_1___Forward_Fingers_ArrayFind_Index: number;
            Forward_Fingers_1___Forward_Fingers_Find_Finger_Controls_Value: string;
            Forward_Fingers_1___Forward_Fingers_Find_Finger_Controls_Items: TArray<UE.RigElementKey>;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_1_Element: UE.RigElementKey;
            Forward_Fingers_1___Forward_Fingers_RigUnit_GetTransform_3_Transform: UE.Transform;
            Forward_Fingers_1___Forward_Fingers_RigUnit_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_1___Forward_Fingers_OffsetTransformForItem_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_1_Index: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_1_Count: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_1_Ratio: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_1_BlockToRun: string;
            Forward_Fingers_1___Forward_Fingers_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_1___Forward_Fingers_Branch_BlockToRun: string;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_Index: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_Count: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_Ratio: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_1_BlockToRun: string;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Forward_Fingers_1___Forward_Fingers_ProjectTransformToNewParent_19_Transform: UE.Transform;
            Forward_Fingers_1___Forward_Fingers_NameConcat_4_2_Result: string;
            Forward_Fingers_1___Forward_Fingers_NameConcat_4_2_A: string;
            Forward_Fingers_1___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__IO: UE.RigElementKey;
            Forward_Fingers_1___Forward_Fingers_ProjectTransformToNewParent_19_NewParent__IO: UE.RigElementKey;
            Forward_Fingers_1___Forward_Fingers_ProjectTransformToNewParent_19_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Fingers_1___Forward_Fingers_ProjectTransformToNewParent_19_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Fingers_1___Forward_Fingers_ProjectTransformToNewParent_19_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Fingers_1___Forward_Fingers_SetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_Index: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_Count: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_Ratio: number;
            Forward_Fingers_1___Forward_Fingers_ArrayIterator_BlockToRun: string;
            Forward_Fingers_5___Forward_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Forward_Fingers_5___Forward_Fingers_Entry_Metacarpals_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_5___Forward_Fingers_Entry_Auto_Meta: boolean;
            Forward_Fingers_5___Forward_Fingers_Entry_Base_Fingers_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_5___Forward_Fingers_Entry_Auto_Base: boolean;
            Forward_Fingers_5___Forward_Fingers_Entry_Proxy_Controls: TArray<UE.RigElementKey>;
            Forward_Fingers_5___Forward_Fingers_ArrayFind_Success: boolean;
            Forward_Fingers_5___Forward_Fingers_IsInteracting_Items: TArray<UE.RigElementKey>;
            Forward_Fingers_5___Forward_Fingers_IsInteracting_bIsInteracting: boolean;
            Forward_Fingers_5___Forward_Fingers_IsInteracting_bIsTranslating: boolean;
            Forward_Fingers_5___Forward_Fingers_IsInteracting_bIsRotating: boolean;
            Forward_Fingers_5___Forward_Fingers_IsInteracting_bIsScaling: boolean;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_Element: UE.RigElementKey;
            Forward_Fingers_5___Forward_Fingers_ArrayFind_Index: number;
            Forward_Fingers_5___Forward_Fingers_Find_Finger_Controls_Value: string;
            Forward_Fingers_5___Forward_Fingers_Find_Finger_Controls_Items: TArray<UE.RigElementKey>;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_1_Element: UE.RigElementKey;
            Forward_Fingers_5___Forward_Fingers_RigUnit_GetTransform_3_Transform: UE.Transform;
            Forward_Fingers_5___Forward_Fingers_RigUnit_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_5___Forward_Fingers_OffsetTransformForItem_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_1_Index: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_1_Count: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_1_Ratio: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_1_BlockToRun: string;
            Forward_Fingers_5___Forward_Fingers_RigUnit_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_5___Forward_Fingers_Branch_BlockToRun: string;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_Index: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_Count: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_Ratio: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_1_BlockToRun: string;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Forward_Fingers_5___Forward_Fingers_ProjectTransformToNewParent_19_Transform: UE.Transform;
            Forward_Fingers_5___Forward_Fingers_NameConcat_4_2_Result: string;
            Forward_Fingers_5___Forward_Fingers_NameConcat_4_2_A: string;
            Forward_Fingers_5___Forward_Fingers_ProjectTransformToNewParent_19_OldParent__IO: UE.RigElementKey;
            Forward_Fingers_5___Forward_Fingers_ProjectTransformToNewParent_19_NewParent__IO: UE.RigElementKey;
            Forward_Fingers_5___Forward_Fingers_ProjectTransformToNewParent_19_CachedChild: TArray<UE.CachedRigElement>;
            Forward_Fingers_5___Forward_Fingers_ProjectTransformToNewParent_19_CachedOldParent: TArray<UE.CachedRigElement>;
            Forward_Fingers_5___Forward_Fingers_ProjectTransformToNewParent_19_CachedNewParent: TArray<UE.CachedRigElement>;
            Forward_Fingers_5___Forward_Fingers_SetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_Index: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_Count: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_Ratio: number;
            Forward_Fingers_5___Forward_Fingers_ArrayIterator_BlockToRun: string;
            RigVMModel___ArrayIterator_1_1_Element: UE.RigElementKey;
            RigVMModel___RigUnit_GetBoolAnimationChannel_22_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_22_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_22_CachedChannelHash: TArray<number>;
            RigVMModel___SetControlVisibility_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            RigVMModel___ArrayIterator_1_1_Index: number;
            RigVMModel___ArrayIterator_1_1_Count: number;
            RigVMModel___ArrayIterator_1_1_Ratio: number;
            RigVMModel___ArrayIterator_1_1_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_19_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_19_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_19_CachedChannelHash: TArray<number>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_21_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_21_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_21_CachedChannelHash: TArray<number>;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_Entry_IKFK_Switch: boolean;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_Entry_Show_Controls: boolean;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_If_1_Result: boolean;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_MathBoolNot_1_Result: boolean;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_SetControlVisibility_2_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_Index: number;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_Count: number;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_Ratio: number;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_BlockToRun: string;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_If_Result: boolean;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_SetControlVisibility_2_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Index: number;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Count: number;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Ratio: number;
            Set_IKFK_Visibility_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_18_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_18_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_18_CachedChannelHash: TArray<number>;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_Entry_IKFK_Switch: boolean;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_Entry_Show_Controls: boolean;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_If_1_Result: boolean;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_MathBoolNot_1_Result: boolean;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_SetControlVisibility_2_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Index: number;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Count: number;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Ratio: number;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_BlockToRun: string;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_If_Result: boolean;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_SetControlVisibility_2_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Index: number;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Count: number;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Ratio: number;
            Set_IKFK_Visibility_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_20_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_20_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_20_CachedChannelHash: TArray<number>;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_Entry_IKFK_Switch: boolean;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_Entry_Show_Controls: boolean;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_If_1_Result: boolean;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_MathBoolNot_1_Result: boolean;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_SetControlVisibility_2_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_Index: number;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_Count: number;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_Ratio: number;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_BlockToRun: string;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_If_Result: boolean;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_SetControlVisibility_2_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_1_Index: number;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_1_Count: number;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_1_Ratio: number;
            Set_IKFK_Visibility_1_2___Set_IKFK_Visibility_ArrayIterator_2_1_1_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_23_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_23_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_23_CachedChannelHash: TArray<number>;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_Entry_IKFK_Switch: boolean;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_Entry_Show_Controls: boolean;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_If_1_Result: boolean;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_MathBoolNot_1_Result: boolean;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_SetControlVisibility_2_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_Index: number;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_Count: number;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_Ratio: number;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_BlockToRun: string;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_If_Result: boolean;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_SetControlVisibility_2_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Index: number;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Count: number;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Ratio: number;
            Set_IKFK_Visibility_1_2_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_BlockToRun: string;
            RigVMModel___RigUnit_GetBoolAnimationChannel_24_Value: boolean;
            RigVMModel___RigUnit_GetBoolAnimationChannel_24_CachedChannelKey: TArray<UE.RigElementKey>;
            RigVMModel___RigUnit_GetBoolAnimationChannel_24_CachedChannelHash: TArray<number>;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_Entry_IKFK_Switch: boolean;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_Entry_Show_Controls: boolean;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_If_1_Result: boolean;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_MathBoolNot_1_Result: boolean;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_SetControlVisibility_2_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Index: number;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Count: number;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_Ratio: number;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_BlockToRun: string;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Element: UE.RigElementKey;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_If_Result: boolean;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_SetControlVisibility_2_1_CachedControlIndices: TArray<TArray<UE.CachedRigElement>>;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Index: number;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Count: number;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_Ratio: number;
            Set_IKFK_Visibility_1_2_1_1___Set_IKFK_Visibility_ArrayIterator_2_1_1_BlockToRun: string;
            RigVMModel___GetTransform_9_Transform: UE.Transform;
            RigVMModel___GetTransform_9_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_14_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_19_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ProjectTransformToNewParent_21_2_Transform: UE.Transform;
            RigVMModel___ProjectTransformToNewParent_21_2_CachedChild: TArray<UE.CachedRigElement>;
            RigVMModel___ProjectTransformToNewParent_21_2_CachedOldParent: TArray<UE.CachedRigElement>;
            RigVMModel___ProjectTransformToNewParent_21_2_CachedNewParent: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_15_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Spine___Backward_Spine_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Backward_Spine___Backward_Spine_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Backward_Spine___Backward_Spine_Entry_Pelvis_Bone: UE.RigElementKey;
            Backward_Spine___Backward_Spine_Entry_Offsets: TArray<UE.Transform>;
            Project_to_New_Parent_1___Project_to_New_Parents_Entry_Propagate_to_Children: boolean;
            Project_to_New_Parent_1___Project_to_New_Parents_ArrayIterator_3_Element: UE.RigElementKey;
            Project_to_New_Parent_1___Project_to_New_Parents_ProjectTransformToNewParent_12_1_Transform: UE.Transform;
            Project_to_New_Parent_1___Project_to_New_Parents_ArrayGetAtIndex_6_Element: UE.RigElementKey;
            Project_to_New_Parent_1___Project_to_New_Parents_ArrayIterator_3_Index: number;
            Project_to_New_Parent_1___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedChild: TArray<UE.CachedRigElement>;
            Project_to_New_Parent_1___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parent_1___Project_to_New_Parents_ProjectTransformToNewParent_12_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Project_to_New_Parent_1___Project_to_New_Parents_SetTransform_10_1_1_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Project_to_New_Parent_1___Project_to_New_Parents_ArrayIterator_3_Count: number;
            Project_to_New_Parent_1___Project_to_New_Parents_ArrayIterator_3_Ratio: number;
            Project_to_New_Parent_1___Project_to_New_Parents_ArrayIterator_3_BlockToRun: string;
            Backward_Spine___Backward_Spine_ArrayGetAtIndex_Element: UE.RigElementKey;
            Backward_Spine___Backward_Spine_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Spine___Backward_Spine_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Spine___Backward_Spine_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Spine___Backward_Spine_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Spine___Backward_Spine_RigUnit_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Backward_Neck_1___Backward_Neck_Entry_IK_Control: UE.RigElementKey;
            Backward_Neck_1___Backward_Neck_Entry_Head_FK_Space: UE.RigElementKey;
            Backward_Neck_1___Backward_Neck_Entry_Head_IK_Space: UE.RigElementKey;
            Backward_Neck_1___Backward_Neck_Entry_Head_Orient_Reference: UE.RigElementKey;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_Transform: UE.Transform;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_Transform: UE.Transform;
            Backward_Neck_1___Backward_Neck_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_SetTransform_1_Value__IO: UE.Transform;
            Backward_Neck_1___Backward_Neck_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_1_2_Transform: UE.Transform;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_1_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_2_Transform: UE.Transform;
            Backward_Neck_1___Backward_Neck_HierarchyGetParent_Parent: UE.RigElementKey;
            Backward_Neck_1___Backward_Neck_HierarchyGetParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_HierarchyGetParent_CachedParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_SetTransform_2_Value__IO: UE.Transform;
            Backward_Neck_1___Backward_Neck_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Neck_1___Backward_Neck_ArrayGetAtIndex_Element: UE.RigElementKey;
            Backward_Neck_1___Backward_Neck_MathIntSub_Result: number;
            Backward_Neck_1___Backward_Neck_ArrayGetNum_Num: number;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Neck_1___Backward_Neck_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Clavicle_1___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_Transform: UE.Transform;
            Backward_Clavicle_1___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Clavicle_1___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Clavicle_1___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Clavicle_1___Backward_Clavicle_SetTransform_17_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Clavicle___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_Transform: UE.Transform;
            Backward_Clavicle___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Clavicle___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Clavicle___Backward_Clavicle_ProjectTransformToNewParent_22_1_1_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Clavicle___Backward_Clavicle_SetTransform_17_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Backward_Arm___Backward_Arm_Entry_Bones: TArray<UE.RigElementKey>;
            Backward_Arm___Backward_Arm_Entry_Ik_Control: UE.RigElementKey;
            Backward_Arm___Backward_Arm_Entry_UpV_Control: UE.RigElementKey;
            Backward_Arm___Backward_Arm_Entry_FK_Orient_References: TArray<UE.RigElementKey>;
            Backward_Arm___Backward_Arm_Entry_Fingers_Space: UE.RigElementKey;
            Backward_Arm___Backward_Arm_Entry_FK_Arm_Space: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_Transform: UE.Transform;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_Transform: UE.Transform;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_SetTransform_25_Value__IO: UE.Transform;
            Backward_Arm___Backward_Arm_SetTransform_25_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ArrayIterator_2_Element: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_Element: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ArrayIterator_2_Index: number;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ArrayIterator_2_Count: number;
            Backward_Arm___Backward_Arm_ArrayIterator_2_Ratio: number;
            Backward_Arm___Backward_Arm_ArrayIterator_2_BlockToRun: string;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_Transform: UE.Transform;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_SetTransform_21_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_1_3_Transform: UE.Transform;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_1_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_1_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_1_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_SetTransform_20_3_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_1_Transform: UE.Transform;
            Backward_Arm___Backward_Arm_ArrayGetAtIndex_1_1_1_Element: UE.RigElementKey;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_ProjectTransformToNewParent_24_3_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm___Backward_Arm_SetTransform_21_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Backward_Arm_1___Backward_Arm_Entry_Bones: TArray<UE.RigElementKey>;
            Backward_Arm_1___Backward_Arm_Entry_Ik_Control: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_Entry_UpV_Control: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_Entry_FK_Orient_References: TArray<UE.RigElementKey>;
            Backward_Arm_1___Backward_Arm_Entry_Fingers_Space: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_Entry_FK_Arm_Space: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_Transform: UE.Transform;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_Transform: UE.Transform;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_2_1_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_SetTransform_25_Value__IO: UE.Transform;
            Backward_Arm_1___Backward_Arm_SetTransform_25_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ArrayIterator_2_Element: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_Element: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ArrayIterator_2_Index: number;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ArrayIterator_2_Count: number;
            Backward_Arm_1___Backward_Arm_ArrayIterator_2_Ratio: number;
            Backward_Arm_1___Backward_Arm_ArrayIterator_2_BlockToRun: string;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_Transform: UE.Transform;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_SetTransform_21_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_1_3_Transform: UE.Transform;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_1_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_1_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_1_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_SetTransform_20_3_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_1_Transform: UE.Transform;
            Backward_Arm_1___Backward_Arm_ArrayGetAtIndex_1_1_1_Element: UE.RigElementKey;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_ProjectTransformToNewParent_24_3_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Arm_1___Backward_Arm_SetTransform_21_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Fingers___Backward_Fingers_NameConcat_4_1_Result: string;
            Backward_Fingers___Backward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Backward_Fingers___Backward_Fingers_NameConcat_4_1_A: string;
            Backward_Fingers___Backward_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Backward_Fingers___Backward_Fingers_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Fingers___Backward_Fingers_ProjectTransformToNewParent_Child__IO: UE.RigElementKey;
            Backward_Fingers___Backward_Fingers_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Fingers___Backward_Fingers_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Fingers___Backward_Fingers_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Fingers___Backward_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Fingers___Backward_Fingers_ArrayIterator_Index: number;
            Backward_Fingers___Backward_Fingers_ArrayIterator_Count: number;
            Backward_Fingers___Backward_Fingers_ArrayIterator_Ratio: number;
            Backward_Fingers___Backward_Fingers_ArrayIterator_BlockToRun: string;
            Backward_Fingers_1___Backward_Fingers_NameConcat_4_1_Result: string;
            Backward_Fingers_1___Backward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Backward_Fingers_1___Backward_Fingers_NameConcat_4_1_A: string;
            Backward_Fingers_1___Backward_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Backward_Fingers_1___Backward_Fingers_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Fingers_1___Backward_Fingers_ProjectTransformToNewParent_Child__IO: UE.RigElementKey;
            Backward_Fingers_1___Backward_Fingers_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Fingers_1___Backward_Fingers_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Fingers_1___Backward_Fingers_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Fingers_1___Backward_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Fingers_1___Backward_Fingers_ArrayIterator_Index: number;
            Backward_Fingers_1___Backward_Fingers_ArrayIterator_Count: number;
            Backward_Fingers_1___Backward_Fingers_ArrayIterator_Ratio: number;
            Backward_Fingers_1___Backward_Fingers_ArrayIterator_BlockToRun: string;
            RigVMModel___ArrayIterator_2_Element: UE.RigElementKey;
            RigVMModel___ProjectTransformToNewParent_24_4_Transform: UE.Transform;
            RigVMModel___ProjectTransformToNewParent_24_4_CachedChild: TArray<UE.CachedRigElement>;
            RigVMModel___ProjectTransformToNewParent_24_4_CachedOldParent: TArray<UE.CachedRigElement>;
            RigVMModel___ProjectTransformToNewParent_24_4_CachedNewParent: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_16_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Backward_Leg___Backward_Leg_Entry_Bones: TArray<UE.RigElementKey>;
            Backward_Leg___Backward_Leg_Entry_Ik_Control: UE.RigElementKey;
            Backward_Leg___Backward_Leg_Entry_Pole_Vector_Control: UE.RigElementKey;
            Backward_Leg___Backward_Leg_Entry_Pole_Vector_Null: UE.RigElementKey;
            Backward_Leg___Backward_Leg_ArrayIterator_2_Element: UE.RigElementKey;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Leg___Backward_Leg_ArrayGetAtIndex_Element: UE.RigElementKey;
            Backward_Leg___Backward_Leg_ArrayIterator_2_Index: number;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ArrayIterator_2_Count: number;
            Backward_Leg___Backward_Leg_ArrayIterator_2_Ratio: number;
            Backward_Leg___Backward_Leg_ArrayIterator_2_BlockToRun: string;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_1_3_Transform: UE.Transform;
            Backward_Leg___Backward_Leg_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_1_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_1_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_1_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_SetTransform_20_3_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_3_Transform: UE.Transform;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_ProjectTransformToNewParent_24_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Leg___Backward_Leg_SetTransform_21_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Backward_Leg_1___Backward_Leg_Entry_Bones: TArray<UE.RigElementKey>;
            Backward_Leg_1___Backward_Leg_Entry_Ik_Control: UE.RigElementKey;
            Backward_Leg_1___Backward_Leg_Entry_Pole_Vector_Control: UE.RigElementKey;
            Backward_Leg_1___Backward_Leg_Entry_Pole_Vector_Null: UE.RigElementKey;
            Backward_Leg_1___Backward_Leg_ArrayIterator_2_Element: UE.RigElementKey;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Leg_1___Backward_Leg_ArrayGetAtIndex_Element: UE.RigElementKey;
            Backward_Leg_1___Backward_Leg_ArrayIterator_2_Index: number;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ArrayIterator_2_Count: number;
            Backward_Leg_1___Backward_Leg_ArrayIterator_2_Ratio: number;
            Backward_Leg_1___Backward_Leg_ArrayIterator_2_BlockToRun: string;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_1_3_Transform: UE.Transform;
            Backward_Leg_1___Backward_Leg_ArrayGetAtIndex_1_1_Element: UE.RigElementKey;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_1_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_1_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_1_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_SetTransform_20_3_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_3_Transform: UE.Transform;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_3_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_3_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_ProjectTransformToNewParent_24_3_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Leg_1___Backward_Leg_SetTransform_21_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_Entry_FK_Control: UE.RigElementKey;
            Backward_Foot_1___Backward_Foot_Entry_IK_Control: UE.RigElementKey;
            Backward_Foot_1___Backward_Foot_Entry_Toes_Space: UE.RigElementKey;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_Transform: UE.Transform;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_SetTransform_20_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_Transform: UE.Transform;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_ProjectTransformToNewParent_24_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_SetTransform_20_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_GetTransform_1_Transform: UE.Transform;
            Backward_Foot_1___Backward_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot_1___Backward_Foot_SetTransform_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_Entry_FK_Control: UE.RigElementKey;
            Backward_Foot___Backward_Foot_Entry_IK_Control: UE.RigElementKey;
            Backward_Foot___Backward_Foot_Entry_Toes_Space: UE.RigElementKey;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_Transform: UE.Transform;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_1_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_SetTransform_20_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_Transform: UE.Transform;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_ProjectTransformToNewParent_24_1_2_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_SetTransform_20_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_GetTransform_1_Transform: UE.Transform;
            Backward_Foot___Backward_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Foot___Backward_Foot_SetTransform_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Fingers_2___Backward_Fingers_NameConcat_4_1_Result: string;
            Backward_Fingers_2___Backward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Backward_Fingers_2___Backward_Fingers_NameConcat_4_1_A: string;
            Backward_Fingers_2___Backward_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Backward_Fingers_2___Backward_Fingers_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Fingers_2___Backward_Fingers_ProjectTransformToNewParent_Child__IO: UE.RigElementKey;
            Backward_Fingers_2___Backward_Fingers_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Fingers_2___Backward_Fingers_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Fingers_2___Backward_Fingers_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Fingers_2___Backward_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Fingers_2___Backward_Fingers_ArrayIterator_Index: number;
            Backward_Fingers_2___Backward_Fingers_ArrayIterator_Count: number;
            Backward_Fingers_2___Backward_Fingers_ArrayIterator_Ratio: number;
            Backward_Fingers_2___Backward_Fingers_ArrayIterator_BlockToRun: string;
            Backward_Fingers_1_1___Backward_Fingers_NameConcat_4_1_Result: string;
            Backward_Fingers_1_1___Backward_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Backward_Fingers_1_1___Backward_Fingers_NameConcat_4_1_A: string;
            Backward_Fingers_1_1___Backward_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Backward_Fingers_1_1___Backward_Fingers_ProjectTransformToNewParent_Transform: UE.Transform;
            Backward_Fingers_1_1___Backward_Fingers_ProjectTransformToNewParent_Child__IO: UE.RigElementKey;
            Backward_Fingers_1_1___Backward_Fingers_ProjectTransformToNewParent_CachedChild: TArray<UE.CachedRigElement>;
            Backward_Fingers_1_1___Backward_Fingers_ProjectTransformToNewParent_CachedOldParent: TArray<UE.CachedRigElement>;
            Backward_Fingers_1_1___Backward_Fingers_ProjectTransformToNewParent_CachedNewParent: TArray<UE.CachedRigElement>;
            Backward_Fingers_1_1___Backward_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Backward_Fingers_1_1___Backward_Fingers_ArrayIterator_Index: number;
            Backward_Fingers_1_1___Backward_Fingers_ArrayIterator_Count: number;
            Backward_Fingers_1_1___Backward_Fingers_ArrayIterator_Ratio: number;
            Backward_Fingers_1_1___Backward_Fingers_ArrayIterator_BlockToRun: string;
            RigVMModel___ArrayIterator_2_Index: number;
            RigVMModel___ArrayIterator_2_Count: number;
            RigVMModel___ArrayIterator_2_Ratio: number;
            RigVMModel___ArrayIterator_2_BlockToRun: string;
            RigVMModel___MathTransformLerp_Result: UE.Transform;
            RigVMModel___GetTransform_5_Transform: UE.Transform;
            RigVMModel___GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_5_1_Transform: UE.Transform;
            RigVMModel___GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_SetTransform_Value__IO: UE.Transform;
            RigVMModel___RigUnit_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___Setup_Spine_Spline_Offsets: TArray<UE.Transform>;
            RigVMModel___Setup_Spine_Length: number;
            Setup_Spine___Setup_Spine_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Setup_Spine___Setup_Spine_Entry_IK_Controls: TArray<UE.RigElementKey>;
            Setup_Spine___Setup_Spine_Return_Spline_Offsets: TArray<UE.Transform>;
            Setup_Spine___Setup_Spine_Entry_Chest_Space: UE.RigElementKey;
            Setup_Spine___Setup_Spine_Return_Length: number;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_Element: UE.Transform;
            Setup_Spine___Setup_Spine_GetTransformItemArray_Transforms: TArray<UE.Transform>;
            Setup_Spine___Setup_Spine_GetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Point_0: UE.Vector;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_1_Element: UE.Transform;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Point_1: UE.Vector;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_2_Element: UE.Transform;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Point_2: UE.Vector;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_4_3_Element: UE.Transform;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Point_3: UE.Vector;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Control_Points: TArray<UE.Vector>;
            Setup_Spine___Setup_Spine_BSpline_Passing_thru_4_Points_1_Spline: UE.ControlRigSpline;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_Element: UE.RigElementKey;
            Setup_Spine___Setup_Spine_ArrayIterator_Index: number;
            Setup_Spine___Setup_Spine_GetTransform_15_Transform: UE.Transform;
            Setup_Spine___Setup_Spine_ArrayIterator_Element: UE.RigElementKey;
            Setup_Spine___Setup_Spine_GetTransform_15_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Spine___Setup_Spine_SetTransform_28_Value__IO: UE.Transform;
            Setup_Spine___Setup_Spine_SetTransform_28_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_2_Element: UE.Vector;
            Setup_Spine___Setup_Spine_SetTransform_28_2_Value__IO: UE.Transform;
            Setup_Spine___Setup_Spine_SetTransform_28_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Spine___Setup_Spine_ArrayIterator_Count: number;
            Setup_Spine___Setup_Spine_ArrayIterator_Ratio: number;
            Setup_Spine___Setup_Spine_ArrayIterator_BlockToRun: string;
            Setup_Spine___Setup_Spine_MathTransformMakeRelative_Local: UE.Transform;
            Setup_Spine___Setup_Spine_GetTransform_Transform: UE.Transform;
            Setup_Spine___Setup_Spine_ArrayIterator_1_Element: UE.RigElementKey;
            Setup_Spine___Setup_Spine_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Spine___Setup_Spine_TransformFromControlRigSpline_Transform: UE.Transform;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ControlRigSplineFromPoints_Spline: UE.ControlRigSpline;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ArrayGetAtIndex_Element: UE.Transform;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_GetTransformItemArray_Transforms: TArray<UE.Transform>;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_GetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ArrayGetAtIndex_2_Element: UE.Transform;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ArrayGetAtIndex_3_Element: UE.Transform;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ArrayGetAtIndex_4_Element: UE.Transform;
            Setup_Spine___Setup_Spine_Spline_From_Element_Setup_ControlRigSplineFromPoints_Points__IO: TArray<UE.Vector>;
            Setup_Spine___Setup_Spine_ArrayIterator_1_Ratio: number;
            Setup_Spine___Setup_Spine_ArrayAdd_Index: number;
            Setup_Spine___Setup_Spine_ArrayIterator_1_Index: number;
            Setup_Spine___Setup_Spine_ArrayIterator_1_Count: number;
            Setup_Spine___Setup_Spine_ArrayIterator_1_BlockToRun: string;
            Setup_Spine___Setup_Spine_GetTransform_1_Transform: UE.Transform;
            Setup_Spine___Setup_Spine_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Setup_Spine___Setup_Spine_MathIntSub_Result: number;
            Setup_Spine___Setup_Spine_ArrayGetNum_Num: number;
            Setup_Spine___Setup_Spine_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Spine___Setup_Spine_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___Setup_Neck_1_Length: number;
            Setup_Neck_1___Setup_Neck_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Setup_Neck_1___Setup_Neck_Entry_IK_Control: UE.RigElementKey;
            Setup_Neck_1___Setup_Neck_Entry_Head_FK_Space: UE.RigElementKey;
            Setup_Neck_1___Setup_Neck_Return_Length: number;
            Setup_Neck_1___Setup_Neck_Entry_Head_IK_Space: UE.RigElementKey;
            Setup_Neck_1___Setup_Neck_GetTransform_Transform: UE.Transform;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Setup_Neck_1___Setup_Neck_MathIntSub_Result: number;
            Setup_Neck_1___Setup_Neck_ArrayGetNum_Num: number;
            Setup_Neck_1___Setup_Neck_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Neck_1___Setup_Neck_SetTransform_Value__IO: UE.Transform;
            Setup_Neck_1___Setup_Neck_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Neck_1___Setup_Neck_SetTransform_1_Value__IO: UE.Transform;
            Setup_Neck_1___Setup_Neck_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Neck_1___Setup_Neck_ArrayIterator_Element: UE.RigElementKey;
            Setup_Neck_1___Setup_Neck_GetTransform_15_Transform: UE.Transform;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_Element: UE.RigElementKey;
            Setup_Neck_1___Setup_Neck_ArrayIterator_Index: number;
            Setup_Neck_1___Setup_Neck_GetTransform_15_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Neck_1___Setup_Neck_SetTransform_28_Value__IO: UE.Transform;
            Setup_Neck_1___Setup_Neck_SetTransform_28_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Neck_1___Setup_Neck_ArrayIterator_Count: number;
            Setup_Neck_1___Setup_Neck_ArrayIterator_Ratio: number;
            Setup_Neck_1___Setup_Neck_ArrayIterator_BlockToRun: string;
            Setup_Neck_1___Setup_Neck_GetTransform_15_1_Transform: UE.Transform;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Setup_Neck_1___Setup_Neck_MathIntSub_1_Result: number;
            Setup_Neck_1___Setup_Neck_ArrayGetNum_1_Num: number;
            Setup_Neck_1___Setup_Neck_GetTransform_15_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Neck_1___Setup_Neck_SetTransform_28_1_Value__IO: UE.Transform;
            Setup_Neck_1___Setup_Neck_SetTransform_28_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Neck_1___Setup_Neck_ControlRigSplineFromPoints_Spline: UE.ControlRigSpline;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_3_Element: UE.Transform;
            Setup_Neck_1___Setup_Neck_GetTransformItemArray_Transforms: TArray<UE.Transform>;
            Setup_Neck_1___Setup_Neck_GetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_3_1_Element: UE.Transform;
            Setup_Neck_1___Setup_Neck_ArrayGetAtIndex_3_2_Element: UE.Transform;
            Setup_Neck_1___Setup_Neck_ControlRigSplineFromPoints_Points__IO: TArray<UE.Vector>;
            Setup_Clavicle___Setup_Clavicle_Entry_Negative_Side: boolean;
            Setup_Clavicle___Setup_Clavicle_If_2_Result: UE.Transform;
            Setup_Clavicle___Setup_Clavicle_GetTransform_Transform: UE.Transform;
            Setup_Clavicle___Setup_Clavicle_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Clavicle___Setup_Clavicle_Get_Negative_Transform_1_Output: UE.Transform;
            Get_Negative_Transform_1___Get_Negative_Transform_MathQuaternionFromRotator_Result: UE.Quat;
            Get_Negative_Transform_1___Get_Negative_Transform_MathQuaternionToRotator_Result: UE.Rotator;
            Get_Negative_Transform_1___Get_Negative_Transform_MathQuaternionToRotator_Value: UE.Quat;
            Get_Negative_Transform_1___Get_Negative_Transform_MathFloatAdd_Result: number;
            Get_Negative_Transform_1___Get_Negative_Transform_MathFloatAdd_A: number;
            Get_Negative_Transform_1___Get_Negative_Transform_MathQuaternionFromRotator_Value__IO: UE.Rotator;
            Get_Negative_Transform_1___Get_Negative_Transform_MathFloatNegate_Result: number;
            Get_Negative_Transform_1___Get_Negative_Transform_MathFloatNegate_Value: number;
            Setup_Clavicle___Setup_Clavicle_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Clavicle_1___Setup_Clavicle_Entry_Negative_Side: boolean;
            Setup_Clavicle_1___Setup_Clavicle_If_2_Result: UE.Transform;
            Setup_Clavicle_1___Setup_Clavicle_GetTransform_Transform: UE.Transform;
            Setup_Clavicle_1___Setup_Clavicle_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Clavicle_1___Setup_Clavicle_Get_Negative_Transform_1_Output: UE.Transform;
            Setup_Clavicle_1___Setup_Clavicle_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm___Setup_Arm_Entry_FK_Space: UE.RigElementKey;
            Setup_Arm___Setup_Arm_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Setup_Arm___Setup_Arm_Entry_IK_Control: UE.RigElementKey;
            Setup_Arm___Setup_Arm_Entry_Pole_Vector_Control: UE.RigElementKey;
            Setup_Arm___Setup_Arm_Entry_Fingers_Space: UE.RigElementKey;
            Setup_Arm___Setup_Arm_Entry_IK_Parents: TArray<UE.RigElementKey>;
            Setup_Arm___Setup_Arm_Entry_Negative_Side: boolean;
            LocalVariable__Setup_Arm_Transforms: TArray<UE.Transform>;
            Setup_Arm___Setup_Arm_ArrayGetNum_Num: number;
            Setup_Arm___Setup_Arm_If_2_Result: UE.Transform;
            Setup_Arm___Setup_Arm_Get_Negative_Transform_Output: UE.Transform;
            Setup_Arm___Setup_Arm_ArrayIterator_2_Element: UE.Transform;
            Setup_Arm___Setup_Arm_ArrayIterator_2_Index: number;
            Setup_Arm___Setup_Arm_If_3_Result: UE.Quat;
            Setup_Arm___Setup_Arm_MathIntEquals_1_Result: boolean;
            Setup_Arm___Setup_Arm_MathIntSub_1_Result: number;
            Setup_Arm___Setup_Arm_ArrayIterator_2_Count: number;
            Setup_Arm___Setup_Arm_MathQuaternionFromRotator_2_Result: UE.Quat;
            Setup_Arm___Setup_Arm_MathQuaternionToRotator_2_Result: UE.Rotator;
            Setup_Arm___Setup_Arm_MathQuaternionToRotator_2_Value: UE.Quat;
            Setup_Arm___Setup_Arm_MathFloatAdd_2_Result: number;
            Setup_Arm___Setup_Arm_MathFloatAdd_2_A: number;
            Setup_Arm___Setup_Arm_MathQuaternionFromRotator_2_Value__IO: UE.Rotator;
            Setup_Arm___Setup_Arm_ArraySetAtIndex_Element__IO: UE.Transform;
            Setup_Arm___Setup_Arm_GetTransformItemArray_1_Transforms: TArray<UE.Transform>;
            Setup_Arm___Setup_Arm_GetTransformItemArray_1_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Arm___Setup_Arm_ArrayIterator_2_Ratio: number;
            Setup_Arm___Setup_Arm_ArrayIterator_2_BlockToRun: string;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_4_Element: UE.Transform;
            Setup_Arm___Setup_Arm_SetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm___Setup_Arm_SetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Arm___Setup_Arm_If_2_1_Result: UE.Transform;
            Setup_Arm___Setup_Arm_GetTransform_Transform: UE.Transform;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_Element: UE.RigElementKey;
            Setup_Arm___Setup_Arm_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm___Setup_Arm_Get_Negative_Transform_0_Output: UE.Transform;
            Get_Negative_Transform_0___Get_Negative_Transform_MathQuaternionFromRotator_Result: UE.Quat;
            Get_Negative_Transform_0___Get_Negative_Transform_MathQuaternionToRotator_Result: UE.Rotator;
            Get_Negative_Transform_0___Get_Negative_Transform_MathQuaternionToRotator_Value: UE.Quat;
            Get_Negative_Transform_0___Get_Negative_Transform_MathFloatAdd_Result: number;
            Get_Negative_Transform_0___Get_Negative_Transform_MathFloatAdd_A: number;
            Get_Negative_Transform_0___Get_Negative_Transform_MathQuaternionFromRotator_Value__IO: UE.Rotator;
            Get_Negative_Transform_0___Get_Negative_Transform_MathFloatNegate_Result: number;
            Get_Negative_Transform_0___Get_Negative_Transform_MathFloatNegate_Value: number;
            Setup_Arm___Setup_Arm_SetTransform_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm___Setup_Arm_MathTransformMul_Result: UE.Transform;
            Setup_Arm___Setup_Arm_MathFloatNegate_Result: number;
            Setup_Arm___Setup_Arm_MathFloatDiv_Result: number;
            Setup_Arm___Setup_Arm_MathVectorDistance_Result: number;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_1_Element: UE.Transform;
            Setup_Arm___Setup_Arm_MathVectorDistance_A: UE.Vector;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_2_1_Element: UE.Transform;
            Setup_Arm___Setup_Arm_MathVectorDistance_B: UE.Vector;
            Setup_Arm___Setup_Arm_MathTransformMul_A__IO: UE.Transform;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_3_Element: UE.Transform;
            Setup_Arm___Setup_Arm_If_1_Result: UE.Vector;
            Setup_Arm___Setup_Arm_SetTransform_1_Value__IO: UE.Transform;
            Setup_Arm___Setup_Arm_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm___Setup_Arm_ArrayGetAtIndex_4_1_Element: UE.Transform;
            Setup_Arm___Setup_Arm_MathIntSub_Result: number;
            Setup_Arm___Setup_Arm_ArrayGetNum_1_Num: number;
            Setup_Arm___Setup_Arm_SetTransform_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm___Setup_Arm_ArrayIterator_Element: UE.RigElementKey;
            Setup_Arm___Setup_Arm_ArrayIterator_Index: number;
            Setup_Arm___Setup_Arm_ArrayIterator_Count: number;
            Setup_Arm___Setup_Arm_ArrayIterator_Ratio: number;
            Setup_Arm___Setup_Arm_ArrayIterator_BlockToRun: string;
            Setup_Arm_1___Setup_Arm_Entry_FK_Space: UE.RigElementKey;
            Setup_Arm_1___Setup_Arm_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Setup_Arm_1___Setup_Arm_Entry_IK_Control: UE.RigElementKey;
            Setup_Arm_1___Setup_Arm_Entry_Pole_Vector_Control: UE.RigElementKey;
            Setup_Arm_1___Setup_Arm_Entry_Fingers_Space: UE.RigElementKey;
            Setup_Arm_1___Setup_Arm_Entry_IK_Parents: TArray<UE.RigElementKey>;
            Setup_Arm_1___Setup_Arm_Entry_Negative_Side: boolean;
            Setup_Arm_1___Setup_Arm_ArrayGetNum_Num: number;
            Setup_Arm_1___Setup_Arm_If_2_Result: UE.Transform;
            Setup_Arm_1___Setup_Arm_Get_Negative_Transform_Output: UE.Transform;
            Setup_Arm_1___Setup_Arm_ArrayIterator_2_Element: UE.Transform;
            Setup_Arm_1___Setup_Arm_ArrayIterator_2_Index: number;
            Setup_Arm_1___Setup_Arm_If_3_Result: UE.Quat;
            Setup_Arm_1___Setup_Arm_MathIntEquals_1_Result: boolean;
            Setup_Arm_1___Setup_Arm_MathIntSub_1_Result: number;
            Setup_Arm_1___Setup_Arm_ArrayIterator_2_Count: number;
            Setup_Arm_1___Setup_Arm_MathQuaternionFromRotator_2_Result: UE.Quat;
            Setup_Arm_1___Setup_Arm_MathQuaternionToRotator_2_Result: UE.Rotator;
            Setup_Arm_1___Setup_Arm_MathQuaternionToRotator_2_Value: UE.Quat;
            Setup_Arm_1___Setup_Arm_MathFloatAdd_2_Result: number;
            Setup_Arm_1___Setup_Arm_MathFloatAdd_2_A: number;
            Setup_Arm_1___Setup_Arm_MathQuaternionFromRotator_2_Value__IO: UE.Rotator;
            Setup_Arm_1___Setup_Arm_ArraySetAtIndex_Element__IO: UE.Transform;
            Setup_Arm_1___Setup_Arm_GetTransformItemArray_1_Transforms: TArray<UE.Transform>;
            Setup_Arm_1___Setup_Arm_GetTransformItemArray_1_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Arm_1___Setup_Arm_ArrayIterator_2_Ratio: number;
            Setup_Arm_1___Setup_Arm_ArrayIterator_2_BlockToRun: string;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_4_Element: UE.Transform;
            Setup_Arm_1___Setup_Arm_SetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm_1___Setup_Arm_SetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Arm_1___Setup_Arm_If_2_1_Result: UE.Transform;
            Setup_Arm_1___Setup_Arm_GetTransform_Transform: UE.Transform;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_Element: UE.RigElementKey;
            Setup_Arm_1___Setup_Arm_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm_1___Setup_Arm_Get_Negative_Transform_0_Output: UE.Transform;
            Setup_Arm_1___Setup_Arm_SetTransform_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm_1___Setup_Arm_MathTransformMul_Result: UE.Transform;
            Setup_Arm_1___Setup_Arm_MathFloatNegate_Result: number;
            Setup_Arm_1___Setup_Arm_MathFloatDiv_Result: number;
            Setup_Arm_1___Setup_Arm_MathVectorDistance_Result: number;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_1_Element: UE.Transform;
            Setup_Arm_1___Setup_Arm_MathVectorDistance_A: UE.Vector;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_2_1_Element: UE.Transform;
            Setup_Arm_1___Setup_Arm_MathVectorDistance_B: UE.Vector;
            Setup_Arm_1___Setup_Arm_MathTransformMul_A__IO: UE.Transform;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_3_Element: UE.Transform;
            Setup_Arm_1___Setup_Arm_If_1_Result: UE.Vector;
            Setup_Arm_1___Setup_Arm_SetTransform_1_Value__IO: UE.Transform;
            Setup_Arm_1___Setup_Arm_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm_1___Setup_Arm_ArrayGetAtIndex_4_1_Element: UE.Transform;
            Setup_Arm_1___Setup_Arm_MathIntSub_Result: number;
            Setup_Arm_1___Setup_Arm_ArrayGetNum_1_Num: number;
            Setup_Arm_1___Setup_Arm_SetTransform_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Arm_1___Setup_Arm_ArrayIterator_Element: UE.RigElementKey;
            Setup_Arm_1___Setup_Arm_ArrayIterator_Index: number;
            Setup_Arm_1___Setup_Arm_ArrayIterator_Count: number;
            Setup_Arm_1___Setup_Arm_ArrayIterator_Ratio: number;
            Setup_Arm_1___Setup_Arm_ArrayIterator_BlockToRun: string;
            Setup_Fingers___Setup_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Setup_Fingers___Setup_Fingers_Entry_Negative_Side: boolean;
            Setup_Fingers___Setup_Fingers_GetTransform_6_Transform: UE.Transform;
            Setup_Fingers___Setup_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Setup_Fingers___Setup_Fingers_GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers___Setup_Fingers_NameConcat_4_1_Result: string;
            Setup_Fingers___Setup_Fingers_NameConcat_4_1_A: string;
            Setup_Fingers___Setup_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Setup_Fingers___Setup_Fingers_If_2_1_Result: UE.Quat;
            Setup_Fingers___Setup_Fingers_MathQuaternionFromRotator_1_1_Result: UE.Quat;
            Setup_Fingers___Setup_Fingers_MathQuaternionToRotator_1_1_Result: UE.Rotator;
            Setup_Fingers___Setup_Fingers_MathQuaternionToRotator_1_1_Value: UE.Quat;
            Setup_Fingers___Setup_Fingers_MathFloatAdd_1_1_Result: number;
            Setup_Fingers___Setup_Fingers_MathFloatAdd_1_1_A: number;
            Setup_Fingers___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__IO: UE.Rotator;
            Setup_Fingers___Setup_Fingers_If_1_1_Result: UE.Vector;
            Setup_Fingers___Setup_Fingers_SetTransform_2_Value__IO: UE.Transform;
            Setup_Fingers___Setup_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers___Setup_Fingers_ArrayIterator_Index: number;
            Setup_Fingers___Setup_Fingers_ArrayIterator_Count: number;
            Setup_Fingers___Setup_Fingers_ArrayIterator_Ratio: number;
            Setup_Fingers___Setup_Fingers_ArrayIterator_BlockToRun: string;
            Setup_Fingers_1___Setup_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Setup_Fingers_1___Setup_Fingers_Entry_Negative_Side: boolean;
            Setup_Fingers_1___Setup_Fingers_GetTransform_6_Transform: UE.Transform;
            Setup_Fingers_1___Setup_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Setup_Fingers_1___Setup_Fingers_GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers_1___Setup_Fingers_NameConcat_4_1_Result: string;
            Setup_Fingers_1___Setup_Fingers_NameConcat_4_1_A: string;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Setup_Fingers_1___Setup_Fingers_If_2_1_Result: UE.Quat;
            Setup_Fingers_1___Setup_Fingers_MathQuaternionFromRotator_1_1_Result: UE.Quat;
            Setup_Fingers_1___Setup_Fingers_MathQuaternionToRotator_1_1_Result: UE.Rotator;
            Setup_Fingers_1___Setup_Fingers_MathQuaternionToRotator_1_1_Value: UE.Quat;
            Setup_Fingers_1___Setup_Fingers_MathFloatAdd_1_1_Result: number;
            Setup_Fingers_1___Setup_Fingers_MathFloatAdd_1_1_A: number;
            Setup_Fingers_1___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__IO: UE.Rotator;
            Setup_Fingers_1___Setup_Fingers_If_1_1_Result: UE.Vector;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_Value__IO: UE.Transform;
            Setup_Fingers_1___Setup_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers_1___Setup_Fingers_ArrayIterator_Index: number;
            Setup_Fingers_1___Setup_Fingers_ArrayIterator_Count: number;
            Setup_Fingers_1___Setup_Fingers_ArrayIterator_Ratio: number;
            Setup_Fingers_1___Setup_Fingers_ArrayIterator_BlockToRun: string;
            Setup_Leg___Setup_Leg_Entry_FK_Space: UE.RigElementKey;
            Setup_Leg___Setup_Leg_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Setup_Leg___Setup_Leg_Entry_IK_Control: UE.RigElementKey;
            Setup_Leg___Setup_Leg_Entry_Pole_Vector_Control: UE.RigElementKey;
            Setup_Leg___Setup_Leg_Entry_IK_Parents: TArray<UE.RigElementKey>;
            Setup_Leg___Setup_Leg_Entry_Negative_Side: boolean;
            Setup_Leg___Setup_Leg_Entry_Pole_Vector_Null: UE.RigElementKey;
            LocalVariable__Setup_Leg_Transforms: TArray<UE.Transform>;
            Setup_Leg___Setup_Leg_ArrayGetNum_Num: number;
            Setup_Leg___Setup_Leg_ArrayIterator_2_Index: number;
            Setup_Leg___Setup_Leg_If_2_Result: UE.Transform;
            Setup_Leg___Setup_Leg_Get_Negative_Transform_1_Output: UE.Transform;
            Setup_Leg___Setup_Leg_ArrayIterator_2_Element: UE.Transform;
            Setup_Leg___Setup_Leg_GetTransformItemArray_1_Transforms: TArray<UE.Transform>;
            Setup_Leg___Setup_Leg_GetTransformItemArray_1_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Leg___Setup_Leg_ArrayIterator_2_Count: number;
            Setup_Leg___Setup_Leg_ArrayIterator_2_Ratio: number;
            Setup_Leg___Setup_Leg_ArrayIterator_2_BlockToRun: string;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_4_Element: UE.Transform;
            Setup_Leg___Setup_Leg_SetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Leg___Setup_Leg_SetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_Element: UE.Transform;
            Setup_Leg___Setup_Leg_If_Result: UE.Vector;
            Setup_Leg___Setup_Leg_SetTransform_2_1_Value__IO: UE.Transform;
            Setup_Leg___Setup_Leg_SetTransform_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Setup_Leg___Setup_Leg_MathTransformMul_Result: UE.Transform;
            Setup_Leg___Setup_Leg_MathFloatDiv_Result: number;
            Setup_Leg___Setup_Leg_MathVectorDistance_Result: number;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_1_Element: UE.Transform;
            Setup_Leg___Setup_Leg_MathVectorDistance_A: UE.Vector;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_2_1_Element: UE.Transform;
            Setup_Leg___Setup_Leg_MathVectorDistance_B: UE.Vector;
            Setup_Leg___Setup_Leg_MathTransformMul_A__IO: UE.Transform;
            Setup_Leg___Setup_Leg_ArrayGetAtIndex_3_Element: UE.Transform;
            Setup_Leg___Setup_Leg_If_1_Result: UE.Vector;
            Setup_Leg___Setup_Leg_SetTransform_1_Value__IO: UE.Transform;
            Setup_Leg___Setup_Leg_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Leg___Setup_Leg_ArrayIterator_Element: UE.RigElementKey;
            Setup_Leg___Setup_Leg_ArrayIterator_Index: number;
            Setup_Leg___Setup_Leg_ArrayIterator_Count: number;
            Setup_Leg___Setup_Leg_ArrayIterator_Ratio: number;
            Setup_Leg___Setup_Leg_ArrayIterator_BlockToRun: string;
            Setup_Leg_1___Setup_Leg_Entry_FK_Space: UE.RigElementKey;
            Setup_Leg_1___Setup_Leg_Entry_FK_Controls: TArray<UE.RigElementKey>;
            Setup_Leg_1___Setup_Leg_Entry_IK_Control: UE.RigElementKey;
            Setup_Leg_1___Setup_Leg_Entry_Pole_Vector_Control: UE.RigElementKey;
            Setup_Leg_1___Setup_Leg_Entry_IK_Parents: TArray<UE.RigElementKey>;
            Setup_Leg_1___Setup_Leg_Entry_Negative_Side: boolean;
            Setup_Leg_1___Setup_Leg_Entry_Pole_Vector_Null: UE.RigElementKey;
            Setup_Leg_1___Setup_Leg_ArrayGetNum_Num: number;
            Setup_Leg_1___Setup_Leg_ArrayIterator_2_Index: number;
            Setup_Leg_1___Setup_Leg_If_2_Result: UE.Transform;
            Setup_Leg_1___Setup_Leg_Get_Negative_Transform_1_Output: UE.Transform;
            Setup_Leg_1___Setup_Leg_ArrayIterator_2_Element: UE.Transform;
            Setup_Leg_1___Setup_Leg_GetTransformItemArray_1_Transforms: TArray<UE.Transform>;
            Setup_Leg_1___Setup_Leg_GetTransformItemArray_1_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Leg_1___Setup_Leg_ArrayIterator_2_Count: number;
            Setup_Leg_1___Setup_Leg_ArrayIterator_2_Ratio: number;
            Setup_Leg_1___Setup_Leg_ArrayIterator_2_BlockToRun: string;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_4_Element: UE.Transform;
            Setup_Leg_1___Setup_Leg_SetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Leg_1___Setup_Leg_SetTransformItemArray_CachedIndex: TArray<TArray<UE.CachedRigElement>>;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_Element: UE.Transform;
            Setup_Leg_1___Setup_Leg_If_Result: UE.Vector;
            Setup_Leg_1___Setup_Leg_SetTransform_2_1_Value__IO: UE.Transform;
            Setup_Leg_1___Setup_Leg_SetTransform_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Setup_Leg_1___Setup_Leg_MathTransformMul_Result: UE.Transform;
            Setup_Leg_1___Setup_Leg_MathFloatDiv_Result: number;
            Setup_Leg_1___Setup_Leg_MathVectorDistance_Result: number;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_1_Element: UE.Transform;
            Setup_Leg_1___Setup_Leg_MathVectorDistance_A: UE.Vector;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_2_1_Element: UE.Transform;
            Setup_Leg_1___Setup_Leg_MathVectorDistance_B: UE.Vector;
            Setup_Leg_1___Setup_Leg_MathTransformMul_A__IO: UE.Transform;
            Setup_Leg_1___Setup_Leg_ArrayGetAtIndex_3_Element: UE.Transform;
            Setup_Leg_1___Setup_Leg_If_1_Result: UE.Vector;
            Setup_Leg_1___Setup_Leg_SetTransform_1_Value__IO: UE.Transform;
            Setup_Leg_1___Setup_Leg_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Leg_1___Setup_Leg_ArrayIterator_Element: UE.RigElementKey;
            Setup_Leg_1___Setup_Leg_ArrayIterator_Index: number;
            Setup_Leg_1___Setup_Leg_ArrayIterator_Count: number;
            Setup_Leg_1___Setup_Leg_ArrayIterator_Ratio: number;
            Setup_Leg_1___Setup_Leg_ArrayIterator_BlockToRun: string;
            Setup_Foot___Setup_Foot_Entry_FK_Control: UE.RigElementKey;
            Setup_Foot___Setup_Foot_Entry_IK_Control: UE.RigElementKey;
            Setup_Foot___Setup_Foot_Entry_Toes_Space: UE.RigElementKey;
            Setup_Foot___Setup_Foot_Entry_Negative_Side: boolean;
            Setup_Foot___Setup_Foot_GetTransform_2_Transform: UE.Transform;
            Setup_Foot___Setup_Foot_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot___Setup_Foot_If_1_Result: UE.Vector;
            Setup_Foot___Setup_Foot_SetTransform_Value__IO: UE.Transform;
            Setup_Foot___Setup_Foot_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot___Setup_Foot_GetTransform_Transform: UE.Transform;
            Setup_Foot___Setup_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot___Setup_Foot_If_Result: UE.Quat;
            Setup_Foot___Setup_Foot_MathQuaternionFromRotator_2_Result: UE.Quat;
            Setup_Foot___Setup_Foot_MathFloatAdd_2_Result: number;
            Setup_Foot___Setup_Foot_MathQuaternionToRotator_2_Result: UE.Rotator;
            Setup_Foot___Setup_Foot_MathQuaternionToRotator_2_Value: UE.Quat;
            Setup_Foot___Setup_Foot_MathFloatAdd_2_A: number;
            Setup_Foot___Setup_Foot_MathQuaternionFromRotator_2_Value__IO: UE.Rotator;
            Setup_Foot___Setup_Foot_MathQuaternionFromEuler_Result: UE.Quat;
            Setup_Foot___Setup_Foot_MathQuaternionToEuler_Result: UE.Vector;
            Setup_Foot___Setup_Foot_MathFloatAdd_Result: number;
            Setup_Foot___Setup_Foot_MathFloatAdd_A: number;
            Setup_Foot___Setup_Foot_MathQuaternionFromEuler_Euler__IO: UE.Vector;
            Setup_Foot___Setup_Foot_If_1_1_Result: UE.Vector;
            Setup_Foot___Setup_Foot_SetTransform_1_Value__IO: UE.Transform;
            Setup_Foot___Setup_Foot_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot___Setup_Foot_GetTransform_1_Transform: UE.Transform;
            Setup_Foot___Setup_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot___Setup_Foot_SetTransform_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot_1___Setup_Foot_Entry_FK_Control: UE.RigElementKey;
            Setup_Foot_1___Setup_Foot_Entry_IK_Control: UE.RigElementKey;
            Setup_Foot_1___Setup_Foot_Entry_Toes_Space: UE.RigElementKey;
            Setup_Foot_1___Setup_Foot_Entry_Negative_Side: boolean;
            Setup_Foot_1___Setup_Foot_GetTransform_2_Transform: UE.Transform;
            Setup_Foot_1___Setup_Foot_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot_1___Setup_Foot_If_1_Result: UE.Vector;
            Setup_Foot_1___Setup_Foot_SetTransform_Value__IO: UE.Transform;
            Setup_Foot_1___Setup_Foot_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot_1___Setup_Foot_GetTransform_Transform: UE.Transform;
            Setup_Foot_1___Setup_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot_1___Setup_Foot_If_Result: UE.Quat;
            Setup_Foot_1___Setup_Foot_MathQuaternionFromRotator_2_Result: UE.Quat;
            Setup_Foot_1___Setup_Foot_MathFloatAdd_2_Result: number;
            Setup_Foot_1___Setup_Foot_MathQuaternionToRotator_2_Result: UE.Rotator;
            Setup_Foot_1___Setup_Foot_MathQuaternionToRotator_2_Value: UE.Quat;
            Setup_Foot_1___Setup_Foot_MathFloatAdd_2_A: number;
            Setup_Foot_1___Setup_Foot_MathQuaternionFromRotator_2_Value__IO: UE.Rotator;
            Setup_Foot_1___Setup_Foot_MathQuaternionFromEuler_Result: UE.Quat;
            Setup_Foot_1___Setup_Foot_MathQuaternionToEuler_Result: UE.Vector;
            Setup_Foot_1___Setup_Foot_MathFloatAdd_Result: number;
            Setup_Foot_1___Setup_Foot_MathFloatAdd_A: number;
            Setup_Foot_1___Setup_Foot_MathQuaternionFromEuler_Euler__IO: UE.Vector;
            Setup_Foot_1___Setup_Foot_If_1_1_Result: UE.Vector;
            Setup_Foot_1___Setup_Foot_SetTransform_1_Value__IO: UE.Transform;
            Setup_Foot_1___Setup_Foot_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot_1___Setup_Foot_GetTransform_1_Transform: UE.Transform;
            Setup_Foot_1___Setup_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Foot_1___Setup_Foot_SetTransform_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers_2___Setup_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Setup_Fingers_2___Setup_Fingers_Entry_Negative_Side: boolean;
            Setup_Fingers_2___Setup_Fingers_GetTransform_6_Transform: UE.Transform;
            Setup_Fingers_2___Setup_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Setup_Fingers_2___Setup_Fingers_GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers_2___Setup_Fingers_NameConcat_4_1_Result: string;
            Setup_Fingers_2___Setup_Fingers_NameConcat_4_1_A: string;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Setup_Fingers_2___Setup_Fingers_If_2_1_Result: UE.Quat;
            Setup_Fingers_2___Setup_Fingers_MathQuaternionFromRotator_1_1_Result: UE.Quat;
            Setup_Fingers_2___Setup_Fingers_MathQuaternionToRotator_1_1_Result: UE.Rotator;
            Setup_Fingers_2___Setup_Fingers_MathQuaternionToRotator_1_1_Value: UE.Quat;
            Setup_Fingers_2___Setup_Fingers_MathFloatAdd_1_1_Result: number;
            Setup_Fingers_2___Setup_Fingers_MathFloatAdd_1_1_A: number;
            Setup_Fingers_2___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__IO: UE.Rotator;
            Setup_Fingers_2___Setup_Fingers_If_1_1_Result: UE.Vector;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_Value__IO: UE.Transform;
            Setup_Fingers_2___Setup_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers_2___Setup_Fingers_ArrayIterator_Index: number;
            Setup_Fingers_2___Setup_Fingers_ArrayIterator_Count: number;
            Setup_Fingers_2___Setup_Fingers_ArrayIterator_Ratio: number;
            Setup_Fingers_2___Setup_Fingers_ArrayIterator_BlockToRun: string;
            Setup_Fingers_2_1___Setup_Fingers_Entry_Fingers_Bones: TArray<UE.RigElementKey>;
            Setup_Fingers_2_1___Setup_Fingers_Entry_Negative_Side: boolean;
            Setup_Fingers_2_1___Setup_Fingers_GetTransform_6_Transform: UE.Transform;
            Setup_Fingers_2_1___Setup_Fingers_ArrayIterator_Element: UE.RigElementKey;
            Setup_Fingers_2_1___Setup_Fingers_GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers_2_1___Setup_Fingers_NameConcat_4_1_Result: string;
            Setup_Fingers_2_1___Setup_Fingers_NameConcat_4_1_A: string;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_Item__IO: UE.RigElementKey;
            Setup_Fingers_2_1___Setup_Fingers_If_2_1_Result: UE.Quat;
            Setup_Fingers_2_1___Setup_Fingers_MathQuaternionFromRotator_1_1_Result: UE.Quat;
            Setup_Fingers_2_1___Setup_Fingers_MathQuaternionToRotator_1_1_Result: UE.Rotator;
            Setup_Fingers_2_1___Setup_Fingers_MathQuaternionToRotator_1_1_Value: UE.Quat;
            Setup_Fingers_2_1___Setup_Fingers_MathFloatAdd_1_1_Result: number;
            Setup_Fingers_2_1___Setup_Fingers_MathFloatAdd_1_1_A: number;
            Setup_Fingers_2_1___Setup_Fingers_MathQuaternionFromRotator_1_1_Value__IO: UE.Rotator;
            Setup_Fingers_2_1___Setup_Fingers_If_1_1_Result: UE.Vector;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_Value__IO: UE.Transform;
            Setup_Fingers_2_1___Setup_Fingers_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Fingers_2_1___Setup_Fingers_ArrayIterator_Index: number;
            Setup_Fingers_2_1___Setup_Fingers_ArrayIterator_Count: number;
            Setup_Fingers_2_1___Setup_Fingers_ArrayIterator_Ratio: number;
            Setup_Fingers_2_1___Setup_Fingers_ArrayIterator_BlockToRun: string;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Entry_BK_Buffers: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Entry_BK_Controls: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Entry_Bones: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Entry_Roll_Control: UE.RigElementKey;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Entry_Roll_Buffer: UE.RigElementKey;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Entry_Negative_Side: boolean;
            Setup_Reverse_Foot___Setup_Reverse_Foot_GetTransform_2_Transform: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            Setup_Reverse_Foot___Setup_Reverse_Foot_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayIterator_3_Index: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_If_Result: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_GetTransform_1_Transform: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayIterator_3_Element: UE.RigElementKey;
            Setup_Reverse_Foot___Setup_Reverse_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Get_Negative_Transform_1_Output: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_Get_Negative_Transform_1_Input__IO: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_If_False__IO: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_Value__IO: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayGetAtIndex_Element: UE.RigElementKey;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_2_Value__IO: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayIterator_3_Count: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayIterator_3_Ratio: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayIterator_3_BlockToRun: string;
            Setup_Reverse_Foot___Setup_Reverse_Foot_GetTransform_Transform: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Setup_Reverse_Foot___Setup_Reverse_Foot_MathIntSub_Result: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_ArrayGetNum_Num: number;
            Setup_Reverse_Foot___Setup_Reverse_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_If_1_Result: UE.Vector;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_1_1_Value__IO: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_1_Value__IO: UE.Transform;
            Setup_Reverse_Foot___Setup_Reverse_Foot_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Entry_BK_Buffers: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Entry_BK_Controls: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Entry_Bones: TArray<UE.RigElementKey>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Entry_Roll_Control: UE.RigElementKey;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Entry_Roll_Buffer: UE.RigElementKey;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Entry_Negative_Side: boolean;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_GetTransform_2_Transform: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayGetAtIndex_3_Element: UE.RigElementKey;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayGetAtIndex_2_Element: UE.RigElementKey;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayIterator_3_Index: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_If_Result: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_GetTransform_1_Transform: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayIterator_3_Element: UE.RigElementKey;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Get_Negative_Transform_1_Output: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_Get_Negative_Transform_1_Input__IO: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_If_False__IO: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_Value__IO: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayGetAtIndex_Element: UE.RigElementKey;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_2_Value__IO: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayIterator_3_Count: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayIterator_3_Ratio: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayIterator_3_BlockToRun: string;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_GetTransform_Transform: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayGetAtIndex_1_Element: UE.RigElementKey;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_MathIntSub_Result: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_ArrayGetNum_Num: number;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_If_1_Result: UE.Vector;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_1_1_Value__IO: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_1_Value__IO: UE.Transform;
            Setup_Reverse_Foot_1___Setup_Reverse_Foot_SetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class CR_Mannequin_Procedural_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Procedural_C;
            static Load(InName: string): CR_Mannequin_Procedural_C;
        
            __tid_CR_Mannequin_Procedural_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetRotation_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetRotation_2_bInitial__Const: boolean;
            RigVMModel___GetTransform_6_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_1_bInitial__Const: boolean;
            RigVMModel___MathQuaternionSwingTwist_TwistAxis__Const: UE.Vector;
            RigVMModel___MathQuaternionSlerp_2_B__Const: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_T__Const: number;
            RigVMModel___SetRotation_2_Weight__Const: number;
            RigVMModel___SetRotation_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_T__Const: number;
            RigVMModel___SetTranslation_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___GetTransform_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathTransformLerp_T__Const: number;
            RigVMModel___SetRotation_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_1_T__Const: number;
            RigVMModel___MathTransformLerp_1_T__Const: number;
            RigVMModel___SetRotation_2_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_3_T__Const: number;
            RigVMModel___SetRotation_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_5_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_4_T__Const: number;
            RigVMModel___SetRotation_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_2_T__Const: number;
            RigVMModel___SetRotation_2_1_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTranslation_4_1_2_Item__Const: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___MathQuaternionMul_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_Local: UE.Transform;
            RigVMModel___GetTransform_6_Transform: UE.Transform;
            RigVMModel___GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_Result: UE.Transform;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_Value: UE.Vector;
            RigVMModel___SetTranslation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_Result: UE.Transform;
            RigVMModel___SetTranslation_1_Value: UE.Vector;
            RigVMModel___SetTranslation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_Local: UE.Transform;
            RigVMModel___GetTransform_6_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_4_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_Local: UE.Transform;
            RigVMModel___GetTransform_5_1_Transform: UE.Transform;
            RigVMModel___GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_5_Transform: UE.Transform;
            RigVMModel___GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Swing: UE.Quat;
            RigVMModel___SetRotation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_Result: UE.Transform;
            RigVMModel___GetTransform_4_Transform: UE.Transform;
            RigVMModel___GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_5_Value: UE.Vector;
            RigVMModel___SetTranslation_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_Result: UE.Quat;
            RigVMModel___SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_Result: UE.Transform;
            RigVMModel___SetTranslation_5_1_Value: UE.Vector;
            RigVMModel___SetTranslation_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_3_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_2_Result: UE.Transform;
            RigVMModel___GetTransform_2_Transform: UE.Transform;
            RigVMModel___GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_Value: UE.Vector;
            RigVMModel___SetTranslation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_4_1_Transform: UE.Transform;
            RigVMModel___GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_Result: UE.Transform;
            RigVMModel___GetTransform_3_Transform: UE.Transform;
            RigVMModel___GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_Value: UE.Vector;
            RigVMModel___SetTranslation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_Result: UE.Quat;
            RigVMModel___SetRotation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_Value: UE.Vector;
            RigVMModel___SetTranslation_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Swing: UE.Quat;
            RigVMModel___SetRotation_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_2_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class ABP_Quinn_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Quinn_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_PostProcess_C;
            static Load(InName: string): ABP_Quinn_PostProcess_C;
        
            __tid_ABP_Quinn_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32D949864AD588EA6612C69B65C3A997
    namespace Game.Characters.Mannequins.Rigs.ABP_Manny_PostProcess {
        class ABP_Manny_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Manny_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_PostProcess_C;
            static Load(InName: string): ABP_Manny_PostProcess_C;
        
            __tid_ABP_Manny_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32D949864AD588EA6612C69B65C3A997
    namespace Game.Characters.Mannequins.Rigs.ABP_Manny_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32D949864AD588EA6612C69B65C3A997
    namespace Game.Characters.Mannequins.Rigs.ABP_Manny_PostProcess {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 34B105414117D7F5DF9F1B9534DCA89C
    namespace Game.StarterContent.Blueprints.BP_LightStudio {
        class BP_LightStudio_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SkyLight1: UE.SkyLightComponent;
            ExponentialHeightFog1: UE.ExponentialHeightFogComponent;
            PrevisArrow: UE.StaticMeshComponent;
            Skybox: UE.StaticMeshComponent;
            Scene1: UE.SceneComponent;
            GlobalBrightness: number;
            Use_HDRI: boolean;
            UseSunLight: boolean;
            SunBrightness: number;
            SunTint: UE.LinearColor;
            StationaryLightForSun: boolean;
            SunDirectionalLight: UE.DirectionalLightComponent;
            UseAtmosphere: boolean;
            AtmosphereBrightness: number;
            AtmosphereTint: UE.LinearColor;
            PrevisArrowMaterial: UE.MaterialInstanceDynamic;
            LightColor: UE.LinearColor;
            SunColorCurve: UE.CurveLinearColor;
            OverrideSunColor: boolean;
            AtmosphereDensityMultiplier: number;
            AtmosphereAltitude: number;
            DisableSunDisk: boolean;
            UseFog: boolean;
            FogBrightness: number;
            FogTint: UE.LinearColor;
            FogAltitude: number;
            FogMaxOpacity: number;
            FogHeightFalloff: number;
            FogDensity: number;
            FogBrightnessCurve: UE.CurveFloat;
            FogStartDistance: number;
            DisableGroundScattering: boolean;
            AtmosphereDistanceScale: number;
            SkyboxMaterial: UE.MaterialInstanceDynamic;
            HDRI_Brightness: number;
            HDRI_Contrast: number;
            HDRI_Tint: UE.LinearColor;
            HDRI_Cubemap: UE.Texture;
            HDRI_Rotation: number;
            AtmosphereOpacityHorizon: number;
            AtmosphereOpacityZenith: number;
            HighDensityAtmosphere: boolean;
            AtmosphericFog: UE.AtmosphericFogComponent;
            UseSkylight: boolean;
            Shadowdistance: number;
            LightShaftBloom: boolean;
            LightShaftOcclusion: boolean;
            OcclusionMaskDarkness: number;
            BloomScale: number;
            BloomThreshold: number;
            BloomTint: UE.Color;
            AtmosphereFogMultiplier: number;
            AtmosphereDensityHeight: number;
            AtmosphereMaxScatteringOrder: number;
            AtmosphereAltitudeSampleNumber: number;
            LightFunctionMaterial: UE.MaterialInterface;
            MIC_Black: UE.MaterialInstance;
            MIC_HDRI: UE.MaterialInstance;
            AtmosphereDensity() : void;
            CalculateSunColor() : void;
            NormalizedSunAngle(Angle: $Ref<number>) : void;
            SunMobility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_LightStudio_C;
            static Load(InName: string): BP_LightStudio_C;
        
            __tid_BP_LightStudio_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6A1AE04E46BB2DCE8E8DA5B318ECB60F
    namespace Game.StarterContent.Blueprints.Blueprint_WallSconce {
        class Blueprint_WallSconce_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SM_Lamp_Wall: UE.StaticMeshComponent;
            PointLight2: UE.SpotLightComponent;
            Scene1: UE.SceneComponent;
            Brightness: number;
            Color: UE.LinearColor;
            ["Inner Cone Angle"]: number;
            ["Outer Cone Angle"]: number;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_WallSconce_C;
            static Load(InName: string): Blueprint_WallSconce_C;
        
            __tid_Blueprint_WallSconce_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 62110038444C84D1EC760AB254B78A07
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Steam {
        class Blueprint_Effect_Steam_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Steam AUdio"]: UE.AudioComponent;
            P_Steam_Lit: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Steam_C;
            static Load(InName: string): Blueprint_Effect_Steam_C;
        
            __tid_Blueprint_Effect_Steam_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0D94FA604928B24E62003083BA722E3C
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Sparks {
        class Blueprint_Effect_Sparks_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Sparks Audio"]: UE.AudioComponent;
            Sparks: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Sparks_C;
            static Load(InName: string): Blueprint_Effect_Sparks_C;
        
            __tid_Blueprint_Effect_Sparks_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2678356F40E4E16306BDD687933AE2D1
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Smoke {
        class Blueprint_Effect_Smoke_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Smoke Audio"]: UE.AudioComponent;
            P_Smoke: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Smoke_C;
            static Load(InName: string): Blueprint_Effect_Smoke_C;
        
            __tid_Blueprint_Effect_Smoke_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A0AD22D447F99B83A9A31C9B9426B5C0
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Fire {
        class Blueprint_Effect_Fire_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Fire Audio"]: UE.AudioComponent;
            P_Fire: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Fire_C;
            static Load(InName: string): Blueprint_Effect_Fire_C;
        
            __tid_Blueprint_Effect_Fire_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 862A26E84A42F13FB193AC87521ABCE8
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Explosion {
        class Blueprint_Effect_Explosion_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Explosion Audio"]: UE.AudioComponent;
            P_Explosion: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Explosion_C;
            static Load(InName: string): Blueprint_Effect_Explosion_C;
        
            __tid_Blueprint_Effect_Explosion_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 819FE165412B370746C9159B51857ADC
    namespace Game.StarterContent.Blueprints.Blueprint_CeilingLight {
        class Blueprint_CeilingLight_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SM_Lamp_Ceiling: UE.StaticMeshComponent;
            PointLight1: UE.PointLightComponent;
            Scene1: UE.SceneComponent;
            Brightness: number;
            Color: UE.LinearColor;
            ["Source Radius"]: number;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_CeilingLight_C;
            static Load(InName: string): Blueprint_CeilingLight_C;
        
            __tid_Blueprint_CeilingLight_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 772AB25542D24177E7B56A80ADFDE215
    namespace Engine.EditorResources.FieldNodes.Linear_Velocity_for_Cloth {
        class Linear_Velocity_for_Cloth_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SphereVolumeCol: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            ["Field Active"]: boolean;
            OperatorFIeld_Input: UE.OperatorField;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            FalloffMinMax_Input: UE.Vector2D;
            Magnitude_Input: number;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_Linear_Velocity_for_Cloth(EntryPoint: number) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Linear_Velocity_for_Cloth_C;
            static Load(InName: string): Linear_Velocity_for_Cloth_C;
        
            __tid_Linear_Velocity_for_Cloth_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 69D069A749FE7BEF4E002FAED6D7C7F6
    namespace Engine.EditorResources.FieldNodes.Linear_Force_for_Cloth {
        class Linear_Force_for_Cloth_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SphereVolumeCol: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            ["Field Active"]: boolean;
            OperatorFIeld_Input: UE.OperatorField;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            FalloffMinMax_Input: UE.Vector2D;
            Magnitude_Input: number;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_Linear_Force_for_Cloth(EntryPoint: number) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Linear_Force_for_Cloth_C;
            static Load(InName: string): Linear_Force_for_Cloth_C;
        
            __tid_Linear_Force_for_Cloth_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A8F19F6A46087E825E50A2B6A691A826
    namespace Engine.EditorResources.FieldNodes.FS_SleepDisable_Generic {
        class FS_SleepDisable_Generic_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            PlaneVolumeBoxCol: UE.BoxComponent;
            TresholdTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            UniformScalar: UE.UniformScalar;
            ThresholdValueText: UE.TextRenderComponent;
            ActiveValueText: UE.TextRenderComponent;
            PlaneFalloff_Magnitude: UE.PlaneFalloff;
            RadialFalloff_Magnitude: UE.RadialFalloff;
            CullingField_Plane: UE.CullingField;
            RadialFalloff: UE.RadialFalloff;
            CullingField_Box: UE.CullingField;
            PlaneFalloff: UE.PlaneFalloff;
            RadialVector: UE.RadialVector;
            UniformInteger: UE.UniformInteger;
            BoxFalloff_Magnitude: UE.BoxFalloff;
            CullingField_Sphere: UE.CullingField;
            Arrow: UE.ArrowComponent;
            BoxVolume: UE.StaticMeshComponent;
            SphereVolume: UE.StaticMeshComponent;
            PlaneVolume: UE.StaticMeshComponent;
            BoxVolumeCol: UE.BoxComponent;
            SphereVolumeCol: UE.SphereComponent;
            SleepTitleText: UE.TextRenderComponent;
            ["Sleep Text"]: UE.TextRenderComponent;
            CullingField: UE.CullingField;
            BoxFalloff: UE.BoxFalloff;
            ["Field Active"]: boolean;
            Threshold: number;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            ["Field Behavior"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldSleepType.EFieldSleepType;
            Debug: boolean;
            FaloffType: UE.EFieldFalloffType;
            FalloffMinMax: UE.Vector2D;
            PhysicsType: UE.EFieldPhysicsType;
            Deactivated: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            FieldVolume: UE.StaticMeshComponent;
            DeactivatedText: UE.LinearColor;
            SleepText: string;
            DisableText: string;
            KillText: string;
            ShowSolidShapes: boolean;
            ["Sleep Colour Def"]: UE.LinearColor;
            DisableColour: UE.LinearColor;
            KillColour: UE.LinearColor;
            ["Sleep Colour"]: UE.LinearColor;
            ["Text Vertical Offset"]: number;
            TextScaleMult: number;
            ExecuteUbergraph_FS_SleepDisable_Generic(EntryPoint: number) : void;
            ["Falloff Field Switch"](Magnitude: number, FaloffType: UE.EFieldFalloffType, CullingField: $Ref<UE.CullingField>) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetFalloffVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_SleepDisable_Generic_C;
            static Load(InName: string): FS_SleepDisable_Generic_C;
        
            __tid_FS_SleepDisable_Generic_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 465B7518471488A4CF8B2CAC628076CC
    namespace Engine.EditorResources.FieldNodes.FS_MasterField {
        class FS_MasterField_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SphereVolumeCol: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            ["Field Active"]: boolean;
            OperatorFIeld_Input: UE.OperatorField;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            FalloffMinMax_Input: UE.Vector2D;
            Magnitude_Input: number;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_FS_MasterField(EntryPoint: number) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_MasterField_C;
            static Load(InName: string): FS_MasterField_C;
        
            __tid_FS_MasterField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A09F24E9474B9FB09B1BACB3EB14BFBA
    namespace Engine.EditorResources.FieldNodes.FS_BombField_Prototype {
        class FS_BombField_Prototype_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SphereVolumeCol: UE.SphereComponent;
            bomb: UE.SphereComponent;
            bombVolume: UE.StaticMeshComponent;
            PlaneFalloff_ForceDynamic: UE.PlaneFalloff;
            RadialFalloff_ForceDynamic: UE.RadialFalloff;
            OperatorField_ForceDynamic: UE.OperatorField;
            BoxFalloff_ForceDynamic: UE.BoxFalloff;
            PlaneFalloff_InternalStrain: UE.PlaneFalloff;
            BoxFalloff_InternalStrain: UE.BoxFalloff;
            OperatorField_InternalStrain: UE.OperatorField;
            RadialFalloff_InternalStrain: UE.RadialFalloff;
            UniformIntegerFalloff: UE.UniformInteger;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            CullingField_Plane2: UE.CullingField;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            OperatorField_FalloffSwitch_Plane: UE.OperatorField;
            OperatorField_FalloffSwitch_Sph: UE.OperatorField;
            OperatorField_FalloffSwitch_Box: UE.OperatorField;
            CullingField_Plane: UE.CullingField;
            PlaneFalloff_Magnitude: UE.PlaneFalloff;
            PlaneFalloff: UE.PlaneFalloff;
            CullingField_Box: UE.CullingField;
            BoxFalloff_Culling: UE.BoxFalloff;
            BoxFalloff: UE.BoxFalloff;
            BoxFalloff_Magnitude: UE.BoxFalloff;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            UniformScalarDecay: UE.UniformScalar;
            OperatorFieldDecay1: UE.OperatorField;
            OperatorFieldDecay2: UE.OperatorField;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            OperatorField_torqueC: UE.OperatorField;
            OperatorField_dirNoise: UE.OperatorField;
            OperatorField_radNoise: UE.OperatorField;
            NoiseField_Torque: UE.NoiseField;
            OperatorField_torque_A: UE.OperatorField;
            UniformScalar_torque: UE.UniformScalar;
            CullingField_DynamicState: UE.CullingField;
            UniformInteger: UE.UniformInteger;
            ["CullingField-Decay"]: UE.CullingField;
            CullingFieldSphere: UE.CullingField;
            RadialFalloffMagnitude: UE.RadialFalloff;
            RadialFalloff_cullVolume: UE.RadialFalloff;
            OperatorFieldDecay4: UE.OperatorField;
            CullingField: UE.CullingField;
            RadialFalloff: UE.RadialFalloff;
            OperatorField_torque_B: UE.OperatorField;
            UniformVector_torque: UE.UniformVector;
            RandomVector_torque: UE.RandomVector;
            NoiseField_dir: UE.NoiseField;
            NoiseField_rad: UE.NoiseField;
            UniformVector_dir: UE.UniformVector;
            RadialVector_rad: UE.RadialVector;
            ["Field Active"]: boolean;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            useBomb: boolean;
            bombMinScale: number;
            bombMaxScale: number;
            bombDuration: number;
            bombSize: number;
            bombpos: UE.Vector;
            bombxloc: number;
            bombPosOrig: UE.Vector;
            bombScaleOrig: UE.Vector;
            delta: number;
            totalElapsedTime: number;
            totalDistance: number;
            oldPos: number;
            ["New Location"]: UE.Vector;
            bombExtraDistance: number;
            useBombLocationOffset: boolean;
            useBombPhysics: boolean;
            currentPos: number;
            velocity: number;
            useDynScale: boolean;
            useDynFieldPos: boolean;
            falloffMinMax_Input: UE.Vector2D;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            OperatorField_Input: UE.OperatorField;
            Magnitude_Input: number;
            bombMass: number;
            useProjectile: boolean;
            projectileFired: boolean;
            projectileVelocity: number;
            oldPosVec: UE.Vector;
            currentPosVec: UE.Vector;
            velocityVec: UE.Vector;
            projectileVelocityMult: number;
            projectileMaxScale: number;
            projectileMinMaxVelRange: UE.Vector2D;
            useCCD: boolean;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_FS_BombField_Prototype(EntryPoint: number) : void;
            FalloffAndCullingSwitch(FalloffType: UE.EFieldFalloffType, OperatorFieldIn: $Nullable<UE.OperatorField>, falloffMinMax: UE.Vector2D, CullingFieldOut: $Ref<UE.CullingField>) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, falloffMinMax_X: number, falloffMinMax_Y: number, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            FalloffSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>, NewParam: $Ref<UE.RadialFalloff>) : void;
            ["FalloffSwitch - Strain"](Magnitude: number, FalloffType: UE.EFieldFalloffType, CullingField: $Ref<UE.CullingField>) : void;
            FalloffSwitch_ForceDynamic(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            FalloffSwitch_InternalStrain(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetColliderLocation() : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_BombField_Prototype_C;
            static Load(InName: string): FS_BombField_Prototype_C;
        
            __tid_FS_BombField_Prototype_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 367B26F543D311B934640E87714E5E67
    namespace Engine.EditorResources.FieldNodes.FS_AnchorField_Generic {
        class FS_AnchorField_Generic_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            PlaneVolumeCol: UE.BoxComponent;
            ActiveTitleText: UE.TextRenderComponent;
            ["Anchor Title Text"]: UE.TextRenderComponent;
            ActiveValueText: UE.TextRenderComponent;
            ["Anchor Text"]: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            BoxVolume: UE.StaticMeshComponent;
            Arrow: UE.ArrowComponent;
            SphereVolumeCol: UE.SphereComponent;
            CullingField_Plane: UE.CullingField;
            CullingField_Sphere: UE.CullingField;
            RadialFalloff: UE.RadialFalloff;
            PlaneVolume: UE.StaticMeshComponent;
            PlaneFalloff: UE.PlaneFalloff;
            CullingField_Box: UE.CullingField;
            BoxVolumeCol: UE.BoxComponent;
            BoxFalloff: UE.BoxFalloff;
            UniformInteger: UE.UniformInteger;
            RadialVector: UE.RadialVector;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            ["Anchor Active"]: boolean;
            ["Anchor Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            Debug: boolean;
            AnchorColour: UE.LinearColor;
            Deactivated: UE.LinearColor;
            AnchorVolume: UE.StaticMeshComponent;
            AnchorTextDisplay: string;
            ViewDebugText: boolean;
            ViewWireFrame: boolean;
            ViewSolidShapes: boolean;
            TextVerticalOffset: number;
            DeactivatedText: UE.LinearColor;
            TextScaleMult: number;
            AnchorDebugSetup() : void;
            ExecuteUbergraph_FS_AnchorField_Generic(EntryPoint: number) : void;
            ["Falloff Field Switch"](UniformInt: $Nullable<UE.UniformInteger>, CullingField: $Ref<UE.CullingField>) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            SetFalloffVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_AnchorField_Generic_C;
            static Load(InName: string): FS_AnchorField_Generic_C;
        
            __tid_FS_AnchorField_Generic_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 894B68A14B6551F9B5F2699E13FAD018
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_WaveScalarField {
        class FS_WaveScalarField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ["Enable Field"]: boolean;
            ["Physics Scalar"]: UE.EFieldScalarType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            ScalarField: UE.FieldNodeBase;
            ["Wave Length"]: number;
            ["Wave Period"]: number;
            ["Wave Function"]: UE.EWaveFunctionType;
            ["Wave Falloff Type"]: UE.EFieldFalloffType;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ExecuteUbergraph_FS_WaveScalarField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_WaveScalarField_C;
            static Load(InName: string): FS_WaveScalarField_C;
        
            __tid_FS_WaveScalarField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2EA015C0421A9AB5745DA99F253302F4
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_UniformVectorField {
        class FS_UniformVectorField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Arrow: UE.ArrowComponent;
            ["Enable Field"]: boolean;
            ["Physics Vector"]: UE.EFieldVectorType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            VectorField: UE.FieldNodeBase;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ExecuteUbergraph_FS_UniformVectorField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_UniformVectorField_C;
            static Load(InName: string): FS_UniformVectorField_C;
        
            __tid_FS_UniformVectorField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 633376C440A1DB94FA35DBA64AFE04EC
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_UniformScalarField {
        class FS_UniformScalarField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ["Enable Field"]: boolean;
            ["Physics Scalar"]: UE.EFieldScalarType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ScalarField: UE.FieldNodeBase;
            ExecuteUbergraph_FS_UniformScalarField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_UniformScalarField_C;
            static Load(InName: string): FS_UniformScalarField_C;
        
            __tid_FS_UniformScalarField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7747C34E45618A3C222DE987C2518645
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_RadialField {
        class FS_RadialField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            InnerSphere: UE.SphereComponent;
            ["Enable Field"]: boolean;
            ["Physics Vector"]: UE.EFieldVectorType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            VectorField: UE.FieldNodeBase;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ExecuteUbergraph_FS_RadialField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_RadialField_C;
            static Load(InName: string): FS_RadialField_C;
        
            __tid_FS_RadialField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 88B8C6E34571AFC7BC1A54A69AD7E68A
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_BaseField {
        class FS_BaseField_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DynamicStateCullingField: UE.CullingField;
            DynamicStateField: UE.UniformInteger;
            NoiseApplyOperatorField: UE.OperatorField;
            FalloffCullingField: UE.CullingField;
            FalloffApplyOperatorField: UE.OperatorField;
            NoiseXYOperatorField: UE.OperatorField;
            NoiseZOperatorField: UE.OperatorField;
            NoiseYOperatorField: UE.OperatorField;
            NoiseXOperatorField: UE.OperatorField;
            NoiseZDirectionField: UE.UniformVector;
            NoiseYDirectionField: UE.UniformVector;
            NoiseXDirectionField: UE.UniformVector;
            VectorNoiseField: UE.OperatorField;
            NoiseZField: UE.NoiseField;
            NoiseYField: UE.NoiseField;
            NoiseXField: UE.NoiseField;
            PlaneCullingFalloffField: UE.PlaneFalloff;
            PlaneFalloffField: UE.PlaneFalloff;
            BoxCullingFalloffField: UE.BoxFalloff;
            BoxFalloffField: UE.BoxFalloff;
            RadialCullingFalloffField: UE.RadialFalloff;
            RadialFalloffField: UE.RadialFalloff;
            Box: UE.BoxComponent;
            Sphere: UE.SphereComponent;
            ["Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            ["Falloff Type"]: UE.EFieldFalloffType;
            ["Min Falloff"]: number;
            ["Max Falloff"]: number;
            ["Cull Outside Falloff"]: boolean;
            ["Noise Mode"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldNoiseCompMode.EFieldNoiseCompMode;
            ["Add Noise Gain"]: number;
            ["Mult Noise Min"]: number;
            ["Mult Noise Max"]: number;
            ["Noise Use Actor Location"]: boolean;
            ["Noise Use Actor Rotation"]: boolean;
            ["Noise Use Actor Scale"]: boolean;
            ["Noise Scale Mult"]: number;
            ["Noise Gain Range"]: UE.Vector2D;
            NoiseLocationInternal: UE.Vector;
            NoiseRotationInternal: UE.Rotator;
            NoiseScaleInternal: UE.Vector;
            NoiseScaleInternalBase: number;
            Debug: boolean;
            DynamicState: UE.EObjectStateTypeEnum;
            ApplyFalloff(FieldIn: $Nullable<UE.FieldNodeBase>, FieldOut: $Ref<UE.FieldNodeBase>) : void;
            ApplyNoise(FieldIn: $Nullable<UE.FieldNodeBase>, FieldOut: $Ref<UE.FieldNodeBase>) : void;
            BoxFalloff(BoxFalloff: $Ref<UE.FieldNodeBase>, BoxCullingFalloff: $Ref<UE.FieldNodeBase>) : void;
            ExecuteUbergraph_FS_BaseField(EntryPoint: number) : void;
            GetCullingFalloffField(CullingFalloffField: $Ref<UE.FieldNodeBase>) : void;
            GetDynamicStateField(DynamicStateField: $Ref<UE.FieldNodeBase>) : void;
            GetFalloffField(FalloffField: $Ref<UE.FieldNodeBase>) : void;
            PlaneFalloff(PlaneFalloff: $Ref<UE.FieldNodeBase>, PlaneCullingFalloff: $Ref<UE.FieldNodeBase>) : void;
            ["Radial Falloff"](RadialFalloff: $Ref<UE.FieldNodeBase>, RadialCullingFalloff: $Ref<UE.FieldNodeBase>) : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            ScalarNoise(ScalarNoiseField: $Ref<UE.FieldNodeBase>) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            VectorNoise(VectorNoiseField: $Ref<UE.FieldNodeBase>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_BaseField_C;
            static Load(InName: string): FS_BaseField_C;
        
            __tid_FS_BaseField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C553B40A490861D61671F1B6A3B787EB
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldSleepType {
        enum EFieldSleepType { Sleep, Disable, Kill, EFieldSleepType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D3CF7DA0416B78026A58EB832D06BDB1
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldShapeType {
        enum EFieldShapeType { Box, Sphere, Plane, EFieldShapeType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F2BD617342C78011CA9A69B1A9687D07
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldNoiseCompMode {
        enum EFieldNoiseCompMode { Add, Multiply, EFieldNoiseCompMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 01BF5F8342362B75F0C2EFA581CAAFE5
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldForceVel {
        enum EFieldForceVel { "Use Force", "Use Velocity", EFieldForceVel_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 396BC5054C30D9BF120BB89F25CF7CE5
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldActivationType {
        enum EFieldActivationType { Delay, OnTick, OnTickWithDelay, Trigger, EFieldActivationType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 203A77A04B4E5237F92EA483C4B8DDB8
    namespace Engine.EngineSky.BP_Sky_Sphere {
        class BP_Sky_Sphere_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SkySphereMesh: UE.StaticMeshComponent;
            Base: UE.SceneComponent;
            ["Sky material"]: UE.MaterialInstanceDynamic;
            ["Refresh material"]: boolean;
            ["Directional light actor"]: UE.DirectionalLight;
            ["Colors determined by sun position"]: boolean;
            ["Sun height"]: number;
            ["Sun brightness"]: number;
            ["Horizon Falloff"]: number;
            ["Zenith Color"]: UE.LinearColor;
            ["Horizon color"]: UE.LinearColor;
            ["Cloud color"]: UE.LinearColor;
            ["Overall Color"]: UE.LinearColor;
            ["Cloud speed"]: number;
            ["Cloud opacity"]: number;
            ["Stars brightness"]: number;
            ["Horizon color curve"]: UE.CurveLinearColor;
            ["Zenith color curve"]: UE.CurveLinearColor;
            ["Cloud color curve"]: UE.CurveLinearColor;
            RefreshMaterial() : void;
            UpdateSunDirection() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Sky_Sphere_C;
            static Load(InName: string): BP_Sky_Sphere_C;
        
            __tid_BP_Sky_Sphere_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B118B8C74937C69B9F68058A6ED53621
    namespace Engine.ArtTools.RenderToTexture.Blueprints.TilingMesh {
        class TilingMesh {
            constructor();
            constructor(StaticMesh: UE.StaticMesh, Transform: UE.Transform, Material: UE.MaterialInstanceConstant, Visible: boolean, DisplacementTexture: UE.Texture);
            StaticMesh: UE.StaticMesh;
            Transform: UE.Transform;
            Material: UE.MaterialInstanceConstant;
            Visible: boolean;
            DisplacementTexture: UE.Texture;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_TilingMesh_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 27C138CE42C6CE63C34E8BAF375EBA07
    namespace Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_Pawn {
        class RenderToTexture_Pawn_C extends UE.Pawn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Pawncam: UE.CameraComponent;
            Root: UE.StaticMeshComponent;
            BaseColor: boolean;
            Specular: boolean;
            Normal: boolean;
            Opacity: boolean;
            Roughness: boolean;
            AmbientOcclusion: boolean;
            MaterialAmbientOcclusion: boolean;
            ResolutionMultiplier: number;
            BufferCommands: string;
            ShotCommand: string;
            ["Backface SSS Meshes"]: TArray<UE.StaticMeshActor>;
            MIDArray: TArray<UE.MaterialInstanceDynamic>;
            Generator: UE.Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_LevelBP.RenderToTexture_LevelBP_C;
            debugdepth() : void;
            ExecuteUbergraph_RenderToTexture_Pawn(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            renderdepth() : void;
            renderimposter() : void;
            renderlightmaps() : void;
            rendertextures() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTexture_Pawn_C;
            static Load(InName: string): RenderToTexture_Pawn_C;
        
            __tid_RenderToTexture_Pawn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9BE3FACE43A2AC9F6C1F108D55966C37
    namespace Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_LevelBP {
        class RenderToTexture_LevelBP_C extends UE.Pawn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ["BottomCollision-LargeMeshesOnly"]: UE.BoxComponent;
            ["SceneCapture Motion Position 1"]: UE.SceneCaptureComponent2D;
            TopOutline: UE.BoxComponent;
            PreviewMesh: UE.StaticMeshComponent;
            TilingPreviewCapture: UE.SceneCaptureComponent2D;
            BottomCollision: UE.BoxComponent;
            Box5: UE.BoxComponent;
            Box4: UE.BoxComponent;
            Box3: UE.BoxComponent;
            Box2: UE.BoxComponent;
            PlaneMesh: UE.StaticMeshComponent;
            Debug: UE.TextRenderComponent;
            Camera1: UE.CameraComponent;
            Root: UE.StaticMeshComponent;
            RotationArray: TArray<UE.Rotator>;
            ["Render Type"]: UE.Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Enum.RenderToTexture_Enum;
            ["Viewport size (see Tooltip)"]: number;
            ResolutionMultiplier: number;
            BaseColor: boolean;
            Specular: boolean;
            Metallic: boolean;
            Normal: boolean;
            Opacity: boolean;
            Roughness: boolean;
            AmbientOcclusion: boolean;
            MaterialAmbientOcclusion: boolean;
            ["Decal Mask"]: boolean;
            ["Lighting Only"]: boolean;
            ["Subsurface Color"]: boolean;
            ["Imposter Static Mesh"]: UE.StaticMesh;
            BufferCommands: string;
            ResCommand: string;
            SheetSize: number;
            ShotCommand: string;
            MeshScale: number;
            ["Imposter MaterialInstanceArray"]: TArray<UE.MaterialInstance>;
            MaterialColor2: UE.LinearColor;
            SectorSize: number;
            InitialOffset: UE.Vector;
            initialscale: number;
            Internalscalefactor: number;
            StaticMeshComponent: UE.StaticMeshComponent;
            LevelStaticMeshActorArray: TArray<UE.Actor>;
            ["Render to Texture Mesh"]: UE.StaticMeshActor;
            ["Use Level Meshes for Depth"]: boolean;
            LightVector: UE.Vector;
            ["Directional Light"]: UE.DirectionalLight;
            ["Opacity Mask Textures"]: TArray<UE.Texture>;
            ["Opacity Mask Channels"]: TArray<UE.LinearColor>;
            ["Frames around Z rotation"]: number;
            ["Aspect Ratio 1 by"]: number;
            ["Use Level Placed Meshes"]: boolean;
            ["Lightmap Mesh"]: UE.StaticMeshActor;
            ["Lightmap Mesh 2-sided, Side 1"]: UE.StaticMeshActor;
            ["Lightmap Mesh 2-sided, Side 2"]: UE.StaticMeshActor;
            ["Depth Map Static Mesh"]: UE.StaticMesh;
            Unwrap: boolean;
            ["Depth Material Mask Textures"]: TArray<UE.Texture2D>;
            ["Flipbook Start Rotation"]: UE.Rotator;
            ["Flipbook Rotation Axis 1"]: UE.Vector;
            ["Flipbook Rotation Axis 2"]: UE.Vector;
            ["Axis 1 Rotations"]: number;
            ["Axis 2 Rotations"]: number;
            ["Flipbook Columns (X)"]: number;
            ["Flipbook Rows (Y)"]: number;
            ["Flipbook MaterialInstance List"]: TArray<UE.MaterialInstance>;
            ["Opacity MaskTextures"]: TArray<UE.Texture>;
            ["Opacity MaskChannels"]: TArray<UE.LinearColor>;
            ["Flipbook Static Mesh"]: UE.StaticMesh;
            ["Flipbook Mesh scale"]: number;
            ["Preview Speed"]: number;
            ImposterEnum: UE.Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Imposter_Enum.RenderToTexture_Imposter_Enum;
            ["Single Rotation Axis"]: UE.Vector;
            ["Unwrap Lightmap 2sided"]: boolean;
            Unwrap2sidedMIDlistA: TArray<UE.MaterialInstanceDynamic>;
            Unwrap2sidedMIDListB: TArray<UE.MaterialInstanceDynamic>;
            ["Lightmap Unwrap Material"]: UE.MaterialInstanceConstant;
            ["Unwrap Lightmap"]: boolean;
            ["Mask Channel"]: TArray<UE.LinearColor>;
            DepthMeshInitialSize: UE.Vector;
            DepthMID: UE.MaterialInstanceDynamic;
            ["Scale XY"]: number;
            ["Scale Z"]: number;
            ["Fit Vector and scale info onto texture"]: boolean;
            TextSize: number;
            ["Text Locations"]: TArray<UE.Vector>;
            ParticleSystem: UE.ParticleSystem;
            SavedPhysMeshList: TArray<UE.Engine.ArtTools.RenderToTexture.Blueprints.PhysMesh.PhysMesh>;
            ["Simulate Physics"]: boolean;
            ["Keep Tiling Hand Placed Meshes"]: boolean;
            ["Simple Random Placement"]: boolean;
            ["PhysGround Mat"]: UE.MaterialInstanceConstant;
            ["Mesh List"]: TArray<UE.StaticMesh>;
            ["Mesh Size Min"]: number;
            ["Mesh Size Max"]: number;
            ["Size Curve"]: number;
            ["Spawn by Size"]: boolean;
            ["PhysGround Density m^2"]: number;
            Count: number;
            ["Number of Meshes"]: number;
            PhysStaticMeshes: TArray<UE.StaticMeshComponent>;
            ["Debug Displacement Depth"]: boolean;
            ["Displacement Min"]: number;
            ["Displacement Max"]: number;
            ["Kill Above Z Min"]: number;
            ["Kill Above Z Max"]: number;
            ["Copied Mesh Array"]: TArray<UE.StaticMeshComponent>;
            ["Current Component"]: UE.StaticMeshComponent;
            StaticMobilityMeshes: TArray<UE.StaticMeshComponent>;
            SavedMeshComponents: TArray<UE.StaticMeshComponent>;
            ["Material Instance"]: UE.MaterialInstance;
            ["Stadium Offsetting"]: boolean;
            ["TilingMesh List"]: TArray<UE.Engine.ArtTools.RenderToTexture.Blueprints.TilingMesh.TilingMesh>;
            SceneDepthWorldUnits: boolean;
            DisplacementMin: number;
            DisplacementMax: number;
            DebugDisplacementDepth: boolean;
            ["Custom Depth"]: boolean;
            ["Displacement Texture Height"]: number;
            ["Preview Tiling"]: boolean;
            ["Tiling Amount"]: number;
            ImposterArray: TArray<UE.Transform>;
            PreviewLocation: UE.Vector;
            ["Output Depth Maps"]: boolean;
            ImposterMeshComponents: TArray<UE.StaticMeshComponent>;
            BackgroundSheetMID: UE.MaterialInstanceDynamic;
            ["Debug Depth"]: boolean;
            ["Max Pitch/Roll"]: number;
            ["Render Motion Vectors"]: boolean;
            SceneColor: boolean;
            ["Sheet height"]: number;
            ["Background Sheet Color"]: UE.LinearColor;
            FlipbookMeshes: TArray<UE.StaticMeshComponent>;
            ["UV Layout Dilation Amount"]: number;
            OffsetVectors: TArray<UE.Vector>;
            ["Empty Spacer"]: boolean;
            CurrentRenderLoc: UE.Vector;
            ["UV Dilation Steps"]: number;
            MaterialChoice: UE.MaterialInstance;
            MVFloors: TArray<UE.StaticMeshComponent>;
            FlipbookMID: UE.MaterialInstanceDynamic;
            ["Motion Dilation Steps"]: number;
            UnwrappedMotionVectorMeshes: TArray<UE.StaticMeshComponent>;
            MotionVectorIntensityBoost: number;
            sRGB: boolean;
            ["Render MotionVectors"]: boolean;
            ["Large Mesh Sink Height"]: number;
            ["Large Mesh Size Threshold"]: number;
            ["UV DilationPass"]: boolean;
            ["MotionVector Pass"]: boolean;
            MotionVectorMaterial: UE.MaterialInstanceConstant;
            MotionVectorsApplied: UE.MaterialInstanceConstant;
            ["UV Layout DilationAmount"]: number;
            ["UV DilationSteps"]: number;
            ["Motion DilationSteps"]: number;
            ["Motion Vector IntensityBoost"]: number;
            MotionVectorsApplied_Imposter: UE.MaterialInstanceConstant;
            ["Flipbook Preview Mat"]: UE.MaterialInstanceConstant;
            ["Imposter-SingleAxis Preview Mat"]: UE.MaterialInstanceConstant;
            ["Imposter-3D Preview Mat"]: UE.MaterialInstanceConstant;
            MIDList: TArray<UE.MaterialInstanceDynamic>;
            PolyCenter: UE.Vector;
            ["Offst Phase"]: number;
            ["Dilation Phase"]: number;
            ["Ortho FOV"]: number;
            ["Indicies to Delete"]: TArray<number>;
            TilingAmount: number;
            UVIndex: number;
            ["UV Index"]: number;
            NewVar: UE.MaterialInstanceDynamic;
            ["Export images as EXR"]: boolean;
            ["Copy a mesh"](MeshComponent: $Nullable<UE.StaticMeshComponent>, OffsetVector: UE.Vector, ArraytoPlaceMeshesin: $Ref<TArray<UE.StaticMeshComponent>>) : void;
            ExecuteUbergraph_RenderToTexture_LevelBP(EntryPoint: number) : void;
            ["Find Z Bounds"](Meshes: $Ref<TArray<UE.StaticMeshComponent>>, Min: $Ref<number>, Max: $Ref<number>) : void;
            FlipBook() : void;
            ["Imposter Sprites"]() : void;
            ["Match Level Actors to Imposter Array"]() : void;
            ["New Mesh"](Mesh: $Nullable<UE.StaticMesh>, WorldPos: UE.Vector, Material: $Nullable<UE.MaterialInterface>, Scale3d: UE.Vector, MeshComp: $Ref<UE.StaticMeshComponent>) : void;
            ["Particle System Frame Dump"]() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            ["Render Depth Map"](MID: $Ref<UE.MaterialInstanceDynamic>) : void;
            ["Render Lightmap"]() : void;
            ["Render LIghtmap 2-sided"]() : void;
            ["Render Random Tiling Physics Drop"]() : void;
            ["Render Tiling Material"]() : void;
            ["Render Tiling Material from Meshes"]() : void;
            ["Render Unwrapped Mesh To Textures"]() : void;
            ["Set Buffer Commands"]() : void;
            ["Set up MPC"]() : void;
            ["Setup Collision"](Visible: boolean) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTexture_LevelBP_C;
            static Load(InName: string): RenderToTexture_LevelBP_C;
        
            __tid_RenderToTexture_LevelBP_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A04E9A724D45605D5C062683BA52E56B
    namespace Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_Game {
        class RenderToTexture_Game_C extends UE.GameMode {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTexture_Game_C;
            static Load(InName: string): RenderToTexture_Game_C;
        
            __tid_RenderToTexture_Game_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 313591D9408B14DEE2B4D19F2EA1342F
    namespace Engine.ArtTools.RenderToTexture.Blueprints.PhysMesh {
        class PhysMesh {
            constructor();
            constructor(SMesh: UE.StaticMesh, Transform: UE.Transform);
            SMesh: UE.StaticMesh;
            Transform: UE.Transform;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_PhysMesh_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B5FAA1344910B53E80113D8075B18513
    namespace Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Imposter_Enum {
        enum RenderToTexture_Imposter_Enum { "Full 3D Imposter", "Single Rotation Axis", RenderToTexture_Imposter_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CD8E94724625948C9FB6E19BC4560F4A
    namespace Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Flipbook_Enum {
        enum RenderToTexture_Flipbook_Enum { "Simple Mesh rotation", "Material Instance Interpolation", "Both Mesh rotation and Material Instance Interpolation", RenderToTexture_Flipbook_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E6D8002949675C4E9A6390970CD0DF84
    namespace Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Enum {
        enum RenderToTexture_Enum { Material, "Unwrapped Mesh", "Depth Map", Lightmaps, "Lightmaps 2-sided", "Flipbook Mesh Animation", "Physics Ground - Tiling Physics Drop of Meshes", "Tiling Material from Hand Placed Meshes", RenderToTexture_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 917415834ED8BB644B2CF0AA1CA0855E
    namespace Engine.ArtTools.RenderToTexture.Enums.EIntTypes {
        enum EIntTypes { int, int2, int3, int4, EIntTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 98665A884F1AE388294A3099C9F6C5D1
    namespace Engine.ArtTools.RenderToTexture.Enums.EFloatTypes {
        enum EFloatTypes { Float, Float2, Float3, Float4, EFloatTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F886D44E4F3DEE1BB130B5B7C0D7D0F3
    namespace Engine.ArtTools.RenderToTexture.Macros.RenderToTextureMacros {
        class RenderToTextureMacros_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTextureMacros_C;
            static Load(InName: string): RenderToTextureMacros_C;
        
            __tid_RenderToTextureMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8C2858A646EB2E9B1C1076BCE80C3680
    namespace Engine.ArtTools.RenderToTexture.Macros.RenderToTextureFunctionLibrary {
        class RenderToTextureFunctionLibrary_C extends UE.BlueprintFunctionLibrary {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static ["Array to HLSL Int Array"](Type: UE.Engine.ArtTools.RenderToTexture.Enums.EIntTypes.EIntTypes, VariableName: $Ref<string>, int: $Ref<TArray<number>>, int2: $Ref<TArray<UE.Vector2D>>, int3: $Ref<TArray<UE.Vector>>, int4: $Ref<TArray<UE.LinearColor>>, __WorldContext: $Nullable<UE.Object>, String: $Ref<string>) : void;
            static ["Set Canvas Material Scale and Position"](Size: UE.Vector2D, Position: UE.Vector2D, Scale: number, __WorldContext: $Nullable<UE.Object>, ScreenPosition: $Ref<UE.Vector2D>, ScreenSize: $Ref<UE.Vector2D>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTextureFunctionLibrary_C;
            static Load(InName: string): RenderToTextureFunctionLibrary_C;
        
            __tid_RenderToTextureFunctionLibrary_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 67D6697E49FB272F78CDB7BCC0894281
    namespace Engine.EditorBlueprintResources.StandardMacros {
        class StandardMacros_C extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): StandardMacros_C;
            static Load(InName: string): StandardMacros_C;
        
            __tid_StandardMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E7FB506A4BD35DA67A771BB584DA8197
    namespace Engine.EditorBlueprintResources.ActorMacros {
        class ActorMacros_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorMacros_C;
            static Load(InName: string): ActorMacros_C;
        
            __tid_ActorMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D549414D427DF9190E03438E028EF172
    namespace Engine.EditorBlueprintResources.ActorComponentMacros {
        class ActorComponentMacros_C extends UE.ActorComponent {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorComponentMacros_C;
            static Load(InName: string): ActorComponentMacros_C;
        
            __tid_ActorComponentMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B076AEA04C61E0B4A6F249931D9A6E87
    namespace Engine.FunctionalTesting.Blueprints.AITesting_MoveGoal {
        class AITesting_MoveGoal_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            MySpriteComponent: UE.BillboardComponent;
            CollisionBox: UE.BoxComponent;
            ObservedPawn: UE.Object;
            CurrentTest: UE.FunctionalTest;
            bStartEnabled: boolean;
            ExecuteUbergraph_AITesting_MoveGoal(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            SetCollisionEnabled(bShouldBeEnabled: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AITesting_MoveGoal_C;
            static Load(InName: string): AITesting_MoveGoal_C;
        
            __tid_AITesting_MoveGoal_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 571D941A4F5D08CC7D5F179587D52DD8
    namespace Engine.Sequencer.DefaultBurnInOptions {
        class DefaultBurnInOptions_C extends UE.LevelSequenceBurnInInitSettings {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            TopLeftText: string;
            TopCenterText: string;
            TopRightText: string;
            BottomLeftText: string;
            BottomCenterText: string;
            BottomRightText: string;
            Watermark: UE.Texture2D;
            WatermarkTint: UE.LinearColor;
            Font: UE.SlateFontInfo;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultBurnInOptions_C;
            static Load(InName: string): DefaultBurnInOptions_C;
        
            __tid_DefaultBurnInOptions_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 52D4895543D07330B425799C183F82A2
    namespace Engine.Sequencer.DefaultBurnIn {
        class DefaultBurnIn_C extends UE.LevelSequenceBurnIn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Border_0: UE.Border;
            Border_3: UE.Border;
            BottomCenter: UE.TextBlock;
            BottomLeft: UE.TextBlock;
            BottomRight: UE.TextBlock;
            TopCenter: UE.TextBlock;
            TopLeft: UE.TextBlock;
            TopRight: UE.TextBlock;
            Watermark: UE.Image;
            ["Foreground Color"]: UE.LinearColor;
            ["Background Color"]: UE.LinearColor;
            Date: string;
            Options: UE.Engine.Sequencer.DefaultBurnInOptions.DefaultBurnInOptions_C;
            hh: string;
            mm: string;
            ss: string;
            ff: string;
            RootFrame: string;
            ShotFrame: string;
            RootName: string;
            ShotName: string;
            FocalLength: string;
            FocusDistance: string;
            Aperture: string;
            SensorWidth: string;
            SensorHeight: string;
            SensorAspectRatio: string;
            Translation: UE.Vector;
            Rotation: UE.Rotator;
            bCached: boolean;
            EngineVersion: string;
            SourceTimecode: string;
            CacheData() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_DefaultBurnIn(EntryPoint: number) : void;
            Get_BottomCenter_Text_0() : string;
            Get_BottomLeft_Text_0() : string;
            Get_BottomRight_Text_0() : string;
            Get_TopCenter_Text_0() : string;
            Get_TopLeft_Text_0() : string;
            Get_TopRight_Text_0() : string;
            /*
             *Get the settings class to use for this burn in
             */
            GetSettingsClass() : UE.Class;
            /*
             *Called when this burn in is receiving its settings
             */
            SetSettings(InSettings: $Nullable<UE.Object>) : void;
            /*
             *Ticks this widget.  Override in derived classes, but always call the parent implementation.
             *
             *@param  MyGeometry The space allotted for this widget
             *@param  InDeltaTime  Real time passed since last tick
             */
            Tick(MyGeometry: UE.Geometry, InDeltaTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultBurnIn_C;
            static Load(InName: string): DefaultBurnIn_C;
        
            __tid_DefaultBurnIn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EDEAEC95417A6639D0C13D8E4E170BB9
    namespace Engine.Tutorial.BlueprintTutorials.TutorialAssets.Tutorial_BP_Interface {
        class Tutorial_BP_Interface_C extends UE.Interface {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            TutorialSampleFunction() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Tutorial_BP_Interface_C;
            static Load(InName: string): Tutorial_BP_Interface_C;
        
            __tid_Tutorial_BP_Interface_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A041618442A0D38DB2406DB180EA4B9F
    namespace Engine.Tutorial.BlueprintTutorials.TutorialAssets.Tutorial_BP_Class {
        class Tutorial_BP_Class_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            SampleVariable: boolean;
            StoredGameMode: UE.GameModeBase;
            ExecuteUbergraph_Tutorial_BP_Class(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Tutorial_BP_Class_C;
            static Load(InName: string): Tutorial_BP_Class_C;
        
            __tid_Tutorial_BP_Class_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4205CCBB454A1F9F82B8EE8E4DBD36F7
    namespace Engine.Tutorial.SubEditors.TutorialAssets.TutorialAnimationBlueprint {
        class TutorialAnimationBlueprint_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            SomeBoolean: boolean;
            SomeFloat: number;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            ExecuteUbergraph_TutorialAnimationBlueprint(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TutorialAnimationBlueprint_C;
            static Load(InName: string): TutorialAnimationBlueprint_C;
        
            __tid_TutorialAnimationBlueprint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4205CCBB454A1F9F82B8EE8E4DBD36F7
    namespace Engine.Tutorial.SubEditors.TutorialAssets.TutorialAnimationBlueprint {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_8: string, __NameProperty_9: string, __NameProperty_10: string, __IntProperty_11: number, __StructProperty_12: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_8: string;
            __NameProperty_9: string;
            __NameProperty_10: string;
            __IntProperty_11: number;
            __StructProperty_12: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4205CCBB454A1F9F82B8EE8E4DBD36F7
    namespace Engine.Tutorial.SubEditors.TutorialAssets.TutorialAnimationBlueprint {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5D77494845BE182F6F80FC90A2B91275
    namespace Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialTPP_AnimBlueprint {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number);
            __FloatProperty: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5D77494845BE182F6F80FC90A2B91275
    namespace Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialTPP_AnimBlueprint {
        class TutorialTPP_AnimBlueprint_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialTPP_AnimBlueprint.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            Speed: number;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            ExecuteUbergraph_TutorialTPP_AnimBlueprint(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TutorialTPP_AnimBlueprint_C;
            static Load(InName: string): TutorialTPP_AnimBlueprint_C;
        
            __tid_TutorialTPP_AnimBlueprint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5D77494845BE182F6F80FC90A2B91275
    namespace Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialTPP_AnimBlueprint {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_7: string, __StructProperty_8: UE.AnimNodeFunctionRef, __BoolProperty_9: boolean, __FloatProperty_10: number, __FloatProperty_11: number, __BoolProperty_12: boolean, __EnumProperty_13: UE.EAnimSyncMethod, __ByteProperty_14: UE.EAnimGroupRole, __NameProperty_15: string, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_7: string;
            __StructProperty_8: UE.AnimNodeFunctionRef;
            __BoolProperty_9: boolean;
            __FloatProperty_10: number;
            __FloatProperty_11: number;
            __BoolProperty_12: boolean;
            __EnumProperty_13: UE.EAnimSyncMethod;
            __ByteProperty_14: UE.EAnimGroupRole;
            __NameProperty_15: string;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 673D63F0429AC28A6F72CAA5BAF13C8F
    namespace Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialCharacter {
        class TutorialCharacter_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TutorialCharacter_C;
            static Load(InName: string): TutorialCharacter_C;
        
            __tid_TutorialCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4CE55E8148ED095B099C02AFFC4423BD
    namespace ControlRig.StandardFunctionLibrary.StandardFunctionLibrary {
        class StandardFunctionLibrary_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): StandardFunctionLibrary_C;
            static Load(InName: string): StandardFunctionLibrary_C;
        
            __tid_StandardFunctionLibrary_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6E388A2A4D5248F607CAD4B6314381B5
    namespace ControlRigSpline.SplineFunctionLibrary.SplineFunctionLibrary {
        class SplineFunctionLibrary_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SplineFunctionLibrary_C;
            static Load(InName: string): SplineFunctionLibrary_C;
        
            __tid_SplineFunctionLibrary_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 600BED6747DF6A75AF99DD963DC99E83
    namespace DatasmithContent.Blueprints.FBXImporter.Animation.ImportedSequencesHelper {
        class ImportedSequencesHelper_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            ImportedSequences: TArray<UE.LevelSequence>;
            SampleUIClass: UE.Class;
            SceneAsset: UE.Object;
            /*
             *Add a sample UI that can be used to play imported level sequences
             */
            AddAnimationSampleUI() : void;
            /*
             *Remove the sample UI
             */
            RemoveAnimationSampleUI() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportedSequencesHelper_C;
            static Load(InName: string): ImportedSequencesHelper_C;
        
            __tid_ImportedSequencesHelper_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C4ADE31B4472D8F44F1F60873DCA4F8B
    namespace DatasmithContent.Blueprints.FBXImporter.UI.AnimationSampleUI {
        class AnimationSampleUI_C extends UE.EditorUtilityWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimationButtonsHorizontalBox: UE.HorizontalBox;
            AnimationClipHorizontalBox: UE.HorizontalBox;
            AnimationPlayerHorizontalBox: UE.HorizontalBox;
            AnimClipCombobox: UE.ComboBoxString;
            AnimPlayButton: UE.Button;
            AnimPlayerCombobox: UE.ComboBoxString;
            AnimResetButton: UE.Button;
            ImportedSequencesHelpersNamesToObj: TMap<string, UE.DatasmithContent.Blueprints.FBXImporter.Animation.ImportedSequencesHelper.ImportedSequencesHelper_C>;
            SelectedImportedSequencesHelper: UE.DatasmithContent.Blueprints.FBXImporter.Animation.ImportedSequencesHelper.ImportedSequencesHelper_C;
            SpawnedLevelSequenceActor: UE.LevelSequenceActor;
            SelectedSequence: UE.LevelSequence;
            BndEvt__AnimClipCombobox_K2Node_ComponentBoundEvent_0_OnSelectionChangedEvent__DelegateSignature(SelectedItem: string, SelectionType: UE.ESelectInfo) : void;
            BndEvt__AnimPlayButton_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature() : void;
            BndEvt__AnimPlayerCombobox_K2Node_ComponentBoundEvent_0_OnSelectionChangedEvent__DelegateSignature(SelectedItem: string, SelectionType: UE.ESelectInfo) : void;
            BndEvt__AnimResetButton_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AnimationSampleUI(EntryPoint: number) : void;
            /*
             *Returns the LevelSequenceActor for the scene. Will spawn a new one if needed. Note: This requires SelectedImportedSequencesHelper to be valid and have at least one LevelSequence
             */
            GetLevelSequenceActor(Actor: $Ref<UE.LevelSequenceActor>) : void;
            /*
             *Resets the playback position to start. Taking advantage of the fact that we set all our LevelSequences to CompletionMode 'KeepState', this will actually scrub back from the end to frame zero, properly resettting all actors.
             */
            RewindAnimationToStart(Player: $Nullable<UE.LevelSequencePlayer>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimationSampleUI_C;
            static Load(InName: string): AnimationSampleUI_C;
        
            __tid_AnimationSampleUI_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 977B97E54653E3AF70B5268FE017C0CF
    namespace DatasmithContent.Datasmith.DatasmithSelector {
        class DatasmithSelector_C extends UE.DatasmithContent.Datasmith.DatasmithLayer.DatasmithLayer_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            SelectedId: number;
            ExecuteUbergraph_DatasmithSelector(EntryPoint: number) : void;
            UpdateHierarchy(Enable: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithSelector_C;
            static Load(InName: string): DatasmithSelector_C;
        
            __tid_DatasmithSelector_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0878317841C0166B58BBFBB9EFA36CD8
    namespace DatasmithContent.Datasmith.DatasmithLayer {
        class DatasmithLayer_C extends UE.SceneComponent {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            EnableHierarchy: boolean;
            ExecuteUbergraph_DatasmithLayer(EntryPoint: number) : void;
            /*
             *Event called every frame if tick is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            UpdateChildStaticMeshVisibility(Enable: boolean, StaticMesh: $Nullable<UE.StaticMeshComponent>) : void;
            UpdateHierarchy(Enable: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithLayer_C;
            static Load(InName: string): DatasmithLayer_C;
        
            __tid_DatasmithLayer_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 909EFB8B4EC4DC44EDCB759F2BC01276
    namespace DatasmithContent.Datasmith.DatasmithArealightMesh {
        class DatasmithAreaLightMesh_C extends UE.DatasmithAreaLightActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            NewVar_0: TArray<string>;
            LightColor(Intensity: number, Color: UE.LinearColor, Emissive: $Ref<UE.LinearColor>) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithAreaLightMesh_C;
            static Load(InName: string): DatasmithAreaLightMesh_C;
        
            __tid_DatasmithAreaLightMesh_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A8D10CA24886AAFD40C09B9F2196D48B
    namespace DatasmithContent.Datasmith.DatasmithAreaLight {
        class DatasmithAreaLight_C extends UE.DatasmithAreaLightActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            IndirectIntensity: number;
            VolumetricScatteringIntensity: number;
            SpecularScale: number;
            ShadowBias: number;
            ["Cast Shadows"]: boolean;
            LightColor(Intensity: number, Color: UE.LinearColor, Emissive: $Ref<UE.LinearColor>) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithAreaLight_C;
            static Load(InName: string): DatasmithAreaLight_C;
        
            __tid_DatasmithAreaLight_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6402C85B47DCBD500C7B78ADE766EAE9
    namespace DatasmithContent.Datasmith.DatasmithActor {
        class DatasmithActor_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SceneRoot: UE.SceneComponent;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithActor_C;
            static Load(InName: string): DatasmithActor_C;
        
            __tid_DatasmithActor_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ECB22C2849155502668402A846E80610
    namespace DatasmithContent.Datasmith.AreaLightsStruct {
        class AreaLightsStruct {
            constructor();
            constructor(Mesh: UE.StaticMesh);
            Mesh: UE.StaticMesh;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AreaLightsStruct_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1937CC8940AA88529DE8E685ED4ADDBF
    namespace DatasmithContent.Materials.StdDecal.BP_DecalTestPOM {
        class BP_DecalTestPOM_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Decal: UE.DecalComponent;
            DefaultSceneRoot: UE.SceneComponent;
            PreviousRotation: UE.Rotator;
            Decal_MD: UE.MaterialInstanceDynamic;
            DecalMaterialInstance: UE.MaterialInstance;
            AssignNewDecalMaterial() : void;
            ExecuteUbergraph_BP_DecalTestPOM(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            UpdateDynamicDecalMaterial(Force: boolean) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_DecalTestPOM_C;
            static Load(InName: string): BP_DecalTestPOM_C;
        
            __tid_BP_DecalTestPOM_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AA9391F54A5665BD2DC8A6B335B40E97
    namespace AudioWidgets.AudioButtonMatrix.AudioButtonMatrixColumn {
        class AudioButtonMatrixColumn_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ButtonVerticalBox: UE.VerticalBox;
            AddButton(AudioButtonToggle: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            ClearButtons() : void;
            GetButtonAt(Index: number, Button: $Ref<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            GetButtons(ChildButtons: $Ref<TArray<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>>) : void;
            GetNumButtons(NumButtons: $Ref<number>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioButtonMatrixColumn_C;
            static Load(InName: string): AudioButtonMatrixColumn_C;
        
            __tid_AudioButtonMatrixColumn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9FA99C4A4BF83614E7D3D8A9719E0D5A
    namespace AudioWidgets.AudioButtonMatrix.AudioButtonMatrix {
        class AudioButtonMatrix_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            HorizontalButtonBox: UE.HorizontalBox;
            TitleText: UE.TextBlock;
            DisplayName: string;
            Tooltip: string;
            Values: TArray<string>;
            NumColumns: number;
            ExclusiveSelection: boolean;
            OnMultiSelectionChanged: $MulticastDelegate<(SelectedButtons: $Ref<TArray<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>>) => void>;
            OnExclusiveSelectionChanged: $MulticastDelegate<(Selection: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) => void>;
            LastExclusive: UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C;
            AddAudioButton(Text: string, ColumnIndex: number, ButtonEnabled: boolean, Button: $Ref<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            CreateStubButtons() : void;
            ExecuteUbergraph_AudioButtonMatrix(EntryPoint: number) : void;
            GetOrAddVerticalBox(ColumnIndex: number, MatrixColumn: $Ref<UE.AudioWidgets.AudioButtonMatrix.AudioButtonMatrixColumn.AudioButtonMatrixColumn_C>) : void;
            OnExclusiveSelectionChanged__DelegateSignature(Selection: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            OnMultiSelectionChanged__DelegateSignature(SelectedButtons: $Ref<TArray<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>>) : void;
            /*
             *Called by both the game and the editor.  Allows users to run initial setup for their widgets to better preview
             *the setup in the designer and since generally that same setup code is required at runtime, it's called there
             *as well.
             *
             ***WARNING**
             *This is intended purely for cosmetic updates using locally owned data, you can not safely access any game related
             *state, if you call something that doesn't expect to be run at editor time, you may crash the editor.
             *
             *In the event you save the asset with blueprint code that causes a crash on evaluation.  You can turn off
             *PreConstruct evaluation in the Widget Designer settings in the Editor Preferences.
             */
            PreConstruct(IsDesignTime: boolean) : void;
            SetButtonDeselected_EventPrivate(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            SetButtonSelected_EventPrivate(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            SetButtonSelectedPrivate(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            SetSelected(Row: number, Column: number) : void;
            SetSelectedByArrayIndex(Index: number) : void;
            SetSelectionChangedPrivate(NewSelection: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>, ReportDeselected: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioButtonMatrix_C;
            static Load(InName: string): AudioButtonMatrix_C;
        
            __tid_AudioButtonMatrix_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 828F4765467D198207C0BEA8CC43FA31
    namespace AudioWidgets.AudioButtonToggle.AudioButtonToggle {
        class AudioButtonToggle_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Button01: UE.Button;
            LeftBoxBottom: UE.Image;
            LeftBoxTop: UE.Image;
            LeftCurveBottom: UE.Image;
            LeftCurveTop: UE.Image;
            RightBoxBottom: UE.Image;
            RightBoxTop: UE.Image;
            RightCurveBottom: UE.Image;
            RightCurveTop: UE.Image;
            TextBorder: UE.Border;
            ValueText: UE.TextBlock;
            WidgetSwitchLeftBottom: UE.WidgetSwitcher;
            WidgetSwitchLeftTop: UE.WidgetSwitcher;
            WidgetSwitchRightCurveBottom: UE.WidgetSwitcher;
            WidgetSwitchRightCurveTop: UE.WidgetSwitcher;
            OnSelected: $MulticastDelegate<(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) => void>;
            TextValue: string;
            TextColor: UE.SlateColor;
            TextColorSelected: UE.SlateColor;
            BackgroundColor: UE.LinearColor;
            BackgroundColorSelected: UE.LinearColor;
            OnDeselected: $MulticastDelegate<(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) => void>;
            CurveTopLeft: boolean;
            CurveTopRight: boolean;
            CurveBottomLeft: boolean;
            CurveBottomRight: boolean;
            Selected: boolean;
            BndEvt__Button01_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioButtonToggle(EntryPoint: number) : void;
            GetIsSelected(IsSelected: $Ref<boolean>) : void;
            OnDeselected__DelegateSignature(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            OnSelected__DelegateSignature(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            /*
             *Called by both the game and the editor.  Allows users to run initial setup for their widgets to better preview
             *the setup in the designer and since generally that same setup code is required at runtime, it's called there
             *as well.
             *
             ***WARNING**
             *This is intended purely for cosmetic updates using locally owned data, you can not safely access any game related
             *state, if you call something that doesn't expect to be run at editor time, you may crash the editor.
             *
             *In the event you save the asset with blueprint code that causes a crash on evaluation.  You can turn off
             *PreConstruct evaluation in the Widget Designer settings in the Editor Preferences.
             */
            PreConstruct(IsDesignTime: boolean) : void;
            RefreshCorners() : void;
            SetBackgroundColor(NewColor: UE.LinearColor) : void;
            SetDeselected() : void;
            SetSelected(ReportEvent: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioButtonToggle_C;
            static Load(InName: string): AudioButtonToggle_C;
        
            __tid_AudioButtonToggle_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 319C2A4445A35F8F9D7C70842CA7EACE
    namespace AudioWidgets.AudioFader.AudioFader {
        class AudioFader_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AudioTextBox: UE.AudioWidgets.AudioTextBox.AudioTextBox.AudioTextBox_C;
            Slider: UE.Slider;
            SliderShadow: UE.Image;
            ["Minimum Integral Digits"]: number;
            ["Maximum Integral Digits"]: number;
            ["Minimum Fractional Digits"]: number;
            ["Maximum Fractional Digits"]: number;
            OnValueChanged: $MulticastDelegate<(NewValue: number) => void>;
            LinToDbCurve: UE.CurveFloat;
            DbToLinCurve: UE.CurveFloat;
            BndEvt__Slider_K2Node_ComponentBoundEvent_0_OnFloatValueChangedEvent__DelegateSignature(Value: number) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioFader(EntryPoint: number) : void;
            GetDbValue(LinValue: number, DbValue: $Ref<number>) : void;
            GetLinValue(DbValue: number, LinValue: $Ref<number>) : void;
            OnTextCommitted(Text: string, CommitMethod: UE.ETextCommit) : void;
            OnValueChanged__DelegateSignature(NewValue: number) : void;
            SetTextValue(NewValue: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioFader_C;
            static Load(InName: string): AudioFader_C;
        
            __tid_AudioFader_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A2C5071A4AF428F3964DFABC0453E72E
    namespace AudioWidgets.AudioKnobLarge.AudioKnobLarge {
        class AudioKnobLarge_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DisplayMaxTextBox: UE.TextBlock;
            DisplayMinTextBox: UE.TextBlock;
            LabelTextBox: UE.TextBlock;
            Layer00: UE.Image;
            Layer01: UE.Image;
            Layer02: UE.Image;
            Slider: UE.RadialSlider;
            UnitsText: UE.EditableText;
            ValueTextBox: UE.EditableText;
            Units: string;
            ToolTip: string;
            Label: string;
            MaxIntegralDigits: number;
            MaxFractionalDigits: number;
            DisplayMin: string;
            DisplayMax: string;
            ControlValueNormalized: number;
            ControlValueMin: number;
            ControlValueMax: number;
            OnControlValueChanged: $MulticastDelegate<(NewValue: number) => void>;
            ControlValue: number;
            BndEvt__Slider_K2Node_ComponentBoundEvent_2_OnFloatValueChangedEvent__DelegateSignature(Value: number) : void;
            BndEvt__ValueTextBox_K2Node_ComponentBoundEvent_0_OnEditableTextCommittedEvent__DelegateSignature(Text: string, CommitMethod: UE.ETextCommit) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioKnobLarge(EntryPoint: number) : void;
            OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            SetNewValue(NewValue: number, Normalized: boolean, UpdateText: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioKnobLarge_C;
            static Load(InName: string): AudioKnobLarge_C;
        
            __tid_AudioKnobLarge_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 23D9C69348557B3640888F82B45000A2
    namespace AudioWidgets.AudioKnobSmall.AudioKnobSmall {
        class AudioKnobSmall_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Background: UE.Image;
            KnobLayer01: UE.Image;
            KnobLayer02: UE.Image;
            KnobSlider: UE.RadialSlider;
            LabelTextBox: UE.TextBlock;
            TextLayer01: UE.Image;
            UnitsText: UE.EditableText;
            ValueTextBox: UE.EditableText;
            Units: string;
            ToolTip: string;
            Label: string;
            MaxIntegralDigits: number;
            MaxFractionalDigits: number;
            DisplayMin: string;
            DisplayMax: string;
            ControlValueNormalized: number;
            ControlValueMin: number;
            ControlValueMax: number;
            OnControlValueChanged: $MulticastDelegate<(NewValue: number) => void>;
            ControlValue: number;
            BndEvt__KnobSlider_K2Node_ComponentBoundEvent_2_OnFloatValueChangedEvent__DelegateSignature(Value: number) : void;
            BndEvt__ValueTextBox_K2Node_ComponentBoundEvent_0_OnEditableTextCommittedEvent__DelegateSignature(Text: string, CommitMethod: UE.ETextCommit) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioKnobSmall(EntryPoint: number) : void;
            OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            SetNewValue(NewValue: number, Normalized: boolean, UpdateText: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioKnobSmall_C;
            static Load(InName: string): AudioKnobSmall_C;
        
            __tid_AudioKnobSmall_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2D16AC744CF70657B912D8B3ABA891C8
    namespace AudioWidgets.AudioTextBox.AudioTextBox {
        class AudioTextBox_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            TextLayer01: UE.Image;
            UnitsText: UE.EditableText;
            ValueTextBox: UE.EditableText;
            UnitText: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioTextBox_C;
            static Load(InName: string): AudioTextBox_C;
        
            __tid_AudioTextBox_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CFE80E3348A0A6787E23A79E8DFD77EB
    namespace AudioWidgets.SubmixEffects.SubmixEffectDelayPresetWidget {
        class SubmixEffectDelayPresetWidget_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            LargeKnobDelay: UE.AudioWidgets.AudioKnobLarge.AudioKnobLarge.AudioKnobLarge_C;
            LargeKnobDelayMax: UE.AudioWidgets.AudioKnobLarge.AudioKnobLarge.AudioKnobLarge_C;
            LargeKnobTimeInterp: UE.AudioWidgets.AudioKnobLarge.AudioKnobLarge.AudioKnobLarge_C;
            Preset: UE.SubmixEffectDelayPreset;
            BndEvt__LargeKnobDelay_K2Node_ComponentBoundEvent_0_OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            BndEvt__LargeKnobDelayMax_K2Node_ComponentBoundEvent_1_OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            BndEvt__LargeKnobTimeInterp_K2Node_ComponentBoundEvent_2_OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            ExecuteUbergraph_SubmixEffectDelayPresetWidget(EntryPoint: number) : void;
            /*
             *Returns the class of Preset the widget supports
             */
            GetClass() : UE.Class;
            /**
             * @deprecated Unsupported super overloads.
             */
            GetClass() : Class;
            GetEditorName() : string;
            GetIconBrushName() : string;
            /*
             *Called when the preset widget is constructed
             */
            OnConstructed(Preset: $Nullable<UE.SoundEffectPreset>) : void;
            OnPresetUpdated(Selection: string) : void;
            /*
             *Called when the preset object is changed
             */
            OnPropertyChanged(Preset: $Nullable<UE.SoundEffectPreset>, PropertyName: string) : void;
            SetDelayLength(DelayLength: number) : void;
            SetDelayMaxLength(DelayLengthMax: number) : void;
            SetInterpTime(InterpTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SubmixEffectDelayPresetWidget_C;
            static Load(InName: string): SubmixEffectDelayPresetWidget_C;
        
            __tid_SubmixEffectDelayPresetWidget_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 99BB3972404E3BC1614DD79BD2684693
    namespace Takes.Sequencer.DefaultTakeBurnIn {
        class DefaultTakeBurnIn_C extends UE.LevelSequenceBurnIn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Border_0: UE.Border;
            Border_3: UE.Border;
            BottomCenter: UE.TextBlock;
            BottomLeft: UE.TextBlock;
            BottomRight: UE.TextBlock;
            TopCenter: UE.TextBlock;
            TopLeft: UE.TextBlock;
            TopRight: UE.TextBlock;
            Watermark: UE.Image;
            ["Foreground Color"]: UE.LinearColor;
            ["Background Color"]: UE.LinearColor;
            Date: string;
            Options: UE.Engine.Sequencer.DefaultBurnInOptions.DefaultBurnInOptions_C;
            hh: string;
            mm: string;
            ss: string;
            ff: string;
            RootFrame: string;
            ShotFrame: string;
            RootName: string;
            ShotName: string;
            FocalLength: string;
            FocusDistance: string;
            Aperture: string;
            SensorWidth: string;
            SensorHeight: string;
            SensorAspectRatio: string;
            Translation: UE.Vector;
            Rotation: UE.Rotator;
            bCached: boolean;
            EngineVersion: string;
            SourceTimecode: string;
            Slate: string;
            TakeNumber: string;
            Time: string;
            CacheData() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_DefaultTakeBurnIn(EntryPoint: number) : void;
            Get_BottomCenter_Text_0() : string;
            Get_BottomLeft_Text_0() : string;
            Get_BottomRight_Text_0() : string;
            Get_TopCenter_Text_0() : string;
            Get_TopLeft_Text_0() : string;
            Get_TopRight_Text_0() : string;
            /*
             *Get the settings class to use for this burn in
             */
            GetSettingsClass() : UE.Class;
            /*
             *Called when this burn in is receiving its settings
             */
            SetSettings(InSettings: $Nullable<UE.Object>) : void;
            /*
             *Ticks this widget.  Override in derived classes, but always call the parent implementation.
             *
             *@param  MyGeometry The space allotted for this widget
             *@param  InDeltaTime  Real time passed since last tick
             */
            Tick(MyGeometry: UE.Geometry, InDeltaTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultTakeBurnIn_C;
            static Load(InName: string): DefaultTakeBurnIn_C;
        
            __tid_DefaultTakeBurnIn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4C22CF9948649CF6AC95E5A3FD4A32F8
    namespace Takes.UMG.DefaultRecordingOverlay {
        class DefaultRecordingOverlay_C extends UE.TakeRecorderOverlayWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            CanvasPanel_0: UE.CanvasPanel;
            Circles: UE.Image;
            CountdownBorder: UE.Border;
            CountdownText: UE.TextBlock;
            Crosshair_H: UE.Image;
            Crosshair_V: UE.Image;
            MID_Countdown: UE.MaterialInstanceDynamic;
            ExecuteUbergraph_DefaultRecordingOverlay(EntryPoint: number) : void;
            GetCountdownText() : string;
            GetCountdownVisibility() : UE.ESlateVisibility;
            /*
             *Called by both the game and the editor.  Allows users to run initial setup for their widgets to better preview
             *the setup in the designer and since generally that same setup code is required at runtime, it's called there
             *as well.
             *
             ***WARNING**
             *This is intended purely for cosmetic updates using locally owned data, you can not safely access any game related
             *state, if you call something that doesn't expect to be run at editor time, you may crash the editor.
             *
             *In the event you save the asset with blueprint code that causes a crash on evaluation.  You can turn off
             *PreConstruct evaluation in the Widget Designer settings in the Editor Preferences.
             */
            PreConstruct(IsDesignTime: boolean) : void;
            /*
             *Ticks this widget.  Override in derived classes, but always call the parent implementation.
             *
             *@param  MyGeometry The space allotted for this widget
             *@param  InDeltaTime  Real time passed since last tick
             */
            Tick(MyGeometry: UE.Geometry, InDeltaTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultRecordingOverlay_C;
            static Load(InName: string): DefaultRecordingOverlay_C;
        
            __tid_DefaultRecordingOverlay_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F9914210490E7C9D85681A992BA454D4
    namespace Niagara.Blueprints.NiagaraPreviewAxisLODDistance {
        class NiagaraPreviewAxisLODDistance_C extends UE.NiagaraPreviewAxis {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Distances: TArray<number>;
            bApplyRealDistances: boolean;
            /*
             *Applies this axis for the preview at PreviewIndex on this axis.
             */
            ApplyToPreview(PreviewComponent: $Nullable<UE.NiagaraComponent>, PreviewIndex: number, bIsXAxis: boolean, OutLabelText: $Ref<string>) : void;
            ExecuteUbergraph_NiagaraPreviewAxisLODDistance(EntryPoint: number) : void;
            /*
             *Returns the number of previews for this axis.
             */
            Num() : number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NiagaraPreviewAxisLODDistance_C;
            static Load(InName: string): NiagaraPreviewAxisLODDistance_C;
        
            __tid_NiagaraPreviewAxisLODDistance_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E1A8FB3549BE8C569C2EC7BC4E843409
    namespace Niagara.Blueprints.NiagaraPreview {
        class NiagaraPreview_C extends UE.NiagaraPreviewBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            YLabel: UE.TextRenderComponent;
            XLabel: UE.TextRenderComponent;
            TextBoard: UE.StaticMeshComponent;
            Effect: UE.NiagaraComponent;
            Plinth: UE.StaticMeshComponent;
            Scene: UE.SceneComponent;
            NewVar_0: UE.TextRenderComponent;
            ExecuteUbergraph_NiagaraPreview(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            SetLabelText(InXAxisText: string, InYAxisText: string) : void;
            /*
             *AActor Interface End
             */
            SetSystem(InSystem: $Nullable<UE.NiagaraSystem>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NiagaraPreview_C;
            static Load(InName: string): NiagaraPreview_C;
        
            __tid_NiagaraPreview_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2C2122C042DB12F8E368419DB0398117
    namespace Niagara.DefaultAssets.Structs.LocationEvent_V2 {
        class LocationEvent_V2 {
            constructor();
            constructor(Vector1_Position_: UE.Vector, Vector2_Velocity_: UE.Vector, Vector3_Acceleration_: UE.Vector, NiagaraID_ParticleID_: UE.NiagaraID, Float1_NormalizedAge_: number, Float2_RandomNormalizedFloat_: number, Float3_DistanceTraveled_: number, LinearColor_ParticleColor_: UE.LinearColor, Boolean_LocalSpace_: boolean);
            ["Vector 1 (Position)"]: UE.Vector;
            ["Vector 2 (Velocity)"]: UE.Vector;
            ["Vector 3 (Acceleration)"]: UE.Vector;
            ["NiagaraID (ParticleID)"]: UE.NiagaraID;
            ["Float 1 (NormalizedAge)"]: number;
            ["Float 2 (RandomNormalizedFloat)"]: number;
            ["Float 3 (DistanceTraveled)"]: number;
            ["Linear Color (Particle Color)"]: UE.LinearColor;
            ["Boolean (Local Space)"]: boolean;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_LocationEvent_V2_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 178A74C342867565215B369983D94E01
    namespace Niagara.DefaultAssets.Structs.LocationEvent {
        class LocationEvent {
            constructor();
            constructor(Position: UE.Vector, Velocity: UE.Vector, Acceleration: UE.Vector, RibbonID: UE.NiagaraID, NormalizedAge: number, RandomNormalizedFloat: number);
            Position: UE.Vector;
            Velocity: UE.Vector;
            Acceleration: UE.Vector;
            RibbonID: UE.NiagaraID;
            NormalizedAge: number;
            RandomNormalizedFloat: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_LocationEvent_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E2DDB93747635D2AAA1BFEAB993FF557
    namespace Niagara.DefaultAssets.Structs.CollisionEvent {
        class CollisionEvent {
            constructor();
            constructor(Vector1_Position_: UE.Vector, Vector2_Velocity_: UE.Vector, Vector3_CollisionNormal_: UE.Vector, Vector4_IncomingVelocity_: UE.Vector, NiagaraID_ParticleID_: UE.NiagaraID, Float1_NormalizedAge_: number, Float2_RandomNormalizedFloat_: number, Integer_NumberofCollisions_: number, LinearColor_ParticleColor_: UE.LinearColor, Boolean_LocalSpace_: boolean);
            ["Vector 1 (Position)"]: UE.Vector;
            ["Vector 2 (Velocity)"]: UE.Vector;
            ["Vector 3 (Collision Normal)"]: UE.Vector;
            ["Vector 4 (Incoming Velocity)"]: UE.Vector;
            ["NiagaraID (ParticleID)"]: UE.NiagaraID;
            ["Float 1 (NormalizedAge)"]: number;
            ["Float 2 (RandomNormalizedFloat)"]: number;
            ["Integer (Number of Collisions)"]: number;
            ["Linear Color (Particle Color)"]: UE.LinearColor;
            ["Boolean (Local Space)"]: boolean;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_CollisionEvent_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D0F093C341CAED1C97D778B45FAE02A2
    namespace Niagara.Enums.Niagara_Units {
        enum Niagara_Units { Centimeters, Meters, Kilometers, Niagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CACD28FD4FA39F4175D65D8DDA31BE63
    namespace Niagara.Enums.ENiagara_WrapClamp {
        enum ENiagara_WrapClamp { Clamp, Wrap, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7354821F4708C16B44947696771530A5
    namespace Niagara.Enums.ENiagara_Waveforms {
        enum ENiagara_Waveforms { Sine, Cosine, "Compound Sin/Cos", Pendulum, Square, Pulse, Triangle, Sawtooth, Random, "Random Blend", "Random Spline", "Random Spline Smooth", "Random Spline Segmented", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E7474EB24169F1C153FF8A958C44A9CF
    namespace Niagara.Enums.ENiagara_WaveformCount {
        enum ENiagara_WaveformCount { "[1] One", "[2] Two", "[3] Three", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9B3EEEFD482607267F326F8876312E69
    namespace Niagara.Enums.ENiagara_WaveformBlendMode {
        enum ENiagara_WaveformBlendMode { Add, Subtract, Multiply, Max, Min, Interpolate, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 427B7052435624DA0928ECBBF10D5244
    namespace Niagara.Enums.ENiagara_WaterInteractionStruct {
        class ENiagara_WaterInteractionStruct {
            constructor();
            constructor(Intersects: boolean, IntersectionCentroid: UE.Vector, IntersectionXBasisVector: UE.Vector, IntersectionYBasisVector: UE.Vector, IntersectionZBasisVector: UE.Vector, IntersectionXSize: number, IntersectionYSize: number, OcclusionDelta: number, Occludedvolume: number, FullVolume: number, VolumeXbasis: UE.Vector, VolumeYbasis: UE.Vector, VolumeZbasis: UE.Vector, VolumeLength: number, VolumeRadius: number, VolumeCentroid: UE.Vector, BoneVelocity: UE.Vector, KineticEnergy: number, Mass: number);
            Intersects: boolean;
            IntersectionCentroid: UE.Vector;
            IntersectionXBasisVector: UE.Vector;
            IntersectionYBasisVector: UE.Vector;
            ["Intersection Z BasisVector"]: UE.Vector;
            ["Intersection X Size"]: number;
            ["Intersection Y Size"]: number;
            ["Occlusion Delta"]: number;
            ["Occluded volume"]: number;
            ["Full Volume"]: number;
            ["Volume X basis"]: UE.Vector;
            ["Volume Y basis"]: UE.Vector;
            ["Volume Z basis"]: UE.Vector;
            ["Volume Length"]: number;
            ["Volume Radius"]: number;
            ["Volume Centroid"]: UE.Vector;
            ["Bone Velocity"]: UE.Vector;
            ["Kinetic Energy"]: number;
            Mass: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_ENiagara_WaterInteractionStruct_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CCE8047C438ECA2F75979886C1E6A9C0
    namespace Niagara.Enums.ENiagara_VelocityInput {
        enum ENiagara_VelocityInput { "Chaos DI Velocity", "User Velocity", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E8368C344D80EE8DF0C59B80DA5E9380
    namespace Niagara.Enums.ENiagara_UVFlippingMode {
        enum ENiagara_UVFlippingMode { Unset, "Random X", "Random Y", "Random X / Y", Custom, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2933F5D2459500FDB85E0B838C683ADB
    namespace Niagara.Enums.ENiagara_TransformOrientationMode {
        enum ENiagara_TransformOrientationMode { "Yaw/Pitch/Roll", Quaternion, Matrix, "Basis Vectors", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 57E4041647860988F6D52581FAE993C7
    namespace Niagara.Enums.ENiagara_TransformMode {
        enum ENiagara_TransformMode { Manual, Matrix, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A052419B49F3A3A241F8E98F9300956F
    namespace Niagara.Enums.ENiagara_TransformBaseOptions {
        enum ENiagara_TransformBaseOptions { "Transform Vector", "Transform Position", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7C1D99FE4EDCD40ADEB798831D4E24E6
    namespace Niagara.Enums.ENiagara_SubUVLookupModeV2 {
        enum ENiagara_SubUVLookupModeV2 { Linear, Curve, Random, "Infinite Loop", "Direct Index", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 30A11E8E45501137D1C973BDEEF301B1
    namespace Niagara.Enums.ENiagara_SubUVLookupMode {
        enum ENiagara_SubUVLookupMode { Linear, Curve, Random, Infinite, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A80064B440721C76444762B05503B2CF
    namespace Niagara.Enums.ENiagara_SpriteRotationMode {
        enum ENiagara_SpriteRotationMode { Unset, Random, "Direct Angle (Degrees)", "Direct Normalized Angle (0-1)", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EA5A50874889F2512A50448EDA08AA89
    namespace Niagara.Enums.ENiagara_SpawnBurstMode {
        enum ENiagara_SpawnBurstMode { Timed, Manual, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C69F29F846BC7D3401C7A49983D11D00
    namespace Niagara.Enums.ENiagara_SizeScaleMode {
        enum ENiagara_SizeScaleMode { Unset, Uniform, "Random Uniform", "Non-Uniform", "Random Non-Uniform", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DDB4EB54414C2EA54A1872AC28BB9696
    namespace Niagara.Enums.ENiagara_RotationDefinitionApproach {
        enum ENiagara_RotationDefinitionApproach { Euler, Quaternion, "Axis Angle ", "Basis Vectors", Matrix, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 62984E2B436A4FF8F39A33BCFFE27635
    namespace Niagara.Enums.ENiagara_PositionInput {
        enum ENiagara_PositionInput { "Chaos DI Position", "User Position", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BC6181B5448056DB486F5EB06B88C3DB
    namespace Niagara.Enums.ENiagara_PositionInitializationMode {
        enum ENiagara_PositionInitializationMode { Unset, "Direct Set", "Simulation Position", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6B311EC44A8BB966E82910A1546C63DA
    namespace Niagara.Enums.ENiagara_MultipleLerpCount {
        enum ENiagara_MultipleLerpCount { ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 28AED7624FD35346A9AD9D9A60FBAA92
    namespace Niagara.Enums.ENiagara_MassInitializationMode {
        enum ENiagara_MassInitializationMode { "Unset / (Mass of 1)", "Direct Set", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5EFA0D4449814A6878CF208040294840
    namespace Niagara.Enums.ENiagara_LifetimeMode {
        enum ENiagara_LifetimeMode { "Direct Set", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8854B24240237871D0E1708E7BC0964A
    namespace Niagara.Enums.ENiagara_LifetimeInheritanceOptions {
        enum ENiagara_LifetimeInheritanceOptions { Min, Max, Overwrite, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F99D4EF54180D43A335EA2BA7FE715C9
    namespace Niagara.Enums.ENiagara_InfiniteLoopDuration {
        enum ENiagara_InfiniteLoopDuration { Fixed, Infinite, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 75A4FCA54B427A97913666993FDAE56D
    namespace Niagara.Enums.ENiagara_IDAttributes {
        enum ENiagara_IDAttributes { "Particles.UniqueID", "Particles.ID Index", "Particles.ID Acquire Tag", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7DDC0C6B4A24A8FBF853C39F7390149A
    namespace Niagara.Enums.ENiagara_GPUCollisionType {
        enum ENiagara_GPUCollisionType { "GPU Depth Buffer", "GPU Distance Fields", "GPU Ray Traces (Experimental)", "Analytical Planes", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0B7CEF0A40C43D5180ADD9B5D4D00BC4
    namespace Niagara.Enums.ENiagara_Float4Channel {
        enum ENiagara_Float4Channel { R, G, B, A, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 791DD50D4505017EF8C051A6B8B563F2
    namespace Niagara.Enums.ENiagara_FadeOperationType {
        enum ENiagara_FadeOperationType { Linear, Percentage, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ED8A135A4A2CB69F867C22AA408E785D
    namespace Niagara.Enums.ENiagara_EmitterStateOptions {
        enum ENiagara_EmitterStateOptions { Infinite, Once, Multiple, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 75CBA01B44C293495B39C2BC62D41E1D
    namespace Niagara.Enums.ENiagara_EmitterLocSamplingMode {
        enum ENiagara_EmitterLocSamplingMode { Random, Sequential, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B919D84A4D4252F6DDDDD7BF1E940632
    namespace Niagara.Enums.ENiagara_DirectReadSamplingMode {
        enum ENiagara_DirectReadSamplingMode { Disabled, "Apply to Attribute", "Output Only", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8E2137DD4E1B055F5F6ABC9F1CEE66BB
    namespace Niagara.Enums.ENiagara_DirectReadParticleIDSampling {
        enum ENiagara_DirectReadParticleIDSampling { Disabled, "Apply Sampled ID as Ribbon ID", "Output Only", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D578CA05411619AF2E077285E18C31EA
    namespace Niagara.Enums.ENiagara_DirectReadApplicationMode {
        enum ENiagara_DirectReadApplicationMode { Overwrite, Add, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 02421E1D405F8CFCDF2A139AA344A05D
    namespace Niagara.Enums.ENiagara_CPUCollisionType {
        enum ENiagara_CPUCollisionType { "Ray Traced", "Analytical Planes", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EC906EBE4A2EA65677834B9E4743D403
    namespace Niagara.Enums.ENiagara_ColorInput {
        enum ENiagara_ColorInput { "Particle Color", "Chaos DI Color", "User Color", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 66689FCE4610B3B9505510A71C71F9C7
    namespace Niagara.Enums.ENiagara_ColorInitializationMode {
        enum ENiagara_ColorInitializationMode { Unset, "Direct Set", "Random Range", "Random Hue/Saturation/Value", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 72E842554B43E3765FA49882D97F7882
    namespace Niagara.Enums.ENiagara_CollisionType {
        enum ENiagara_CollisionType { "GPU Depth Buffer", "GPU Distance Fields", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 93D59E024446E047C225C982BBC68529
    namespace Niagara.Enums.ENiagara_CameraVectors {
        enum ENiagara_CameraVectors { "Camera Forward Vector", "Camera Up Vector", "Camera Right Vector", "Vector To Camera", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 56795F5848A16CA4B969DBB309CAF90C
    namespace Niagara.Enums.ENiagara_CameraProperties {
        enum ENiagara_CameraProperties { "Camera Position", "Camera Forward Vector", "Camera Up Vector", "Camera Right Vector", "Vector To Camera", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5838D0BF46287EE9FA1A62B61E24D7F9
    namespace Niagara.Enums.ENiagara_CameraMeshOrientation {
        enum ENiagara_CameraMeshOrientation { "Camera Position", "Camera Plane", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8EAA94E34C3D4EB6FA3460B13B98D605
    namespace Niagara.Enums.ENiagara_BankOnTurns {
        enum ENiagara_BankOnTurns { "Add Local Banking Rotation", "Full Orientation Update", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B868C9EE4A5576BF67304A9C5481E91C
    namespace Niagara.Enums.ENiagara_AudioParamType {
        enum ENiagara_AudioParamType { Volume, Pitch, Location, Rotation, "Boolean Parameter", "Float Parameter", "Integer Parameter", "Paused State", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7FA2AAE4F5882C8410BBEAE022CD240
    namespace Niagara.Enums.ENiagara_AttributeSamplingApplyOutput {
        enum ENiagara_AttributeSamplingApplyOutput { Apply, Output, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 40248BAA47914F89B98FB4824568E748
    namespace Niagara.Enums.ENiagaraVertexSamplingMode {
        enum ENiagaraVertexSamplingMode { "Random (All Vertices)", "Random (Sampling Regions)", "Direct (All Vertices)", "Direct (Sampling Regions)", ENiagaraVertexSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 380BEA80449F69466FE1E3B28CE21A4B
    namespace Niagara.Enums.ENiagaraVertexFilteringMode {
        enum ENiagaraVertexFilteringMode { All, Filtered, ENiagaraVertexFilteringMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A954A4C74110E66DDBBF009E19A8F77D
    namespace Niagara.Enums.ENiagaraVector4_Channels {
        enum ENiagaraVector4_Channels { X, Y, Z, W, ENiagaraVector4_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 36B8351C4682A8667E219E8C5B6064A5
    namespace Niagara.Enums.ENiagaraVector3_Channels {
        enum ENiagaraVector3_Channels { X, Y, Z, ENiagaraVector3_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2AE883F44C017B8686D56298D47A4829
    namespace Niagara.Enums.ENiagaraVector2_Channels {
        enum ENiagaraVector2_Channels { X, Y, ENiagaraVector2_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0EA4428C4BAC7885213E99A9EF8B956B
    namespace Niagara.Enums.ENiagaraTriangleSamplingMode {
        enum ENiagaraTriangleSamplingMode { "Random (All Triangles)", "Random (Sampling Regions)", "Direct (All Triangles)", "Direct (Sampling Regions)", ENiagaraTriangleSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F04C5A284D43654C47165FB14568EA11
    namespace Niagara.Enums.ENiagaraTorusMode {
        enum ENiagaraTorusMode { Torus, TorusKnot, Ring, ENiagaraTorusMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B237A81144E7F26DD3D780833E4BD91C
    namespace Niagara.Enums.ENiagaraTorusDistributionMode {
        enum ENiagaraTorusDistributionMode { Random, Direct, ENiagaraTorusDistributionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5F7436634556A0B1EE1F619CDE0A6257
    namespace Niagara.Enums.ENiagaraSystemInactiveMode {
        enum ENiagaraSystemInactiveMode { "Complete (Let Emitters Finish then Kill The System)", "Kill (System and Emitters Die Immediately)", ENiagaraSystemInactiveMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A122EB9F47B2FEB9EA608A92E055872A
    namespace Niagara.Enums.ENiagaraSUbUVAnimationMode {
        enum ENiagaraSUbUVAnimationMode { Linear, Random, ENiagaraSUbUVAnimationMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EB56100A4C78D1CCA6805B92E112DA28
    namespace Niagara.Enums.ENiagaraSphereDistributionMode {
        enum ENiagaraSphereDistributionMode { Random, Direct, Uniform, ENiagaraSphereDistributionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B1584DE04E868EAD47D2CDB606B193DC
    namespace Niagara.Enums.ENiagaraSocketSamplingMode {
        enum ENiagaraSocketSamplingMode { "Random (Filtered Sockets)", "Direct (Filtered Sockets)", ENiagaraSocketSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 706BB3E54E4837D284597996628F0BAF
    namespace Niagara.Enums.ENiagaraSkelSamplingModeFull {
        enum ENiagaraSkelSamplingModeFull { "Skeleton (Bones)", "Skeleton (Sockets)", "Skeleton (Bones and Sockets)", "Surface (Triangles)", "Surface (Vertices)", ENiagaraSkelSamplingModeFull_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F449D19541D88E508EE7B5B11837D71C
    namespace Niagara.Enums.ENiagaraSkelSamplingFilteringMode {
        enum ENiagaraSkelSamplingFilteringMode { All, Filtered, Unfiltered, ENiagaraSkelSamplingFilteringMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F12BDF26411DA8BD655A219822652BBC
    namespace Niagara.Enums.ENiagaraSkelMeshTransforms {
        enum ENiagaraSkelMeshTransforms { Simulation, World, Local, "Sampled Mesh", "Mesh Particle", ENiagaraSkelMeshTransforms_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 296863C84B07E4F0DF6D0C8CC847185B
    namespace Niagara.Enums.ENiagaraSkelMeshPositionSamplingMode {
        enum ENiagaraSkelMeshPositionSamplingMode { "Apply (Rigid)", "Apply (Soft)", Output, ENiagaraSkelMeshPositionSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0A6EB7DA4215964E117EE1B0BB586B64
    namespace Niagara.Enums.ENiagaraSkeletalSpawning {
        enum ENiagaraSkeletalSpawning { Bones, Sockets, "Bones and Sockets", ENiagaraSkeletalSpawning_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: FFE6C69C4E5A2E62ADF3F6875F8863AC
    namespace Niagara.Enums.ENiagaraSimulationTarget {
        enum ENiagaraSimulationTarget { "CPU Sim", "GPUCompute Sim", ENiagaraSimulationTarget_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AA46B5824B249A67BC25B58357A0A379
    namespace Niagara.Enums.ENiagaraShapeTorusMode {
        enum ENiagaraShapeTorusMode { Torus, TorusKnot, ENiagaraShapeTorusMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 290402E54F1963D196450A8975DB54E8
    namespace Niagara.Enums.ENiagaraScaleColorMode {
        enum ENiagaraScaleColorMode { "RGB and Alpha Separately", "RGBA Together", "RGBA Linear Color Curve", ENiagaraScaleColorMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 729D522B40456DFC4C7F9F82B42AF259
    namespace Niagara.Enums.ENiagaraRestitutionMergeType {
        enum ENiagaraRestitutionMergeType { Ignore, Min, Max, Average, ENiagaraRestitutionMergeType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CAA5F96D4B54FB1847210EA57262DB73
    namespace Niagara.Enums.ENiagaraRegionTransformOrder {
        enum ENiagaraRegionTransformOrder { "Offset-Rotation", "Rotation-Offset", ENiagaraRegionTransformOrder_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E713F1FD431FDF7F52E76E93A925A73A
    namespace Niagara.Enums.ENiagaraRegionCoordinateSpace {
        enum ENiagaraRegionCoordinateSpace { World, Local, ENiagaraRegionCoordinateSpace_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 97A49B82400C51F1BC4FBCA12EEB05C5
    namespace Niagara.Enums.ENiagaraRandomnessEvaluation {
        enum ENiagaraRandomnessEvaluation { "Spawn Only", "Every Frame", ENiagaraRandomnessEvaluation_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1F5CF78A480C93C54C7D2EBA95C75ECA
    namespace Niagara.Enums.ENiagaraQuaternionDerivationTechnique {
        enum ENiagaraQuaternionDerivationTechnique { "X Vector", "X And Y Vectors", "X And Z Vectors", ENiagaraQuaternionDerivationTechnique_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B846FD0A4E3E2D7546B67FAABFF0D63A
    namespace Niagara.Enums.ENiagaraOrientationAxis {
        enum ENiagaraOrientationAxis { "X Axis", "Y Axis", "Z Axis", ENiagaraOrientationAxis_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 960467B94C4525748B40C6A3CE9CB49D
    namespace Niagara.Enums.ENiagaraNumericVariableTypes {
        enum ENiagaraNumericVariableTypes { Float, "Vector 2D", "Vector 3D", "Vector 4D", "Linear Color", Quaternion, ENiagaraNumericVariableTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 671755AA4199F6C8FB91E093ED8FAFD4
    namespace Niagara.Enums.ENiagaraMinOrMax {
        enum ENiagaraMinOrMax { Min, Max, ENiagaraMinOrMax_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7AC62D184EA8180ADDA483B8089182F2
    namespace Niagara.Enums.ENiagaraMeshTransforms {
        enum ENiagaraMeshTransforms { Simulation, World, Local, Mesh, ENiagaraMeshTransforms_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 329058674538E0C5268F01800B0AC01C
    namespace Niagara.Enums.ENiagaraMeshSurfaceSamplingMode {
        enum ENiagaraMeshSurfaceSamplingMode { Triangles, Vertices, ENiagaraMeshSurfaceSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AFB3125C4B5FBBCCF509D5BEC662150C
    namespace Niagara.Enums.ENiagaraMeshSamplingMode {
        enum ENiagaraMeshSamplingMode { Random, Direct, ENiagaraMeshSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4C5A106840EF8917E9BA48A5B406AEEB
    namespace Niagara.Enums.ENiagaraMeshOrSprite {
        enum ENiagaraMeshOrSprite { Sprite, Mesh, ENiagaraMeshOrSprite_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 120E7FDD41AA1390312334B7B1F551C3
    namespace Niagara.Enums.ENiagaraMassCalculationForRendererTypes {
        enum ENiagaraMassCalculationForRendererTypes { Sprite, Mesh, Ribbon, ENiagaraMassCalculationForRendererTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 00FE367C4D719E332A6E429EA412C88C
    namespace Niagara.Enums.ENiagaraMassByVolume {
        enum ENiagaraMassByVolume { Rock, Steel, Wood, Water, Paper, Styrofoam, ENiagaraMassByVolume_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C2C7A8A041D9BF7A98FCA1B8587C4D05
    namespace Niagara.Enums.ENiagaraLinearColor_Channels {
        enum ENiagaraLinearColor_Channels { R, G, B, A, ENiagaraLinearColor_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 928C9D4A452D8695083BE1A77C6A1BEB
    namespace Niagara.Enums.ENiagaraKillVolumeOptions {
        enum ENiagaraKillVolumeOptions { Sphere, Box, Plane, Slab, Cone, ENiagaraKillVolumeOptions_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 833340CF450B2DE408173A82DAFF5D94
    namespace Niagara.Enums.ENiagaraInactiveMode {
        enum ENiagaraInactiveMode { "Complete (Let Particles Finish then Kill Emitter)", "Kill (Emitter and Particles Die Immediately)", "Continue (Emitter Deactivates But Doesn't Die Until System Does)", ENiagaraInactiveMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9C8EE4834C3490F346C55CA05C67CBA9
    namespace Niagara.Enums.ENiagaraGridPlacementType {
        enum ENiagaraGridPlacementType { "Padding Per Cell ", "Bounding Box Size", ENiagaraGridPlacementType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5083E4304ED8B05481BB07B66284A729
    namespace Niagara.Enums.ENiagaraGPUDepthResponseType {
        enum ENiagaraGPUDepthResponseType { Kill, Bounce, ENiagaraGPUDepthResponseType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 05BB123248109DC5ABFE93BD933D12BA
    namespace Niagara.Enums.ENiagaraFrictionMergeType {
        enum ENiagaraFrictionMergeType { Ignore, Average, Min, Max, ENiagaraFrictionMergeType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 35A2BA3D4D25FBFB30F660921095755C
    namespace Niagara.Enums.ENiagaraExpansionMode {
        enum ENiagaraExpansionMode { Inside, Centered, Outside, ENiagaraExpansionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A88DA06540170B98E8308980B284E056
    namespace Niagara.Enums.ENiagaraExecutionStateManagement {
        enum ENiagaraExecutionStateManagement { Awaken, "Sleep and Let Particles Finish", "Sleep and Clear Particles", "Kill Immediately", "Kill After Particles Finish", ENiagaraExecutionStateManagement_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0B36CBAC440A79A827DAA987951B5B12
    namespace Niagara.Enums.ENiagaraEmitterScalabilityMode_Limited {
        enum ENiagaraEmitterScalabilityMode_Limited { System, Self, ENiagaraEmitterScalabilityMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3E73854C4D72BE2FA109E9A4E4D6AF76
    namespace Niagara.Enums.ENiagaraEmitterScalabilityMode {
        enum ENiagaraEmitterScalabilityMode { System, Self, None, ENiagaraEmitterScalabilityMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E6B7C742434AB938286D96BFE5A6418E
    namespace Niagara.Enums.ENiagaraEmitterLifeCycleMode {
        enum ENiagaraEmitterLifeCycleMode { System, Self, ENiagaraEmitterLifeCycleMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BB83CC8843898D6B4CC407B33A11F302
    namespace Niagara.Enums.ENiagaraDragMethodMode {
        enum ENiagaraDragMethodMode { Linear, Aerodynamic, ENiagaraDragMethodMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B41B7DC041BDDABA4C991CB5C4DC0D9E
    namespace Niagara.Enums.ENiagaraDragCoefficientShapeMode {
        enum ENiagaraDragCoefficientShapeMode { Exponent, Curve, ENiagaraDragCoefficientShapeMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5D13435F441DA4045FBBA985D98355F9
    namespace Niagara.Enums.ENiagaraDecalTransforms {
        enum ENiagaraDecalTransforms { Simulation, World, Local, Decal, ENiagaraDecalTransforms_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8BE93E71405BF1F383FC03AA6EBD3BDD
    namespace Niagara.Enums.ENiagaraCurlNoiseQuality {
        enum ENiagaraCurlNoiseQuality { "Baked (Low)", "Baked (Medium)", "Baked (High)", "Evaluated (Ultra)", ENiagaraCurlNoiseQuality_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F2D2222B48D483D09D5B8EB967336A32
    namespace Niagara.Enums.ENiagaraCoordinateSpace {
        enum ENiagaraCoordinateSpace { Simulation, World, Local, ENiagaraCoordinateSpace_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 67FC7CE648BCDE6257447387066F5577
    namespace Niagara.Enums.ENiagaraCollisionRadiusOptions {
        enum ENiagaraCollisionRadiusOptions { Sprite, Mesh, Custom, ENiagaraCollisionRadiusOptions_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 43B4B2524ADAC046C86F32B05BE1789F
    namespace Niagara.Enums.ENiagaraChannelCorrelation {
        enum ENiagaraChannelCorrelation { "Link RGBA", "Link RGB / Link A", "Random Individual Channels", ENiagaraChannelCorrelation_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 389F57CC41CF0A9429061BB42AA4E8B6
    namespace Niagara.Enums.ENiagaraCalculateRadiusOptions {
        enum ENiagaraCalculateRadiusOptions { Bounds, "Minimum Axis", "Maximum Axis", ENiagaraCalculateRadiusOptions_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 64E2E2BE45F15F1DCC5322B6DD0FC8ED
    namespace Niagara.Enums.ENiagaraBooleanLogicOps_v2 {
        enum ENiagaraBooleanLogicOps_v2 { "A Greater Than B", "A Greater Than Or Equal To B", "A Equal To B", "A Not Equal To B", "A Less Than B", "A Less Than Or Equal To B", ENiagaraBooleanLogicOps_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E1DEB41848F9412917D6EE8FC7FF9327
    namespace Niagara.Enums.ENiagaraBooleanLogicOps {
        enum ENiagaraBooleanLogicOps { "Greater Than", "Greater Than Or Equal To", "Equal To", "Not Equal To", ENiagaraBooleanLogicOps_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DE3B4A944D41D639476C6FA4D8364FA7
    namespace Niagara.Enums.ENiagaraBoneSocketSamplingMode {
        enum ENiagaraBoneSocketSamplingMode { "Random (Filtered Bone or Sockets)", "Direct (Filtered Bone or Sockets)", ENiagaraBoneSocketSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1F5858F3464BBAD5A403E5B77A797D05
    namespace Niagara.Enums.ENiagaraBoneSamplingMode {
        enum ENiagaraBoneSamplingMode { "Random (Filtered Bones)", "Random (Unfiltered Bones)", "Random (All Bones)", "Direct (Filtered Bones)", "Direct (Unfiltered Bones)", "Direct (All Bones)", ENiagaraBoneSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7934153A41A0EAED77E3509C76B7C340
    namespace Niagara.Enums.ENiagaraArraySamplingMode {
        enum ENiagaraArraySamplingMode { Random, "Direct Set", Interpolate, ENiagaraArraySamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4F47781A46E8C8DD25B30F99AACFD65D
    namespace Niagara.Enums.ENiagaraAnimTrailWidthMode {
        enum ENiagaraAnimTrailWidthMode { Auto, Manual, ENiagaraAnimTrailWidthMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4C48CAFF429644DDB6923F9FB807E274
    namespace Niagara.Enums.EniagaraAlternateRendererModes {
        enum EniagaraAlternateRendererModes { Sprite, Mesh, Ribbon, Light, EniagaraAlternateRendererModes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0BF5864F4BA65A357AE75DA36EC76E1A
    namespace Niagara.Enums.ENiagaraAerodynamicDragPivotMode {
        enum ENiagaraAerodynamicDragPivotMode { Random, Direct, ENiagaraAerodynamicDragPivotMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 594ED2A84ABD28DB11F013B114983AED
    namespace Niagara.Enums.Angles.ENiagara_AngleInput {
        enum ENiagara_AngleInput { Degrees, "Normalized Angle (0-1)", Radians, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0A9FB2D64E103E38438DC49912AD1CCB
    namespace Niagara.Enums.Audio.PlayAudioMode {
        enum PlayAudioMode { "Direct Set", Random, "On Death", PlayAudioMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 11F1905B4E2507A97BB6C4A573AA3B08
    namespace Niagara.Enums.CascadeConversion.ECascadeNiagaraTwoVectorChannels {
        enum ECascadeNiagaraTwoVectorChannels { XY, YZ, XZ, ECascadeNiagaraTwoVectorChannels_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B6C9F5C245CB068D62D0199995E4B0CF
    namespace Niagara.Enums.CascadeConversion.ECascadeNiagaraOrbitChainMode {
        enum ECascadeNiagaraOrbitChainMode { Add, Scale, Link, NONE, ECascadeNiagaraOrbitChainMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7283B335470344D1594AF4960B978CB7
    namespace Niagara.Enums.Comparison.CompareValues {
        enum CompareValues { "Return Largest", "Return Smallest", CompareValues_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 41B3804D4FD2B9A5A32BCD8BBAC84F76
    namespace Niagara.Enums.DistanceFields.ENiagara_GlobalVsRigidBodyDistanceFields {
        enum ENiagara_GlobalVsRigidBodyDistanceFields { "Global Distance Field", "Global Distance field + High Quality Rigid Body SDF", "Static Distance Field Volume Texture", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4D71C0744281BDAA22E39A91728B1D66
    namespace Niagara.Enums.DistanceFields.ENiagara_GDFQueryExecutionRate {
        enum ENiagara_GDFQueryExecutionRate { "First Frame", "Every Frame", "On Demand", Never, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3C9B79AC48DB9FB456163F9F57D14252
    namespace Niagara.Enums.DistanceFields.ENiagara_BoundsCalculationMethod {
        enum ENiagara_BoundsCalculationMethod { "Emitter Bounds with Padding", "Local Space Bounding Box", "World Space Bounding Box", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 239553C2498C84D47134B6B2CCD44526
    namespace Niagara.Enums.Events.ENiagara_LocEventType {
        enum ENiagara_LocEventType { "Send Rate", "Send Per Unit Traveled", "Every Frame", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 04F2F7384BB5FE3EBB3BBA9293AAEBE2
    namespace Niagara.Enums.Location.ENiagara_LocationShapes {
        enum ENiagara_LocationShapes { Sphere, Cylinder, "Box / Plane", Torus, "Ring / Disc", Cone, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 09471E1F43723980DE6EE3AC58B0E067
    namespace Niagara.Enums.Location.ENiagara_CylinderMode {
        enum ENiagara_CylinderMode { Random, Direct, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 78E6C4AE40AE5313F067E8BF80B05757
    namespace Niagara.Enums.Location.ENiagara_ConeMode {
        enum ENiagara_ConeMode { "Spherical Cone", "Spherical Wedge", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 899BCF0648CFD8C5A5B3038150BFA968
    namespace Niagara.Enums.Location.ENiagara_BoxPlaneMode {
        enum ENiagara_BoxPlaneMode { Box, Plane, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4464AD1640A4E3BDB21798AB578E7E98
    namespace Niagara.Enums.Location.ENiagaraRingDiscMode {
        enum ENiagaraRingDiscMode { Circle, Hexagon, ENiagaraRingDiscMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D984CA7F45DDDA5F561ED088A0DA4C70
    namespace Niagara.Enums.Masks.ENiagaraRegionMaskValue {
        enum ENiagaraRegionMaskValue { Float, Vector2D, Vector, "Linear Color", ENiagaraRegionMaskValue_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A0CBC9294B787B7FB07DA0937333CEB7
    namespace Niagara.Enums.Masks.ENiagaraDebugDrawShape {
        enum ENiagaraDebugDrawShape { Sphere, Box, Plane, Slab, ENiagaraDebugDrawShape_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 12F9B9194C39AD06FE8CCC8602076DEE
    namespace Niagara.Enums.Ribbons.ENiagara_UnsetDirectSetRandom {
        enum ENiagara_UnsetDirectSetRandom { Unset, "Direct Set", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B8AFCBB94308548AB7359FB625593396
    namespace Niagara.Enums.Ribbons.ENiagara_UnsetDirectSet {
        enum ENiagara_UnsetDirectSet { Unset, "Direct Set", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6A0D38CB4942C16492C8F88FEF61A700
    namespace Niagara.Enums.SpriteRenderer.ENiagara_ScaleSpriteSize {
        enum ENiagara_ScaleSpriteSize { Uniform, "Uniform Curve", "Non-Uniform", "Non-Uniform Curve", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C56DD03A4A020847C185F99D1E07AE48
    namespace Niagara.Enums.SpriteRenderer.ENiagara_FPSPlayrate {
        enum ENiagara_FPSPlayrate { "Loops Per Second", "Frames Per Second", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EB160FC14ADA825A7C69D28F98CD45DD
    namespace Niagara.Enums.SpriteRenderer.ENiagara_AutomaticManual {
        enum ENiagara_AutomaticManual { "Automatic (From Renderer SubImage Size)", Manual, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C3165ACA46E802CCD5B4F9BE367A8BE7
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticVertexMode {
        enum ENiagara_StaticVertexMode { "Random Vertex", "Direct Vertex", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2154C4C44C41F8B441A0B885EC53E57E
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticTriangleMode {
        enum ENiagara_StaticTriangleMode { "Random (All Triangles)", "Random (Section Filter)", "Direct (All Triangles)", "Direct (Section Filter)", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 07E5993A4C29661A3C8F739C3A5E478A
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticSocketMode {
        enum ENiagara_StaticSocketMode { "Random (All Sockets)", "Random (Filtered Sockets)", "Direct (All Sockets)", "Direct (Filtered Sockets)", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 81258C854B086DC9F00775B86F230C51
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticSamplingMode {
        enum ENiagara_StaticSamplingMode { Triangles, Sockets, Vertices, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F2AF64314ADF9FB32C9F83816582B21E
    namespace Niagara.Enums.Transforms.ENiagara_TransformType {
        enum ENiagara_TransformType { Default, "Custom Matrix", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DD95A1E64DA25126E85E87B581E0539C
    namespace Niagara.Enums.Transforms.ENiagara_TransformOrder {
        enum ENiagara_TransformOrder { "Scale / Rotate / Offset", "Scale / Offset / Rotate", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B42B3C9C4C73265F8A4E04BE47EF76A4
    namespace Niagara.Enums.Transforms.ENiagara_ScaleMode {
        enum ENiagara_ScaleMode { Default, None, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E2A4E55341D021C4EF15B0AD330DA0DE
    namespace Niagara.Enums.Transforms.ENiagara_RotationMode {
        enum ENiagara_RotationMode { Default, "Axis Angle", "Yaw / Pitch / Roll", Quaternion, Matrix, None, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 23B75B77440576217F085F97EDC5DC2D
    namespace Niagara.Enums.Transforms.ENiagara_OffsetMode {
        enum ENiagara_OffsetMode { Default, None, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 180AD4744C929F7C54E5D589678A2AF6
    namespace Niagara.Enums.Transforms.ENiagara_MeshOrientationOptions {
        enum ENiagara_MeshOrientationOptions { None, Random, System, "Orient to Vector", "Orient to Matrix", "Orient to Quaternion", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0B76169B449E853A2F02ED814DA88717
    namespace Niagara.Enums.Transforms.ENiagara_LWCConvertVecToPos {
        enum ENiagara_LWCConvertVecToPos { "Passthrough as Non Large World Position", "Interpret as a Large World Position Vector", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 785CB7E84DA96D94E1E063923F842D57
    namespace Niagara.Enums.Transforms.ENiagara_LWCConvertPosToVec {
        enum ENiagara_LWCConvertPosToVec { "Passthrough as a Non Large World Vector", "Convert to Absolute Large World Space", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DEE22CF74D0EB9AF43BF6394F70D63A5
    namespace Niagara.Enums.Utility.ENiagara_VelocityMode {
        enum ENiagara_VelocityMode { Linear, "From Point", "In Cone", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 34706BA14FE22171F266F5BCD1A37D2B
    namespace Niagara.Enums.Utility.ENiagara_UpdateMeshOrientationMode {
        enum ENiagara_UpdateMeshOrientationMode { "Rotation Rate", "Orient To Vector(s)", "Orient to Position", "Flight Orientation", "Rolling Orientation", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 098FF2714C8751ED34CCF18DB5DCA388
    namespace Niagara.Enums.Utility.ENiagara_TimelineOutputMode {
        enum ENiagara_TimelineOutputMode { Array, Curve, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C30DED5A49653763BC0FAD89EEB09DBF
    namespace Niagara.Enums.Utility.ENiagara_TimelineOutput {
        enum ENiagara_TimelineOutput { None, Float, Vector2D, Vector, "Linear Color", Integer, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E1663A124593CA171FA64EB43A6162BB
    namespace Niagara.Enums.Utility.ENiagara_TImelineMode {
        enum ENiagara_TimelineMode { "Automatic Rewind", "Manual Rewind", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 72C1A22B473A302D74FEF6A6AECF3043
    namespace Niagara.Enums.Utility.ENiagara_TimelineAuthority {
        enum ENiagara_TimelineAuthority { "Play is the Authority", "Rewind is the Authority", Pause, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 843381994F67AF3BD9C976A00A7D0FCB
    namespace Niagara.Enums.Utility.ENiagara_SplinePointCount {
        enum ENiagara_SplinePointCount { ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E20607DE45B4BF047ACEB2ADD889886E
    namespace Niagara.Enums.Utility.ENiagara_PartitionMode {
        enum ENiagara_PartitionMode { Alternating, Sequential, "Elapsed Time", Distance, "Float Comparison", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 18C02F2B46416CD2A93C008E38AA4E4C
    namespace Niagara.Enums.Utility.ENiagara_OrientVectorCount {
        enum ENiagara_OrientVectorCount { Facing, "Facing/Up", "Facing/Side", "Facing/Side/Up", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0DA9D9EF4FEEF71266AC5B9E73AD3642
    namespace Niagara.Enums.Utility.ENiagara_IntegerConversion {
        enum ENiagara_IntegerConversion { Truncate, Round, Ceil, Floor, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9C6FBC45420E7A0D1056C3B3AAE2CB25
    namespace Niagara.Enums.Utility.ENiagara_ImportanceRejectionMode {
        enum ENiagara_ImportanceRejectionMode { "RGB Luminance", "RGB Average", "RGB Max", "R Channel", "G Channel", "B Channel", "A Channel", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 71479B474CA61256C2017A93D1D32D59
    namespace Niagara.Enums.Utility.ENiagara_ImportanceColorMode {
        enum ENiagara_ImportanceColorMode { "RGB Luminance", "RGB Average", "RGB Max", "Individual RGBA Channel", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0E8508634677C42F59DC32B083CFA7BD
    namespace Niagara.Enums.Wind.ENiagaraWindTurbulenceMode {
        enum ENiagaraWindTurbulenceMode { None, "Curl Noise", ENiagaraWindTurbulenceMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D198B2DF47B93E70B33C61BC18470DF6
    namespace Niagara.Enums.Wind.ENiagaraWindTurbulenceFrequencyMode {
        enum ENiagaraWindTurbulenceFrequencyMode { Constant, Varying, ENiagaraWindTurbulenceFrequencyMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4EB20AD64DF976B93C25C1B79982133A
    namespace Niagara.Enums.Wind.ENiagaraWindTurbulenceContributionMode {
        enum ENiagaraWindTurbulenceContributionMode { "Direct Set", "Speed Range", "Speed Range Curve", ENiagaraWindTurbulenceContributionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0FBB0CB34FE6BF317D997C9524195742
    namespace Niagara.Enums.Wind.ENiagaraWindOffsetMode {
        enum ENiagaraWindOffsetMode { None, "Direct Set", "Time Offset", ENiagaraWindOffsetMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AB33653D4A1387A7047C2687A1387336
    namespace Niagara.Enums.Wind.ENiagaraWindGroundMaskMode {
        enum ENiagaraWindGroundMaskMode { "Direct Set", Landscape, ENiagaraWindGroundMaskMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BB44E8E04521F8B49034B78C1242DA1B
    namespace Niagara.Enums.Wind.ENiagaraWindFrictionMode {
        enum ENiagaraWindFrictionMode { None, "Surface Distance", ENiagaraWindFrictionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9EC06F03446C961A0A4C289E52E5AE75
    namespace Niagara.Enums.Wind.ENiagaraWindFrictionDistanceMode {
        enum ENiagaraWindFrictionDistanceMode { "Distance Limit", "Falloff Start / End", ENiagaraWindFrictionDistanceMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D255570D4B0CE971EADAD1A462452F4F
    namespace Niagara.Enums.Wind.ENiagaraWindCombingMode {
        enum ENiagaraWindCombingMode { None, "Surface Distance", ENiagaraWindCombingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 86D60C8F4975B47718D755AADED0485A
    namespace Niagara.Enums.Wind.ENiagaraWindCollisionMode {
        enum ENiagaraWindCollisionMode { None, "From Collision Module", ENiagaraWindCollisionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 809229A5405DD360F3B641BAADEB1C9F
    namespace Niagara.Functions.PivotPainter.PivotPainterTextureRGBDataTypes {
        enum PivotPainterTextureRGBDataTypes { "Pivot Position (16-bit)", "Origin Position (16-bit)", "Origin Extents (16-bit)", "X-Vector (8-bit)", "Y-Vector (8-bit)", "Z-Vector (8-bit)", PivotPainterTextureRGBDataTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2F908B574662F43E59553DB963EFEBE8
    namespace Niagara.Functions.PivotPainter.PivotPainter8BitTextureAlphaDataTypes {
        enum PivotPainter8BitTextureAlphaDataTypes { "Normalized 0-1 Hierarchy Position", "Normalized 0-1 Value Per Element", "X Extent Divided by 2048 (2048 max)", "Y Extent Divided by 2048 (2048 max)", "Z Extent Divided by 2048 (2048 max)", PivotPainter8BitTextureAlphaDataTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F5B1EE31479BC8636940828D98313DD5
    namespace Niagara.Functions.PivotPainter.PivotPainter16bitTextureAlphaDataTypes {
        enum PivotPainter16bitTextureAlphaDataTypes { "Number of Steps to Root", "Random 0-1", "Origin Extents (16-bit)", "Bounding Box Diameter", "Selection Order (Int as float)", "Normalized 0-1 Hierarchy Position", "Object X Width", "Object Y Depth", "Object Z Height", "Parent Index (Float - Up To 2048)", PivotPainter16bitTextureAlphaDataTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AchievementWriteDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AchievementWriteDelegate__PythonCallable;
            static Load(InName: string): AchievementWriteDelegate__PythonCallable;
        
            __tid_AchievementWriteDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorBeginCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorBeginCursorOverSignature__PythonCallable;
            static Load(InName: string): ActorBeginCursorOverSignature__PythonCallable;
        
            __tid_ActorBeginCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorBeginOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorBeginOverlapSignature__PythonCallable;
            static Load(InName: string): ActorBeginOverlapSignature__PythonCallable;
        
            __tid_ActorBeginOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorBeginTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorBeginTouchOverSignature__PythonCallable;
            static Load(InName: string): ActorBeginTouchOverSignature__PythonCallable;
        
            __tid_ActorBeginTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorComponentActivatedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorComponentActivatedSignature__PythonCallable;
            static Load(InName: string): ActorComponentActivatedSignature__PythonCallable;
        
            __tid_ActorComponentActivatedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorComponentDeactivateSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorComponentDeactivateSignature__PythonCallable;
            static Load(InName: string): ActorComponentDeactivateSignature__PythonCallable;
        
            __tid_ActorComponentDeactivateSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorDestroyedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorDestroyedSignature__PythonCallable;
            static Load(InName: string): ActorDestroyedSignature__PythonCallable;
        
            __tid_ActorDestroyedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndCursorOverSignature__PythonCallable;
            static Load(InName: string): ActorEndCursorOverSignature__PythonCallable;
        
            __tid_ActorEndCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndOverlapSignature__PythonCallable;
            static Load(InName: string): ActorEndOverlapSignature__PythonCallable;
        
            __tid_ActorEndOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndPlaySignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndPlaySignature__PythonCallable;
            static Load(InName: string): ActorEndPlaySignature__PythonCallable;
        
            __tid_ActorEndPlaySignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndTouchOverSignature__PythonCallable;
            static Load(InName: string): ActorEndTouchOverSignature__PythonCallable;
        
            __tid_ActorEndTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorHitSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorHitSignature__PythonCallable;
            static Load(InName: string): ActorHitSignature__PythonCallable;
        
            __tid_ActorHitSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnClickedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnClickedSignature__PythonCallable;
            static Load(InName: string): ActorOnClickedSignature__PythonCallable;
        
            __tid_ActorOnClickedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnInputTouchBeginSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnInputTouchBeginSignature__PythonCallable;
            static Load(InName: string): ActorOnInputTouchBeginSignature__PythonCallable;
        
            __tid_ActorOnInputTouchBeginSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnInputTouchEndSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnInputTouchEndSignature__PythonCallable;
            static Load(InName: string): ActorOnInputTouchEndSignature__PythonCallable;
        
            __tid_ActorOnInputTouchEndSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnReleasedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnReleasedSignature__PythonCallable;
            static Load(InName: string): ActorOnReleasedSignature__PythonCallable;
        
            __tid_ActorOnReleasedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorPerceptionForgetUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorPerceptionForgetUpdatedDelegate__PythonCallable;
            static Load(InName: string): ActorPerceptionForgetUpdatedDelegate__PythonCallable;
        
            __tid_ActorPerceptionForgetUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorPerceptionInfoUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorPerceptionInfoUpdatedDelegate__PythonCallable;
            static Load(InName: string): ActorPerceptionInfoUpdatedDelegate__PythonCallable;
        
            __tid_ActorPerceptionInfoUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorPerceptionUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorPerceptionUpdatedDelegate__PythonCallable;
            static Load(InName: string): ActorPerceptionUpdatedDelegate__PythonCallable;
        
            __tid_ActorPerceptionUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class add_controls_for_selected extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_controls_for_selected;
            static Load(InName: string): add_controls_for_selected;
        
            __tid_add_controls_for_selected_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        enum ControlOutputFormat { HIERARCHY, LIST, CHILD, ControlOutputFormat_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class add_controls_for_selected_options extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            output_format: UE.Engine.PythonTypes.ControlOutputFormat;
            suffix: string;
            prefix: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_controls_for_selected_options;
            static Load(InName: string): add_controls_for_selected_options;
        
            __tid_add_controls_for_selected_options_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class add_null_above_selected extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_null_above_selected;
            static Load(InName: string): add_null_above_selected;
        
            __tid_add_null_above_selected_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class add_prefix_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            prefix: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_prefix_dialog;
            static Load(InName: string): add_prefix_dialog;
        
            __tid_add_prefix_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class add_prefix_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_prefix_entry;
            static Load(InName: string): add_prefix_entry;
        
            __tid_add_prefix_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class add_suffix_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            suffix: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_suffix_dialog;
            static Load(InName: string): add_suffix_dialog;
        
            __tid_add_suffix_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class add_suffix_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_suffix_entry;
            static Load(InName: string): add_suffix_entry;
        
            __tid_add_suffix_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AdvancedCopyCompletedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AdvancedCopyCompletedEvent__PythonCallable;
            static Load(InName: string): AdvancedCopyCompletedEvent__PythonCallable;
        
            __tid_AdvancedCopyCompletedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AIMoveCompletedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AIMoveCompletedSignature__PythonCallable;
            static Load(InName: string): AIMoveCompletedSignature__PythonCallable;
        
            __tid_AIMoveCompletedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class align_rotation extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_rotation;
            static Load(InName: string): align_rotation;
        
            __tid_align_rotation_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class align_scale extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_scale;
            static Load(InName: string): align_scale;
        
            __tid_align_scale_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class align_translation_all extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_all;
            static Load(InName: string): align_translation_all;
        
            __tid_align_translation_all_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class align_translation_rotation extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_rotation;
            static Load(InName: string): align_translation_rotation;
        
            __tid_align_translation_rotation_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class align_translation_x extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_x;
            static Load(InName: string): align_translation_x;
        
            __tid_align_translation_x_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class align_translation_y extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_y;
            static Load(InName: string): align_translation_y;
        
            __tid_align_translation_y_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class align_translation_z extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_z;
            static Load(InName: string): align_translation_z;
        
            __tid_align_translation_z_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AndroidPermissionDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AndroidPermissionDynamicDelegate__PythonCallable;
            static Load(InName: string): AndroidPermissionDynamicDelegate__PythonCallable;
        
            __tid_AndroidPermissionDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AnimDataModelModifiedDynamicEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimDataModelModifiedDynamicEvent__PythonCallable;
            static Load(InName: string): AnimDataModelModifiedDynamicEvent__PythonCallable;
        
            __tid_AnimDataModelModifiedDynamicEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AppleImageConversionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AppleImageConversionDelegate__PythonCallable;
            static Load(InName: string): AppleImageConversionDelegate__PythonCallable;
        
            __tid_AppleImageConversionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ARGetCandidateObjectPin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ARGetCandidateObjectPin__PythonCallable;
            static Load(InName: string): ARGetCandidateObjectPin__PythonCallable;
        
            __tid_ARGetCandidateObjectPin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ARLifeCycleComponent_InstanceARActorSpawnedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ARLifeCycleComponent_InstanceARActorSpawnedDelegate__PythonCallable;
            static Load(InName: string): ARLifeCycleComponent_InstanceARActorSpawnedDelegate__PythonCallable;
        
            __tid_ARLifeCycleComponent_InstanceARActorSpawnedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ARLifeCycleComponent_InstanceARActorToBeDestroyedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ARLifeCycleComponent_InstanceARActorToBeDestroyedDelegate__PythonCallable;
            static Load(InName: string): ARLifeCycleComponent_InstanceARActorToBeDestroyedDelegate__PythonCallable;
        
            __tid_ARLifeCycleComponent_InstanceARActorToBeDestroyedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ARSaveWorldPin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ARSaveWorldPin__PythonCallable;
            static Load(InName: string): ARSaveWorldPin__PythonCallable;
        
            __tid_ARSaveWorldPin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AsyncDelayComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AsyncDelayComplete__PythonCallable;
            static Load(InName: string): AsyncDelayComplete__PythonCallable;
        
            __tid_AsyncDelayComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AsyncEditorWaitForGameWorldEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AsyncEditorWaitForGameWorldEvent__PythonCallable;
            static Load(InName: string): AsyncEditorWaitForGameWorldEvent__PythonCallable;
        
            __tid_AsyncEditorWaitForGameWorldEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable;
            static Load(InName: string): AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable;
        
            __tid_AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AudioMeter_GetMeterChannelInfo__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioMeter_GetMeterChannelInfo__PythonCallable;
            static Load(InName: string): AudioMeter_GetMeterChannelInfo__PythonCallable;
        
            __tid_AudioMeter_GetMeterChannelInfo__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class BlueprintFindSessionsResultDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BlueprintFindSessionsResultDelegate__PythonCallable;
            static Load(InName: string): BlueprintFindSessionsResultDelegate__PythonCallable;
        
            __tid_BlueprintFindSessionsResultDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CharacterMovementUpdatedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CharacterMovementUpdatedSignature__PythonCallable;
            static Load(InName: string): CharacterMovementUpdatedSignature__PythonCallable;
        
            __tid_CharacterMovementUpdatedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CharacterReachedApexSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CharacterReachedApexSignature__PythonCallable;
            static Load(InName: string): CharacterReachedApexSignature__PythonCallable;
        
            __tid_CharacterReachedApexSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CheckGeoTrackingAvailabilityAsyncTaskBlueprintProxy_GeoTrackingAvailabilityDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CheckGeoTrackingAvailabilityAsyncTaskBlueprintProxy_GeoTrackingAvailabilityDelegate__PythonCallable;
            static Load(InName: string): CheckGeoTrackingAvailabilityAsyncTaskBlueprintProxy_GeoTrackingAvailabilityDelegate__PythonCallable;
        
            __tid_CheckGeoTrackingAvailabilityAsyncTaskBlueprintProxy_GeoTrackingAvailabilityDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxKey_GenerateWidgetEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxKey_GenerateWidgetEvent__PythonCallable;
            static Load(InName: string): ComboBoxKey_GenerateWidgetEvent__PythonCallable;
        
            __tid_ComboBoxKey_GenerateWidgetEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxKey_OnOpeningEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxKey_OnOpeningEvent__PythonCallable;
            static Load(InName: string): ComboBoxKey_OnOpeningEvent__PythonCallable;
        
            __tid_ComboBoxKey_OnOpeningEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxKey_OnSelectionChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxKey_OnSelectionChangedEvent__PythonCallable;
            static Load(InName: string): ComboBoxKey_OnSelectionChangedEvent__PythonCallable;
        
            __tid_ComboBoxKey_OnSelectionChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxString_OnOpeningEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxString_OnOpeningEvent__PythonCallable;
            static Load(InName: string): ComboBoxString_OnOpeningEvent__PythonCallable;
        
            __tid_ComboBoxString_OnOpeningEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxString_OnSelectionChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxString_OnSelectionChangedEvent__PythonCallable;
            static Load(InName: string): ComboBoxString_OnSelectionChangedEvent__PythonCallable;
        
            __tid_ComboBoxString_OnSelectionChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentBeginCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentBeginCursorOverSignature__PythonCallable;
            static Load(InName: string): ComponentBeginCursorOverSignature__PythonCallable;
        
            __tid_ComponentBeginCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentBeginOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentBeginOverlapSignature__PythonCallable;
            static Load(InName: string): ComponentBeginOverlapSignature__PythonCallable;
        
            __tid_ComponentBeginOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentBeginTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentBeginTouchOverSignature__PythonCallable;
            static Load(InName: string): ComponentBeginTouchOverSignature__PythonCallable;
        
            __tid_ComponentBeginTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentCollisionSettingsChangedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentCollisionSettingsChangedSignature__PythonCallable;
            static Load(InName: string): ComponentCollisionSettingsChangedSignature__PythonCallable;
        
            __tid_ComponentCollisionSettingsChangedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentEndCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentEndCursorOverSignature__PythonCallable;
            static Load(InName: string): ComponentEndCursorOverSignature__PythonCallable;
        
            __tid_ComponentEndCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentEndOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentEndOverlapSignature__PythonCallable;
            static Load(InName: string): ComponentEndOverlapSignature__PythonCallable;
        
            __tid_ComponentEndOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentEndTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentEndTouchOverSignature__PythonCallable;
            static Load(InName: string): ComponentEndTouchOverSignature__PythonCallable;
        
            __tid_ComponentEndTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentHitSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentHitSignature__PythonCallable;
            static Load(InName: string): ComponentHitSignature__PythonCallable;
        
            __tid_ComponentHitSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnClickedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnClickedSignature__PythonCallable;
            static Load(InName: string): ComponentOnClickedSignature__PythonCallable;
        
            __tid_ComponentOnClickedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnInputTouchBeginSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnInputTouchBeginSignature__PythonCallable;
            static Load(InName: string): ComponentOnInputTouchBeginSignature__PythonCallable;
        
            __tid_ComponentOnInputTouchBeginSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnInputTouchEndSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnInputTouchEndSignature__PythonCallable;
            static Load(InName: string): ComponentOnInputTouchEndSignature__PythonCallable;
        
            __tid_ComponentOnInputTouchEndSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnReleasedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnReleasedSignature__PythonCallable;
            static Load(InName: string): ComponentOnReleasedSignature__PythonCallable;
        
            __tid_ComponentOnReleasedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentPhysicsStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentPhysicsStateChanged__PythonCallable;
            static Load(InName: string): ComponentPhysicsStateChanged__PythonCallable;
        
            __tid_ComponentPhysicsStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentSleepSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentSleepSignature__PythonCallable;
            static Load(InName: string): ComponentSleepSignature__PythonCallable;
        
            __tid_ComponentSleepSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentWakeSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentWakeSignature__PythonCallable;
            static Load(InName: string): ComponentWakeSignature__PythonCallable;
        
            __tid_ComponentWakeSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintBrokenSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintBrokenSignature__PythonCallable;
            static Load(InName: string): ConstraintBrokenSignature__PythonCallable;
        
            __tid_ConstraintBrokenSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintsManager_OnConstraintAdded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintsManager_OnConstraintAdded__PythonCallable;
            static Load(InName: string): ConstraintsManager_OnConstraintAdded__PythonCallable;
        
            __tid_ConstraintsManager_OnConstraintAdded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintsManager_OnConstraintRemoved__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintsManager_OnConstraintRemoved__PythonCallable;
            static Load(InName: string): ConstraintsManager_OnConstraintRemoved__PythonCallable;
        
            __tid_ConstraintsManager_OnConstraintRemoved__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ControlRig_OnControlSelectedBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ControlRig_OnControlSelectedBP__PythonCallable;
            static Load(InName: string): ControlRig_OnControlSelectedBP__PythonCallable;
        
            __tid_ControlRig_OnControlSelectedBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ControlRigComponentDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ControlRigComponentDelegate__PythonCallable;
            static Load(InName: string): ControlRigComponentDelegate__PythonCallable;
        
            __tid_ControlRigComponentDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CustomWidgetNavigationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CustomWidgetNavigationDelegate__PythonCallable;
            static Load(InName: string): CustomWidgetNavigationDelegate__PythonCallable;
        
            __tid_CustomWidgetNavigationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable;
            static Load(InName: string): DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable;
        
            __tid_DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DeviceModelLoadedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DeviceModelLoadedDelegate__PythonCallable;
            static Load(InName: string): DeviceModelLoadedDelegate__PythonCallable;
        
            __tid_DeviceModelLoadedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DirectoryWatcherCallback__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DirectoryWatcherCallback__PythonCallable;
            static Load(InName: string): DirectoryWatcherCallback__PythonCallable;
        
            __tid_DirectoryWatcherCallback__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class do_rename_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            start_num: number;
            newName: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): do_rename_dialog;
            static Load(InName: string): do_rename_dialog;
        
            __tid_do_rename_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class do_rename_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): do_rename_entry;
            static Load(InName: string): do_rename_entry;
        
            __tid_do_rename_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DownloadImageDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DownloadImageDelegate__PythonCallable;
            static Load(InName: string): DownloadImageDelegate__PythonCallable;
        
            __tid_DownloadImageDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableText_OnEditableTextChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableText_OnEditableTextChangedEvent__PythonCallable;
            static Load(InName: string): EditableText_OnEditableTextChangedEvent__PythonCallable;
        
            __tid_EditableText_OnEditableTextChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableText_OnEditableTextCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableText_OnEditableTextCommittedEvent__PythonCallable;
            static Load(InName: string): EditableText_OnEditableTextCommittedEvent__PythonCallable;
        
            __tid_EditableText_OnEditableTextCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable;
            static Load(InName: string): EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable;
        
            __tid_EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
            static Load(InName: string): EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
        
            __tid_EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable;
            static Load(InName: string): EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable;
        
            __tid_EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EmptyOnlineDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EmptyOnlineDelegate__PythonCallable;
            static Load(InName: string): EmptyOnlineDelegate__PythonCallable;
        
            __tid_EmptyOnlineDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputActionHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputActionHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): EnhancedInputActionHandlerDynamicSignature__PythonCallable;
        
            __tid_EnhancedInputActionHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable;
            static Load(InName: string): EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable;
        
            __tid_EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable;
            static Load(InName: string): EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable;
        
            __tid_EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FieldValueChangedDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FieldValueChangedDynamicDelegate__PythonCallable;
            static Load(InName: string): FieldValueChangedDynamicDelegate__PythonCallable;
        
            __tid_FieldValueChangedDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FlipbookFinishedPlaySignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FlipbookFinishedPlaySignature__PythonCallable;
            static Load(InName: string): FlipbookFinishedPlaySignature__PythonCallable;
        
            __tid_FlipbookFinishedPlaySignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ForEachActorIteratorSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ForEachActorIteratorSignature__PythonCallable;
            static Load(InName: string): ForEachActorIteratorSignature__PythonCallable;
        
            __tid_ForEachActorIteratorSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ForEachAssetIteratorSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ForEachAssetIteratorSignature__PythonCallable;
            static Load(InName: string): ForEachAssetIteratorSignature__PythonCallable;
        
            __tid_ForEachAssetIteratorSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FunctionalTestAISpawned__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FunctionalTestAISpawned__PythonCallable;
            static Load(InName: string): FunctionalTestAISpawned__PythonCallable;
        
            __tid_FunctionalTestAISpawned__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FunctionalTestEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FunctionalTestEventSignature__PythonCallable;
            static Load(InName: string): FunctionalTestEventSignature__PythonCallable;
        
            __tid_FunctionalTestEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTask_GenericGameplayTaskDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTask_GenericGameplayTaskDelegate__PythonCallable;
            static Load(InName: string): GameplayTask_GenericGameplayTaskDelegate__PythonCallable;
        
            __tid_GameplayTask_GenericGameplayTaskDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable;
            static Load(InName: string): GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable;
        
            __tid_GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable;
            static Load(InName: string): GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable;
        
            __tid_GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTaskSpawnActorDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTaskSpawnActorDelegate__PythonCallable;
            static Load(InName: string): GameplayTaskSpawnActorDelegate__PythonCallable;
        
            __tid_GameplayTaskSpawnActorDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable;
            static Load(InName: string): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable;
        
            __tid_GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable;
            static Load(InName: string): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable;
        
            __tid_GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GetGeoLocationAsyncTaskBlueprintProxy_GetGeoLocationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GetGeoLocationAsyncTaskBlueprintProxy_GetGeoLocationDelegate__PythonCallable;
            static Load(InName: string): GetGeoLocationAsyncTaskBlueprintProxy_GetGeoLocationDelegate__PythonCallable;
        
            __tid_GetGeoLocationAsyncTaskBlueprintProxy_GetGeoLocationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class HardwareInputDeviceChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): HardwareInputDeviceChanged__PythonCallable;
            static Load(InName: string): HardwareInputDeviceChanged__PythonCallable;
        
            __tid_HardwareInputDeviceChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetReimport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetReimport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetReimport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetReimport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InAppPurchaseQuery2Result__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InAppPurchaseQuery2Result__PythonCallable;
            static Load(InName: string): InAppPurchaseQuery2Result__PythonCallable;
        
            __tid_InAppPurchaseQuery2Result__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InAppPurchaseRestoreResult2__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InAppPurchaseRestoreResult2__PythonCallable;
            static Load(InName: string): InAppPurchaseRestoreResult2__PythonCallable;
        
            __tid_InAppPurchaseRestoreResult2__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InAppPurchaseResult2__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InAppPurchaseResult2__PythonCallable;
            static Load(InName: string): InAppPurchaseResult2__PythonCallable;
        
            __tid_InAppPurchaseResult2__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputActionHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputActionHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputActionHandlerDynamicSignature__PythonCallable;
        
            __tid_InputActionHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputAxisHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputAxisHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputAxisHandlerDynamicSignature__PythonCallable;
        
            __tid_InputAxisHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputDebugKeyHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputDebugKeyHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputDebugKeyHandlerDynamicSignature__PythonCallable;
        
            __tid_InputDebugKeyHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputGestureHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputGestureHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputGestureHandlerDynamicSignature__PythonCallable;
        
            __tid_InputGestureHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputKeySelector_OnIsSelectingKeyChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputKeySelector_OnIsSelectingKeyChanged__PythonCallable;
            static Load(InName: string): InputKeySelector_OnIsSelectingKeyChanged__PythonCallable;
        
            __tid_InputKeySelector_OnIsSelectingKeyChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputKeySelector_OnKeySelected__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputKeySelector_OnKeySelected__PythonCallable;
            static Load(InName: string): InputKeySelector_OnKeySelected__PythonCallable;
        
            __tid_InputKeySelector_OnKeySelected__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputTouchHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputTouchHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputTouchHandlerDynamicSignature__PythonCallable;
        
            __tid_InputTouchHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputVectorAxisHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputVectorAxisHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputVectorAxisHandlerDynamicSignature__PythonCallable;
        
            __tid_InputVectorAxisHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InstancePointDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InstancePointDamageSignature__PythonCallable;
            static Load(InName: string): InstancePointDamageSignature__PythonCallable;
        
            __tid_InstancePointDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InstanceRadialDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InstanceRadialDamageSignature__PythonCallable;
            static Load(InName: string): InstanceRadialDamageSignature__PythonCallable;
        
            __tid_InstanceRadialDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InstigatedAnyDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InstigatedAnyDamageSignature__PythonCallable;
            static Load(InName: string): InstigatedAnyDamageSignature__PythonCallable;
        
            __tid_InstigatedAnyDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class IsRootComponentChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): IsRootComponentChanged__PythonCallable;
            static Load(InName: string): IsRootComponentChanged__PythonCallable;
        
            __tid_IsRootComponentChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LandedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LandedSignature__PythonCallable;
            static Load(InName: string): LandedSignature__PythonCallable;
        
            __tid_LandedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LeaderboardQueryResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LeaderboardQueryResult__PythonCallable;
            static Load(InName: string): LeaderboardQueryResult__PythonCallable;
        
            __tid_LeaderboardQueryResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable;
            static Load(InName: string): LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable;
        
            __tid_LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LevelStreamingLoadedStatus__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LevelStreamingLoadedStatus__PythonCallable;
            static Load(InName: string): LevelStreamingLoadedStatus__PythonCallable;
        
            __tid_LevelStreamingLoadedStatus__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LevelStreamingVisibilityStatus__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LevelStreamingVisibilityStatus__PythonCallable;
            static Load(InName: string): LevelStreamingVisibilityStatus__PythonCallable;
        
            __tid_LevelStreamingVisibilityStatus__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LocationServicesData_OnLocationChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LocationServicesData_OnLocationChanged__PythonCallable;
            static Load(InName: string): LocationServicesData_OnLocationChanged__PythonCallable;
        
            __tid_LocationServicesData_OnLocationChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MenuAnchor_GetUserWidget__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MenuAnchor_GetUserWidget__PythonCallable;
            static Load(InName: string): MenuAnchor_GetUserWidget__PythonCallable;
        
            __tid_MenuAnchor_GetUserWidget__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable;
            static Load(InName: string): MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable;
        
            __tid_MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovementModeChangedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovementModeChangedSignature__PythonCallable;
            static Load(InName: string): MovementModeChangedSignature__PythonCallable;
        
            __tid_MovementModeChangedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MoveTaskCompletedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MoveTaskCompletedSignature__PythonCallable;
            static Load(InName: string): MoveTaskCompletedSignature__PythonCallable;
        
            __tid_MoveTaskCompletedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovieSceneActorPredictionFailure__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovieSceneActorPredictionFailure__PythonCallable;
            static Load(InName: string): MovieSceneActorPredictionFailure__PythonCallable;
        
            __tid_MovieSceneActorPredictionFailure__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovieSceneActorPredictionResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovieSceneActorPredictionResult__PythonCallable;
            static Load(InName: string): MovieSceneActorPredictionResult__PythonCallable;
        
            __tid_MovieSceneActorPredictionResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable;
        
            __tid_MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable;
        
            __tid_MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable;
        
            __tid_MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable;
        
            __tid_MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable;
            static Load(InName: string): NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable;
        
            __tid_NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class NumTablesChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NumTablesChanged__PythonCallable;
            static Load(InName: string): NumTablesChanged__PythonCallable;
        
            __tid_NumTablesChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OAISimpleDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OAISimpleDelegate__PythonCallable;
            static Load(InName: string): OAISimpleDelegate__PythonCallable;
        
            __tid_OAISimpleDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnActorReady__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnActorReady__PythonCallable;
            static Load(InName: string): OnActorReady__PythonCallable;
        
            __tid_OnActorReady__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAllMontageInstancesEndedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAllMontageInstancesEndedMCDelegate__PythonCallable;
            static Load(InName: string): OnAllMontageInstancesEndedMCDelegate__PythonCallable;
        
            __tid_OnAllMontageInstancesEndedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAnimInitialized__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAnimInitialized__PythonCallable;
            static Load(InName: string): OnAnimInitialized__PythonCallable;
        
            __tid_OnAnimInitialized__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnARTrackingStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnARTrackingStateChanged__PythonCallable;
            static Load(InName: string): OnARTrackingStateChanged__PythonCallable;
        
            __tid_OnARTrackingStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnARTransformUpdated__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnARTransformUpdated__PythonCallable;
            static Load(InName: string): OnARTransformUpdated__PythonCallable;
        
            __tid_OnARTransformUpdated__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAsyncCaptureSceneComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAsyncCaptureSceneComplete__PythonCallable;
            static Load(InName: string): OnAsyncCaptureSceneComplete__PythonCallable;
        
            __tid_OnAsyncCaptureSceneComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAsyncHandleSaveGame__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAsyncHandleSaveGame__PythonCallable;
            static Load(InName: string): OnAsyncHandleSaveGame__PythonCallable;
        
            __tid_OnAsyncHandleSaveGame__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioDefaultDeviceChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioDefaultDeviceChanged__PythonCallable;
            static Load(InName: string): OnAudioDefaultDeviceChanged__PythonCallable;
        
            __tid_OnAudioDefaultDeviceChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioDeviceChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioDeviceChange__PythonCallable;
            static Load(InName: string): OnAudioDeviceChange__PythonCallable;
        
            __tid_OnAudioDeviceChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioDeviceStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioDeviceStateChanged__PythonCallable;
            static Load(InName: string): OnAudioDeviceStateChanged__PythonCallable;
        
            __tid_OnAudioDeviceStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioFadeChangeSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioFadeChangeSignature__PythonCallable;
            static Load(InName: string): OnAudioFadeChangeSignature__PythonCallable;
        
            __tid_OnAudioFadeChangeSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioFinished__PythonCallable;
            static Load(InName: string): OnAudioFinished__PythonCallable;
        
            __tid_OnAudioFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioInputDevicesObtained__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioInputDevicesObtained__PythonCallable;
            static Load(InName: string): OnAudioInputDevicesObtained__PythonCallable;
        
            __tid_OnAudioInputDevicesObtained__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioMultiEnvelopeValue__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioMultiEnvelopeValue__PythonCallable;
            static Load(InName: string): OnAudioMultiEnvelopeValue__PythonCallable;
        
            __tid_OnAudioMultiEnvelopeValue__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioOutputDevicesObtained__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioOutputDevicesObtained__PythonCallable;
            static Load(InName: string): OnAudioOutputDevicesObtained__PythonCallable;
        
            __tid_OnAudioOutputDevicesObtained__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioPlaybackPercent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioPlaybackPercent__PythonCallable;
            static Load(InName: string): OnAudioPlaybackPercent__PythonCallable;
        
            __tid_OnAudioPlaybackPercent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioPlayStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioPlayStateChanged__PythonCallable;
            static Load(InName: string): OnAudioPlayStateChanged__PythonCallable;
        
            __tid_OnAudioPlayStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioRadialSliderValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioRadialSliderValueChangedEvent__PythonCallable;
            static Load(InName: string): OnAudioRadialSliderValueChangedEvent__PythonCallable;
        
            __tid_OnAudioRadialSliderValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioSingleEnvelopeValue__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioSingleEnvelopeValue__PythonCallable;
            static Load(InName: string): OnAudioSingleEnvelopeValue__PythonCallable;
        
            __tid_OnAudioSingleEnvelopeValue__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioVirtualizationChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioVirtualizationChanged__PythonCallable;
            static Load(InName: string): OnAudioVirtualizationChanged__PythonCallable;
        
            __tid_OnAudioVirtualizationChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnBoneTransformsFinalized__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnBoneTransformsFinalized__PythonCallable;
            static Load(InName: string): OnBoneTransformsFinalized__PythonCallable;
        
            __tid_OnBoneTransformsFinalized__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonClickedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonClickedEvent__PythonCallable;
            static Load(InName: string): OnButtonClickedEvent__PythonCallable;
        
            __tid_OnButtonClickedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonHoverEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonHoverEvent__PythonCallable;
            static Load(InName: string): OnButtonHoverEvent__PythonCallable;
        
            __tid_OnButtonHoverEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonPressedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonPressedEvent__PythonCallable;
            static Load(InName: string): OnButtonPressedEvent__PythonCallable;
        
            __tid_OnButtonPressedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonReleasedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonReleasedEvent__PythonCallable;
            static Load(InName: string): OnButtonReleasedEvent__PythonCallable;
        
            __tid_OnButtonReleasedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnCanvasRenderTargetUpdate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnCanvasRenderTargetUpdate__PythonCallable;
            static Load(InName: string): OnCanvasRenderTargetUpdate__PythonCallable;
        
            __tid_OnCanvasRenderTargetUpdate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosBreakEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosBreakEvent__PythonCallable;
            static Load(InName: string): OnChaosBreakEvent__PythonCallable;
        
            __tid_OnChaosBreakEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosBreakingEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosBreakingEvents__PythonCallable;
            static Load(InName: string): OnChaosBreakingEvents__PythonCallable;
        
            __tid_OnChaosBreakingEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosCollisionEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosCollisionEvents__PythonCallable;
            static Load(InName: string): OnChaosCollisionEvents__PythonCallable;
        
            __tid_OnChaosCollisionEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosCrumblingEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosCrumblingEvent__PythonCallable;
            static Load(InName: string): OnChaosCrumblingEvent__PythonCallable;
        
            __tid_OnChaosCrumblingEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosPhysicsCollision__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosPhysicsCollision__PythonCallable;
            static Load(InName: string): OnChaosPhysicsCollision__PythonCallable;
        
            __tid_OnChaosPhysicsCollision__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosRemovalEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosRemovalEvent__PythonCallable;
            static Load(InName: string): OnChaosRemovalEvent__PythonCallable;
        
            __tid_OnChaosRemovalEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosRemovalEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosRemovalEvents__PythonCallable;
            static Load(InName: string): OnChaosRemovalEvents__PythonCallable;
        
            __tid_OnChaosRemovalEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosTrailingEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosTrailingEvents__PythonCallable;
            static Load(InName: string): OnChaosTrailingEvents__PythonCallable;
        
            __tid_OnChaosTrailingEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnCheckBoxComponentStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnCheckBoxComponentStateChanged__PythonCallable;
            static Load(InName: string): OnCheckBoxComponentStateChanged__PythonCallable;
        
            __tid_OnCheckBoxComponentStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnClaimedResourcesChangeSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnClaimedResourcesChangeSignature__PythonCallable;
            static Load(InName: string): OnClaimedResourcesChangeSignature__PythonCallable;
        
            __tid_OnClaimedResourcesChangeSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnCompletedDeviceSwap__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnCompletedDeviceSwap__PythonCallable;
            static Load(InName: string): OnCompletedDeviceSwap__PythonCallable;
        
            __tid_OnCompletedDeviceSwap__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnConstructEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnConstructEvent__PythonCallable;
            static Load(InName: string): OnConstructEvent__PythonCallable;
        
            __tid_OnConstructEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnContentInstallFailed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnContentInstallFailed__PythonCallable;
            static Load(InName: string): OnContentInstallFailed__PythonCallable;
        
            __tid_OnContentInstallFailed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnContentInstallSucceeded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnContentInstallSucceeded__PythonCallable;
            static Load(InName: string): OnContentInstallSucceeded__PythonCallable;
        
            __tid_OnContentInstallSucceeded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureBeginEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureBeginEvent__PythonCallable;
            static Load(InName: string): OnControllerCaptureBeginEvent__PythonCallable;
        
            __tid_OnControllerCaptureBeginEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureBeginEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureBeginEventSynth2D__PythonCallable;
            static Load(InName: string): OnControllerCaptureBeginEventSynth2D__PythonCallable;
        
            __tid_OnControllerCaptureBeginEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureEndEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureEndEvent__PythonCallable;
            static Load(InName: string): OnControllerCaptureEndEvent__PythonCallable;
        
            __tid_OnControllerCaptureEndEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureEndEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureEndEventSynth2D__PythonCallable;
            static Load(InName: string): OnControllerCaptureEndEventSynth2D__PythonCallable;
        
            __tid_OnControllerCaptureEndEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDataLayerRuntimeStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDataLayerRuntimeStateChanged__PythonCallable;
            static Load(InName: string): OnDataLayerRuntimeStateChanged__PythonCallable;
        
            __tid_OnDataLayerRuntimeStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDeleteActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDeleteActorsBegin__PythonCallable;
            static Load(InName: string): OnDeleteActorsBegin__PythonCallable;
        
            __tid_OnDeleteActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDeleteActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDeleteActorsEnd__PythonCallable;
            static Load(InName: string): OnDeleteActorsEnd__PythonCallable;
        
            __tid_OnDeleteActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDragDropMulticast__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDragDropMulticast__PythonCallable;
            static Load(InName: string): OnDragDropMulticast__PythonCallable;
        
            __tid_OnDragDropMulticast__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDuplicateActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDuplicateActorsBegin__PythonCallable;
            static Load(InName: string): OnDuplicateActorsBegin__PythonCallable;
        
            __tid_OnDuplicateActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDuplicateActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDuplicateActorsEnd__PythonCallable;
            static Load(InName: string): OnDuplicateActorsEnd__PythonCallable;
        
            __tid_OnDuplicateActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDynamicMeshModifiedBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDynamicMeshModifiedBP__PythonCallable;
            static Load(InName: string): OnDynamicMeshModifiedBP__PythonCallable;
        
            __tid_OnDynamicMeshModifiedBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCopyActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCopyActorsBegin__PythonCallable;
            static Load(InName: string): OnEditCopyActorsBegin__PythonCallable;
        
            __tid_OnEditCopyActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCopyActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCopyActorsEnd__PythonCallable;
            static Load(InName: string): OnEditCopyActorsEnd__PythonCallable;
        
            __tid_OnEditCopyActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCutActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCutActorsBegin__PythonCallable;
            static Load(InName: string): OnEditCutActorsBegin__PythonCallable;
        
            __tid_OnEditCutActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCutActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCutActorsEnd__PythonCallable;
            static Load(InName: string): OnEditCutActorsEnd__PythonCallable;
        
            __tid_OnEditCutActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditNewActorsDropped__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditNewActorsDropped__PythonCallable;
            static Load(InName: string): OnEditNewActorsDropped__PythonCallable;
        
            __tid_OnEditNewActorsDropped__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditNewActorsPlaced__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditNewActorsPlaced__PythonCallable;
            static Load(InName: string): OnEditNewActorsPlaced__PythonCallable;
        
            __tid_OnEditNewActorsPlaced__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditorUtilityPIEEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditorUtilityPIEEvent__PythonCallable;
            static Load(InName: string): OnEditorUtilityPIEEvent__PythonCallable;
        
            __tid_OnEditorUtilityPIEEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditorUtilityTaskDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
            static Load(InName: string): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
        
            __tid_OnEditorUtilityTaskDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditPasteActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditPasteActorsBegin__PythonCallable;
            static Load(InName: string): OnEditPasteActorsBegin__PythonCallable;
        
            __tid_OnEditPasteActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditPasteActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditPasteActorsEnd__PythonCallable;
            static Load(InName: string): OnEditPasteActorsEnd__PythonCallable;
        
            __tid_OnEditPasteActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEnvelopeFollowerUpdate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEnvelopeFollowerUpdate__PythonCallable;
            static Load(InName: string): OnEnvelopeFollowerUpdate__PythonCallable;
        
            __tid_OnEnvelopeFollowerUpdate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnExpandableAreaExpansionChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnExpandableAreaExpansionChanged__PythonCallable;
            static Load(InName: string): OnExpandableAreaExpansionChanged__PythonCallable;
        
            __tid_OnExpandableAreaExpansionChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnExportImageAsyncComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnExportImageAsyncComplete__PythonCallable;
            static Load(InName: string): OnExportImageAsyncComplete__PythonCallable;
        
            __tid_OnExportImageAsyncComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnFloatValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnFloatValueChangedEvent__PythonCallable;
            static Load(InName: string): OnFloatValueChangedEvent__PythonCallable;
        
            __tid_OnFloatValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnFloatValueChangedEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnFloatValueChangedEventSynth2D__PythonCallable;
            static Load(InName: string): OnFloatValueChangedEventSynth2D__PythonCallable;
        
            __tid_OnFloatValueChangedEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnForceFeedbackFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnForceFeedbackFinished__PythonCallable;
            static Load(InName: string): OnForceFeedbackFinished__PythonCallable;
        
            __tid_OnForceFeedbackFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnGameUserSettingsUINeedsUpdate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnGameUserSettingsUINeedsUpdate__PythonCallable;
            static Load(InName: string): OnGameUserSettingsUINeedsUpdate__PythonCallable;
        
            __tid_OnGameUserSettingsUINeedsUpdate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnGetItemChildrenDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnGetItemChildrenDynamic__PythonCallable;
            static Load(InName: string): OnGetItemChildrenDynamic__PythonCallable;
        
            __tid_OnGetItemChildrenDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnHoveredWidgetChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnHoveredWidgetChanged__PythonCallable;
            static Load(InName: string): OnHoveredWidgetChanged__PythonCallable;
        
            __tid_OnHoveredWidgetChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnImageWriteComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnImageWriteComplete__PythonCallable;
            static Load(InName: string): OnImageWriteComplete__PythonCallable;
        
            __tid_OnImageWriteComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnImportDoneDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnImportDoneDynamic__PythonCallable;
            static Load(InName: string): OnImportDoneDynamic__PythonCallable;
        
            __tid_OnImportDoneDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnInputAction__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnInputAction__PythonCallable;
            static Load(InName: string): OnInputAction__PythonCallable;
        
            __tid_OnInputAction__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemExpansionChangedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemExpansionChangedDynamic__PythonCallable;
            static Load(InName: string): OnItemExpansionChangedDynamic__PythonCallable;
        
            __tid_OnItemExpansionChangedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemIsHoveredChangedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemIsHoveredChangedDynamic__PythonCallable;
            static Load(InName: string): OnItemIsHoveredChangedDynamic__PythonCallable;
        
            __tid_OnItemIsHoveredChangedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestOverallLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestOverallLoudnessResults__PythonCallable;
            static Load(InName: string): OnLatestOverallLoudnessResults__PythonCallable;
        
            __tid_OnLatestOverallLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestOverallMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestOverallMeterResults__PythonCallable;
            static Load(InName: string): OnLatestOverallMeterResults__PythonCallable;
        
            __tid_OnLatestOverallMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestPerChannelLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestPerChannelLoudnessResults__PythonCallable;
            static Load(InName: string): OnLatestPerChannelLoudnessResults__PythonCallable;
        
            __tid_OnLatestPerChannelLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestPerChannelMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestPerChannelMeterResults__PythonCallable;
            static Load(InName: string): OnLatestPerChannelMeterResults__PythonCallable;
        
            __tid_OnLatestPerChannelMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestSpectrumResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestSpectrumResults__PythonCallable;
            static Load(InName: string): OnLatestSpectrumResults__PythonCallable;
        
            __tid_OnLatestSpectrumResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLeaderboardFlushed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLeaderboardFlushed__PythonCallable;
            static Load(InName: string): OnLeaderboardFlushed__PythonCallable;
        
            __tid_OnLeaderboardFlushed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorEditorCameraMoved__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorEditorCameraMoved__PythonCallable;
            static Load(InName: string): OnLevelEditorEditorCameraMoved__PythonCallable;
        
            __tid_OnLevelEditorEditorCameraMoved__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorMapChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorMapChanged__PythonCallable;
            static Load(InName: string): OnLevelEditorMapChanged__PythonCallable;
        
            __tid_OnLevelEditorMapChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorMapOpened__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorMapOpened__PythonCallable;
            static Load(InName: string): OnLevelEditorMapOpened__PythonCallable;
        
            __tid_OnLevelEditorMapOpened__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorPostSaveWorld__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorPostSaveWorld__PythonCallable;
            static Load(InName: string): OnLevelEditorPostSaveWorld__PythonCallable;
        
            __tid_OnLevelEditorPostSaveWorld__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorPreSaveWorld__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorPreSaveWorld__PythonCallable;
            static Load(InName: string): OnLevelEditorPreSaveWorld__PythonCallable;
        
            __tid_OnLevelEditorPreSaveWorld__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelSequencePlayerCameraCutEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelSequencePlayerCameraCutEvent__PythonCallable;
            static Load(InName: string): OnLevelSequencePlayerCameraCutEvent__PythonCallable;
        
            __tid_OnLevelSequencePlayerCameraCutEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineConnectionResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineConnectionResult__PythonCallable;
            static Load(InName: string): OnlineConnectionResult__PythonCallable;
        
            __tid_OnlineConnectionResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineLogoutResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineLogoutResult__PythonCallable;
            static Load(InName: string): OnlineLogoutResult__PythonCallable;
        
            __tid_OnlineLogoutResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineShowLoginUIResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineShowLoginUIResult__PythonCallable;
            static Load(InName: string): OnlineShowLoginUIResult__PythonCallable;
        
            __tid_OnlineShowLoginUIResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineTurnBasedMatchResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineTurnBasedMatchResult__PythonCallable;
            static Load(InName: string): OnlineTurnBasedMatchResult__PythonCallable;
        
            __tid_OnlineTurnBasedMatchResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListEntryGeneratedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListEntryGeneratedDynamic__PythonCallable;
            static Load(InName: string): OnListEntryGeneratedDynamic__PythonCallable;
        
            __tid_OnListEntryGeneratedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListEntryInitializedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListEntryInitializedDynamic__PythonCallable;
            static Load(InName: string): OnListEntryInitializedDynamic__PythonCallable;
        
            __tid_OnListEntryInitializedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListEntryReleasedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListEntryReleasedDynamic__PythonCallable;
            static Load(InName: string): OnListEntryReleasedDynamic__PythonCallable;
        
            __tid_OnListEntryReleasedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListItemScrolledIntoViewDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListItemScrolledIntoViewDynamic__PythonCallable;
            static Load(InName: string): OnListItemScrolledIntoViewDynamic__PythonCallable;
        
            __tid_OnListItemScrolledIntoViewDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListItemSelectionChangedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListItemSelectionChangedDynamic__PythonCallable;
            static Load(InName: string): OnListItemSelectionChangedDynamic__PythonCallable;
        
            __tid_OnListItemSelectionChangedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListViewScrolledDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListViewScrolledDynamic__PythonCallable;
            static Load(InName: string): OnListViewScrolledDynamic__PythonCallable;
        
            __tid_OnListViewScrolledDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMainAudioOutputDeviceObtained__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMainAudioOutputDeviceObtained__PythonCallable;
            static Load(InName: string): OnMainAudioOutputDeviceObtained__PythonCallable;
        
            __tid_OnMainAudioOutputDeviceObtained__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMediaPlayerMediaEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMediaPlayerMediaEvent__PythonCallable;
            static Load(InName: string): OnMediaPlayerMediaEvent__PythonCallable;
        
            __tid_OnMediaPlayerMediaEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMediaPlayerMediaOpened__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMediaPlayerMediaOpened__PythonCallable;
            static Load(InName: string): OnMediaPlayerMediaOpened__PythonCallable;
        
            __tid_OnMediaPlayerMediaOpened__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMediaPlayerMediaOpenFailed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMediaPlayerMediaOpenFailed__PythonCallable;
            static Load(InName: string): OnMediaPlayerMediaOpenFailed__PythonCallable;
        
            __tid_OnMediaPlayerMediaOpenFailed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMenuOpenChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMenuOpenChangedEvent__PythonCallable;
            static Load(InName: string): OnMenuOpenChangedEvent__PythonCallable;
        
            __tid_OnMenuOpenChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageBlendingOutStartedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageBlendingOutStartedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageBlendingOutStartedMCDelegate__PythonCallable;
        
            __tid_OnMontageBlendingOutStartedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageEndedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageEndedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageEndedMCDelegate__PythonCallable;
        
            __tid_OnMontageEndedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontagePlayDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontagePlayDelegate__PythonCallable;
            static Load(InName: string): OnMontagePlayDelegate__PythonCallable;
        
            __tid_OnMontagePlayDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageStartedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageStartedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageStartedMCDelegate__PythonCallable;
        
            __tid_OnMontageStartedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureBeginEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureBeginEvent__PythonCallable;
            static Load(InName: string): OnMouseCaptureBeginEvent__PythonCallable;
        
            __tid_OnMouseCaptureBeginEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureBeginEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureBeginEventSynth2D__PythonCallable;
            static Load(InName: string): OnMouseCaptureBeginEventSynth2D__PythonCallable;
        
            __tid_OnMouseCaptureBeginEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureEndEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureEndEvent__PythonCallable;
            static Load(InName: string): OnMouseCaptureEndEvent__PythonCallable;
        
            __tid_OnMouseCaptureEndEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureEndEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureEndEventSynth2D__PythonCallable;
            static Load(InName: string): OnMouseCaptureEndEventSynth2D__PythonCallable;
        
            __tid_OnMouseCaptureEndEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMovieSceneSequencePlayerEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMovieSceneSequencePlayerEvent__PythonCallable;
            static Load(InName: string): OnMovieSceneSequencePlayerEvent__PythonCallable;
        
            __tid_OnMovieSceneSequencePlayerEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNavDataGenericEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNavDataGenericEvent__PythonCallable;
            static Load(InName: string): OnNavDataGenericEvent__PythonCallable;
        
            __tid_OnNavDataGenericEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNavigationPathUpdated__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNavigationPathUpdated__PythonCallable;
            static Load(InName: string): OnNavigationPathUpdated__PythonCallable;
        
            __tid_OnNavigationPathUpdated__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNiagaraScriptCompilationComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNiagaraScriptCompilationComplete__PythonCallable;
            static Load(InName: string): OnNiagaraScriptCompilationComplete__PythonCallable;
        
            __tid_OnNiagaraScriptCompilationComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNiagaraSystemFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNiagaraSystemFinished__PythonCallable;
            static Load(InName: string): OnNiagaraSystemFinished__PythonCallable;
        
            __tid_OnNiagaraSystemFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNotifyReplaced__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNotifyReplaced__PythonCallable;
            static Load(InName: string): OnNotifyReplaced__PythonCallable;
        
            __tid_OnNotifyReplaced__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNotifyStateReplaced__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNotifyStateReplaced__PythonCallable;
            static Load(InName: string): OnNotifyStateReplaced__PythonCallable;
        
            __tid_OnNotifyStateReplaced__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnObjectImportDoneDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnObjectImportDoneDynamic__PythonCallable;
            static Load(InName: string): OnObjectImportDoneDynamic__PythonCallable;
        
            __tid_OnObjectImportDoneDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnOverallLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnOverallLoudnessResults__PythonCallable;
            static Load(InName: string): OnOverallLoudnessResults__PythonCallable;
        
            __tid_OnOverallLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnOverallMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnOverallMeterResults__PythonCallable;
            static Load(InName: string): OnOverallMeterResults__PythonCallable;
        
            __tid_OnOverallMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPawnControllerChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPawnControllerChanged__PythonCallable;
            static Load(InName: string): OnPawnControllerChanged__PythonCallable;
        
            __tid_OnPawnControllerChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPerChannelLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPerChannelLoudnessResults__PythonCallable;
            static Load(InName: string): OnPerChannelLoudnessResults__PythonCallable;
        
            __tid_OnPerChannelLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPerChannelMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPerChannelMeterResults__PythonCallable;
            static Load(InName: string): OnPerChannelMeterResults__PythonCallable;
        
            __tid_OnPerChannelMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPlayerStatePawnSet__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPlayerStatePawnSet__PythonCallable;
            static Load(InName: string): OnPlayerStatePawnSet__PythonCallable;
        
            __tid_OnPlayerStatePawnSet__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPossessedPawnChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPossessedPawnChanged__PythonCallable;
            static Load(InName: string): OnPossessedPawnChanged__PythonCallable;
        
            __tid_OnPossessedPawnChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetBundlesChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetBundlesChanged__PythonCallable;
            static Load(InName: string): OnPrimaryAssetBundlesChanged__PythonCallable;
        
            __tid_OnPrimaryAssetBundlesChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetClassListLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetClassListLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetClassListLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetClassListLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetClassLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetClassLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetClassLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetClassLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetListLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetListLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetListLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetListLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPropertyValueChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPropertyValueChanged__PythonCallable;
            static Load(InName: string): OnPropertyValueChanged__PythonCallable;
        
            __tid_OnPropertyValueChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzCommandEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzCommandEvent__PythonCallable;
            static Load(InName: string): OnQuartzCommandEvent__PythonCallable;
        
            __tid_OnQuartzCommandEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzCommandEventBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzCommandEventBP__PythonCallable;
            static Load(InName: string): OnQuartzCommandEventBP__PythonCallable;
        
            __tid_OnQuartzCommandEventBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzMetronomeEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzMetronomeEvent__PythonCallable;
            static Load(InName: string): OnQuartzMetronomeEvent__PythonCallable;
        
            __tid_OnQuartzMetronomeEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzMetronomeEventBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzMetronomeEventBP__PythonCallable;
            static Load(InName: string): OnQuartzMetronomeEventBP__PythonCallable;
        
            __tid_OnQuartzMetronomeEventBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQueueSubtitles__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQueueSubtitles__PythonCallable;
            static Load(InName: string): OnQueueSubtitles__PythonCallable;
        
            __tid_OnQueueSubtitles__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnRenderMovieStopped__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnRenderMovieStopped__PythonCallable;
            static Load(InName: string): OnRenderMovieStopped__PythonCallable;
        
            __tid_OnRenderMovieStopped__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnRequestContentFailed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnRequestContentFailed__PythonCallable;
            static Load(InName: string): OnRequestContentFailed__PythonCallable;
        
            __tid_OnRequestContentFailed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnRequestContentSucceeded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnRequestContentSucceeded__PythonCallable;
            static Load(InName: string): OnRequestContentSucceeded__PythonCallable;
        
            __tid_OnRequestContentSucceeded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSampleLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSampleLoaded__PythonCallable;
            static Load(InName: string): OnSampleLoaded__PythonCallable;
        
            __tid_OnSampleLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSamplePlaybackProgress__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSamplePlaybackProgress__PythonCallable;
            static Load(InName: string): OnSamplePlaybackProgress__PythonCallable;
        
            __tid_OnSamplePlaybackProgress__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSoundLoadComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSoundLoadComplete__PythonCallable;
            static Load(InName: string): OnSoundLoadComplete__PythonCallable;
        
            __tid_OnSoundLoadComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSpectrumResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSpectrumResults__PythonCallable;
            static Load(InName: string): OnSpectrumResults__PythonCallable;
        
            __tid_OnSpectrumResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixEnvelope__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixEnvelope__PythonCallable;
            static Load(InName: string): OnSubmixEnvelope__PythonCallable;
        
            __tid_OnSubmixEnvelope__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixEnvelopeBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixEnvelopeBP__PythonCallable;
            static Load(InName: string): OnSubmixEnvelopeBP__PythonCallable;
        
            __tid_OnSubmixEnvelopeBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixRecordedFileDone__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixRecordedFileDone__PythonCallable;
            static Load(InName: string): OnSubmixRecordedFileDone__PythonCallable;
        
            __tid_OnSubmixRecordedFileDone__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixSpectralAnalysis__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixSpectralAnalysis__PythonCallable;
            static Load(InName: string): OnSubmixSpectralAnalysis__PythonCallable;
        
            __tid_OnSubmixSpectralAnalysis__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixSpectralAnalysisBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixSpectralAnalysisBP__PythonCallable;
            static Load(InName: string): OnSubmixSpectralAnalysisBP__PythonCallable;
        
            __tid_OnSubmixSpectralAnalysisBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSynthEnvelopeValue__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSynthEnvelopeValue__PythonCallable;
            static Load(InName: string): OnSynthEnvelopeValue__PythonCallable;
        
            __tid_OnSynthEnvelopeValue__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSystemFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSystemFinished__PythonCallable;
            static Load(InName: string): OnSystemFinished__PythonCallable;
        
            __tid_OnSystemFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTableAltered__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTableAltered__PythonCallable;
            static Load(InName: string): OnTableAltered__PythonCallable;
        
            __tid_OnTableAltered__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderCancelled__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderCancelled__PythonCallable;
            static Load(InName: string): OnTakeRecorderCancelled__PythonCallable;
        
            __tid_OnTakeRecorderCancelled__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderFinished__PythonCallable;
            static Load(InName: string): OnTakeRecorderFinished__PythonCallable;
        
            __tid_OnTakeRecorderFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderMarkedFrameAdded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderMarkedFrameAdded__PythonCallable;
            static Load(InName: string): OnTakeRecorderMarkedFrameAdded__PythonCallable;
        
            __tid_OnTakeRecorderMarkedFrameAdded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderPanelChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderPanelChanged__PythonCallable;
            static Load(InName: string): OnTakeRecorderPanelChanged__PythonCallable;
        
            __tid_OnTakeRecorderPanelChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderPreInitialize__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderPreInitialize__PythonCallable;
            static Load(InName: string): OnTakeRecorderPreInitialize__PythonCallable;
        
            __tid_OnTakeRecorderPreInitialize__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderStarted__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderStarted__PythonCallable;
            static Load(InName: string): OnTakeRecorderStarted__PythonCallable;
        
            __tid_OnTakeRecorderStarted__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderStopped__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderStopped__PythonCallable;
            static Load(InName: string): OnTakeRecorderStopped__PythonCallable;
        
            __tid_OnTakeRecorderStopped__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineEvent__PythonCallable;
            static Load(InName: string): OnTimelineEvent__PythonCallable;
        
            __tid_OnTimelineEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineFloat__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineFloat__PythonCallable;
            static Load(InName: string): OnTimelineFloat__PythonCallable;
        
            __tid_OnTimelineFloat__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineLinearColor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineLinearColor__PythonCallable;
            static Load(InName: string): OnTimelineLinearColor__PythonCallable;
        
            __tid_OnTimelineLinearColor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineVector__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineVector__PythonCallable;
            static Load(InName: string): OnTimelineVector__PythonCallable;
        
            __tid_OnTimelineVector__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserClickedBanner__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserClickedBanner__PythonCallable;
            static Load(InName: string): OnUserClickedBanner__PythonCallable;
        
            __tid_OnUserClickedBanner__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserClosedAdvertisement__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserClosedAdvertisement__PythonCallable;
            static Load(InName: string): OnUserClosedAdvertisement__PythonCallable;
        
            __tid_OnUserClosedAdvertisement__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserInputDeviceConnectionChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserInputDeviceConnectionChange__PythonCallable;
            static Load(InName: string): OnUserInputDeviceConnectionChange__PythonCallable;
        
            __tid_OnUserInputDeviceConnectionChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserInputDevicePairingChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserInputDevicePairingChange__PythonCallable;
            static Load(InName: string): OnUserInputDevicePairingChange__PythonCallable;
        
            __tid_OnUserInputDevicePairingChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserScrolledEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserScrolledEvent__PythonCallable;
            static Load(InName: string): OnUserScrolledEvent__PythonCallable;
        
            __tid_OnUserScrolledEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnVisibilityChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnVisibilityChangedEvent__PythonCallable;
            static Load(InName: string): OnVisibilityChangedEvent__PythonCallable;
        
            __tid_OnVisibilityChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnWidgetAnimationPlaybackStatusChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnWidgetAnimationPlaybackStatusChanged__PythonCallable;
            static Load(InName: string): OnWidgetAnimationPlaybackStatusChanged__PythonCallable;
        
            __tid_OnWidgetAnimationPlaybackStatusChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleBurstSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleBurstSignature__PythonCallable;
            static Load(InName: string): ParticleBurstSignature__PythonCallable;
        
            __tid_ParticleBurstSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleCollisionSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleCollisionSignature__PythonCallable;
            static Load(InName: string): ParticleCollisionSignature__PythonCallable;
        
            __tid_ParticleCollisionSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleDeathSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleDeathSignature__PythonCallable;
            static Load(InName: string): ParticleDeathSignature__PythonCallable;
        
            __tid_ParticleDeathSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleSpawnSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleSpawnSignature__PythonCallable;
            static Load(InName: string): ParticleSpawnSignature__PythonCallable;
        
            __tid_ParticleSpawnSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnControllerChangedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnControllerChangedSignature__PythonCallable;
            static Load(InName: string): PawnControllerChangedSignature__PythonCallable;
        
            __tid_PawnControllerChangedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnRestartedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnRestartedSignature__PythonCallable;
            static Load(InName: string): PawnRestartedSignature__PythonCallable;
        
            __tid_PawnRestartedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnSensingComponent_HearNoiseDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnSensingComponent_HearNoiseDelegate__PythonCallable;
            static Load(InName: string): PawnSensingComponent_HearNoiseDelegate__PythonCallable;
        
            __tid_PawnSensingComponent_HearNoiseDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnSensingComponent_SeePawnDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnSensingComponent_SeePawnDelegate__PythonCallable;
            static Load(InName: string): PawnSensingComponent_SeePawnDelegate__PythonCallable;
        
            __tid_PawnSensingComponent_SeePawnDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PerceptionUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PerceptionUpdatedDelegate__PythonCallable;
            static Load(InName: string): PerceptionUpdatedDelegate__PythonCallable;
        
            __tid_PerceptionUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PhysicsVolumeChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PhysicsVolumeChanged__PythonCallable;
            static Load(InName: string): PhysicsVolumeChanged__PythonCallable;
        
            __tid_PhysicsVolumeChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlasticDeformationEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlasticDeformationEventSignature__PythonCallable;
            static Load(InName: string): PlasticDeformationEventSignature__PythonCallable;
        
            __tid_PlasticDeformationEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformEventsComponent_PlatformEventDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformEventsComponent_PlatformEventDelegate__PythonCallable;
            static Load(InName: string): PlatformEventsComponent_PlatformEventDelegate__PythonCallable;
        
            __tid_PlatformEventsComponent_PlatformEventDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformInterfaceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformInterfaceDelegate__PythonCallable;
            static Load(InName: string): PlatformInterfaceDelegate__PythonCallable;
        
            __tid_PlatformInterfaceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlayMontageAnimNotifyDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlayMontageAnimNotifyDelegate__PythonCallable;
            static Load(InName: string): PlayMontageAnimNotifyDelegate__PythonCallable;
        
            __tid_PlayMontageAnimNotifyDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PostEvaluateAnimEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PostEvaluateAnimEvent__PythonCallable;
            static Load(InName: string): PostEvaluateAnimEvent__PythonCallable;
        
            __tid_PostEvaluateAnimEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable;
            static Load(InName: string): ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable;
        
            __tid_ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable;
            static Load(InName: string): ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable;
        
            __tid_ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestDelegate__PythonCallable;
            static Load(InName: string): PyTestDelegate__PythonCallable;
        
            __tid_PyTestDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestMulticastDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestMulticastDelegate__PythonCallable;
            static Load(InName: string): PyTestMulticastDelegate__PythonCallable;
        
            __tid_PyTestMulticastDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestSlateTickDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestSlateTickDelegate__PythonCallable;
            static Load(InName: string): PyTestSlateTickDelegate__PythonCallable;
        
            __tid_PyTestSlateTickDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable;
            static Load(InName: string): PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable;
        
            __tid_PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable;
            static Load(InName: string): PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable;
        
            __tid_PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMGraphModifiedDynamicEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMGraphModifiedDynamicEvent__PythonCallable;
            static Load(InName: string): RigVMGraphModifiedDynamicEvent__PythonCallable;
        
            __tid_RigVMGraphModifiedDynamicEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMPeformUserWorkflowDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMPeformUserWorkflowDynamicDelegate__PythonCallable;
            static Load(InName: string): RigVMPeformUserWorkflowDynamicDelegate__PythonCallable;
        
            __tid_RigVMPeformUserWorkflowDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMUserWorkflowProvider__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMUserWorkflowProvider__PythonCallable;
            static Load(InName: string): RigVMUserWorkflowProvider__PythonCallable;
        
            __tid_RigVMUserWorkflowProvider__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class search_replace_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): search_replace_entry;
            static Load(InName: string): search_replace_entry;
        
            __tid_search_replace_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class search_replace_name_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            search: string;
            replace: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): search_replace_name_dialog;
            static Load(InName: string): search_replace_name_dialog;
        
            __tid_search_replace_name_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SimpleListItemEventDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SimpleListItemEventDynamic__PythonCallable;
            static Load(InName: string): SimpleListItemEventDynamic__PythonCallable;
        
            __tid_SimpleListItemEventDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SlateAccessibleWidgetData_GetText__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SlateAccessibleWidgetData_GetText__PythonCallable;
            static Load(InName: string): SlateAccessibleWidgetData_GetText__PythonCallable;
        
            __tid_SlateAccessibleWidgetData_GetText__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SmartLinkReachedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SmartLinkReachedSignature__PythonCallable;
            static Load(InName: string): SmartLinkReachedSignature__PythonCallable;
        
            __tid_SmartLinkReachedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SourceControl_QueryFileStateDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SourceControl_QueryFileStateDelegate__PythonCallable;
            static Load(InName: string): SourceControl_QueryFileStateDelegate__PythonCallable;
        
            __tid_SourceControl_QueryFileStateDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable;
            static Load(InName: string): SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable;
        
            __tid_SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SpinBox_OnSpinBoxValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SpinBox_OnSpinBoxValueChangedEvent__PythonCallable;
            static Load(InName: string): SpinBox_OnSpinBoxValueChangedEvent__PythonCallable;
        
            __tid_SpinBox_OnSpinBoxValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable;
            static Load(InName: string): SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable;
        
            __tid_SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SystemLibrary_OnAssetClassLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SystemLibrary_OnAssetClassLoaded__PythonCallable;
            static Load(InName: string): SystemLibrary_OnAssetClassLoaded__PythonCallable;
        
            __tid_SystemLibrary_OnAssetClassLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SystemLibrary_OnAssetLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SystemLibrary_OnAssetLoaded__PythonCallable;
            static Load(InName: string): SystemLibrary_OnAssetLoaded__PythonCallable;
        
            __tid_SystemLibrary_OnAssetLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeAnyDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeAnyDamageSignature__PythonCallable;
            static Load(InName: string): TakeAnyDamageSignature__PythonCallable;
        
            __tid_TakeAnyDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakePointDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakePointDamageSignature__PythonCallable;
            static Load(InName: string): TakePointDamageSignature__PythonCallable;
        
            __tid_TakePointDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRadialDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRadialDamageSignature__PythonCallable;
            static Load(InName: string): TakeRadialDamageSignature__PythonCallable;
        
            __tid_TakeRadialDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable;
            static Load(InName: string): TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable;
        
            __tid_TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable;
            static Load(InName: string): TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable;
        
            __tid_TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TimerDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TimerDynamicDelegate__PythonCallable;
            static Load(InName: string): TimerDynamicDelegate__PythonCallable;
        
            __tid_TimerDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicCanExecuteAction__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicCanExecuteAction__PythonCallable;
            static Load(InName: string): ToolMenuDynamicCanExecuteAction__PythonCallable;
        
            __tid_ToolMenuDynamicCanExecuteAction__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicExecuteAction__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicExecuteAction__PythonCallable;
            static Load(InName: string): ToolMenuDynamicExecuteAction__PythonCallable;
        
            __tid_ToolMenuDynamicExecuteAction__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicGetActionCheckState__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicGetActionCheckState__PythonCallable;
            static Load(InName: string): ToolMenuDynamicGetActionCheckState__PythonCallable;
        
            __tid_ToolMenuDynamicGetActionCheckState__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicIsActionButtonVisible__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicIsActionButtonVisible__PythonCallable;
            static Load(InName: string): ToolMenuDynamicIsActionButtonVisible__PythonCallable;
        
            __tid_ToolMenuDynamicIsActionButtonVisible__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicIsActionChecked__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicIsActionChecked__PythonCallable;
            static Load(InName: string): ToolMenuDynamicIsActionChecked__PythonCallable;
        
            __tid_ToolMenuDynamicIsActionChecked__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TrackableDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TrackableDelegate__PythonCallable;
            static Load(InName: string): TrackableDelegate__PythonCallable;
        
            __tid_TrackableDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TrackableEnvProbeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TrackableEnvProbeDelegate__PythonCallable;
            static Load(InName: string): TrackableEnvProbeDelegate__PythonCallable;
        
            __tid_TrackableEnvProbeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TrackableFaceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TrackableFaceDelegate__PythonCallable;
            static Load(InName: string): TrackableFaceDelegate__PythonCallable;
        
            __tid_TrackableFaceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TrackableImageDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TrackableImageDelegate__PythonCallable;
            static Load(InName: string): TrackableImageDelegate__PythonCallable;
        
            __tid_TrackableImageDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TrackableObjectDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TrackableObjectDelegate__PythonCallable;
            static Load(InName: string): TrackableObjectDelegate__PythonCallable;
        
            __tid_TrackableObjectDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TrackablePlaneDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TrackablePlaneDelegate__PythonCallable;
            static Load(InName: string): TrackablePlaneDelegate__PythonCallable;
        
            __tid_TrackablePlaneDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TrackablePointDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TrackablePointDelegate__PythonCallable;
            static Load(InName: string): TrackablePointDelegate__PythonCallable;
        
            __tid_TrackablePointDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TypedElementSelectionSet_OnChangeDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TypedElementSelectionSet_OnChangeDynamic__PythonCallable;
            static Load(InName: string): TypedElementSelectionSet_OnChangeDynamic__PythonCallable;
        
            __tid_TypedElementSelectionSet_OnChangeDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable;
            static Load(InName: string): TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable;
        
            __tid_TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ViewportDisplayCallback__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ViewportDisplayCallback__PythonCallable;
            static Load(InName: string): ViewportDisplayCallback__PythonCallable;
        
            __tid_ViewportDisplayCallback__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class VRNotificationsComponent_VRNotificationsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): VRNotificationsComponent_VRNotificationsDelegate__PythonCallable;
            static Load(InName: string): VRNotificationsComponent_VRNotificationsDelegate__PythonCallable;
        
            __tid_VRNotificationsComponent_VRNotificationsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GenerateWidgetForObject__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GenerateWidgetForObject__PythonCallable;
            static Load(InName: string): Widget_GenerateWidgetForObject__PythonCallable;
        
            __tid_Widget_GenerateWidgetForObject__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GenerateWidgetForString__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GenerateWidgetForString__PythonCallable;
            static Load(InName: string): Widget_GenerateWidgetForString__PythonCallable;
        
            __tid_Widget_GenerateWidgetForString__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetBool__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetBool__PythonCallable;
            static Load(InName: string): Widget_GetBool__PythonCallable;
        
            __tid_Widget_GetBool__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetCheckBoxState__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetCheckBoxState__PythonCallable;
            static Load(InName: string): Widget_GetCheckBoxState__PythonCallable;
        
            __tid_Widget_GetCheckBoxState__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetFloat__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetFloat__PythonCallable;
            static Load(InName: string): Widget_GetFloat__PythonCallable;
        
            __tid_Widget_GetFloat__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetInt32__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetInt32__PythonCallable;
            static Load(InName: string): Widget_GetInt32__PythonCallable;
        
            __tid_Widget_GetInt32__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetLinearColor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetLinearColor__PythonCallable;
            static Load(InName: string): Widget_GetLinearColor__PythonCallable;
        
            __tid_Widget_GetLinearColor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetMouseCursor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetMouseCursor__PythonCallable;
            static Load(InName: string): Widget_GetMouseCursor__PythonCallable;
        
            __tid_Widget_GetMouseCursor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetSlateBrush__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetSlateBrush__PythonCallable;
            static Load(InName: string): Widget_GetSlateBrush__PythonCallable;
        
            __tid_Widget_GetSlateBrush__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetSlateColor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetSlateColor__PythonCallable;
            static Load(InName: string): Widget_GetSlateColor__PythonCallable;
        
            __tid_Widget_GetSlateColor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetSlateVisibility__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetSlateVisibility__PythonCallable;
            static Load(InName: string): Widget_GetSlateVisibility__PythonCallable;
        
            __tid_Widget_GetSlateVisibility__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetText__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetText__PythonCallable;
            static Load(InName: string): Widget_GetText__PythonCallable;
        
            __tid_Widget_GetText__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetWidget__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetWidget__PythonCallable;
            static Load(InName: string): Widget_GetWidget__PythonCallable;
        
            __tid_Widget_GetWidget__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_OnPointerEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_OnPointerEvent__PythonCallable;
            static Load(InName: string): Widget_OnPointerEvent__PythonCallable;
        
            __tid_Widget_OnPointerEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_OnReply__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_OnReply__PythonCallable;
            static Load(InName: string): Widget_OnReply__PythonCallable;
        
            __tid_Widget_OnReply__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetAnimationDynamicEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetAnimationDynamicEvent__PythonCallable;
            static Load(InName: string): WidgetAnimationDynamicEvent__PythonCallable;
        
            __tid_WidgetAnimationDynamicEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetAnimationDynamicEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetAnimationDynamicEvents__PythonCallable;
            static Load(InName: string): WidgetAnimationDynamicEvents__PythonCallable;
        
            __tid_WidgetAnimationDynamicEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetAnimationResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetAnimationResult__PythonCallable;
            static Load(InName: string): WidgetAnimationResult__PythonCallable;
        
            __tid_WidgetAnimationResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable;
            static Load(InName: string): WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable;
        
            __tid_WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class XRDeviceOnDisconnectDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): XRDeviceOnDisconnectDelegate__PythonCallable;
            static Load(InName: string): XRDeviceOnDisconnectDelegate__PythonCallable;
        
            __tid_XRDeviceOnDisconnectDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class XRTimedInputActionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): XRTimedInputActionDelegate__PythonCallable;
            static Load(InName: string): XRTimedInputActionDelegate__PythonCallable;
        
            __tid_XRTimedInputActionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPlaybackSequenceChangedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPlaybackSequenceChangedSignature__PythonCallable;
            static Load(InName: string): OnPlaybackSequenceChangedSignature__PythonCallable;
        
            __tid_OnPlaybackSequenceChangedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPlaybackSequenceCompleteSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPlaybackSequenceCompleteSignature__PythonCallable;
            static Load(InName: string): OnPlaybackSequenceCompleteSignature__PythonCallable;
        
            __tid_OnPlaybackSequenceCompleteSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPlaybackSequenceLoopedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPlaybackSequenceLoopedSignature__PythonCallable;
            static Load(InName: string): OnPlaybackSequenceLoopedSignature__PythonCallable;
        
            __tid_OnPlaybackSequenceLoopedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PaperZDPlaySlotOverrideOutputSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PaperZDPlaySlotOverrideOutputSignature__PythonCallable;
            static Load(InName: string): PaperZDPlaySlotOverrideOutputSignature__PythonCallable;
        
            __tid_PaperZDPlaySlotOverrideOutputSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LoadUI__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LoadUI__PythonCallable;
            static Load(InName: string): LoadUI__PythonCallable;
        
            __tid_LoadUI__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AbilityAsync_WaitAttributeChanged_AsyncWaitAttributeChangedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AbilityAsync_WaitAttributeChanged_AsyncWaitAttributeChangedDelegate__PythonCallable;
            static Load(InName: string): AbilityAsync_WaitAttributeChanged_AsyncWaitAttributeChangedDelegate__PythonCallable;
        
            __tid_AbilityAsync_WaitAttributeChanged_AsyncWaitAttributeChangedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AbilityAsync_WaitGameplayEffectApplied_OnAppliedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AbilityAsync_WaitGameplayEffectApplied_OnAppliedDelegate__PythonCallable;
            static Load(InName: string): AbilityAsync_WaitGameplayEffectApplied_OnAppliedDelegate__PythonCallable;
        
            __tid_AbilityAsync_WaitGameplayEffectApplied_OnAppliedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AbilityAsync_WaitGameplayEvent_EventReceivedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AbilityAsync_WaitGameplayEvent_EventReceivedDelegate__PythonCallable;
            static Load(InName: string): AbilityAsync_WaitGameplayEvent_EventReceivedDelegate__PythonCallable;
        
            __tid_AbilityAsync_WaitGameplayEvent_EventReceivedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AbilityAsync_WaitGameplayTag_AsyncWaitGameplayTagDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AbilityAsync_WaitGameplayTag_AsyncWaitGameplayTagDelegate__PythonCallable;
            static Load(InName: string): AbilityAsync_WaitGameplayTag_AsyncWaitGameplayTagDelegate__PythonCallable;
        
            __tid_AbilityAsync_WaitGameplayTag_AsyncWaitGameplayTagDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AbilityStateDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AbilityStateDelegate__PythonCallable;
            static Load(InName: string): AbilityStateDelegate__PythonCallable;
        
            __tid_AbilityStateDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AbilitySystemComponent_AbilityAbilityKey__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AbilitySystemComponent_AbilityAbilityKey__PythonCallable;
            static Load(InName: string): AbilitySystemComponent_AbilityAbilityKey__PythonCallable;
        
            __tid_AbilitySystemComponent_AbilityAbilityKey__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AbilitySystemComponent_AbilityConfirmOrCancel__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AbilitySystemComponent_AbilityConfirmOrCancel__PythonCallable;
            static Load(InName: string): AbilitySystemComponent_AbilityConfirmOrCancel__PythonCallable;
        
            __tid_AbilitySystemComponent_AbilityConfirmOrCancel__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable;
            static Load(InName: string): ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable;
        
            __tid_ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplyRootMotionConstantForceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplyRootMotionConstantForceDelegate__PythonCallable;
            static Load(InName: string): ApplyRootMotionConstantForceDelegate__PythonCallable;
        
            __tid_ApplyRootMotionConstantForceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplyRootMotionJumpForceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplyRootMotionJumpForceDelegate__PythonCallable;
            static Load(InName: string): ApplyRootMotionJumpForceDelegate__PythonCallable;
        
            __tid_ApplyRootMotionJumpForceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplyRootMotionMoveToActorForceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplyRootMotionMoveToActorForceDelegate__PythonCallable;
            static Load(InName: string): ApplyRootMotionMoveToActorForceDelegate__PythonCallable;
        
            __tid_ApplyRootMotionMoveToActorForceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplyRootMotionMoveToForceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplyRootMotionMoveToForceDelegate__PythonCallable;
            static Load(InName: string): ApplyRootMotionMoveToForceDelegate__PythonCallable;
        
            __tid_ApplyRootMotionMoveToForceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplyRootMotionRadialForceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplyRootMotionRadialForceDelegate__PythonCallable;
            static Load(InName: string): ApplyRootMotionRadialForceDelegate__PythonCallable;
        
            __tid_ApplyRootMotionRadialForceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AsyncWaitGameplayTagQueryDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AsyncWaitGameplayTagQueryDelegate__PythonCallable;
            static Load(InName: string): AsyncWaitGameplayTagQueryDelegate__PythonCallable;
        
            __tid_AsyncWaitGameplayTagQueryDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DataRegistryItemAcquiredBPCallback__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DataRegistryItemAcquiredBPCallback__PythonCallable;
            static Load(InName: string): DataRegistryItemAcquiredBPCallback__PythonCallable;
        
            __tid_DataRegistryItemAcquiredBPCallback__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayEffectAppliedSelfDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayEffectAppliedSelfDelegate__PythonCallable;
            static Load(InName: string): GameplayEffectAppliedSelfDelegate__PythonCallable;
        
            __tid_GameplayEffectAppliedSelfDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayEffectAppliedTargetDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayEffectAppliedTargetDelegate__PythonCallable;
            static Load(InName: string): GameplayEffectAppliedTargetDelegate__PythonCallable;
        
            __tid_GameplayEffectAppliedTargetDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayEffectBlockedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayEffectBlockedDelegate__PythonCallable;
            static Load(InName: string): GameplayEffectBlockedDelegate__PythonCallable;
        
            __tid_GameplayEffectBlockedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputPressDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputPressDelegate__PythonCallable;
            static Load(InName: string): InputPressDelegate__PythonCallable;
        
            __tid_InputPressDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputReleaseDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputReleaseDelegate__PythonCallable;
            static Load(InName: string): InputReleaseDelegate__PythonCallable;
        
            __tid_InputReleaseDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MontageWaitSimpleDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MontageWaitSimpleDelegate__PythonCallable;
            static Load(InName: string): MontageWaitSimpleDelegate__PythonCallable;
        
            __tid_MontageWaitSimpleDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovementModeChangedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovementModeChangedDelegate__PythonCallable;
            static Load(InName: string): MovementModeChangedDelegate__PythonCallable;
        
            __tid_MovementModeChangedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MoveToLocationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MoveToLocationDelegate__PythonCallable;
            static Load(InName: string): MoveToLocationDelegate__PythonCallable;
        
            __tid_MoveToLocationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovieSceneGameplayCueEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovieSceneGameplayCueEvent__PythonCallable;
            static Load(InName: string): MovieSceneGameplayCueEvent__PythonCallable;
        
            __tid_MovieSceneGameplayCueEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class NetworkSyncDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NetworkSyncDelegate__PythonCallable;
            static Load(InName: string): NetworkSyncDelegate__PythonCallable;
        
            __tid_NetworkSyncDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RepeatedActionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RepeatedActionDelegate__PythonCallable;
            static Load(InName: string): RepeatedActionDelegate__PythonCallable;
        
            __tid_RepeatedActionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SpawnActorDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SpawnActorDelegate__PythonCallable;
            static Load(InName: string): SpawnActorDelegate__PythonCallable;
        
            __tid_SpawnActorDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class VisualizeTargetingDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): VisualizeTargetingDelegate__PythonCallable;
            static Load(InName: string): VisualizeTargetingDelegate__PythonCallable;
        
            __tid_VisualizeTargetingDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitAbilityActivateDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitAbilityActivateDelegate__PythonCallable;
            static Load(InName: string): WaitAbilityActivateDelegate__PythonCallable;
        
            __tid_WaitAbilityActivateDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitAbilityCommitDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitAbilityCommitDelegate__PythonCallable;
            static Load(InName: string): WaitAbilityCommitDelegate__PythonCallable;
        
            __tid_WaitAbilityCommitDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitAttributeChangeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitAttributeChangeDelegate__PythonCallable;
            static Load(InName: string): WaitAttributeChangeDelegate__PythonCallable;
        
            __tid_WaitAttributeChangeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitAttributeChangeRatioThresholdDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitAttributeChangeRatioThresholdDelegate__PythonCallable;
            static Load(InName: string): WaitAttributeChangeRatioThresholdDelegate__PythonCallable;
        
            __tid_WaitAttributeChangeRatioThresholdDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitAttributeChangeThresholdDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitAttributeChangeThresholdDelegate__PythonCallable;
            static Load(InName: string): WaitAttributeChangeThresholdDelegate__PythonCallable;
        
            __tid_WaitAttributeChangeThresholdDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitCancelDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitCancelDelegate__PythonCallable;
            static Load(InName: string): WaitCancelDelegate__PythonCallable;
        
            __tid_WaitCancelDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitConfirmCancelDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitConfirmCancelDelegate__PythonCallable;
            static Load(InName: string): WaitConfirmCancelDelegate__PythonCallable;
        
            __tid_WaitConfirmCancelDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitDelayDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitDelayDelegate__PythonCallable;
            static Load(InName: string): WaitDelayDelegate__PythonCallable;
        
            __tid_WaitDelayDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitGameplayEffectRemovedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitGameplayEffectRemovedDelegate__PythonCallable;
            static Load(InName: string): WaitGameplayEffectRemovedDelegate__PythonCallable;
        
            __tid_WaitGameplayEffectRemovedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitGameplayEffectStackChangeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitGameplayEffectStackChangeDelegate__PythonCallable;
            static Load(InName: string): WaitGameplayEffectStackChangeDelegate__PythonCallable;
        
            __tid_WaitGameplayEffectStackChangeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitGameplayEventDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitGameplayEventDelegate__PythonCallable;
            static Load(InName: string): WaitGameplayEventDelegate__PythonCallable;
        
            __tid_WaitGameplayEventDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitGameplayTagDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitGameplayTagDelegate__PythonCallable;
            static Load(InName: string): WaitGameplayTagDelegate__PythonCallable;
        
            __tid_WaitGameplayTagDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitGameplayTagQueryDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitGameplayTagQueryDelegate__PythonCallable;
            static Load(InName: string): WaitGameplayTagQueryDelegate__PythonCallable;
        
            __tid_WaitGameplayTagQueryDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitOverlapDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitOverlapDelegate__PythonCallable;
            static Load(InName: string): WaitOverlapDelegate__PythonCallable;
        
            __tid_WaitOverlapDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitTargetDataDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitTargetDataDelegate__PythonCallable;
            static Load(InName: string): WaitTargetDataDelegate__PythonCallable;
        
            __tid_WaitTargetDataDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WaitVelocityChangeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WaitVelocityChangeDelegate__PythonCallable;
            static Load(InName: string): WaitVelocityChangeDelegate__PythonCallable;
        
            __tid_WaitVelocityChangeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AttributeDataChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AttributeDataChanged__PythonCallable;
            static Load(InName: string): AttributeDataChanged__PythonCallable;
        
            __tid_AttributeDataChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Game.ThirdPerson.Maps.ThirdPersonMap {
        class ThirdPersonMap_C extends UE.LevelScriptActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ThirdPersonMap_C;
            static Load(InName: string): ThirdPersonMap_C;
        
            __tid_ThirdPersonMap_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7DF4AD2C4EB9E1FA34F9E9A2A31631AE
    namespace Game.Blueprint.BP_Cpp_ProjectGameMode {
        class BP_Cpp_ProjectGameMode_C extends UE.Cpp_ProjectGameMode {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_BP_Cpp_ProjectGameMode(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Cpp_ProjectGameMode_C;
            static Load(InName: string): BP_Cpp_ProjectGameMode_C;
        
            __tid_BP_Cpp_ProjectGameMode_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3C5C7FE34683DB00626BFB9AC57A8BDB
    namespace Game.Blueprint.Characters.BP_MasterZD {
        class BP_MasterZD_C extends UE.ABBasePaperZDCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AC_Health: UE.Game.Blueprint.Components.AC_Health.AC_Health_C;
            DemageBox: UE.BoxComponent;
            HitBox: UE.BoxComponent;
            ABPostInitializeComponents() : void;
            ExecuteUbergraph_BP_MasterZD(EntryPoint: number) : void;
            /*
             *Event when this actor takes ANY damage
             */
            ReceiveAnyDamage(Damage: number, DamageType: $Nullable<UE.DamageType>, InstigatedBy: $Nullable<UE.Controller>, DamageCauser: $Nullable<UE.Actor>) : void;
            ResetColor() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_MasterZD_C;
            static Load(InName: string): BP_MasterZD_C;
        
            __tid_BP_MasterZD_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AAC747A247549AB6E11736A3DAAA1058
    namespace Game.Blueprint.Characters.Hero.BPC_PlayerHero {
        class BPC_PlayerHero_C extends UE.Game.Blueprint.Characters.BP_MasterZD.BP_MasterZD_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Camera: UE.CameraComponent;
            SpringArm: UE.SpringArmComponent;
            AttackHitbox() : void;
            ExecuteUbergraph_BPC_PlayerHero(EntryPoint: number) : void;
            InpActEvt_IA_Attack_K2Node_EnhancedInputActionEvent_0(ActionValue: UE.InputActionValue, ElapsedTime: number, TriggeredTime: number, SourceAction: $Nullable<UE.InputAction>) : void;
            InpActEvt_IA_Movement_K2Node_EnhancedInputActionEvent_1(ActionValue: UE.InputActionValue, ElapsedTime: number, TriggeredTime: number, SourceAction: $Nullable<UE.InputAction>) : void;
            PlayAttackAnim() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called when the Pawn is possessed by a Controller. Only called on the server (or in standalone)
             */
            ReceivePossessed(NewController: $Nullable<UE.Controller>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BPC_PlayerHero_C;
            static Load(InName: string): BPC_PlayerHero_C;
        
            __tid_BPC_PlayerHero_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 76015BDF49BB0D73C60147A1A9136D8E
    namespace Game.Blueprint.Characters.Hero.ABP_PlayerHero {
        class ABP_PlayerHero_C extends UE.PaperZDAnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            PaperZDAnimGraphNode_Sink_3: UE.PaperZDAnimNode_Sink;
            PaperZDAnimGraphNode_PlaySequence_2: UE.PaperZDAnimNode_PlaySequence;
            PaperZDAnimGraphNode_Sink_2: UE.PaperZDAnimNode_Sink;
            PaperZDAnimGraphNode_PlaySequence_1: UE.PaperZDAnimNode_PlaySequence;
            PaperZDAnimGraphNode_Sink_1: UE.PaperZDAnimNode_Sink;
            PaperZDAnimGraphNode_PlaySequence: UE.PaperZDAnimNode_PlaySequence;
            PaperZDAnimGraphNode_Sink: UE.PaperZDAnimNode_Sink;
            PaperZDAnimGraphNode_StateMachine: UE.PaperZDAnimNode_StateMachine;
            PaperZDAnimGraphNode_SetDirectionality: UE.PaperZDAnimNode_SetDirectionality;
            PaperZDAnimGraphNode_OverrideSlot: UE.PaperZDAnimNode_OverrideSlot;
            PlayerHero: UE.Game.Blueprint.Characters.Hero.BPC_PlayerHero.BPC_PlayerHero_C;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_PlayerHero_PaperZDAnimGraphNode_SetDirectionality_3A7A19FA459FC110D3A192A51AD29FBA() : void;
            ExecuteUbergraph_ABP_PlayerHero(EntryPoint: number) : void;
            /*
             *Called when the AnimInstance has been initialized, but before the first tick.
             */
            OnInit() : void;
            ReceiveNotify_AttackHitbox() : void;
            ZDRule_Transition(bCanEnterTransition: $Ref<boolean>) : void;
            ZDRule_Transition_1(bCanEnterTransition: $Ref<boolean>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_PlayerHero_C;
            static Load(InName: string): ABP_PlayerHero_C;
        
            __tid_ABP_PlayerHero_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D8498D3649F7F58B17EBBF92444D9D73
    namespace Game.Blueprint.AI.AI_Monster {
        class AI_Monster_C extends UE.AIController {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            PossessedPawn: UE.Game.Blueprint.Characters.BPC_MasterMonster.BPC_MasterMonster_C;
            Player: UE.Pawn;
            ExecuteUbergraph_AI_Monster(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Blueprint implementable event to react to the controller possessing a pawn
             */
            ReceivePossess(PossessedPawn: $Nullable<UE.Pawn>) : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AI_Monster_C;
            static Load(InName: string): AI_Monster_C;
        
            __tid_AI_Monster_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5FD7E3FB470B3F5DACED3FA8FD94207A
    namespace Game.Blueprint.Characters.BPC_MasterMonster {
        class BPC_MasterMonster_C extends UE.Game.Blueprint.Characters.BP_MasterZD.BP_MasterZD_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            BndEvt__BPC_MasterMonster_HitBox_K2Node_ComponentBoundEvent_0_ComponentBeginOverlapSignature__DelegateSignature(OverlappedComponent: $Nullable<UE.PrimitiveComponent>, OtherActor: $Nullable<UE.Actor>, OtherComp: $Nullable<UE.PrimitiveComponent>, OtherBodyIndex: number, bFromSweep: boolean, SweepResult: UE.HitResult) : void;
            ExecuteUbergraph_BPC_MasterMonster(EntryPoint: number) : void;
            FollowPlayer(WorldDirection: UE.Vector) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BPC_MasterMonster_C;
            static Load(InName: string): BPC_MasterMonster_C;
        
            __tid_BPC_MasterMonster_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E48883BF464E6EF6F96580A17B655DA6
    namespace Game.Blueprint.Characters.Skeleton.BPC_Skeleton {
        class BPC_Skeleton_C extends UE.Game.Blueprint.Characters.BPC_MasterMonster.BPC_MasterMonster_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BPC_Skeleton_C;
            static Load(InName: string): BPC_Skeleton_C;
        
            __tid_BPC_Skeleton_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 492671C841BDDB2DFCC3E89939D4A265
    namespace Game.Blueprint.Characters.Skeleton.ABP_Skeleton {
        class ABP_Skeleton_C extends UE.PaperZDAnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            PaperZDAnimGraphNode_Sink_2: UE.PaperZDAnimNode_Sink;
            PaperZDAnimGraphNode_PlaySequence_1: UE.PaperZDAnimNode_PlaySequence;
            PaperZDAnimGraphNode_Sink_1: UE.PaperZDAnimNode_Sink;
            PaperZDAnimGraphNode_PlaySequence: UE.PaperZDAnimNode_PlaySequence;
            PaperZDAnimGraphNode_Sink: UE.PaperZDAnimNode_Sink;
            PaperZDAnimGraphNode_StateMachine: UE.PaperZDAnimNode_StateMachine;
            PaperZDAnimGraphNode_SetDirectionality: UE.PaperZDAnimNode_SetDirectionality;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Skeleton_PaperZDAnimGraphNode_SetDirectionality_3F4FEA4740CB61BAAED1DDA35096AD42() : void;
            ExecuteUbergraph_ABP_Skeleton(EntryPoint: number) : void;
            ZDRule_Transition(bCanEnterTransition: $Ref<boolean>) : void;
            ZDRule_Transition_1(bCanEnterTransition: $Ref<boolean>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Skeleton_C;
            static Load(InName: string): ABP_Skeleton_C;
        
            __tid_ABP_Skeleton_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3F31637344F57768CECEA49B1B6787AB
    namespace Game.Blueprint.Components.AC_Health {
        class AC_Health_C extends UE.ActorComponent {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            IsAlive: boolean;
            MaxHealth: number;
            CurrentHealth: number;
            DamageHealth(DamageTaken: number) : void;
            ExecuteUbergraph_AC_Health(EntryPoint: number) : void;
            /*
             *Blueprint implementable event for when the component is beginning play, called before its owning actor's BeginPlay
             *or when the component is dynamically created if the Actor has already BegunPlay.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AC_Health_C;
            static Load(InName: string): AC_Health_C;
        
            __tid_AC_Health_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9844585F48B8A42704FC15A4118710A6
    namespace Game.Blueprint.UI.BP_MainWidget {
        class BP_MainWidget_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ButtonStart: UE.Button;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_MainWidget_C;
            static Load(InName: string): BP_MainWidget_C;
        
            __tid_BP_MainWidget_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1AF8287740A416DF05F311BB67C2619C
    namespace Game.Blueprint.GA.BPGA_Attack {
        class BPGA_Attack_C extends UE.GameplayAbility {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_BPGA_Attack(EntryPoint: number) : void;
            /*
             *The main function that defines what an ability does.
             * -Child classes will want to override this
             * -This function graph should call CommitAbility
             * -This function graph should call EndAbility
             *
             * Latent_async actions are ok in this graph. Note that Commit and EndAbility calling requirements speak to the K2_ActivateAbility graph.
             * In C++, the call to K2_ActivateAbility() may return without CommitAbility or EndAbility having been called. But it is expected that this
             * will only occur when latent_async actions are pending. When K2_ActivateAbility logically finishes, then we will expect Commit_End to have been called.
             */
            K2_ActivateAbility() : void;
            OnCancelled_326116DD4207FC5A8DE24DA9EC7EDF72() : void;
            OnCompleted_326116DD4207FC5A8DE24DA9EC7EDF72() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BPGA_Attack_C;
            static Load(InName: string): BPGA_Attack_C;
        
            __tid_BPGA_Attack_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1318C93746581FF0CB118DB454C28A20
    namespace Game.Blueprint.GA.BPGA_HitCheck {
        class BPGA_HitCheck_C extends UE.GameplayAbility {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_BPGA_HitCheck(EntryPoint: number) : void;
            /*
             *The main function that defines what an ability does.
             * -Child classes will want to override this
             * -This function graph should call CommitAbility
             * -This function graph should call EndAbility
             *
             * Latent_async actions are ok in this graph. Note that Commit and EndAbility calling requirements speak to the K2_ActivateAbility graph.
             * In C++, the call to K2_ActivateAbility() may return without CommitAbility or EndAbility having been called. But it is expected that this
             * will only occur when latent_async actions are pending. When K2_ActivateAbility logically finishes, then we will expect Commit_End to have been called.
             */
            K2_ActivateAbility() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BPGA_HitCheck_C;
            static Load(InName: string): BPGA_HitCheck_C;
        
            __tid_BPGA_HitCheck_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B51885B24C31E4B03E9CE0A279FE0BBB
    namespace Game.Blueprint.GE.BPGE_AttackHit {
        class BPGE_AttackHit_C extends UE.GameplayEffect {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BPGE_AttackHit_C;
            static Load(InName: string): BPGE_AttackHit_C;
        
            __tid_BPGE_AttackHit_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 71F09D494694FDC98D81BF8DA66840C6
    namespace Game.Blueprint.GA.TA_Hitbox {
        class TA_Hitbox_C extends UE.ABAbilityTargetActorHitbox {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            GetHitboxOverlapActors(InSourceActor: $Nullable<UE.Actor>) : TArray<UE.Actor>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TA_Hitbox_C;
            static Load(InName: string): TA_Hitbox_C;
        
            __tid_TA_Hitbox_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
