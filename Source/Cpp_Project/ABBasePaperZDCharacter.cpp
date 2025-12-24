// Fill out your copyright notice in the Description page of Project Settings.


#include "ABBasePaperZDCharacter.h"
#include "AbilitySystemComponent.h"
#include "ABCharacterAttributeSet.h"

AABBasePaperZDCharacter::AABBasePaperZDCharacter()
{
	//ASC
	ASC = CreateDefaultSubobject<UAbilitySystemComponent>(TEXT("ASC"));

	//Attribute Set
	CharacterAttributeSet = CreateDefaultSubobject<UABCharacterAttributeSet>(TEXT("CharacterAttributeSet"));
	ASC->AddAttributeSetSubobject<UABCharacterAttributeSet>(CharacterAttributeSet);
}

void AABBasePaperZDCharacter::PostInitializeComponents()
{
	Super::PostInitializeComponents();

	ABPostInitializeComponents();

	ASC->SetNumericAttributeBase(CharacterAttributeSet->GetMaxHealthAttribute(), 10.0f);
	ASC->SetNumericAttributeBase(CharacterAttributeSet->GetHealthAttribute(), 10.0f);
}