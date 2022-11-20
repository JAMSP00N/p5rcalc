import { getKeyOfValue } from '@/helpers';
import { ArcanaCombos, type ArcanaCombo, SpecialCombos, type SpecialCombo, TreasureCombos } from './combos';
import { Personas, type PersonaData, TreasureModifiers, TreasurePersonas,
            getPersonaApproxCost, getAllPersonasOfArcana, personaHasSkill, getPersonaSkillLevel } from './personas';
import { Skills, type SkillData } from './skills';
import { Arcana, Element } from './types';

type FusionRecipeParents = [ PersonaData, PersonaData, PersonaData?, PersonaData?, PersonaData?, PersonaData? ];
export interface FusionRecipe {
    result: PersonaData;
    parents: FusionRecipeParents;
    complete: boolean;
};

const NO_PERSONA: PersonaData = {
    name: '', level: 0, currentLevel: 0, arcana: Arcana.WORLD,
    stats: [], affinities: [], inherits: [], skills: [],
};
const NO_RECIPES: FusionRecipe[] = [] as FusionRecipe[];
const ALWAYS_INHERITED: Element[] = [ Element.SUPPORT, Element.ALMIGHTY, Element.PASSIVE, Element.TRAIT ];

export const removeAlreadyOwnedSkills = (persona: PersonaData, skills: SkillData[]): SkillData[] => {
    persona.skills.forEach(skill => {
        if (skills.includes(Skills[skill[0]]))
            skills.splice(skills.findIndex(s => s.name === skill[0]), 1);
    });

    return skills;
}

export const getRecipeApproxCost = (recipe: FusionRecipe|undefined): number => {
    if (!recipe)
        return 0;

    let cost: number = 0;
    recipe.parents.forEach(parent => {
        if (parent)
            cost += getPersonaApproxCost(parent);
    });

    return cost;
}
const RECIPE_COST_SORT = (a: FusionRecipe, b: FusionRecipe): number => getRecipeApproxCost(a) - getRecipeApproxCost(b);
const RECIPE_COMPLETE_SORT = (a: FusionRecipe, b: FusionRecipe): number => {
    const aComplete = a.complete ? -1 : 1;
    const bComplete = b.complete ? -1 : 1;

    return aComplete - bComplete;
}

const listContainsNormalCombo = (list: FusionRecipe[], parent1: PersonaData, parent2: PersonaData): boolean => {
    if (0 === list.length)
        return false;

    let alreadyContains: boolean = false;
    list.forEach(combo => {
        if (!combo.parents[0] || !combo.parents[1])
            return;

        if ( (combo.parents[0].name === parent1.name && combo.parents[1].name === parent2.name) ||
             (combo.parents[1].name === parent1.name && combo.parents[0].name === parent2.name) )
            alreadyContains = true;
    });


    return alreadyContains;
};

const getSiblingModifier = (arcana: Arcana, treasureName?: string): number =>
    treasureName ? TreasureModifiers[arcana][TreasurePersonas.findIndex(t => t === treasureName)] : 0;

const getValidSpecialRecipe = (result: PersonaData): FusionRecipe[] => {
    let combo: SpecialCombo|undefined = undefined;
    SpecialCombos.forEach(s => {
        if (s.result === result.name)
            combo = s;
    });

    if (!combo)
        return NO_RECIPES;

    const recipe: FusionRecipe = { result, parents: [ NO_PERSONA, NO_PERSONA ], complete: false };
    const names: string[] = (combo as SpecialCombo).parents;
    names.forEach( (name, idx) => recipe.parents[idx] = Personas[name] );

    return [ recipe ];
}

const getValidNormalRecipes = (result: PersonaData, lockedDlc?: string[]): FusionRecipe[] => {
    const arcanaCombos: ArcanaCombo[] = [];
    ArcanaCombos.forEach(combo => {
        if (result.arcana === combo.result)
            arcanaCombos.push(combo);
    });

    const siblingPersonas = getAllPersonasOfArcana(result.arcana, lockedDlc);

    const recipes: FusionRecipe[] = [];
    arcanaCombos.forEach(combo => {
        const parent1Personas = getAllPersonasOfArcana(combo.parent[0], lockedDlc);
        const parent2Personas = getAllPersonasOfArcana(combo.parent[1], lockedDlc);

        parent1Personas.forEach(parent1 => {
            if (parent1.name === result.name)
                return;

            parent2Personas.forEach(parent2 => {
                if (parent2.name === result.name)
                    return;

                if (parent1.name === parent2.name)
                    return;

                let siblingModifier: number = 0;
                if (parent1.treasure || parent2.treasure) {
                    if (parent1.treasure && parent2.treasure) {
                        const treasureResult = getKeyOfValue(TreasureCombos, [ parent1.name, parent2.name ]);
                        if (treasureResult && result.name === treasureResult.replaceAll('_', ''))
                        {
                            recipes.push({ result, parents: [ parent1, parent2 ], complete: false });
                            return;
                        }
                    }
                    else if (parent1.treasure)
                        siblingModifier = getSiblingModifier(result.arcana, parent1.name);
                    else if (parent2.treasure)
                        siblingModifier = getSiblingModifier(result.arcana, parent2.name);
                }

                const parentAverageLevel = 1 + Math.floor((parent1.level + parent2.level) >> 1);
                if (parentAverageLevel > result.level)
                    return;

                let parentResult: PersonaData = NO_PERSONA;
                siblingPersonas.forEach(sibling => {
                    if (NO_PERSONA === parentResult && sibling.level >= parentAverageLevel) {
                        parentResult = sibling;
                        return;
                    }
                });

                if (NO_PERSONA === parentResult) {
                    const lastSibling = [ ...siblingPersonas ].pop();
                    if (!lastSibling)
                        return;

                    parentResult = lastSibling;
                }

                if (0 !== siblingModifier) {
                    const prIdx = siblingPersonas.findIndex(sibling => sibling.name === parentResult.name);
                    const newParentResult = siblingPersonas[prIdx + siblingModifier];
                    if (newParentResult)
                        parentResult = newParentResult;
                }

                if (parentResult.name === result.name)
                    recipes.push({ result, parents: [ parent1, parent2 ], complete: false });
            });
        });
    });

    return recipes;
}

export const getValidRecipes = (result: PersonaData, skills?: SkillData[], lockedDlc?: string[], grandparentCheck: boolean = true): FusionRecipe[] => {
    if (result.treasure)
        return NO_RECIPES;

    const allRecipes = result.special ? getValidSpecialRecipe(result) : getValidNormalRecipes(result, lockedDlc);

    if (!skills || 0 === skills.length) {
        allRecipes.forEach(recipe => {
            recipe.complete = true;
            recipe.parents.forEach(parent => {
                if (parent)
                    parent.currentLevel = parent.level;
            });
        });

        return allRecipes.sort(RECIPE_COST_SORT);
    } else if (skills && 0 < skills.length) {
        skills = removeAlreadyOwnedSkills(result, skills);

        let failure: boolean = false;
        skills.forEach(skill => {
            if (skill.unique || ![ ...result.inherits, ...ALWAYS_INHERITED ].includes(skill.element)) {
                failure = true;
                return;
            }
        });

        if (failure)
            return NO_RECIPES;

        allRecipes.forEach(recipe => {
            const mods: [ string, number ][][] = [];
            skills?.forEach((skill, idx) => {
                recipe.parents.forEach(parent => {
                    if (!parent)
                        return;

                    if (!mods[idx])
                        mods[idx] = [];

                    if (personaHasSkill(parent, skill))
                        mods[idx].push([ parent.name, getPersonaSkillLevel(parent, skill) - parent.level ]);
                });
            });

            recipe.complete = true;
            mods.forEach(mod => {
                if (!recipe.complete)
                    return;

                if (0 === mod.length)
                    recipe.complete = false;
            });

            if (recipe.complete)
            {
                const checked: boolean[] = [];
                mods.forEach((mod, idx) => {
                    mod.sort((a, b) => a[1] - b[1]);
                    checked[idx] = false;
                });
    
                recipe.parents.forEach(parent => {
                    if (!parent)
                        return;
    
                    let levelDelta: number = 0;
                    mods.forEach((mod, idx) => {
                        if (parent.name !== mod[0][0])
                            return;
    
                        if (!checked[idx]) {
                            levelDelta = Math.max(0, mod[0][1]);
                            checked[idx] = true;
                        }
                    });
    
                    parent.currentLevel = parent.level + levelDelta;
                });

                if (!recipe.parents[0] || !recipe.parents[1])
                    return;

                if (recipe.parents[0] === recipe.parents[1])
                    return;

                let siblingModifier: number = 0;
                let parent1Level: number = recipe.parents[0].level;
                let parent2Level: number = recipe.parents[1].level;

                if (recipe.parents[0].treasure) {
                    siblingModifier = getSiblingModifier(result.arcana, recipe.parents[0].name);
                    parent2Level = recipe.parents[1].currentLevel;
                }

                if (recipe.parents[1].treasure) {
                    siblingModifier = getSiblingModifier(result.arcana, recipe.parents[1].name);
                    parent1Level = recipe.parents[0].currentLevel;
                }

                const siblingPersonas = getAllPersonasOfArcana(result.arcana, lockedDlc);
                const parentAverageLevel = 1 + Math.floor((parent1Level + parent2Level) >> 1);

                let parentResult: PersonaData = NO_PERSONA;
                siblingPersonas.forEach(sibling => {
                    if (NO_PERSONA === parentResult && sibling.level >= parentAverageLevel) {
                        parentResult = sibling;
                        return;
                    }
                });

                if (NO_PERSONA === parentResult) {
                    const lastSibling = [ ...siblingPersonas ].pop();
                    if (!lastSibling)
                        return;

                    parentResult = lastSibling;
                }

                if (0 !== siblingModifier) {
                    const prIdx = siblingPersonas.findIndex(sibling => sibling.name === parentResult.name);
                    const newParentResult = siblingPersonas[prIdx + siblingModifier];
                    if (newParentResult)
                        parentResult = newParentResult;
                }

                if (parentResult.name !== result.name)
                    allRecipes.splice(allRecipes.findIndex(__ =>
                        __.parents[0].name === recipe.parents[0].name &&
                        __.parents[1].name === recipe.parents[1].name
                    ), 1);
            } else {
                const completable = [] as boolean[];
                recipe.parents.forEach(parent => {
                    if (!parent || parent.treasure)
                        return;

                    skills?.forEach((skill, idx) => {
                        if ([ ...parent.inherits, ...ALWAYS_INHERITED ].includes(skill.element))
                            completable[idx] = true;
                    });
                });

                if (completable.includes(false)) {
                    allRecipes.splice(allRecipes.findIndex(__ =>
                        __.parents[0].name === recipe.parents[0].name &&
                        __.parents[1].name === recipe.parents[1].name
                    ), 1);
                    return;
                }
            }
        });

        return allRecipes
            .sort(RECIPE_COST_SORT)
            .sort(RECIPE_COMPLETE_SORT);
    }

    return NO_RECIPES;
}