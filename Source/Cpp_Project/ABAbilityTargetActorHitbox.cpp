// Fill out your copyright notice in the Description page of Project Settings.


#include "ABAbilityTargetActorHitbox.h"
#include "Abilities/GameplayAbility.h"
#include "AbilitySystemComponent.h"
#include "AbilitySystemLog.h"

AABAbilityTargetActorHitbox::AABAbilityTargetActorHitbox()
{
	ShouldProduceTargetDataOnServer = true;
}

void AABAbilityTargetActorHitbox::StartTargeting(UGameplayAbility* Ability)
{
	Super::StartTargeting(Ability);

	SourceActor = Ability->GetCurrentActorInfo()->AvatarActor.Get();
}

void AABAbilityTargetActorHitbox::ConfirmTargetingAndContinue()
{
	check(ShouldProduceTargetData());
	if (IsConfirmTargetingAllowed())
	{
		TArray<AActor*> actors = GetHitboxOverlapActors(SourceActor);
		TArray<TWeakObjectPtr<AActor>> weakActors;
		weakActors.Reserve(actors.Num());
		for (AActor* actor : actors)
		{
			TWeakObjectPtr<AActor> weakActor(actor);
			weakActors.Add(weakActor);
		}

		FGameplayAbilityTargetData_ActorArray* targetDataPtr = new FGameplayAbilityTargetData_ActorArray();
		targetDataPtr->SetActors(weakActors);
		FGameplayAbilityTargetDataHandle dataHandle(targetDataPtr);
		TargetDataReadyDelegate.Broadcast(dataHandle);
	}
}

void AABAbilityTargetActorHitbox::ConfirmTargeting()
{
	const FGameplayAbilityActorInfo* ActorInfo = (OwningAbility ? OwningAbility->GetCurrentActorInfo() : nullptr);
	UAbilitySystemComponent* ASC = (ActorInfo ? ActorInfo->AbilitySystemComponent.Get() : nullptr);
	if (ASC)
	{
		ASC->AbilityReplicatedEventDelegate(EAbilityGenericReplicatedEvent::GenericConfirm, OwningAbility->GetCurrentAbilitySpecHandle(), OwningAbility->GetCurrentActivationInfo().GetActivationPredictionKey()).Remove(GenericConfirmHandle);
	}
	else
	{
		ABILITY_LOG(Warning, TEXT("AGameplayAbilityTargetActor::ConfirmTargeting called with null Ability/ASC! Actor %s"), *GetName());
	}

	if (IsConfirmTargetingAllowed())
	{
		ConfirmTargetingAndContinue();
		if (bDestroyOnConfirmation)
		{
			Destroy();
		}
	}
}

void AABAbilityTargetActorHitbox::CancelTargeting()
{
	UE_LOG(LogTemp, Warning, TEXT("CancelTargeting called"));
}