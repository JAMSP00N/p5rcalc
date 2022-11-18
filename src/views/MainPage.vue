<script lang="ts">
import DlcFilter from '@/components/DlcFilterComponent.vue';

import { Arcana, Element } from '@/data/types';
import { Personas, type PersonaData } from '@/data/personas';
import { getLockedDlc, serializeName } from '@/helpers';

const stripUnblockable = (o: object) => Object.keys(o).filter((_, idx) => idx < 10);

export default {
    data () {
        return {
            searchQuery: '',

            sortBy: 'level',
            sortReverse: false,

            elements: Element,

            stripUnblockable,
            serializeName,
        }
    },
    components: {
        'dlc-filter': DlcFilter,
    },
    computed: {
        personas (): PersonaData[] {
            return [ ...Object.values(Personas) ]
                .sort((a, b) => {
                    if ('name' === this.sortBy)
                        return (this.sortReverse ? b.name : a.name).localeCompare(this.sortReverse ? a.name : b.name);

                    if (this.sortReverse && 'level' === this.sortBy)
                        return b.level - a.level;

                    return a.level - b.level;
                })
                .sort((a, b) => {
                    if ('arcana' === this.sortBy) {
                        const aValue = Object.values(Arcana).findIndex(_ => _ === a.arcana);
                        const bValue = Object.values(Arcana).findIndex(_ => _ === b.arcana);

                        return this.sortReverse ? bValue - aValue : aValue - bValue;
                    }

                    return 0;
                })
                .filter(persona => {
                    if (getLockedDlc().includes(persona.name))
                        return false;

                    if (0 === this.searchQuery.length)
                        return true;

                    return persona.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
        },
    },
    methods: {
        sort (sort: string) {
            if (sort === this.sortBy)
                this.sortReverse = !this.sortReverse;
            else {
                this.sortBy = sort;
                this.sortReverse = false;
            }
        },
    },
    mounted () {
        document.title = `Persona List | P5R Calculator`;
    },
};
</script>

<template>

    <h1 id="page-title">P5R Calculator</h1>

    <input id="persona-search" placeholder="Search for a Persona..." type="text" :value="searchQuery"
        @input="event => searchQuery = event.target ? (event.target as HTMLTextAreaElement).value : ''" />
    
    <dlc-filter></dlc-filter>

    <table id="persona-list">
        <thead>
            <tr>
                <th class="column-header column-level column-header-sortable"
                    :id="'level' === sortBy ? `sorting-${ sortReverse ? 'dsc' : 'asc' }` : ''"
                    rowspan="2" @click="sort('level')">Level</th>
                <th class="column-header column-arcana column-header-sortable"
                    :id="'arcana' === sortBy ? `sorting-${ sortReverse ? 'dsc' : 'asc' }` : ''"
                    rowspan="2" @click="sort('arcana')">Arcana</th>
                <th class="column-header column-name column-header-sortable"
                    :id="'name' === sortBy ? `sorting-${ sortReverse ? 'dsc' : 'asc' }` : ''"
                    rowspan="2" @click="sort('name')">Name</th>
                <th class="column-header column-stat" colspan="5">Stats</th>
                <th class="column-header column-affinity" colspan="10">Affinities</th>
            </tr>
            <tr>
                <th class="column-stat">St</th>
                <th class="column-stat">Ma</th>
                <th class="column-stat">En</th>
                <th class="column-stat">Ag</th>
                <th class="column-stat">Lu</th>
                <th class="column-affinity" v-for="element in stripUnblockable(elements)" :key="element">
                    <img class="element-icon" :src="`assets/icon_${ element.toLowerCase() }.png`" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="persona in personas" :key="persona.name"
                :class="{ dlc: persona.dlc, max: persona.max, treasure: persona.treasure }">
                <td class="column-level centered">{{ persona.level }}</td>
                <td class="column-arcana centered">{{ persona.arcana }}</td>
                <td class="column-name">
                    <router-link class="persona-redirect"
                        :to="{ name: 'Persona', params: { name: serializeName(persona.name) } }">
                        {{ persona.name }}
                    </router-link>
                </td>
                <td class="column-stat centered" v-for="stat in persona.stats" :key="stat">{{ stat }}</td>
                <td class="column-affinity centered"
                    v-for="aff in persona.affinities" :key="aff">{{ aff }}</td>
                <td class="column-fuse">
                    <router-link class="fusion-redirect" v-if="!persona.treasure"
                        :to="{ name: 'Fusion', params: { name: serializeName(persona.name) } }">
                        Fuse &gt;
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
</style>

<style scoped>
.column-stat, .column-affinity {
    display: none;
}

input#persona-search {
    margin: auto;
    min-width: calc(100% - 8px);
    width: calc(100% - 8px);
    padding: 4px;
}

@media (min-width: 1280px) {
    input#persona-search {
        min-width: 100%;
        width: 100%;
    }
}

@media (min-width: 1024px) {

    td.column-fuse {
        min-width: 50px;
    }

    .column-stat, .column-affinity {
        display: table-cell!important;
    }
}

@media (max-width: 1023.98px) {
    input#persona-search {
        margin: 0 0 8px 0;
    }
}
</style>