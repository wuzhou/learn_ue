// Fill out your copyright notice in the Description page of Project Settings.


#include "JsActor.h"
#include "Engine/Engine.h"
#include "TsGameInstance.h"

// Sets default values
AJsActor::AJsActor()
{
 	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

}

// Called when the game starts or when spawned
void AJsActor::BeginPlay()
{
	Super::BeginPlay();
	
	UTsGameInstance* pInstance = Cast<UTsGameInstance>(GetGameInstance());
	if (pInstance)
	{
		pInstance->LoadUI.Execute(UIName);
	}
}

// Called every frame
void AJsActor::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
}