// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Abilities/GameplayAbilityTargetActor.h"
#include "ABAbilityTargetActorHitbox.generated.h"

/**
 * 
 */
UCLASS()
class CPP_PROJECT_API AABAbilityTargetActorHitbox : public AGameplayAbilityTargetActor
{
	GENERATED_BODY()

public:
	AABAbilityTargetActorHitbox();
	
	virtual void StartTargeting(UGameplayAbility* Ability) override;

	virtual void ConfirmTargetingAndContinue() override;

	virtual void ConfirmTargeting() override;

	virtual void CancelTargeting() override;

protected:
	UFUNCTION(BlueprintImplementableEvent)
	TArray<AActor*> GetHitboxOverlapActors(AActor* InSourceActor);
};
