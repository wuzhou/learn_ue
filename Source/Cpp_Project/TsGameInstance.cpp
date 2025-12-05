// Fill out your copyright notice in the Description page of Project Settings.


#include "TsGameInstance.h"

void UTsGameInstance::Init()
{
	Super::Init();
    GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    GameScript->Start("QuickStart", Arguments);
}

void UTsGameInstance::OnStart()
{
    Super::OnStart();
}

void UTsGameInstance::Shutdown()
{
    Super::Shutdown();
    GameScript.Reset();
}

UUserWidget* UTsGameInstance::CreateWidgetInstance(UWorld* World, UClass* Class)
{
    return CreateWidget<UUserWidget>(World, Class);
}