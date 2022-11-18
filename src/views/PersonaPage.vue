<script lang="ts">
import DlcFilter from '@/components/DlcFilterComponent.vue';

import { Element } from '@/data/types';
import { Personas, type PersonaData } from '@/data/personas';
import { Skills, type SkillData } from '@/data/skills';
import { deserializeName, serializeName, getKeyOfValue } from '@/helpers';

const stripUnblockable = (o: object) => Object.keys(o).filter((_, idx) => idx < 10);

export default {
    data () {
        return {
            name: '',

            elements: Element,

            stripUnblockable,
            serializeName,
        }
    },
    components: {
        'dlc-filter': DlcFilter,
    },
    computed: {
        persona (): PersonaData { return Personas[this.name]; },
        trait (): SkillData|undefined { return this.persona.trait ? Skills[this.persona.trait] : undefined; },
    },
    methods: {
        getSkillData (skill: string): SkillData { return Skills[skill]; },
        getInheritance (persona: PersonaData): Element[] {
            return [ ...persona.inherits, Element.SUPPORT, Element.ALMIGHTY, Element.PASSIVE, Element.TRAIT ];
        },
        getElementIcon (element: Element): string {
            return `../assets/icon_${getKeyOfValue(Element, element).toLowerCase()}.png`;
        },
    },
    created () {
        if (typeof(this.$route.params.name) === 'string')
            this.name = deserializeName(this.$route.params.name);
    },
    mounted () {
        document.title = `${this.name} Datasheet | P5R Calculator`;
    },
}
</script>

<template>
    <router-link class="centered main-redirect redirect-banner" :to="{ name: 'Main' }">
        &lt;&lt; Back to List
    </router-link>

    <h1 id="page-title">{{ name }}</h1>

    <table id="persona-stats">
        <thead>
            <tr>
                <th class="column-header column-level" rowspan="2">Level</th>
                <th class="column-header column-arcana" rowspan="2">Arcana</th>
                <th class="column-header" colspan="5">Stats</th>
                <th class="column-header desktop-only" colspan="10">Affinities</th>
            </tr>
            <tr>
                <th class="column-stat">St</th>
                <th class="column-stat">Ma</th>
                <th class="column-stat">En</th>
                <th class="column-stat">Ag</th>
                <th class="column-stat">Lu</th>
                <th class="column-affinity desktop-only" v-for="element in stripUnblockable(elements)" :key="element">
                    <img class="element-icon" :src="`../assets/icon_${ element.toLowerCase() }.png`" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr :class="{ dlc: persona.dlc, max: persona.max, treasure: persona.treasure }">
                <td class="column-level centered">{{ persona.level }}</td>
                <td class="column-arcana centered">{{ persona.arcana }}</td>
                <td class="column-stat centered" v-for="stat in persona.stats" :key="stat">{{ stat }}</td>
                <td class="column-affinity centered desktop-only"
                    v-for="aff in persona.affinities" :key="aff">{{ aff }}</td>
            </tr>
        </tbody>
    </table>

    <table id="persona-affinities" class="mobile-only">
        <thead>
            <tr>
                <th class="column-header" colspan="10">Affinities</th>
            </tr>
            <tr>
                <th class="column-affinity" v-for="element in stripUnblockable(elements)" :key="element">
                    <img class="element-icon" :src="`../assets/icon_${ element.toLowerCase() }.png`" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr :class="{ dlc: persona.dlc, max: persona.max, treasure: persona.treasure }">
                <td class="column-affinity centered"
                    v-for="aff in persona.affinities" :key="aff">{{ aff }}</td>
            </tr>
        </tbody>
    </table>

    <table id="persona-inherits">
        <thead>
            <tr>
                <th class="column-header" :colspan="getInheritance(persona).length">
                    Skill elements that can be inherited:
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="centered column-inherit"
                    v-for="element in getInheritance(persona)" :key="element">
                    <img class="element-icon inherit-icon" :src="getElementIcon(element)" />
                </td>
            </tr>
        </tbody>
    </table>

    <table id="persona-skills">
        <thead>
            <tr>
                <th class="column-header" colspan="5">Skills</th>
            </tr>
            <tr>
                <th class="column-header column-skill-level">Level</th>
                <th class="column-header column-skill-element">Element</th>
                <th class="column-header column-skill-name">Name</th>
                <th class="column-header column-skill-effect">Effect</th>
                <th class="column-header column-skill-unique">Unique?</th>
            </tr>
        </thead>
        <tbody>
            <tr class="row-skill" v-if="persona.trait">
                <td class="column-skill-level centered">-</td>
                <td class="column-skill-element centered">
                    <img class="element-icon" src="@/assets/icon_trait.png" />
                </td>
                <td class="column-skill-name">{{ persona.trait }}</td>
                <td class="column-skill-effect" colspan="2">{{ trait ? trait.effect : '' }}</td>
            </tr>
            <tr class="row-skill" v-for="skill in persona.skills" :key="skill[0]">
                <td class="column-skill-level centered">{{ 0 < skill[1] ? skill[1] : '-' }}</td>
                <td class="column-skill-element centered">
                    <img class="element-icon skill-icon" :src="getElementIcon(getSkillData(skill[0]).element)" />
                </td>
                <td class="column-skill-name">{{ skill[0] }}</td>
                <td class="column-skill-effect">{{ getSkillData(skill[0]).effect }}</td>
                <td class="column-skill-unique centered">{{ getSkillData(skill[0]).unique ? 'x' : '' }}</td>
            </tr>
        </tbody>
    </table>

    <router-link class="centered fuse-redirect redirect-banner" v-if="!persona.treasure"
        :to="{ name: 'Fusion', params: { name: serializeName(persona.name) } }">
        Fuse &gt;&gt;
    </router-link>
</template>

<style scoped>
img.inherit-icon {
    margin: auto;
}

td.column-skill-element {
    padding: auto;
}

@media (min-width: 1280px) {

    tr.row-skill {
        height: 36px;
    }

    td.column-skill-element {
        min-height: 36px;
    }

    td.column-skill-name, td.column-skill-effect {
        padding: 4px 8px;
    }
}

@media (min-width: 1024px) {
    tr.row-skill {
        height: 32px;
    }

    td.column-skill-element {
        min-height: 32px;
    }

    td.column-skill-name, td.column-skill-effect {
        padding: 3px 6px;
    }
}

@media (max-width: 1023.98px) {
    table#persona-stats {
        margin: 2vh 0 0 0!important;
    }

    table#persona-affinities {
        margin: 0 0 2vh 0!important;
    }

    td.column-skill-name, td.column-skill-effect {
        padding: 3px 6px;
    }
}
</style>