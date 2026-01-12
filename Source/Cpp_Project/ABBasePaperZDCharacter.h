// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "PaperZDCharacter.h"
#include "ABBasePaperZDCharacter.generated.h"

/**
 * 
 */
UCLASS()
class CPP_PROJECT_API AABBasePaperZDCharacter : public APaperZDCharacter
{
	GENERATED_BODY()
public:
	AABBasePaperZDCharacter();

	virtual void PostInitializeComponents() override;

	UFUNCTION(BlueprintImplementableEvent)
	void ABPostInitializeComponents();

	UFUNCTION()
	void OnOutOfHealthCpp(AActor* InInstigator);
	
protected:
	UPROPERTY(VisibleAnywhere, BlueprintReadWrite, Category = "GAS")
	TObjectPtr<class UAbilitySystemComponent> ASC;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category="Attribute")
	TObjectPtr<class UABCharacterAttributeSet> CharacterAttributeSet;
};
