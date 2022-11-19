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
    <span :class="{ collapsed_span: isCollapsed, expanded_span: !isCollapsed }" @click="toggleCollapsed()">FILTER DLC</span>
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
span {
    font-weight: 700;
    user-select: none;
    cursor: pointer;
}

div.collapsible {
    background-color: var(--color-ui-background);
    border: 1px solid var(--color-ui-text);
}

ul {
    padding: 0 25px;
}

li {
    list-style: none;
    margin: 2px 0;
}

@media (max-width: 1023.98px) {
    span {
        display: inline-block;
        width: 100%;
        text-align: center;
    }
    span::before { content: '[ '; }
    span::after { content: ' ]'; }

    div.collapsible {
        margin: 4px 0 2vh 0;
        max-height: 150vh;
        max-width: 100%;
        height: auto; /* this is goober-esque but trust me it's necessary */
        transition: max-height 0.4s ease-in-out;
    }

    div.collapsible > ul {
        opacity: 1;
    }

    div.collapsed {
        max-height: 0!important;
        pointer-events: none;
    }

    div.collapsed > ul {
        opacity: 0!important;
        pointer-events: none;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        column-gap: 12px;
        justify-content: center;
    }
}

@media (min-width: 1024px) {
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
    span.collapsed_span::before { content: '[ '; }
    span.collapsed_span::after { content: ' >'; }
    span.expanded_span::before { content: '< '; }
    span.expanded_span::after { content: ' ]'; }

    div.collapsible {
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
}
</style>