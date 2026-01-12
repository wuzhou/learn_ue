// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "ABCharacterAttributeSet.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FAttributeDataChanged, float, oldValue, float, newValue);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOutOfHealth, AActor*, InInsigator);

/**
 * 
 */
UCLASS()
class CPP_PROJECT_API UABCharacterAttributeSet : public UAttributeSet
{
	GENERATED_BODY()
	
public:
	UABCharacterAttributeSet();

	GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ThisClass, MaxHealth);
	GAMEPLAYATTRIBUTE_VALUE_GETTER(MaxHealth);
	GAMEPLAYATTRIBUTE_VALUE_SETTER(MaxHealth);
	GAMEPLAYATTRIBUTE_VALUE_INITTER(MaxHealth);

	GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ThisClass, Health);
	GAMEPLAYATTRIBUTE_VALUE_GETTER(Health);
	GAMEPLAYATTRIBUTE_VALUE_SETTER(Health);
	GAMEPLAYATTRIBUTE_VALUE_INITTER(Health);

	GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ThisClass, Damage);
	GAMEPLAYATTRIBUTE_VALUE_GETTER(Damage);
	GAMEPLAYATTRIBUTE_VALUE_SETTER(Damage);
	GAMEPLAYATTRIBUTE_VALUE_INITTER(Damage);


	virtual void PreAttributeChange(const FGameplayAttribute& Attribute, float& NewValue) override;
	virtual void PostAttributeChange(const FGameplayAttribute& Attribute, float OldValue, float NewValue) override;
	virtual void PostGameplayEffectExecute(const struct FGameplayEffectModCallbackData& Data) override;

	UPROPERTY(BlueprintAssignable, Category = "Attribute")
	mutable FAttributeDataChanged OnMaxHealthChanged;

	UPROPERTY(BlueprintAssignable, Category = "Attribute")
	mutable FAttributeDataChanged OnHealthChanged;

	UPROPERTY(BlueprintAssignable, Category = "Attribute")
	mutable FOutOfHealth OnOutOfHealth;

protected:
	UPROPERTY(BlueprintReadOnly, Category = "Attribute")
	FGameplayAttributeData MaxHealth;

	UPROPERTY(BlueprintReadOnly, Category = "Attribute")
	FGameplayAttributeData Health;

	UPROPERTY(BlueprintReadOnly, Category = "Attribute")
	FGameplayAttributeData Damage;
};
