// Fill out your copyright notice in the Description page of Project Settings.


#include "ABCharacterAttributeSet.h"
#include "GameplayEffectExtension.h"

UABCharacterAttributeSet::UABCharacterAttributeSet() :
	MaxHealth(50.0f)
{
	InitHealth(GetMaxHealth());
}

void UABCharacterAttributeSet::PreAttributeChange(const FGameplayAttribute& Attribute, float& NewValue)
{
	if (Attribute == GetMaxHealthAttribute())
	{
		NewValue = FMath::Max(1.0f, NewValue);
	}
	else if (Attribute == GetHealthAttribute())
	{
		NewValue = FMath::Clamp(NewValue, 0.0f, GetMaxHealth());
	}
}

void UABCharacterAttributeSet::PostAttributeChange(const FGameplayAttribute& Attribute, float OldValue, float NewValue)
{
	if (Attribute == GetMaxHealthAttribute())
	{
		OnMaxHealthChanged.Broadcast(OldValue, NewValue);
	}
	else if (Attribute == GetHealthAttribute())
	{
		OnHealthChanged.Broadcast(OldValue, NewValue);
	}
}

void UABCharacterAttributeSet::PostGameplayEffectExecute(const struct FGameplayEffectModCallbackData& Data)
{
	if (GetHealth() <= 0.0f)
	{
		OnOutOfHealth.Broadcast(Data.EffectSpec.GetEffectContext().GetInstigator());
	}
}