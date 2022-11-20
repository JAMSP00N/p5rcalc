<script lang="ts">
import DlcFilter from '@/components/DlcFilterComponent.vue';

import { Element } from '@/data/types';
import { Personas, type PersonaData,
    isPersonaData, personaCanInherit } from '@/data/personas';
import { Skills, type SkillData,
    getAllSkillsOfElement } from '@/data/skills';
import { type FusionRecipe,
    getRecipeApproxCost, getValidRecipes } from '@/data/fusion';
import { deserializeName, serializeName, getKeyOfValue, getLockedDlc } from '@/helpers';

export default {
    data () {
        return {
            name: '',
            lockedDlc: [] as string[],

            searchQuery: '',
            recipeSkills: ([] as SkillData[]),

            elements: Element,
            skills: Skills,

            serializeName,
            getLockedDlc,
            getAllSkillsOfElement,
            isPersonaData,
            personaCanInherit,
            getRecipeApproxCost,
        }
    },
    components: {
        'dlc-filter': DlcFilter,
    },
    computed: {
        persona (): PersonaData { return Personas[this.name]; },
        recipes (): FusionRecipe[] {
            return getValidRecipes(this.persona, this.recipeSkills, this.lockedDlc);
        },
        recipeSkillElements (): Element[] {
            const elements = [] as Element[];
            this.recipeSkills.forEach(skill => {
                if (!elements.includes(skill.element))
                    elements.push(skill.element);
            });

            return elements;
        }
    },
    methods: {
        getElementIcon (element: Element): string {
            return `../assets/icon_${getKeyOfValue(Element, element).toLowerCase()}.png`;
        },
        getTotalAncestorNumber (recipe: FusionRecipe): number {
            return recipe.parents.length;
        },
        serializeSkills (persona: PersonaData, element?: Element): string {
            const skillNames: string[] = [];
            this.recipeSkills
                .filter(skill => personaCanInherit(persona, skill.element))
                .filter(skill => element ? skill.element === element : true)
                .forEach(skill => skillNames.push(skill.name));
            return serializeName(skillNames.join('_'));
        },
        updateRouterSkills () {
            this.$router.replace({ params: { name: serializeName(this.name), skills: this.serializeSkills(this.persona) } });
        },
        addSkill (skillName: string) {
            this.searchQuery = '';
            
            const skill = Skills[skillName];
            if (!skill)
                return;

            if (Element.TRAIT === skill.element)
            {
                let alreadyHasTrait: boolean = false;
                this.recipeSkills.forEach(r => {
                    if (Element.TRAIT === r.element)
                        alreadyHasTrait = true;
                });

                if (alreadyHasTrait)
                    return;
            }

            if (!this.recipeSkills.includes(skill)) {
                this.recipeSkills.push(skill);
                this.updateRouterSkills();
            }
        },
        removeSkill (skillName: string) {
            if (!this.recipeSkills.includes(Skills[skillName]))
                return;

            this.recipeSkills.splice(this.recipeSkills.findIndex(skill => skill.name === skillName), 1);
            this.updateRouterSkills();
        },
    },
    created () {
        this.lockedDlc = getLockedDlc();

        if (typeof(this.$route.params.name) === 'string')
            this.name = deserializeName(this.$route.params.name);

        if (typeof(this.$route.params.skills) === 'string') {
            const skillList = deserializeName(this.$route.params.skills).split('_');
            skillList.forEach(skill => {
                if (Skills[skill])
                    this.recipeSkills.push(Skills[skill]);
            })
        }
    },
    mounted () {
        document.title = `${this.name} Fusion Results | P5R Calculator`;
    },
}
</script>

<template>
    <datalist id="skills-datalist">
        <optgroup v-for="element in elements" :key="element" :label="element">
            <template v-if="personaCanInherit(persona, element)" v-for="skill in getAllSkillsOfElement(element)" :key="skill.name">
                <option v-if="!skill.unique">{{ skill.name }}</option>
            </template>
        </optgroup>
    </datalist>

    <router-link class="centered persona-redirect redirect-banner"
        :to="{ name: 'Persona', params: { name: serializeName(name) } }">
        &lt;&lt; Back to Persona
    </router-link>

    <h1 id="page-title">Fusion Results for {{ name }}</h1>

    <div id="skill-search">
        <input id="skill-search-field" list="skills-datalist" type="text" :value="searchQuery"
            @input="event => searchQuery = event.target ? (event.target as HTMLTextAreaElement).value : ''" />
        <input id="skill-search-add" type="submit" value="Add Skill" 
            @click="addSkill(searchQuery)" />
    </div>

    <div id="skill-list">
        <span class="skill-block" v-for="skill in recipeSkills" :key="skill.name">
            <label :for="`skill-block-checkbox--${ skill.name }`">
                <img class="element-icon"
                    :src="getElementIcon(skill.element)" />
                    &nbsp; {{ skill.name }}
            </label>
            <input type="button" class="skill-block-remove"
                :id="`skill-block-checkbox--${ skill.name }`" @click="removeSkill(skill.name)" />
        </span>
    </div>

    <dlc-filter @dlc-toggled="lockedDlc = getLockedDlc()"></dlc-filter>

    <table id="fusion-recipes">
        <thead>
            <tr>
                <th class="column-header">Approx. Cost</th>
                <th class="column-header" colspan="4">Parents</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="recipe in recipes"
                :key="(recipe.parents[0] as PersonaData).name + (recipe.parents[1] as PersonaData).name">
                <tr :class="{ incomplete: !recipe.complete }">
                    <td :rowspan="1 + getTotalAncestorNumber(recipe)" class="centered column-cost">
                        {{ getRecipeApproxCost(recipe) }}
                    </td>
                </tr>
                <tr v-for="parent in recipe.parents"
                    :class="{ incomplete: !recipe.complete, dlc: parent?.dlc, max: parent?.max, treasure: parent?.treasure }">
                    <template v-if="parent">
                        <td class="centered column-level">
                            {{ parent?.currentLevel }}
                            <strong v-if="parent.level !== parent.currentLevel"> (+{{ parent.currentLevel - parent.level }})</strong>
                        </td>
                        <td class="column-name">
                            <router-link v-if="recipe.complete" target="_blank"
                                :to="{ name: 'Persona', params: { name: serializeName(parent.name) } }">
                                {{ parent?.name }}
                            </router-link>
                            <template v-else>
                                <router-link target="_blank" v-if="parent.treasure"
                                    :to="{ name: 'Persona', params: { name: serializeName(parent.name) } }">
                                    {{ parent?.name }}
                                </router-link>
                                <template v-else>
                                    <router-link target="_blank"
                                        :to="{ name: 'Fusion', params: { name: serializeName(parent.name), skills: serializeSkills(parent) } }">
                                        {{ parent?.name }}
                                    </router-link>
                                    <template v-for="element in recipeSkillElements" :key="element">
                                        <router-link target="_blank"
                                            :to="{ name: 'Fusion', params: { name: serializeName(parent.name), skills: serializeSkills(parent, element) } }">
                                            <img class="element-fusion-link" v-if="personaCanInherit(parent, element)"
                                                :src="getElementIcon(element)" />
                                        </router-link>
                                    </template>
                                </template>
                            </template>
                        </td>
                    </template>
                    
                </tr>
            </template>
        </tbody>
    </table>
</template>

<style scoped>

    span.skill-block {
        border: 2px solid var(--color-ui-text);
        cursor: pointer;
        margin: 3px 0;
        padding: 4px;
        user-select: none;
    }
    span.skill-block * { cursor: pointer; }

    input.skill-block-remove {
        visibility: hidden;
    }

    img.element-fusion-link {
        cursor: pointer;
        margin: 0 5px;
        width: 1.2rem;
    }

    div#skill-search {
        display: inline-flex;
        min-width: 100%;
    }

    input#skill-search-field {
        flex: auto;
        padding: 2px;
    }

    input#skill-search-add {
        background-color: var(--color-ui-background);
        border: 2px solid var(--color-ui-text);
        color: var(--color-ui-text);
        font-weight: 700;
        margin: 2px 4px;
        padding: 3px;
    }
        
    div#skill-list {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 4px;
        margin: 2vh 0 0 0;
        max-width: 100%;
        width: auto;
    }

    .incomplete:not(.max, .treasure) * {
        color: var(--color-ui-text-faded);
    }

    .incomplete.max *, .incomplete.treasure * {
        color: var(--color-ui-background-faded);
    }

    .incomplete td.column-cost {
        text-decoration: line-through;
    }

    @media (max-width: 1023.98px) {
        td.column-name {
            font-size: 1.1rem;
            font-weight: 900;
        }
    }

    @media (min-width: 1024px) {
        td.column-level {
            padding: 0 3px;
        }
    }

    @media (min-width: 1280px) {
        img.element-fusion-link {
            width: 1.5rem;
        }

        input#skill-search-add {
            margin: 2px 5px;
            padding: 4px;
        }
        
        div#skill-list {
            gap: 6px;
            margin: 2vh 0 0 0;
        }

        span.skill-block {
            margin: 3px 0;
            padding: 6px;
        }

        td.column-level {
            padding: 0 4px;
        }
    }
</style>