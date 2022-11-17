<script lang="ts">
import { getLockedDlc, setLockedDlc } from '@/helpers';
import { DlcPersonas } from '@/data/personas';

export default {
    data () {
        return {
            isCollapsed: true,

            DlcPersonas,
            lockedDlc: ([] as string[]),
        }
    },
    created () {
        const locked = getLockedDlc();
        if (locked)
            this.lockedDlc = locked;
    },
    computed: {
        labelText (): string { return this.isCollapsed ? '[ FILTER DLC >' : '< FILTER DLC ]' },
    },
    methods: {
        toggleCollapsed () {
            this.isCollapsed = !this.isCollapsed;
        },
        toggleDlc (...dlc: string[]) {
            if (!dlc || 0 === dlc.length)
                return;

            dlc.forEach(persona => {
                let idx = [ ...this.lockedDlc ].indexOf(persona);

                if (-1 === idx)
                    this.lockedDlc.push(persona);
                else
                    this.lockedDlc.splice(idx, 1);
            });

            setLockedDlc(this.lockedDlc);
            this.$emit('dlc-toggled');
        }
    },
};
</script>

<template>
<div id="dlc-filter">
    <span @click="toggleCollapsed()">{{ labelText }}</span>
    <div id="dlc-filter-list" class="collapsible" :class="{ collapsed: isCollapsed }">
        <ul>
            <li v-for="dlc in DlcPersonas" :key="dlc[0]">
                <label :for="`dlc--${ dlc[0] }`">{{ dlc[0] }}:&Tab;</label>
                <input type="checkbox" :name="`dlc--${ dlc[0] }`" :checked="!lockedDlc.includes(dlc[0])"
                    @click="toggleDlc(dlc[0], dlc[1])" />
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped>
@media (min-width: 1280px) {
    :root {
        --dlc-filter-size: 200px;
    }

    div#dlc-filter {
        position: fixed;
        left: 0;
        top: 0;
    }

    span {
        margin: 8px;
        font-weight: 700;
        user-select: none;
        cursor: pointer;
    }

    div.collapsible {
        border: 1px solid var(--color-ui-text);
        position: relative;
        left: 0;
        transition: left 0.4s ease-in-out;
        width: 200px;
    }

    div.collapsible > ul {
        transition: opacity 0.1s linear 0.2s;
    }

    div.collapsed {
        border: none!important;
        left: -200px!important;
    }

    div.collapsed > ul {
        opacity: 0;
        transition: 0.1s;
    }

    ul {
        padding: 0 25px;
    }

    li {
        list-style: none;
        margin: 2px 0;
    }
}
</style>