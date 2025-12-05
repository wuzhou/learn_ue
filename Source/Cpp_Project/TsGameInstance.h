// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "JsEnv.h"

#include "Blueprint/UserWidget.h"
#include "Blueprint/WidgetBlueprintLibrary.h"
#include "UObject/NoExportTypes.h"
#include "UObject/ObjectMacros.h"
#include "UObject/Object.h"
#include "UObject/UnrealType.h"
#include "UObject/ScriptMacros.h"
#include "Components/PanelSlot.h"

#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "TsGameInstance.generated.h"

DECLARE_DYNAMIC_DELEGATE_OneParam(FLoadUI, FString, A);

/**
 * 
 */
UCLASS()
class CPP_PROJECT_API UTsGameInstance : public UGameInstance
{
	GENERATED_BODY()
	
public:

	virtual void Init() override;

	virtual void OnStart() override;

	virtual void Shutdown() override;

	UFUNCTION()
	UUserWidget* CreateWidgetInstance(UWorld* World, UClass* Class);

	UPROPERTY()
	FLoadUI LoadUI;

private:
	TSharedPtr<puerts::FJsEnv> GameScript;
};
