import type { SkillData } from './skills';
import { Affinity, Arcana, Element, InheritanceType } from './types';

export interface PersonaData {
    name: string;
    arcana: Arcana;
    level: number;
    currentLevel: number;
    stats: number [];
    affinities: Affinity [];

    inherits: Element [];
    skills: [string, number][];
    trait?: string;

    dlc?: boolean;
    max?: boolean;
    special?: boolean;
    treasure?: boolean;
}

interface PersonaMap {
    [index: string]: PersonaData;
}

export const Personas: PersonaMap = {
    'Abaddon': {
		name: 'Abaddon',
        inherits: InheritanceType[Element.CURSE],
        level: 75,
		currentLevel: 75,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.DRAIN, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.DRAIN],
        skills: [
            ['Mabufudyne', 0],
            ['Megaton Raid', 0],
            ['Enduring Soul', 0],
            ['Flash Bomb', 78],
            ['Ailment Boost', 79],
            ['Drain Phys', 80],
            ['Gigantomachia', 81]
        ],
        stats: [51, 42, 58, 38, 43],
        trait: 'Mouth of Savoring'
    },
    'Agathion': {
		name: 'Agathion',
        inherits: InheritanceType[Element.ELEC],
        level: 3,
		currentLevel: 3,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Dia', 0], ['Baisudi', 0], ['Lunge', 4], ['Rakukaja', 6], ['Zio', 7], ['Dodge Elec', 8] ],
        stats: [3, 4, 5, 7, 3],
        trait: 'Rare Antibody'
    },
    'Alice': {
		name: 'Alice',
        special: true,
        inherits: InheritanceType[Element.CURSE],
        level: 83,
		currentLevel: 83,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST, Affinity.WEAK, Affinity.REPEL],
        skills: [
            ['Mamudoon', 0],
            ['Mudo Boost', 0],
            ['Maeigaon', 0],
            ['Die For Me!', 85],
            ['Megidolaon', 86],
            ['Concentrate', 87],
            ['Survival Trick', 88]
        ],
        stats: [45, 61, 49, 54, 47],
        trait: 'Just Die',
        max: true
    },
    'Alilat': {
		name: 'Alilat',
        inherits: InheritanceType[Element.ICE],
        level: 81,
		currentLevel: 81,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.REPEL, Affinity.REPEL, Affinity.WEAK, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK],
        skills: [
            ['Diamond Dust', 0],
            ['Marakukaja', 0],
            ['Freeze Boost', 0],
            ['Mabufudyne', 82],
            ['Concentrate', 83],
            ['Auto-Maraku', 85],
            ['Ice Amp', 86],
            ['Ice Age', 87]
        ],
        stats: [45, 54, 57, 49, 45],
        trait: 'Frigid Bloodline',
    },
    'Ame-no-Uzume': {
		name: 'Ame-no-Uzume',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 13,
		currentLevel: 13,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Mazio', 0], ['Magaru', 0], ['Media', 0], ['Nocturnal Flash', 15], ['Baisudi', 16], ['Divine Grace', 18] ],
        stats: [7, 10, 9, 11, 9],
        trait: 'Electric Bloodline'
    },
    'Ananta': {
		name: 'Ananta',
        inherits: InheritanceType[Element.NUKE],
        level: 44,
		currentLevel: 44,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mafreila', 0],
            ['Defense Master', 0],
            ['Elec Wall', 0],
            ['Abysmal Surge', 46],
            ['Growth 2', 47],
            ['Marakukaja', 48],
            ['Freidyne', 49],
            ['Nuke Boost', 50]
        ],
        stats: [26, 30, 31, 27, 25],
        trait: 'Atomic Bloodline'
    },
    'Andras': {
		name: 'Andras',
        inherits: InheritanceType[Element.ICE],
        level: 27,
		currentLevel: 27,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Foul Breath', 0],
            ['Terror Claw', 0],
            ['Evil Touch', 28],
            ['Fear Boost', 29],
            ['Rakunda', 31],
            ['Ghastly Wail', 32]
        ],
        stats: [15, 19, 19, 21, 14],
        trait: 'Foul Odor'
    },
    'Angel': {
		name: 'Angel',
        inherits: InheritanceType[Element.BLESS],
        level: 9,
		currentLevel: 9,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [ ['Kouha', 0], ['Makajam', 0], ['Dia', 0], ['Baisudi', 10], ['Dodge Curse', 11], ['Dekunda', 12] ],
        stats: [6, 9, 5, 9, 5],
        trait: 'Skillful Combo'
    },
    'Anubis': {
		name: 'Anubis',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 34,
		currentLevel: 34,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL],
        skills: [ ['Hamaon', 0], ['Mudoon', 0], ['Makouga', 0], ['Maeiga', 36], ['Dekunda', 37], ['Resist Bless', 38] ],
        stats: [19, 24, 22, 21, 23],
        trait: 'Deathly Illness'
    },
    'Anzu': {
		name: 'Anzu',
        inherits: InheritanceType[Element.WIND],
        level: 25,
		currentLevel: 25,
        arcana: Arcana.HIEROPHANT,
        affinities: [Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.REPEL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Garula', 0], ['Masukukaja', 0], ['Wind Break', 0], ['Assault Dive', 27], ['Dekaja', 28], ['Null Forget', 29] ],
        stats: [14, 18, 15, 21, 14],
        trait: 'Wind Bloodline'
    },
    'Apsaras': {
		name: 'Apsaras',
        inherits: InheritanceType[Element.ICE],
        level: 11,
		currentLevel: 11,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Rebellion', 0], ['Ice Wall', 0], ['Bufu', 0], ['Media', 13], ['Elec Wall', 14], ['Wind Wall', 16] ],
        stats: [7, 11, 6, 10, 6],
        trait: 'Internal Hypnosis'
    },
    'Ara Mitama': {
		name: 'Ara Mitama',
        inherits: InheritanceType[Element.NUKE],
        level: 30,
		currentLevel: 30,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Miracle Punch', 0],
            ['Freila', 0],
            ['Taunt', 0],
            ['Rebellion', 31],
            ['Marakunda', 32],
            ['Rage Boost', 34],
            ['Matarukaja', 35]
        ],
        stats: [20, 18, 20, 20, 19],
        trait: 'Atomic Bloodline'
    },
    'Arahabaki': {
		name: 'Arahabaki',
        inherits: InheritanceType[Element.AILMENT],
        level: 35,
		currentLevel: 35,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.REPEL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.WEAK, Affinity.RESIST, Affinity.RESIST],
        skills: [
            ['Makarakarn', 0],
            ['Abysmal Surge', 0],
            ['Null Brainwash', 0],
            ['Spirit Drain', 37],
            ['Flash Bomb', 38],
            ['Defense Master', 39]
        ],
        stats: [21, 23, 22, 24, 22],
        trait: 'Immunity'
    },
    'Archangel': {
		name: 'Archangel',
        inherits: InheritanceType[Element.BLESS],
        level: 14,
		currentLevel: 14,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [ ['Giant Slice', 0], ['Dazzler', 0], ['Hama', 0], ['Rebellion', 16], ['Power Slash', 17], ['Vajra Blast', 19] ],
        stats: [11, 9, 10, 12, 7],
        trait: 'Skillful Combo'
    },
    'Ardha': {
		name: 'Ardha',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 84,
		currentLevel: 84,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['God\'s Hand', 0],
            ['Cosmic Flare', 0],
            ['Invigorate 3', 0],
            ['Agneyastra', 87],
            ['Auto-Masuku', 88],
            ['Fortified Moxy', 89],
            ['Salvation', 90]
        ],
        stats: [54, 56, 55, 54, 40],
        trait: 'Naranari',
        max: true
    },
    'Arsene': {
		name: 'Arsene',
        inherits: InheritanceType[Element.CURSE],
        level: 1,
		currentLevel: 1,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST],
        skills: [ ['Eiha', 0], ['Cleave', 2], ['Sukunda', 4], ['Dream Needle', 5], ['Adverse Resolve', 7] ],
        stats: [2, 2, 2, 3, 1],
        trait: 'Pinch Anchor'
    },
    'Asura': {
		name: 'Asura',
        special: true,
        inherits: InheritanceType[Element.NUKE],
        level: 76,
		currentLevel: 76,
        arcana: Arcana.SUN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Atomic Flare', 0],
            ['Mahamaon', 0],
            ['Marakukaja', 0],
            ['Auto-Mataru', 78],
            ['Mafreidyne', 79],
            ['High Counter', 80],
            ['Unshaken Will', 81]
        ],
        stats: [52, 48, 51, 49, 35],
        trait: 'Atomic Hellscape',
        max: true
    },
    'Atavaka': {
		name: 'Atavaka',
        inherits: InheritanceType[Element.PHYS],
        level: 65,
		currentLevel: 65,
        arcana: Arcana.FAITH,
        affinities: [Affinity.RESIST, Affinity.NULL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['Maragidyne', 0],
            ['Oni Kagura', 0],
            ['Mediarahan', 0],
            ['High Counter', 67],
            ['Samarecarm', 68],
            ['Brave Blade', 70],
            ['Attack Master', 71]
        ],
        stats: [51, 36, 43, 38, 34],
        trait: 'Savior Bloodline'
    },
    'Atropos': {
		name: 'Atropos',
        inherits: InheritanceType[Element.ELEC],
        level: 39,
		currentLevel: 39,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mazionga', 0],
            ['Fire Wall', 0],
            ['Elec Break', 0],
            ['Mediarama', 41],
            ['Elec Boost', 42],
            ['Ziodyne', 44],
            ['Concentrate', 45]
        ],
        stats: [23, 30, 22, 27, 22],
        trait: 'Mighty Gaze'
    },
    'Attis': {
		name: 'Attis',
        inherits: InheritanceType[Element.FIRE],
        level: 82,
		currentLevel: 82,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK],
        skills: [
            ['Maragidyne', 0],
            ['Salvation', 0],
            ['Thermopylae', 0],
            ['Enduring Soul', 84],
            ['Samarecarm', 85],
            ['Drain Curse', 86],
            ['Blazing Hell', 88]
        ],
        stats: [49, 50, 48, 54, 52],
        trait: 'Vitality of the Tree',
        max: true
    },
    'Baal': {
		name: 'Baal',
        inherits: InheritanceType[Element.WIND],
        level: 82,
		currentLevel: 82,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Panta Rhei', 0],
            ['Revolution', 0],
            ['Matarukaja', 0],
            ['Ayamur', 84],
            ['Tetraja', 85],
            ['Charge', 86],
            ['Vacuum Wave', 87]
        ],
        stats: [54, 58, 53, 47, 41],
        trait: 'Wind Bloodline'
    },
    'Baphomet': {
		name: 'Baphomet',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 58,
		currentLevel: 58,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Agidyne', 0],
            ['Evade Fire', 0],
            ['Burn Boost', 0],
            ['Bufudyne', 59],
            ['Ziodyne', 61],
            ['Shock Boost', 62],
            ['Freeze Boost', 63]
        ],
        stats: [34, 42, 36, 38, 31],
        trait: 'Thermal Conduct'
    },
    'Barong': {
		name: 'Barong',
        inherits: InheritanceType[Element.ELEC],
        level: 52,
		currentLevel: 52,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [ ['Ziodyne', 0], ['Wage War', 0], ['Invigorate 2', 0], ['Elec Break', 54], ['Null Elec', 55], ['Maziodyne', 57] ],
        stats: [33, 35, 33, 37, 25],
        trait: 'Blessed Bloodline'
    },
    'Beelzebub': {
		name: 'Beelzebub',
        inherits: InheritanceType[Element.CURSE],
        level: 87,
		currentLevel: 87,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL],
        skills: [
            ['Maeigaon', 0],
            ['Mamudoon', 0],
            ['Evil Smile', 0],
            ['Curse Amp', 88],
            ['Concentrate', 89],
            ['Demonic Decree', 90],
            ['Repel Ice', 91],
            ['Megidolaon', 92]
        ],
        stats: [55, 61, 54, 56, 42],
        trait: 'Mother\'s Lament',
        max: true
    },
    'Belial': {
		name: 'Belial',
        inherits: InheritanceType[Element.CURSE],
        level: 82,
		currentLevel: 82,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Eigaon', 0],
            ['Bloodbath', 0],
            ['Curse Amp', 0],
            ['Maeigaon', 84],
            ['Fear Boost', 85],
            ['Mamudoon', 86],
            ['Demonic Decree', 88]
        ],
        stats: [52, 53, 51, 48, 49],
        trait: 'Bloodstained Eyes'
    },
    'Belphegor': {
		name: 'Belphegor',
        inherits: InheritanceType[Element.ICE],
        level: 37,
		currentLevel: 37,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.REPEL],
        skills: [ ['Mabufula', 0], ['Ice Break', 0], ['Null Rage', 38], ['Dodge Fire', 39], ['Bufudyne', 41], ['Concentrate', 42] ],
        stats: [25, 27, 24, 23, 19],
        trait: 'Intense Focus'
    },
    'Berith': {
		name: 'Berith',
        inherits: InheritanceType[Element.PHYS],
        level: 9,
		currentLevel: 9,
        arcana: Arcana.HIEROPHANT,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Cleave', 0], ['Rakukaja', 0], ['Tarukaja', 10], ['Dodge Fire', 11], ['Power Slash', 13] ],
        stats: [9, 6, 8, 8, 3],
        trait: 'Crisis Control'
    },
    'Bicorn': {
		name: 'Bicorn',
        inherits: InheritanceType[Element.WIND],
        level: 4,
		currentLevel: 4,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [ ['Lunge', 0], ['Tarunda', 0], ['Garu', 6], ['Ice Wall', 7], ['Apt Pupil', 8] ],
        stats: [5, 3, 3, 5, 3],
        trait: 'Striking Weight'
    },
    'Bishamonten': {
		name: 'Bishamonten',
        inherits: InheritanceType[Element.NUKE],
        level: 67,
		currentLevel: 67,
        arcana: Arcana.HIEROPHANT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST],
        skills: [
            ['Freidyne', 0],
            ['Diarahan', 0],
            ['Deadly Fury', 0],
            ['Mafreidyne', 69],
            ['Nuke Amp', 71],
            ['Tetrakarn', 72],
            ['God\'s Hand', 73]
        ],
        stats: [51, 37, 42, 44, 34],
        trait: 'Savior Bloodline'
    },
    'Black Frost': {
		name: 'Black Frost',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 67,
		currentLevel: 67,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.REPEL],
        skills: [
            ['Mabufudyne', 0],
            ['One-shot Kill', 0],
            ['Miracle Punch', 0],
            ['Ice Amp', 68],
            ['Freeze Boost', 70],
            ['Repel Fire', 71],
            ['Diamond Dust', 72]
        ],
        stats: [44, 46, 41, 42, 35],
        trait: 'Frigid Bloodline'
    },
    'Black Ooze': {
		name: 'Black Ooze',
        inherits: InheritanceType[Element.CURSE],
        level: 18,
		currentLevel: 18,
        arcana: Arcana.MOON,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Sledgehammer', 0],
            ['Evil Touch', 0],
            ['Foul Breath', 0],
            ['Ambient Aid', 20],
            ['Headbutt', 21],
            ['Brain Jack', 23],
            ['Flash Bomb', 24]
        ],
        stats: [15, 7, 16, 8, 15],
        trait: 'Rare Antibody'
    },
    'Black Rider': {
		name: 'Black Rider',
        inherits: InheritanceType[Element.CURSE],
        level: 59,
		currentLevel: 59,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST],
        skills: [
            ['Mamudoon', 0],
            ['Flash Bomb', 0],
            ['Maeigaon', 0],
            ['Ambient Aid', 60],
            ['Bloodbath', 61],
            ['Ghastly Wail', 63],
            ['Megidola', 64]
        ],
        stats: [36, 42, 34, 42, 30],
        trait: 'Gloomy Child'
    },
    'Bugs': {
		name: 'Bugs',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 49,
		currentLevel: 49,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Miracle Punch', 0],
            ['Masukunda', 0],
            ['Psiodyne', 0],
            ['Auto-Mataru', 51],
            ['Triple Down', 52],
            ['Evade Phys', 54],
            ['Fast Heal', 55]
        ],
        stats: [35, 33, 30, 32, 24],
        trait: 'Potent Hypnosis'
    },
    'Byakhee': {
		name: 'Byakhee',
        inherits: InheritanceType[Element.FIRE],
        level: 70,
		currentLevel: 70,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Agidyne', 0],
            ['Foul Breath', 0],
            ['Death Scythe', 0],
            ['Maragidyne', 72],
            ['Ailment Boost', 73],
            ['Fire Break', 74],
            ['Heat Riser', 75]
        ],
        stats: [42, 49, 43, 51, 32],
        trait: 'Heated Bloodline',
    },
    'Byakko': {
		name: 'Byakko',
        inherits: InheritanceType[Element.ICE],
        level: 45,
		currentLevel: 45,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['Swift Strike', 0],
            ['Mabufula', 0],
            ['Counterstrike', 0],
            ['Ice Boost', 47],
            ['Ice Break', 48],
            ['Evade Fire', 49],
            ['Null Rage', 50],
            ['Bufudyne', 51]
        ],
        stats: [35, 28, 30, 32, 17],
        trait: 'Retaliating Body'
    },
    'Cait Sith': {
		name: 'Cait Sith',
        inherits: InheritanceType[Element.AILMENT],
        level: 5,
		currentLevel: 5,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Agi', 0], ['Cleave', 0], ['Tarukaja', 0], ['Resist Sleep', 6], ['Sukukaja', 7], ['Media', 9] ],
        stats: [6, 4, 4, 5, 3],
        trait: 'Thermal Conduct'
    },
    'Cerberus': {
		name: 'Cerberus',
        inherits: InheritanceType[Element.FIRE],
        level: 55,
		currentLevel: 55,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Agidyne', 0],
            ['Megaton Raid', 0],
            ['Rebellion', 56],
            ['High Counter', 57],
            ['Maragidyne', 58],
            ['Enduring Soul', 60]
        ],
        stats: [39, 35, 32, 39, 27],
        trait: 'Heated Bloodline'
    },
    'Chernobog': {
		name: 'Chernobog',
        inherits: InheritanceType[Element.AILMENT],
        level: 62,
		currentLevel: 62,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.DRAIN, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.DRAIN],
        skills: [
            ['Mudoon', 0],
            ['Bloodbath', 0],
            ['Myriad Slashes', 0],
            ['Foul Breath', 63],
            ['Deathbound', 64],
            ['Fear Boost', 66],
            ['Brave Blade', 67]
        ],
        stats: [40, 37, 39, 38, 39],
        trait: 'Crisis Control'
    },
    'Chi You': {
		name: 'Chi You',
        special: true,
        inherits: InheritanceType[Element.PSY],
        level: 88,
		currentLevel: 88,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Psycho Force', 0],
            ['Repel Phys', 0],
            ['Gigantomachia', 0],
            ['Fortify Spirit', 90],
            ['Psycho Blast', 91],
            ['Drain Psy', 92],
            ['Concentrate', 94]
        ],
        stats: [56, 57, 54, 53, 51],
        trait: 'Chi You\'s Blessing',
        max: true,
    },
    'Chimera': {
		name: 'Chimera',
        inherits: InheritanceType[Element.PHYS],
        level: 74,
		currentLevel: 74,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK],
        skills: [
            ['Maragidyne', 0],
            ['Heat Wave', 0],
            ['Bufudyne', 0],
            ['Marakunda', 76],
            ['Fire Amp', 77],
            ['Mabufudyne', 78],
            ['Ice Amp', 79]
        ],
        stats: [51, 40, 42, 48, 48],
        trait: 'Foul Stench',
    },
    'Choronzon': {
		name: 'Choronzon',
        inherits: InheritanceType[Element.CURSE],
        level: 28,
		currentLevel: 28,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL],
        skills: [
            ['Pulinpa', 0],
            ['Life Drain', 0],
            ['Rampage', 0],
            ['Maeiha', 29],
            ['Dodge Elec', 30],
            ['Eiga', 31],
            ['Curse Boost', 32],
            ['Climate Decorum', 33]
        ],
        stats: [16, 19, 19, 18, 19],
        trait: 'Draining Mouth'
    },
    'Clotho': {
		name: 'Clotho',
        inherits: InheritanceType[Element.HEALING],
        level: 27,
		currentLevel: 27,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mahama', 0],
            ['Me Patra', 0],
            ['Makajam', 0],
            ['Tetraja', 28],
            ['Makajamaon', 30],
            ['Energy Shower', 31],
            ['Invigorate 1', 33]
        ],
        stats: [14, 19, 18, 20, 17],
        trait: 'Relief Bloodline'
    },
    'Crystal Skull': {
		name: 'Crystal Skull',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 50,
		currentLevel: 50,
        arcana: Arcana.FOOL,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Maragidyne', 0],
            ['Mabufudyne', 0],
            ['Magarudyne', 0],
            ['Maziodyne', 0],
            ['Mapsiodyne', 0],
            ['Mafreidyne', 0],
            ['Makougaon', 0],
            ['Maeigaon', 0],
            ['Foul Stench', 0],
            ['Ailment Hunter', 0],
            ['Cursed Bloodline', 0]
        ],
        stats: [50, 50, 50, 50, 50],
        trait: 'Ultimate Vessel'
    },
    'Cu Chulainn': {
		name: 'Cu Chulainn',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 76,
		currentLevel: 76,
        arcana: Arcana.FAITH,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['High Counter', 0],
            ['One-shot Kill', 0],
            ['Rebellion', 0],
            ['Matarukaja', 78],
            ['Brave Blade', 79],
            ['Charge', 80],
            ['Apt Pupil', 81]
        ],
        stats: [55, 44, 46, 48, 42],
        trait: 'Potent Hypnosis'
    },
    'Cybele': {
		name: 'Cybele',
        inherits: InheritanceType[Element.HEALING],
        level: 83,
		currentLevel: 83,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Samarecarm', 0],
            ['Mediarahan', 0],
            ['Makougaon', 0],
            ['Amrita Shower', 84],
            ['Auto-Maraku', 86],
            ['Drain Bless', 87],
            ['Salvation', 89]
        ],
        stats: [44, 57, 49, 51, 55],
        trait: 'Linked Bloodline',
        max: true
    },
    'Daisoujou': {
		name: 'Daisoujou',
        inherits: InheritanceType[Element.BLESS],
        level: 40,
		currentLevel: 40,
        arcana: Arcana.HIEROPHANT,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [
            ['Spirit Drain', 0],
            ['Makouga', 0],
            ['Samsara', 41],
            ['Bless Boost', 42],
            ['Diarahan', 43],
            ['Me Patra', 44],
            ['Null Rage', 45]
        ],
        stats: [21, 33, 24, 24, 25],
        trait: 'Draining Mouth'
    },
    'Dakini': {
		name: 'Dakini',
        inherits: InheritanceType[Element.PHYS],
        level: 50,
		currentLevel: 50,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Bad Beat', 0],
            ['Myriad Slashes', 0],
            ['Rising Slash', 0],
            ['High Counter', 52],
            ['Deathbound', 53],
            ['Rebellion', 54],
            ['Charge', 55]
        ],
        stats: [34, 32, 34, 28, 29],
        trait: 'Skillful Combo'
    },
    'Decarabia': {
		name: 'Decarabia',
        inherits: InheritanceType[Element.FIRE],
        level: 32,
		currentLevel: 32,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.WEAK, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['Agilao', 0],
            ['Ominous Words', 0],
            ['Tetrakarn', 33],
            ['Fire Boost', 35],
            ['Agidyne', 36],
            ['Null Fire', 37],
            ['Megidola', 38]
        ],
        stats: [21, 23, 19, 22, 18],
        trait: 'Heated Bloodline'
    },
    'Dionysus': {
		name: 'Dionysus',
        inherits: InheritanceType[Element.AILMENT],
        level: 71,
		currentLevel: 71,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Maziodyne', 0],
            ['Ziodyne', 0],
            ['Brain Jack', 0],
            ['Thermopylae', 72],
            ['Ailment Boost', 73],
            ['Amrita Shower', 75],
            ['Debilitate', 76]
        ],
        stats: [42, 48, 44, 42, 44],
        trait: 'Pinch Anchor'
    },
    'Dominion': {
		name: 'Dominion',
        inherits: InheritanceType[Element.BLESS],
        level: 68,
		currentLevel: 68,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NULL, Affinity.RESIST],
        skills: [
            ['Makajamaon', 0],
            ['Hamaon', 0],
            ['Kougaon', 0],
            ['Makougaon', 70],
            ['Hama Boost', 71],
            ['Mahamaon', 72],
            ['Evade Curse', 74]
        ],
        stats: [42, 45, 43, 44, 37],
        trait: 'Blessed Bloodline'
    },
    'Eligor': {
		name: 'Eligor',
        inherits: InheritanceType[Element.FIRE],
        level: 16,
		currentLevel: 16,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['Maragi', 0],
            ['Sharp Student', 0],
            ['Tarukaja', 0],
            ['Double Fangs', 18],
            ['Sukunda', 19],
            ['Memory Blow', 20]
        ],
        stats: [12, 10, 13, 10, 10],
        trait: 'Thermal Conduct'
    },
    'Emperor\'s Amulet': {
		name: 'Emperor\'s Amulet',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 35,
		currentLevel: 35,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Agidyne', 0],
            ['Bufudyne', 0],
            ['Garudyne', 0],
            ['Ziodyne', 0],
            ['Psiodyne', 0],
            ['Freidyne', 0],
            ['Kougaon', 0],
            ['Eigaon', 0],
            ['Frigid Bloodline', 0],
            ['Wind Bloodline', 0],
            ['Psychic Bloodline', 0]
        ],
        stats: [35, 35, 35, 35, 35],
        trait: 'Ultimate Vessel'
    },
    'Fafnir': {
		name: 'Fafnir',
        inherits: InheritanceType[Element.NUKE],
        level: 86,
		currentLevel: 86,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.REPEL, Affinity.REPEL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Gigantomachia', 0],
            ['Evil Smile', 0],
            ['Cosmic Flare', 0],
            ['Atomic Flare', 88],
            ['Nuke Amp', 90],
            ['Debilitate', 91],
            ['Drain Nuke', 92]
        ],
        stats: [61, 55, 58, 48, 43],
        trait: 'Ailment Hunter',
    },
    'Flauros': {
		name: 'Flauros',
        special: true,
        inherits: InheritanceType[Element.AILMENT],
        level: 19,
		currentLevel: 19,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Giant Slice', 0],
            ['Dormin Rush', 0],
            ['Dekaja', 0],
            ['Dodge Phys', 20],
            ['Rebellion', 22],
            ['Cornered Fang', 23],
            ['Heat Up', 24]
        ],
        stats: [15, 11, 13, 14, 11],
        trait: 'Gluttonmouth'
    },
    'Forneus': {
		name: 'Forneus',
        inherits: InheritanceType[Element.PSY],
        level: 63,
		currentLevel: 63,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Psiodyne', 0],
            ['Masukunda', 0],
            ['Brain Jack', 0],
            ['Survival Trick', 65],
            ['Stagnant Air', 66],
            ['Mapsiodyne', 67],
            ['Evade Psy', 68]
        ],
        stats: [41, 39, 40, 42, 34],
        trait: 'Bloodstained Eyes'
    },
    'Fortuna': {
		name: 'Fortuna',
        inherits: InheritanceType[Element.WIND],
        level: 46,
		currentLevel: 46,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Magarula', 0],
            ['Masukukaja', 0],
            ['Tetraja', 0],
            ['Garudyne', 47],
            ['Touch n\' Go', 49],
            ['Amrita Drop', 50],
            ['Evade Elec', 51]
        ],
        stats: [23, 32, 29, 34, 27],
        trait: 'Wind Bloodline'
    },
    'Futsunushi': {
		name: 'Futsunushi',
        inherits: InheritanceType[Element.PHYS],
        level: 86,
		currentLevel: 86,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Myriad Slashes', 0],
            ['Matarukaja', 0],
            ['Apt Pupil', 0],
            ['Charge', 88],
            ['Brave Blade', 89],
            ['Regenerate 3', 90],
            ['Firm Stance', 91],
            ['Auto-Maraku', 92]
        ],
        stats: [60, 58, 55, 52, 40],
        trait: 'Will of the Sword',
        max: true
    },
    'Fuu-Ki': {
		name: 'Fuu-Ki',
        inherits: InheritanceType[Element.WIND],
        level: 23,
		currentLevel: 23,
        arcana: Arcana.STAR,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Tetra Break', 0], ['Tarukaja', 0], ['Garula', 0], ['Wind Boost', 25], ['Magarula', 26], ['Resist Wind', 27] ],
        stats: [14, 17, 16, 15, 14],
        trait: 'Intense Focus'
    },
    'Gabriel': {
		name: 'Gabriel',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 77,
		currentLevel: 77,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL],
        skills: [
            ['Maziodyne', 0],
            ['Mabufudyne', 0],
            ['Divine Judgement', 78],
            ['Ali Dance', 79],
            ['Evade Curse', 80],
            ['Touch n\' Go', 81],
            ['Ice Amp', 82],
            ['Salvation', 83]
        ],
        stats: [43, 51, 48, 54, 42],
        trait: 'Relentless'
    },
    'Ganesha': {
		name: 'Ganesha',
        inherits: InheritanceType[Element.AILMENT],
        level: 53,
		currentLevel: 53,
        arcana: Arcana.SUN,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Miracle Punch', 0],
            ['Tempest Slash', 0],
            ['Rebellion', 0],
            ['Tetraja', 55],
            ['Resist Psy', 56],
            ['Masukunda', 57],
            ['Charge', 60]
        ],
        stats: [39, 31, 37, 33, 26],
        trait: 'Gluttonmouth'
    },
    'Garuda': {
		name: 'Garuda',
        inherits: InheritanceType[Element.WIND],
        level: 52,
		currentLevel: 52,
        arcana: Arcana.STAR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL],
        skills: [
            ['Garudyne', 0],
            ['Mind Slice', 0],
            ['Amrita Shower', 53],
            ['Masukukaja', 54],
            ['Evade Elec', 55],
            ['Magarudyne', 57],
            ['Wind Amp', 59]
        ],
        stats: [30, 36, 29, 39, 29],
        trait: 'Wind Bloodline'
    },
    'Genbu': {
		name: 'Genbu',
        inherits: InheritanceType[Element.ICE],
        level: 7,
		currentLevel: 7,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Bufu', 0], ['Rakunda', 0], ['Patra', 8], ['Mabufu', 10], ['Resist Forget', 11], ['Defense Master', 12] ],
        stats: [5, 6, 7, 6, 4],
        trait: 'Cold-Blooded'
    },
    'Girimehkala': {
		name: 'Girimehkala',
        inherits: InheritanceType[Element.AILMENT],
        level: 43,
		currentLevel: 43,
        arcana: Arcana.MOON,
        affinities: [Affinity.REPEL, Affinity.REPEL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [ ['Mudoon', 0], ['Marakunda', 0], ['Deathbound', 0], ['Agidyne', 45], ['Wage War', 47], ['Repel Phys', 50] ],
        stats: [32, 24, 32, 29, 19],
        trait: 'Cursed Bloodline'
    },
    'Hanuman': {
		name: 'Hanuman',
        inherits: InheritanceType[Element.PHYS],
        level: 64,
		currentLevel: 64,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Tempest Slash', 0],
            ['Matarunda', 0],
            ['Revolution', 0],
            ['Deathbound', 65],
            ['Tetra Break', 67],
            ['Regenerate 3', 69]
        ],
        stats: [43, 38, 40, 40, 38],
        trait: 'Potent Hypnosis'
    },
    'Hariti': {
		name: 'Hariti',
        inherits: InheritanceType[Element.ELEC],
        level: 40,
		currentLevel: 40,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Zionga', 0],
            ['Energy Shower', 0],
            ['Mabaisudi', 0],
            ['Samarecarm', 41],
            ['Nocturnal Flash', 42],
            ['Mediarama', 44],
            ['Dizzy Boost', 45],
            ['Spirit Drain', 46]
        ],
        stats: [21, 32, 24, 23, 27],
        trait: 'Electric Bloodline'
    },
    'Hastur': {
		name: 'Hastur',
        inherits: InheritanceType[Element.WIND],
        level: 84,
		currentLevel: 84,
        arcana: Arcana.STAR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Vacuum Wave', 0],
            ['Nocturnal Flash', 0],
            ['Debilitate', 0],
            ['Abyssal Eye', 86],
            ['Wind Amp', 87],
            ['Spirit Drain', 88],
            ['Repel Wind', 89]
        ],
        stats: [51, 59, 52, 56, 41],
        trait: 'Mouth of Savoring',
    },
    'Hecatoncheires': {
		name: 'Hecatoncheires',
        inherits: InheritanceType[Element.PHYS],
        level: 42,
		currentLevel: 42,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Swift Strike', 0],
            ['Regenerate 2', 0],
            ['Tarukaja', 0],
            ['Endure', 43],
            ['Rebellion', 45],
            ['Fortified Moxy', 46],
            ['Gattling Blows', 49]
        ],
        stats: [35, 22, 27, 23, 26],
        trait: 'Gluttonmouth'
    },
    'Hell Biker': {
		name: 'Hell Biker',
        special: true,
        inherits: InheritanceType[Element.FIRE],
        level: 37,
		currentLevel: 37,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL],
        skills: [
            ['Mudoon', 0],
            ['Agilao', 0],
            ['Speed Master', 0],
            ['Tentarafoo', 38],
            ['Fire Boost', 39],
            ['Maragion', 40],
            ['Mamudoon', 41]
        ],
        stats: [23, 24, 24, 30, 17],
        trait: 'Internal Hypnosis'
    },
    'High Pixie': {
		name: 'High Pixie',
        inherits: InheritanceType[Element.HEALING],
        level: 16,
		currentLevel: 16,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Garu', 0], ['Media', 0], ['Dormina', 0], ['Diarama', 19], ['Pulinpa', 20], ['Magaru', 22] ],
        stats: [8, 14, 10, 13, 10],
        trait: 'Skillful Combo'
    },
    'Hope Diamond': {
		name: 'Hope Diamond',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 40,
		currentLevel: 40,
        arcana: Arcana.DEATH,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Auto-Mataru', 0],
            ['Auto-Maraku', 0],
            ['Auto-Masuku', 0],
            ['Endure', 0],
            ['Regenerate 2', 0],
            ['Invigorate 2', 0],
            ['High Counter', 0],
            ['Fast Heal', 0],
            ['Internal Hypnosis', 0],
            ['Striking Weight', 0],
            ['Retaliating Body', 0]
        ],
        stats: [40, 40, 40, 40, 40],
        trait: 'Ultimate Vessel'
    },
    'Horus': {
		name: 'Horus',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 47,
		currentLevel: 47,
        arcana: Arcana.SUN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL],
        skills: [
            ['Megidola', 0],
            ['Diarama', 0],
            ['Kougaon', 0],
            ['Flash Bomb', 49],
            ['Masukukaja', 50],
            ['Hamaon', 51],
            ['Hama Boost', 52]
        ],
        stats: [30, 32, 29, 35, 22],
        trait: 'Potent Hypnosis'
    },
    'Hua Po': {
		name: 'Hua Po',
        inherits: InheritanceType[Element.FIRE],
        level: 9,
		currentLevel: 9,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Agi', 0], ['Dormina', 0], ['Tarunda', 11], ['Resist Forget', 12], ['Maragi', 13], ['Burn Boost', 15] ],
        stats: [4, 10, 4, 8, 8],
        trait: 'Thermal Conduct'
    },
    'Incubus': {
		name: 'Incubus',
        inherits: InheritanceType[Element.AILMENT],
        level: 5,
		currentLevel: 5,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL],
        skills: [ ['Life Drain', 0], ['Dream Needle', 0], ['Dormina', 7], ['Tarunda', 8], ['Dodge Curse', 9] ],
        stats: [4, 6, 4, 5, 3],
        trait: 'Draining Mouth'
    },
    'Inugami': {
		name: 'Inugami',
        inherits: InheritanceType[Element.FIRE],
        level: 14,
		currentLevel: 14,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Pulinpa', 0],
            ['Tarukaja', 0],
            ['Giant Slice', 0],
            ['Dream Needle', 15],
            ['Lucky Punch', 17],
            ['Brain Shake', 18],
            ['Confuse Boost', 19]
        ],
        stats: [11, 9, 9, 12, 8],
        trait: 'Foul Odor'
    },
    'Ippon-Datara': {
		name: 'Ippon-Datara',
        inherits: InheritanceType[Element.PHYS],
        level: 13,
		currentLevel: 13,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST],
        skills: [
            ['Sledgehammer', 0],
            ['Tarukaja', 0],
            ['Resist Dizzy', 0],
            ['Rampage', 15],
            ['Sharp Student', 17],
            ['Counter', 18]
        ],
        stats: [11, 7, 14, 6, 8],
        trait: 'Striking Weight'
    },
    'Ishtar': {
		name: 'Ishtar',
        inherits: InheritanceType[Element.HEALING],
        level: 85,
		currentLevel: 85,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mediarahan', 0],
            ['Samarecarm', 0],
            ['Drain Wind', 0],
            ['Insta-Heal', 87],
            ['Maziodyne', 88],
            ['Spell Master', 89],
            ['Salvation', 90]
        ],
        stats: [48, 59, 49, 58, 48],
        trait: 'Grace of Mother',
        max: true
    },
    'Isis': {
		name: 'Isis',
        inherits: InheritanceType[Element.HEALING],
        level: 26,
		currentLevel: 26,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Makouga', 0],
            ['Mahama', 0],
            ['Diarama', 0],
            ['Resist Despair', 27],
            ['Hamaon', 29],
            ['Hama Boost', 30],
            ['Makarakarn', 32]
        ],
        stats: [14, 20, 17, 18, 16],
        trait: 'Savior Bloodline'
    },
    'Jack Frost': {
		name: 'Jack Frost',
        inherits: InheritanceType[Element.ICE],
        level: 11,
		currentLevel: 11,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Bufu', 0], ['Ice Break', 0], ['Baisudi', 0], ['Mabufu', 12], ['Rakunda', 13], ['Freeze Boost', 15] ],
        stats: [8, 9, 7, 9, 7],
        trait: 'Frigid Bloodline'
    },
    'Jack-o\'-Lantern': {
		name: 'Jack-o\'-Lantern',
        inherits: InheritanceType[Element.FIRE],
        level: 2,
		currentLevel: 2,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Agi', 0], ['Rakunda', 0], ['Sharp Student', 4], ['Dazzler', 5], ['Resist Sleep', 7] ],
        stats: [2, 3, 3, 3, 2],
        trait: 'Thermal Conduct'
    },
    'Jatayu': {
		name: 'Jatayu',
        inherits: InheritanceType[Element.WIND],
        level: 51,
		currentLevel: 51,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Garudyne', 0],
            ['Masukukaja', 0],
            ['Nocturnal Flash', 0],
            ['Dizzy Boost', 52],
            ['Wind Amp', 54],
            ['Magarudyne', 55],
            ['Speed Master', 57]
        ],
        stats: [31, 34, 29, 36, 30],
        trait: 'Wind Bloodline'
    },
    'Jikokuten': {
		name: 'Jikokuten',
        inherits: InheritanceType[Element.PHYS],
        level: 22,
		currentLevel: 22,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK],
        skills: [
            ['Assault Dive', 0],
            ['Defense Master', 0],
            ['Rakunda', 0],
            ['Kill Rush', 24],
            ['Counter', 25],
            ['Matarukaja', 27],
            ['Adverse Resolve', 28]
        ],
        stats: [18, 11, 16, 15, 13],
        trait: 'Internal Hypnosis'
    },
    'Kaiwan': {
		name: 'Kaiwan',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 36,
		currentLevel: 36,
        arcana: Arcana.STAR,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Makajam', 0],
            ['Psio', 0],
            ['Forget Boost', 37],
            ['Speed Master', 38],
            ['Makajamaon', 39],
            ['Psiodyne', 40],
            ['Marakunda', 41]
        ],
        stats: [23, 26, 24, 22, 20],
        trait: 'Psychic Bloodline'
    },
    'Kali': {
		name: 'Kali',
        inherits: InheritanceType[Element.FIRE],
        level: 63,
		currentLevel: 63,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.NEUTRAL, Affinity.REPEL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['Heat Wave', 0],
            ['Bloodbath', 0],
            ['Brave Blade', 0],
            ['Charge', 65],
            ['High Counter', 66],
            ['Repel Psy', 67],
            ['Vorpal Blade', 68]
        ],
        stats: [43, 41, 39, 39, 34],
        trait: 'Relentless'
    },
    'Kelpie': {
		name: 'Kelpie',
        inherits: InheritanceType[Element.WIND],
        level: 6,
		currentLevel: 6,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Garu', 0], ['Lunge', 0], ['Resist Brainwash', 8], ['Sukukaja', 9], ['Terror Claw', 10] ],
        stats: [5, 5, 5, 6, 4],
        trait: 'Striking Weight'
    },
    'Kikuri-Hime': {
		name: 'Kikuri-Hime',
        inherits: InheritanceType[Element.HEALING],
        level: 40,
		currentLevel: 40,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [ ['Lullaby', 0], ['Marakukaja', 0], ['Energy Drop', 0], ['Mediarama', 41], ['Tetraja', 43], ['Divine Grace', 45] ],
        stats: [22, 31, 24, 28, 22],
        trait: 'Relief Bloodline'
    },
    'Kin-Ki': {
		name: 'Kin-Ki',
        inherits: InheritanceType[Element.PHYS],
        level: 25,
		currentLevel: 25,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.RESIST, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Vajra Blast', 0],
            ['Rakukaja', 0],
            ['Regenerate 1', 0],
            ['Dodge Psy', 27],
            ['Sledgehammer', 28],
            ['Bad Beat', 30],
            ['Counterstrike', 31]
        ],
        stats: [21, 13, 21, 15, 12],
        trait: 'Retaliating Body'
    },
    'King Frost': {
		name: 'King Frost',
        inherits: InheritanceType[Element.ICE],
        level: 61,
		currentLevel: 61,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Bufudyne', 0],
            ['Ice Break', 0],
            ['Megaton Raid', 0],
            ['Freeze Boost', 62],
            ['Mabufudyne', 64],
            ['Concentrate', 65],
            ['Ice Amp', 67]
        ],
        stats: [40, 44, 43, 29, 34],
        trait: 'Frigid Bloodline'
    },
    'Kodama': {
		name: 'Kodama',
        inherits: InheritanceType[Element.AILMENT],
        level: 11,
		currentLevel: 11,
        arcana: Arcana.STAR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Garu', 0],
            ['Rakunda', 0],
            ['Psi', 12],
            ['Evil Touch', 13],
            ['Tarukaja', 14],
            ['Fear Boost', 15],
            ['Resist Fear', 17]
        ],
        stats: [7, 11, 8, 10, 4],
        trait: 'Skillful Combo'
    },
    'Koh-i-Noor': {
		name: 'Koh-i-Noor',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 25,
		currentLevel: 25,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Dodge Fire', 0],
            ['Dodge Ice', 0],
            ['Dodge Wind', 0],
            ['Dodge Elec', 0],
            ['Dodge Psy', 0],
            ['Dodge Nuke', 0],
            ['Dodge Bless', 0],
            ['Dodge Curse', 0],
            ['Crisis Control', 0],
            ['Bloodstained Eyes', 0],
            ['Rare Antibody', 0]
        ],
        stats: [25, 25, 25, 25, 25],
        trait: 'Ultimate Vessel'
    },
    'Kohryu': {
		name: 'Kohryu',
        special: true,
        inherits: InheritanceType[Element.PSY],
        level: 76,
		currentLevel: 76,
        arcana: Arcana.HIEROPHANT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Psycho Force', 0],
            ['Mediarahan', 0],
            ['Mapsiodyne', 0],
            ['Life Aid', 78],
            ['Concentrate', 79],
            ['Psy Amp', 80],
            ['Spell Master', 82]
        ],
        stats: [43, 51, 50, 53, 38],
        trait: 'Universal Law',
        max: true
    },
    'Koppa Tengu': {
		name: 'Koppa Tengu',
        inherits: InheritanceType[Element.WIND],
        level: 11,
		currentLevel: 11,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL],
        skills: [ ['Garu', 0], ['Sukukaja', 0], ['Growth 1', 12], ['Taunt', 13], ['Rage Boost', 14], ['Wage War', 15] ],
        stats: [7, 8, 8, 11, 6],
        trait: 'Intense Focus'
    },
    'Koropokkuru': {
		name: 'Koropokkuru',
        inherits: InheritanceType[Element.ICE],
        level: 9,
		currentLevel: 9,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Makajam', 0],
            ['Bufu', 0],
            ['Dodge Ice', 11],
            ['Sukunda', 12],
            ['Fire Wall', 13],
            ['Mabufu', 14],
            ['Climate Decorum', 15]
        ],
        stats: [5, 8, 6, 9, 6],
        trait: 'Foul Odor'
    },
    'Koumokuten': {
		name: 'Koumokuten',
        inherits: InheritanceType[Element.PHYS],
        level: 49,
		currentLevel: 49,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Assault Dive', 0],
            ['Regenerate 2', 0],
            ['Revolution', 0],
            ['Attack Master', 51],
            ['Ice Wall', 52],
            ['Enduring Soul', 54],
            ['Deadly Fury', 55]
        ],
        stats: [37, 29, 34, 29, 25],
        trait: 'Gluttonmouth'
    },
    'Kumbhanda': {
		name: 'Kumbhanda',
        inherits: InheritanceType[Element.AILMENT],
        level: 42,
		currentLevel: 42,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['Magarula', 0],
            ['Stagnant Air', 0],
            ['Bloodbath', 0],
            ['Tempest Slash', 43],
            ['Dekaja', 45],
            ['Fear Boost', 46],
            ['Revolution', 47]
        ],
        stats: [25, 30, 25, 27, 26],
        trait: 'Rare Antibody'
    },
    'Kurama Tengu': {
		name: 'Kurama Tengu',
        inherits: InheritanceType[Element.WIND],
        level: 31,
		currentLevel: 31,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST],
        skills: [ ['Double Shot', 0], ['Masukunda', 0], ['Magarula', 0], ['Wind Boost', 32], ['Brain Jack', 34], ['Growth 2', 36] ],
        stats: [20, 19, 21, 24, 16],
        trait: 'Skillful Combo'
    },
    'Kushinada': {
		name: 'Kushinada',
        inherits: InheritanceType[Element.HEALING],
        level: 42,
		currentLevel: 42,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL, Affinity.NEUTRAL],
        skills: [
            ['Hysterical Slap', 0],
            ['Psy Wall', 0],
            ['Mediarama', 0],
            ['Matarukaja', 44],
            ['Null Confuse', 45],
            ['Wind Wall', 46],
            ['Amrita Shower', 47],
            ['Null Ice', 48]
        ],
        stats: [24, 30, 26, 28, 25],
        trait: 'Savior Bloodline'
    },
    'Kushi Mitama': {
		name: 'Kushi Mitama',
        inherits: InheritanceType[Element.HEALING],
        level: 12,
		currentLevel: 12,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Dia', 0], ['Media', 0], ['Makajam', 0], ['Regenerate 1', 13], ['Wind Wall', 14], ['Forget Boost', 16] ],
        stats: [7, 11, 9, 8, 8],
        trait: 'Gluttonmouth'
    },
    'Lachesis': {
		name: 'Lachesis',
        inherits: InheritanceType[Element.ICE],
        level: 35,
		currentLevel: 35,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mabaisudi', 0],
            ['Bufula', 0],
            ['Growth 2', 0],
            ['Marakukaja', 36],
            ['Elec Wall', 37],
            ['Mabufula', 39],
            ['Ice Boost', 41]
        ],
        stats: [18, 26, 22, 25, 21],
        trait: 'Internal Hypnosis'
    },
    'Lakshmi': {
		name: 'Lakshmi',
        inherits: InheritanceType[Element.HEALING],
        level: 69,
		currentLevel: 69,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Lullaby', 0],
            ['Diarahan', 0],
            ['Bufudyne', 0],
            ['Mediarahan', 70],
            ['Climate Decorum', 71],
            ['Amrita Shower', 72],
            ['Life Aid', 74]
        ],
        stats: [39, 49, 41, 47, 38],
        trait: 'Wealth of Lotus',
        max: true
    },
    'Lamia': {
		name: 'Lamia',
        inherits: InheritanceType[Element.FIRE],
        level: 26,
		currentLevel: 26,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Mudo', 0],
            ['Rakukaja', 0],
            ['Rising Slash', 0],
            ['Ominous Words', 27],
            ['Foul Breath', 28],
            ['Mamudo', 30],
            ['Despair Boost', 31]
        ],
        stats: [21, 15, 18, 19, 12],
        trait: 'Foul Odor'
    },
    'Leanan Sidhe': {
		name: 'Leanan Sidhe',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 19,
		currentLevel: 19,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Rakunda', 0], ['Psio', 0], ['Marin Karin', 20], ['Mamudo', 21], ['Mapsi', 22], ['Eiga', 23] ],
        stats: [9, 17, 12, 16, 10],
        trait: 'Skillful Technique'
    },
    'Legion': {
		name: 'Legion',
        inherits: InheritanceType[Element.PSY],
        level: 38,
		currentLevel: 38,
        arcana: Arcana.FOOL,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Bloodbath', 0],
            ['Life Drain', 0],
            ['Evil Smile', 0],
            ['Foul Breath', 39],
            ['Tetra Break', 40],
            ['Null Dizzy', 42],
            ['Eigaon', 45]
        ],
        stats: [24, 24, 30, 23, 20],
        trait: 'Draining Mouth'
    },
    'Lilim': {
		name: 'Lilim',
        inherits: InheritanceType[Element.ICE],
        level: 32,
		currentLevel: 32,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Bufula', 0],
            ['Lullaby', 0],
            ['Freeze Boost', 0],
            ['Masukunda', 34],
            ['Dodge Bless', 35],
            ['Spirit Drain', 36],
            ['Mabufula', 37]
        ],
        stats: [17, 23, 18, 25, 20],
        trait: 'Cold-Blooded'
    },
    'Lilith': {
		name: 'Lilith',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 60,
		currentLevel: 60,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Mabufudyne', 0],
            ['Makarakarn', 0],
            ['Freidyne', 0],
            ['Mafreidyne', 62],
            ['Spirit Drain', 63],
            ['Freeze Boost', 64],
            ['Nuke Amp', 65]
        ],
        stats: [33, 43, 37, 39, 35],
        trait: 'Mighty Gaze'
    },
    'Loa': {
		name: 'Loa',
        inherits: InheritanceType[Element.CURSE],
        level: 70,
		currentLevel: 70,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL],
        skills: [
            ['Mamudoon', 0],
            ['Abysmal Surge', 0],
            ['Life Drain', 0],
            ['Maeigaon', 72],
            ['Drain Curse', 73],
            ['Spirit Drain', 74],
            ['Fortify Spirit', 75]
        ],
        stats: [42, 47, 43, 46, 39],
        trait: 'Draining Mouth',
    },
    'Lucifer': {
		name: 'Lucifer',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 93,
		currentLevel: 93,
        arcana: Arcana.STAR,
        affinities: [Affinity.NULL, Affinity.NULL, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.DRAIN],
        skills: [
            ['Gigantomachia', 0],
            ['Drain Curse', 0],
            ['Morning Star', 94],
            ['Spell Master', 95],
            ['Heat Riser', 96],
            ['Repel Bless', 97],
            ['Insta-Heal', 98],
            ['Drain Phys', 99]
        ],
        stats: [61, 59, 59, 56, 51],
        trait: 'Allure of Wisdom',
        max: true
    },
    'Macabre': {
		name: 'Macabre',
        inherits: InheritanceType[Element.CURSE],
        level: 73,
		currentLevel: 73,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['DEATH Scythe', 0],
            ['Evil Smile', 0],
            ['Mamudoon', 0],
            ['Auto-Masuku', 74],
            ['Ghastly Wail', 75],
            ['Myriad Slashes', 76],
            ['Ali Dance', 78]
        ],
        stats: [48, 49, 42, 48, 39],
        trait: 'Ailment Hunter',
    },
    'Mada': {
		name: 'Mada',
        inherits: InheritanceType[Element.FIRE],
        level: 90,
		currentLevel: 90,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Inferno', 0],
            ['Fire Amp', 0],
            ['Burn Boost', 0],
            ['Fortify Spirit', 91],
            ['Blazing Hell', 92],
            ['Amrita Shower', 93],
            ['Enduring Soul', 95],
            ['Spell Master', 96]
        ],
        stats: [55, 54, 61, 59, 48],
        trait: 'Drunken Passion',
        max: true
    },
    'Makami': {
		name: 'Makami',
        inherits: InheritanceType[Element.NUKE],
        level: 15,
		currentLevel: 15,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Double Fangs', 0],
            ['Frei', 0],
            ['Energy Drop', 0],
            ['Mafrei', 17],
            ['Makajam', 18],
            ['Resist Despair', 19],
            ['Dodge Elec', 20]
        ],
        stats: [13, 12, 8, 11, 8],
        trait: 'Skillful Technique'
    },
    'Mandrake': {
		name: 'Mandrake',
        inherits: InheritanceType[Element.ELEC],
        level: 3,
		currentLevel: 3,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Pulinpa', 0], ['Energy Drop', 0], ['Lunge', 4], ['Sukunda', 5] ],
        stats: [2, 3, 3, 4, 4],
        trait: 'Savior Bloodline'
    },
    'Mara': {
		name: 'Mara',
        inherits: InheritanceType[Element.PSY],
        level: 73,
		currentLevel: 73,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NULL],
        skills: [
            ['Mapsiodyne', 0],
            ['One-shot Kill', 0],
            ['Tetra Break', 0],
            ['Charge', 74],
            ['Brain Buster', 76],
            ['Psy Amp', 77],
            ['Psycho Force', 78]
        ],
        stats: [51, 43, 43, 45, 44],
        trait: 'Mighty Gaze'
    },
    'Maria': {
		name: 'Maria',
        inherits: InheritanceType[Element.HEALING],
        level: 93,
		currentLevel: 93,
        arcana: Arcana.FAITH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL],
        skills: [
            ['Invigorate 3', 0],
            ['Salvation', 0],
            ['Holy Benevolence', 0],
            ['Heat Riser', 94],
            ['Holy Embrace', 96],
            ['Angelic Grace', 97],
            ['Holy Whisper', 98]
        ],
        stats: [52, 66, 53, 54, 61],
        trait: 'Ave Maria',
        max: true
    },
    'Matador': {
		name: 'Matador',
        inherits: InheritanceType[Element.PSY],
        level: 17,
		currentLevel: 17,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Psi', 0], ['Null Dizzy', 0], ['Sukukaja', 0], ['Mapsi', 18], ['Double Shot', 20], ['Swift Strike', 22] ],
        stats: [11, 13, 10, 16, 8],
        trait: 'Potent Hypnosis'
    },
    'Melchizedek': {
		name: 'Melchizedek',
        inherits: InheritanceType[Element.BLESS],
        level: 58,
		currentLevel: 58,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NULL],
        skills: [
            ['Megaton Raid', 0],
            ['Hamaon', 0],
            ['Hama Boost', 59],
            ['Revolution', 60],
            ['Mahamaon', 62],
            ['Matarukaja', 63],
            ['God\'s Hand', 65]
        ],
        stats: [37, 32, 40, 39, 33],
        trait: 'Deathly Illness'
    },
    'Metatron': {
		name: 'Metatron',
        special: true,
        inherits: InheritanceType[Element.BLESS],
        level: 89,
		currentLevel: 89,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL, Affinity.DRAIN, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.WEAK],
        skills: [
            ['Mahamaon', 0],
            ['Sword Dance', 0],
            ['Makougaon', 0],
            ['Megidolaon', 91],
            ['Hama Boost', 92],
            ['Concentrate', 93],
            ['Bless Amp', 94],
            ['Divine Judgement', 95]
        ],
        stats: [54, 61, 60, 57, 42],
        trait: 'Martyr\'s Gift',
        max: true
    },
    'Michael': {
		name: 'Michael',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 87,
		currentLevel: 87,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NULL],
        skills: [
            ['Divine Judgement', 0],
            ['Mabufudyne', 0],
            ['Debilitate', 0],
            ['Sword Dance', 89],
            ['Mahamaon', 90],
            ['Megidolaon', 91],
            ['Cosmic Flare', 92]
        ],
        stats: [57, 54, 55, 56, 46],
        trait: 'Potent Hypnosis'
    },
    'Mishaguji': {
		name: 'Mishaguji',
        inherits: InheritanceType[Element.AILMENT],
        level: 52,
		currentLevel: 52,
        arcana: Arcana.HIEROPHANT,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN],
        skills: [
            ['Regenerate 3', 0],
            ['Brain Jack', 0],
            ['Psiodyne', 0],
            ['One-shot Kill', 54],
            ['Endure', 55],
            ['Deathbound', 56],
            ['Ailment Boost', 57]
        ],
        stats: [32, 32, 32, 32, 35],
        trait: 'Ailment Hunter'
    },
    'Mithra': {
		name: 'Mithra',
        inherits: InheritanceType[Element.BLESS],
        level: 33,
		currentLevel: 33,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Kouga', 0],
            ['Mahama', 0],
            ['Diarama', 0],
            ['Makouga', 34],
            ['Dekunda', 35],
            ['Bless Boost', 36],
            ['Thermopylae', 38]
        ],
        stats: [19, 26, 19, 24, 18],
        trait: 'Blessed Bloodline'
    },
    'Mithras': {
		name: 'Mithras',
        inherits: InheritanceType[Element.NUKE],
        level: 39,
		currentLevel: 39,
        arcana: Arcana.SUN,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Tentarafoo', 0],
            ['Mafreila', 0],
            ['Heat Wave', 0],
            ['Tetra Break', 41],
            ['Nuke Break', 42],
            ['Mabaisudi', 43],
            ['Freidyne', 45]
        ],
        stats: [27, 25, 27, 25, 20],
        trait: 'Skillful Technique'
    },
    'Mokoi': {
		name: 'Mokoi',
        inherits: InheritanceType[Element.AILMENT],
        level: 9,
		currentLevel: 9,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Tarukaja', 0],
            ['Dazzler', 0],
            ['Skull Cracker', 10],
            ['Marin Karin', 12],
            ['Dodge Elec', 13],
            ['Dekunda', 14]
        ],
        stats: [9, 5, 6, 10, 4],
        trait: 'Gloomy Child'
    },
    'Moloch': {
		name: 'Moloch',
        inherits: InheritanceType[Element.FIRE],
        level: 60,
		currentLevel: 60,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.RESIST, Affinity.RESIST, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Agidyne', 0],
            ['Stagnant Air', 0],
            ['Evil Smile', 0],
            ['Maragidyne', 62],
            ['Ghastly Wail', 63],
            ['Drain Fire', 64],
            ['Fire Amp', 65]
        ],
        stats: [32, 45, 42, 31, 37],
        trait: 'Immunity'
    },
    'Mot': {
		name: 'Mot',
        inherits: InheritanceType[Element.AILMENT],
        level: 72,
		currentLevel: 72,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL],
        skills: [
            ['Megidola', 0],
            ['Matarukaja', 0],
            ['Maeigaon', 0],
            ['Concentrate', 74],
            ['Megidolaon', 76],
            ['Repel Elec', 77]
        ],
        stats: [43, 51, 48, 42, 39],
        trait: 'Mighty Gaze'
    },
    'Mother Harlot': {
		name: 'Mother Harlot',
        inherits: InheritanceType[Element.ICE],
        level: 85,
		currentLevel: 85,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Mabufudyne', 0],
            ['Mamudoon', 0],
            ['Mudo Boost', 0],
            ['Ice Age', 86],
            ['Ice Amp', 87],
            ['Repel Bless', 88],
            ['Debilitate', 90]
        ],
        stats: [55, 54, 48, 50, 55],
        trait: 'Ghost Nest',
        max: true
    },
    'Mothman': {
		name: 'Mothman',
        inherits: InheritanceType[Element.ELEC],
        level: 33,
		currentLevel: 33,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Skull Cracker', 0],
            ['Mazionga', 0],
            ['Shock Boost', 0],
            ['Tentarafoo', 35],
            ['Ambient Aid', 36],
            ['Makajamaon', 37],
            ['Ziodyne', 38]
        ],
        stats: [21, 24, 16, 24, 21],
        trait: 'Static Electricity'
    },
    'Naga': {
		name: 'Naga',
        inherits: InheritanceType[Element.ELEC],
        level: 24,
		currentLevel: 24,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Power Slash', 0],
            ['Memory Blow', 0],
            ['Zionga', 0],
            ['Shock Boost', 26],
            ['Counter', 27],
            ['Mazionga', 28],
            ['Marakukaja', 29]
        ],
        stats: [15, 17, 15, 17, 15],
        trait: 'Striking Weight'
    },
    'Narcissus': {
		name: 'Narcissus',
        inherits: InheritanceType[Element.AILMENT],
        level: 48,
		currentLevel: 48,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Dazzler', 0],
            ['Magarula', 0],
            ['Energy Drop', 0],
            ['Growth 3', 50],
            ['Dizzy Boost', 51],
            ['Mediarama', 52],
            ['Ambient Aid', 53]
        ],
        stats: [27, 31, 29, 33, 31],
        trait: 'Gluttonmouth'
    },
    'Nebiros': {
		name: 'Nebiros',
        inherits: InheritanceType[Element.CURSE],
        level: 74,
		currentLevel: 74,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST],
        skills: [
            ['Marin Karin', 0],
            ['Mapsiodyne', 0],
            ['Marakukaja', 0],
            ['Brain Jack', 76],
            ['Brainwash Boost', 77],
            ['Megidolaon', 78],
            ['Null Bless', 80]
        ],
        stats: [45, 52, 44, 46, 42],
        trait: 'Psychic Bloodline'
    },
    'Neko Shogun': {
		name: 'Neko Shogun',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 30,
		currentLevel: 30,
        arcana: Arcana.STAR,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.RESIST],
        skills: [
            ['Psio', 0],
            ['Diarama', 0],
            ['Masukukaja', 0],
            ['Invigorate 1', 31],
            ['Cornered Fang', 33],
            ['Defense Master', 35],
            ['Fortified Moxy', 36]
        ],
        stats: [19, 20, 19, 21, 18],
        trait: 'Pinch Anchor'
    },
    'Nekomata': {
		name: 'Nekomata',
        inherits: InheritanceType[Element.AILMENT],
        level: 17,
		currentLevel: 17,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Magaru', 0],
            ['Terror Claw', 0],
            ['Evil Touch', 0],
            ['Hysterical Slap', 18],
            ['Wind Break', 20],
            ['Elec Wall', 21],
            ['Dodge Elec', 22]
        ],
        stats: [13, 10, 12, 15, 8],
        trait: 'Foul Odor'
    },
    'Nigi Mitama': {
		name: 'Nigi Mitama',
        inherits: InheritanceType[Element.HEALING],
        level: 22,
		currentLevel: 22,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST],
        skills: [ ['Baisudi', 0], ['Diarama', 0], ['Makouha', 0], ['Divine Grace', 24], ['Me Patra', 25], ['Climate Decorum', 26] ],
        stats: [13, 15, 15, 16, 14],
        trait: 'Relief Bloodline'
    },
    'Norn': {
		name: 'Norn',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 52,
		currentLevel: 52,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Ziodyne', 0],
            ['Garudyne', 0],
            ['Nocturnal Flash', 0],
            ['Diarahan', 54],
            ['Amrita Drop', 55],
            ['Tetraja', 56],
            ['Samarecarm', 57]
        ],
        stats: [30, 38, 33, 34, 28],
        trait: 'Intense Focus'
    },
    'Nue': {
		name: 'Nue',
        inherits: InheritanceType[Element.CURSE],
        level: 20,
		currentLevel: 20,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Maeiha', 0],
            ['Skull Cracker', 0],
            ['Mudo', 21],
            ['Pulinpa', 22],
            ['Mamudo', 24],
            ['Assault Dive', 25],
            ['Curse Boost', 26]
        ],
        stats: [16, 10, 17, 14, 10],
        trait: 'Mighty Gaze'
    },
    'Obariyon': {
		name: 'Obariyon',
        inherits: InheritanceType[Element.PHYS],
        level: 8,
		currentLevel: 8,
        arcana: Arcana.FOOL,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Snap', 0], ['Sukunda', 0], ['Lucky Punch', 9], ['Resist Fear', 10], ['Dekaja', 12] ],
        stats: [7, 3, 9, 8, 4],
        trait: 'Striking Weight'
    },
    'Oberon': {
		name: 'Oberon',
        inherits: InheritanceType[Element.ELEC],
        level: 66,
		currentLevel: 66,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Ziodyne', 0],
            ['Nocturnal Flash', 0],
            ['Heat Wave', 0],
            ['Matarukaja', 68],
            ['Myriad Slashes', 69],
            ['Evade Nuke', 70],
            ['Samarecarm', 71],
            ['Elec Amp', 72]
        ],
        stats: [40, 45, 42, 43, 35],
        trait: 'Static Electricity'
    },
    'Odin': {
		name: 'Odin',
        inherits: InheritanceType[Element.ELEC],
        level: 84,
		currentLevel: 84,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.REPEL],
        skills: [
            ['Thunder Reign', 0],
            ['Myriad Slashes', 0],
            ['Marakukaja', 0],
            ['Wild Thunder', 86],
            ['Concentrate', 87],
            ['Fast Heal', 88],
            ['Elec Amp', 89]
        ],
        stats: [53, 58, 54, 52, 42],
        trait: 'Bargain Bolts',
        max: true
    },
    'Okuninushi': {
		name: 'Okuninushi',
        inherits: InheritanceType[Element.PSY],
        level: 54,
		currentLevel: 54,
        arcana: Arcana.FAITH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.WEAK, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mapsio', 0],
            ['Myriad Slashes', 0],
            ['Matarukaja', 0],
            ['Psy Boost', 55],
            ['Psy Break', 56],
            ['Evade Nuke', 57],
            ['Heat Wave', 59]
        ],
        stats: [39, 35, 33, 32, 30],
        trait: 'Psychic Bloodline'
    },
    'Ongyo-Ki': {
		name: 'Ongyo-Ki',
        special: true,
        inherits: InheritanceType[Element.PHYS],
        level: 89,
		currentLevel: 89,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.REPEL],
        skills: [
            ['Myriad Slashes', 0],
            ['Makajamaon', 0],
            ['Last Stand', 0],
            ['Arms Master', 91],
            ['Regenerate 3', 92],
            ['Firm Stance', 93],
            ['Agneyastra', 95]
        ],
        stats: [56, 53, 57, 59, 49],
        trait: 'Demon\'s Bite',
        max: true
    },
    'Oni': {
		name: 'Oni',
        inherits: InheritanceType[Element.PHYS],
        level: 20,
		currentLevel: 20,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Rampage', 0], ['Counter', 0], ['Snap', 0], ['Giant Slice', 22], ['Sharp Student', 23], ['Memory Blow', 24] ],
        stats: [19, 9, 17, 12, 10],
        trait: 'Retaliating Body'
    },
    'Onmoraki': {
		name: 'Onmoraki',
        inherits: InheritanceType[Element.CURSE],
        level: 12,
		currentLevel: 12,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [ ['Eiha', 0], ['Ice Wall', 0], ['Agi', 13], ['Evil Touch', 14], ['Pulinpa', 15], ['Confuse Boost', 17] ],
        stats: [9, 12, 7, 10, 5],
        trait: 'Intense Focus'
    },
    'Orichalcum': {
		name: 'Orichalcum',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 60,
		currentLevel: 60,
        arcana: Arcana.FAITH,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL],
        skills: [
            ['Inferno', 0],
            ['Diamond Dust', 0],
            ['Panta Rhei', 0],
            ['Thunder Reign', 0],
            ['Psycho Force', 0],
            ['Atomic Flare', 0],
            ['Divine Judgement', 0],
            ['Demonic Decree', 0],
            ['Immunity', 0],
            ['Mouth of Savoring', 0],
            ['Blessed Bloodline', 0]
        ],
        stats: [60, 60, 60, 60, 60],
        trait: 'Ultimate Vessel'
    },
    'Orlov': {
		name: 'Orlov',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 30,
		currentLevel: 30,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK],
        skills: [
            ['Maragion', 0],
            ['Mabufula', 0],
            ['Magarula', 0],
            ['Mazionga', 0],
            ['Mapsio', 0],
            ['Mafreila', 0],
            ['Makouga', 0],
            ['Maeiga', 0],
            ['Heated Bloodline', 0],
            ['Electric Bloodline', 0],
            ['Atomic Bloodline', 0]
        ],
        stats: [30, 30, 30, 30, 30],
        trait: 'Ultimate Vessel'
    },
    'Orobas': {
		name: 'Orobas',
        inherits: InheritanceType[Element.FIRE],
        level: 17,
		currentLevel: 17,
        arcana: Arcana.HIEROPHANT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [ ['Maragi', 0], ['Sukukaja', 0], ['Dekaja', 0], ['Marakunda', 19], ['Fire Break', 20], ['Makajamaon', 21] ],
        stats: [11, 14, 15, 12, 6],
        trait: 'Mighty Gaze'
    },
    'Orthrus': {
		name: 'Orthrus',
        inherits: InheritanceType[Element.FIRE],
        level: 21,
		currentLevel: 21,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Agilao', 0],
            ['Double Fangs', 0],
            ['Maragi', 0],
            ['Burn Boost', 22],
            ['Cornered Fang', 24],
            ['Matarukaja', 26]
        ],
        stats: [16, 14, 14, 19, 7],
        trait: 'Thermal Conduct'
    },
    'Ose': {
		name: 'Ose',
        inherits: InheritanceType[Element.AILMENT],
        level: 42,
		currentLevel: 42,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Oni Kagura', 0],
            ['Counterstrike', 0],
            ['Charge', 0],
            ['Tempest Slash', 43],
            ['Matarukaja', 45],
            ['Heat Wave', 47]
        ],
        stats: [32, 24, 25, 31, 21],
        trait: 'Retaliating Body'
    },
    'Pale Rider': {
		name: 'Pale Rider',
        inherits: InheritanceType[Element.CURSE],
        level: 54,
		currentLevel: 54,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL],
        skills: [
            ['Abysmal Surge', 0],
            ['Eigaon', 0],
            ['Brain Shake', 0],
            ['Curse Boost', 55],
            ['Megidola', 56],
            ['Evade Bless', 58],
            ['Deathbound', 59]
        ],
        stats: [32, 37, 33, 40, 27],
        trait: 'Foul Stench'
    },
    'Parvati': {
		name: 'Parvati',
        inherits: InheritanceType[Element.PSY],
        level: 56,
		currentLevel: 56,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK],
        skills: [
            ['Diarama', 0],
            ['Psiodyne', 0],
            ['Psy Break', 0],
            ['Energy Shower', 57],
            ['Diarahan', 58],
            ['Mapsiodyne', 59],
            ['Null Ice', 61]
        ],
        stats: [33, 39, 33, 39, 31],
        trait: 'Skillful Technique'
    },
    'Pazuzu': {
		name: 'Pazuzu',
        inherits: InheritanceType[Element.CURSE],
        level: 45,
		currentLevel: 45,
        arcana: Arcana.DEVIL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Maeiga', 0],
            ['Tentarafoo', 0],
            ['Mudoon', 0],
            ['Ambient Aid', 47],
            ['Evil Smile', 48],
            ['Stagnant Air', 49],
            ['Eigaon', 50]
        ],
        stats: [29, 33, 27, 26, 27],
        trait: 'Cursed Bloodline'
    },
    'Phoenix': {
		name: 'Phoenix',
        inherits: InheritanceType[Element.NUKE],
        level: 21,
		currentLevel: 21,
        arcana: Arcana.FAITH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Freila', 0], ['Dream Needle', 0], ['Diarama', 22], ['Recarm', 23], ['Nuke Boost', 25], ['Mafreila', 26] ],
        stats: [12, 15, 15, 17, 11],
        trait: 'Atomic Bloodline'
    },
    'Pisaca': {
		name: 'Pisaca',
        inherits: InheritanceType[Element.CURSE],
        level: 28,
		currentLevel: 28,
        arcana: Arcana.DEATH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Dream Needle', 0],
            ['Rampage', 0],
            ['Stagnant Air', 0],
            ['Mamudo', 29],
            ['Abysmal Surge', 31],
            ['Despair Boost', 32],
            ['Mudoon', 33]
        ],
        stats: [19, 21, 21, 16, 14],
        trait: 'Rare Antibody'
    },
    'Pixie': {
		name: 'Pixie',
        inherits: InheritanceType[Element.ELEC],
        level: 2,
		currentLevel: 2,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK],
        skills: [ ['Zio', 0], ['Dia', 0], ['Patra', 3], ['Tarukaja', 5], ['Resist Confuse', 6] ],
        stats: [1, 3, 3, 4, 2],
        trait: 'Static Electricity'
    },
    'Power': {
		name: 'Power',
        inherits: InheritanceType[Element.BLESS],
        level: 41,
		currentLevel: 41,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [
            ['Hamaon', 0],
            ['Brain Shake', 0],
            ['Swift Strike', 42],
            ['Makouga', 43],
            ['Bless Boost', 44],
            ['Masukukaja', 45],
            ['Null Curse', 46]
        ],
        stats: [30, 26, 28, 25, 21],
        trait: 'Internal Hypnosis'
    },
    'Principality': {
		name: 'Principality',
        inherits: InheritanceType[Element.BLESS],
        level: 29,
		currentLevel: 29,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [
            ['Makouga', 0],
            ['Makajamaon', 0],
            ['Tetraja', 0],
            ['Mediarama', 30],
            ['Forget Boost', 32],
            ['Bless Boost', 34],
            ['Mabaisudi', 35]
        ],
        stats: [17, 19, 18, 21, 19],
        trait: 'Blessed Bloodline'
    },
    'Queen Mab': {
		name: 'Queen Mab',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 43,
		currentLevel: 43,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mazionga', 0],
            ['Makajamaon', 0],
            ['Burn Boost', 0],
            ['Matarunda', 44],
            ['Makara Break', 46],
            ['Agidyne', 47],
            ['Concentrate', 48]
        ],
        stats: [23, 35, 26, 30, 22],
        trait: 'Static Electricity'
    },
    'Queen\'s Necklace': {
		name: 'Queen\'s Necklace',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 15,
		currentLevel: 15,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Tarukaja', 0],
            ['Rakukaja', 0],
            ['Sukukaja', 0],
            ['Recarm', 0],
            ['Media', 0],
            ['Tarunda', 0],
            ['Rakunda', 0],
            ['Sukunda', 0],
            ['Potent Hypnosis', 0],
            ['Relief Bloodline', 0],
            ['Savior Bloodline', 0]
        ],
        stats: [15, 15, 15, 15, 15],
        trait: 'Ultimate Vessel'
    },
    'Quetzalcoatl': {
		name: 'Quetzalcoatl',
        inherits: InheritanceType[Element.WIND],
        level: 66,
		currentLevel: 66,
        arcana: Arcana.SUN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Magarula', 0],
            ['Garudyne', 0],
            ['Memory Blow', 0],
            ['Growth 3', 68],
            ['Regenerate 3', 69],
            ['Magarudyne', 70],
            ['Wind Amp', 71]
        ],
        stats: [41, 46, 41, 43, 34],
        trait: 'Wind Bloodline'
    },
    'Raja Naga': {
		name: 'Raja Naga',
        inherits: InheritanceType[Element.ELEC],
        level: 55,
		currentLevel: 55,
        arcana: Arcana.TEMPERANCE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Ziodyne', 0],
            ['Elec Break', 0],
            ['Tentarafoo', 0],
            ['Shock Boost', 57],
            ['Makarakarn', 58],
            ['Maziodyne', 59],
            ['Evade Wind', 60]
        ],
        stats: [33, 37, 36, 35, 31],
        trait: 'Electric Bloodline'
    },
    'Rakshasa': {
		name: 'Rakshasa',
        inherits: InheritanceType[Element.PHYS],
        level: 24,
		currentLevel: 24,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.RESIST, Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST],
        skills: [
            ['Giant Slice', 0],
            ['Wind Wall', 0],
            ['Tarukaja', 0],
            ['Regenerate 1', 26],
            ['Mind Slice', 27],
            ['Counterstrike', 28],
            ['Adverse Resolve', 30]
        ],
        stats: [20, 15, 18, 17, 9],
        trait: 'Skillful Combo'
    },
    'Rangda': {
		name: 'Rangda',
        inherits: InheritanceType[Element.CURSE],
        level: 48,
		currentLevel: 48,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.REPEL, Affinity.REPEL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [ ['Swift Strike', 0], ['Bloodbath', 0], ['Counterstrike', 0], ['Eigaon', 49], ['Matarunda', 51], ['Mudoon', 53] ],
        stats: [28, 34, 30, 33, 26],
        trait: 'Cursed Bloodline'
    },
    'Raphael': {
		name: 'Raphael',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 78,
		currentLevel: 78,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Sword Dance', 0],
            ['Charge', 0],
            ['Dekaja', 0],
            ['Heat Riser', 80],
            ['Growth 3', 81],
            ['Adverse Resolve', 82],
            ['Arms Master', 83]
        ],
        stats: [57, 45, 49, 55, 35],
        trait: 'Pinch Anchor'
    },
    'Red Rider': {
		name: 'Red Rider',
        inherits: InheritanceType[Element.PSY],
        level: 41,
		currentLevel: 41,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Rising Slash', 0],
            ['Psy Break', 0],
            ['Mapsio', 0],
            ['Negative Pile', 42],
            ['Despair Boost', 44],
            ['Ominous Words', 45],
            ['Last Stand', 46]
        ],
        stats: [26, 27, 25, 29, 23],
        trait: 'Ailment Hunter'
    },
    'Regent': {
		name: 'Regent',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 10,
		currentLevel: 10,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Maragi', 0],
            ['Mabufu', 0],
            ['Magaru', 0],
            ['Mazio', 0],
            ['Mapsi', 0],
            ['Mafrei', 0],
            ['Makouha', 0],
            ['Maeiha', 0],
            ['Mighty Gaze', 0],
            ['Skillful Technique', 0],
            ['Skillful Combo', 0]
        ],
        stats: [10, 10, 10, 10, 10],
        trait: 'Ultimate Vessel'
    },
    'Saki Mitama': {
		name: 'Saki Mitama',
        inherits: InheritanceType[Element.HEALING],
        level: 6,
		currentLevel: 6,
        arcana: Arcana.LOVERS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Bufu', 0], ['Energy Drop', 0], ['Wind Wall', 0], ['Growth 1', 7], ['Rakukaja', 8], ['Resist Dizzy', 10] ],
        stats: [4, 6, 5, 6, 4],
        trait: 'Internal Hypnosis'
    },
    'Sandalphon': {
		name: 'Sandalphon',
        inherits: InheritanceType[Element.BLESS],
        level: 75,
		currentLevel: 75,
        arcana: Arcana.MOON,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NULL],
        skills: [
            ['Mahamaon', 0],
            ['Samarecarm', 0],
            ['Amrita Shower', 0],
            ['Angelic Grace', 77],
            ['Repel Curse', 78],
            ['Sword Dance', 79],
            ['Megidolaon', 81]
        ],
        stats: [46, 51, 49, 48, 38],
        trait: 'Omen',
        max: true
    },
    'Sandman': {
		name: 'Sandman',
        inherits: InheritanceType[Element.WIND],
        level: 23,
		currentLevel: 23,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Dormina', 0],
            ['Garula', 0],
            ['Dormin Rush', 0],
            ['Sukunda', 24],
            ['Null Sleep', 26],
            ['Magarula', 27],
            ['Sleep Boost', 28]
        ],
        stats: [11, 13, 14, 17, 21],
        trait: 'Foul Odor'
    },
    'Sarasvati': {
		name: 'Sarasvati',
        inherits: InheritanceType[Element.HEALING],
        level: 50,
		currentLevel: 50,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mediarama', 0],
            ['Ice Wall', 0],
            ['Tentarafoo', 0],
            ['Psy Wall', 51],
            ['Dekaja', 52],
            ['Matarunda', 53],
            ['Diarahan', 54]
        ],
        stats: [30, 35, 32, 33, 27],
        trait: 'Relief Bloodline'
    },
    'Satan': {
		name: 'Satan',
        inherits: InheritanceType[Element.ICE],
        level: 92,
		currentLevel: 92,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL],
        skills: [
            ['Diamond Dust', 0],
            ['Ice Age', 0],
            ['Regenerate 3', 0],
            ['Black Viper', 94],
            ['Invigorate 3', 95],
            ['Fortify Spirit', 96],
            ['Concentrate', 97],
            ['Drain Ice', 98]
        ],
        stats: [62, 59, 55, 52, 55],
        trait: 'Cocytus',
        max: true
    },
    'Satanael': {
		name: 'Satanael',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 95,
		currentLevel: 95,
        arcana: Arcana.FOOL,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.NULL, Affinity.DRAIN],
        skills: [
            ['Maeigaon', 0],
            ['Megidolaon', 0],
            ['Survival Trick', 0],
            ['Riot Gun', 0],
            ['Black Viper', 96],
            ['Heat Riser', 97],
            ['Tyrant\'s Mind', 98],
            ['Victory Cry', 99]
        ],
        stats: [63, 60, 57, 56, 56],
        trait: 'Pagan Allure',
    },
    'Scathach': {
		name: 'Scathach',
        inherits: InheritanceType[Element.WIND],
        level: 77,
		currentLevel: 77,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Mabufudyne', 0],
            ['Myriad Slashes', 0],
            ['Makarakarn', 0],
            ['Freeze Boost', 78],
            ['Matarukaja', 79],
            ['Vorpal Blade', 81],
            ['Attack Master', 82]
        ],
        stats: [48, 52, 46, 48, 44],
        trait: 'Skillful Technique'
    },
    'Seiryu': {
		name: 'Seiryu',
        inherits: InheritanceType[Element.ICE],
        level: 62,
		currentLevel: 62,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Bufudyne', 0],
            ['Diarahan', 0],
            ['Marakukaja', 0],
            ['Repel Nuke', 63],
            ['Mabufudyne', 65],
            ['Amrita Drop', 66],
            ['Makarakarn', 67]
        ],
        stats: [38, 41, 43, 37, 34],
        trait: 'Relentless'
    },
    'Setanta': {
		name: 'Setanta',
        inherits: InheritanceType[Element.PHYS],
        level: 25,
		currentLevel: 25,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Giant Slice', 0], ['Dormin Rush', 0], ['Counter', 0], ['Charge', 27], ['Rebellion', 29], ['Rising Slash', 30] ],
        stats: [19, 16, 18, 13, 16],
        trait: 'Retaliating Body'
    },
    'Seth': {
		name: 'Seth',
        special: true,
        inherits: InheritanceType[Element.FIRE],
        level: 51,
		currentLevel: 51,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST],
        skills: [
            ['One-shot Kill', 0],
            ['Agidyne', 0],
            ['Masukukaja', 0],
            ['Gun Amp', 53],
            ['Fire Break', 54],
            ['Fortify Spirit', 56]
        ],
        stats: [32, 35, 30, 35, 28],
        trait: 'Potent Hypnosis'
    },
    'Shiisaa': {
		name: 'Shiisaa',
        inherits: InheritanceType[Element.ELEC],
        level: 15,
		currentLevel: 15,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [
            ['Double Fangs', 0],
            ['Skull Cracker', 0],
            ['Frei', 0],
            ['Dodge Curse', 16],
            ['Rampage', 17],
            ['Dodge Elec', 19]
        ],
        stats: [10, 11, 11, 11, 9],
        trait: 'Atomic Bloodline'
    },
    'Shiki-Ouji': {
		name: 'Shiki-Ouji',
        inherits: InheritanceType[Element.PSY],
        level: 18,
		currentLevel: 18,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.NULL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Tarukaja', 0],
            ['Taunt', 0],
            ['Double Shot', 0],
            ['Mapsi', 19],
            ['Dekaja', 21],
            ['Psio', 23],
            ['Oni Kagura', 24]
        ],
        stats: [16, 14, 12, 9, 10],
        trait: 'Psychic Bloodline'
    },
    'Shiva': {
		name: 'Shiva',
        special: true,
        inherits: InheritanceType[Element.PSY],
        level: 82,
		currentLevel: 82,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Psycho Force', 0],
            ['Maziodyne', 0],
            ['Enduring Soul', 0],
            ['Riot Gun', 85],
            ['Megidolaon', 86],
            ['Auto-Mataru', 87],
            ['Psycho Blast', 88]
        ],
        stats: [55, 54, 53, 53, 38],
        trait: 'Psychic Bloodline'
    },
    'Siegfried': {
		name: 'Siegfried',
        inherits: InheritanceType[Element.PHYS],
        level: 84,
		currentLevel: 84,
        arcana: Arcana.FAITH,
        affinities: [Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Brave Blade', 0],
            ['Masukukaja', 0],
            ['High Counter', 0],
            ['Charge', 85],
            ['Apt Pupil', 87],
            ['Vorpal Blade', 89],
            ['Auto-Mataru', 90]
        ],
        stats: [61, 43, 55, 55, 45],
        trait: 'Retaliating Body'
    },
    'Silky': {
		name: 'Silky',
        inherits: InheritanceType[Element.HEALING],
        level: 6,
		currentLevel: 6,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Dormina', 0], ['Bufu', 0], ['Dia', 7], ['Patra', 9], ['Sharp Student', 10] ],
        stats: [4, 7, 4, 5, 5],
        trait: 'Intense Focus'
    },
    'Skadi': {
		name: 'Skadi',
        inherits: InheritanceType[Element.ICE],
        level: 53,
		currentLevel: 53,
        arcana: Arcana.PRIESTESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Deadly Fury', 0],
            ['Evil Smile', 0],
            ['Fear Boost', 0],
            ['Ghastly Wail', 54],
            ['Mabufudyne', 56],
            ['Maeigaon', 57],
            ['Spirit Drain', 58]
        ],
        stats: [33, 39, 32, 34, 28],
        trait: 'Bloodstained Eyes'
    },
    'Slime': {
		name: 'Slime',
        inherits: InheritanceType[Element.CURSE],
        level: 10,
		currentLevel: 10,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [ ['Lunge', 0], ['Evil Touch', 0], ['Tarunda', 11], ['Fire Wall', 13], ['Headbutt', 14] ],
        stats: [9, 6, 11, 6, 5],
        trait: 'Rare Antibody'
    },
    'Sraosha': {
		name: 'Sraosha',
        special: true,
        inherits: InheritanceType[Element.BLESS],
        level: 80,
		currentLevel: 80,
        arcana: Arcana.STAR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.WEAK],
        skills: [
            ['Kougaon', 0],
            ['Mahamaon', 0],
            ['Hama Boost', 0],
            ['Makougaon', 81],
            ['Angelic Grace', 83],
            ['Amrita Shower', 84],
            ['Debilitate', 85]
        ],
        stats: [47, 56, 45, 56, 43],
        trait: 'Blessed Bloodline'
    },
    'Stone of Scone': {
		name: 'Stone of Scone',
        'treasure': true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 20,
		currentLevel: 20,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Agilao', 0],
            ['Bufula', 0],
            ['Garula', 0],
            ['Zionga', 0],
            ['Psio', 0],
            ['Freila', 0],
            ['Kouga', 0],
            ['Eiga', 0],
            ['Relentless', 0],
            ['Gluttonmouth', 0],
            ['Intense Focus', 0]
        ],
        stats: [20, 20, 20, 20, 20],
        trait: 'Ultimate Vessel'
    },
    'Succubus': {
		name: 'Succubus',
        inherits: InheritanceType[Element.CURSE],
        level: 7,
		currentLevel: 7,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [ ['Dormina', 0], ['Rebellion', 0], ['Agi', 8], ['Dekaja', 10], ['Sleep Boost', 11], ['Mudo', 12] ],
        stats: [4, 7, 5, 8, 4],
        trait: 'Foul Odor'
    },
    'Sudama': {
		name: 'Sudama',
        inherits: InheritanceType[Element.PSY],
        level: 17,
		currentLevel: 17,
        arcana: Arcana.HERMIT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mapsi', 0],
            ['Lucky Punch', 0],
            ['Tarukaja', 0],
            ['Ambient Aid', 20],
            ['Wind Wall', 21],
            ['Apt Pupil', 22],
            ['Psio', 23]
        ],
        stats: [9, 14, 12, 13, 10],
        trait: 'Gloomy Child'
    },
    'Sui-Ki': {
		name: 'Sui-Ki',
        inherits: InheritanceType[Element.ICE],
        level: 24,
		currentLevel: 24,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Mabufu', 0],
            ['Sledgehammer', 0],
            ['Bufula', 0],
            ['Null Ice', 26],
            ['Wage War', 27],
            ['Mabufula', 28],
            ['Dodge Fire', 29]
        ],
        stats: [16, 15, 15, 18, 15],
        trait: 'Frigid Bloodline'
    },
    'Surt': {
		name: 'Surt',
        inherits: InheritanceType[Element.FIRE],
        level: 83,
		currentLevel: 83,
        arcana: Arcana.MAGICIAN,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.DRAIN, Affinity.WEAK, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Blazing Hell', 0],
            ['Attack Master', 0],
            ['Brave Blade', 0],
            ['Fire Amp', 84],
            ['Marakunda', 85],
            ['Evade Ice', 86],
            ['Gigantomachia', 88]
        ],
        stats: [55, 54, 51, 50, 46],
        trait: 'Heated Bloodline'
    },
    'Suzaku': {
		name: 'Suzaku',
        inherits: InheritanceType[Element.NUKE],
        level: 16,
		currentLevel: 16,
        arcana: Arcana.SUN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Frei', 0],
            ['Tarunda', 0],
            ['Marin Karin', 0],
            ['Dekunda', 18],
            ['Mafrei', 19],
            ['Speed Master', 20],
            ['Matarunda', 21]
        ],
        stats: [9, 12, 10, 15, 9],
        trait: 'Gluttonmouth'
    },
    'Take-Minakata': {
		name: 'Take-Minakata',
        inherits: InheritanceType[Element.ELEC],
        level: 26,
		currentLevel: 26,
        arcana: Arcana.HANGEDMAN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['Zionga', 0],
            ['Assault Dive', 0],
            ['Defense Master', 0],
            ['Mazionga', 27],
            ['Elec Boost', 29],
            ['Swift Strike', 31],
            ['Shock Boost', 32]
        ],
        stats: [17, 19, 18, 16, 15],
        trait: 'Electric Bloodline'
    },
    'Tam Lin': {
		name: 'Tam Lin',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 27,
		currentLevel: 27,
        arcana: Arcana.FAITH,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.WEAK],
        skills: [
            ['Assault Dive', 0],
            ['Brain Shake', 0],
            ['Rebellion', 0],
            ['Sharp Student', 28],
            ['Brain Buster', 30],
            ['Brainwash Boost', 31],
            ['Heat Up', 32]
        ],
        stats: [21, 16, 18, 16, 17],
        trait: 'Gluttonmouth'
    },
    'Thor': {
		name: 'Thor',
        inherits: InheritanceType[Element.ELEC],
        level: 64,
		currentLevel: 64,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST],
        skills: [
            ['Ziodyne', 0],
            ['Megaton Raid', 0],
            ['High Counter', 0],
            ['Elec Amp', 66],
            ['Maziodyne', 67],
            ['Heat Up', 68],
            ['Wild Thunder', 71]
        ],
        stats: [44, 39, 43, 38, 35],
        trait: 'Intense Focus'
    },
    'Thoth': {
		name: 'Thoth',
        inherits: InheritanceType[Element.NUKE],
        level: 36,
		currentLevel: 36,
        arcana: Arcana.EMPEROR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NULL, Affinity.RESIST],
        skills: [
            ['Taunt', 0],
            ['Freila', 0],
            ['Masukunda', 0],
            ['Megido', 37],
            ['Psy Wall', 39],
            ['Concentrate', 40],
            ['Growth 2', 42]
        ],
        stats: [21, 28, 21, 24, 21],
        trait: 'Skillful Technique'
    },
    'Throne': {
		name: 'Throne',
        inherits: InheritanceType[Element.BLESS],
        level: 72,
		currentLevel: 72,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL, Affinity.NEUTRAL],
        skills: [
            ['Agidyne', 0],
            ['Hamaon', 0],
            ['Burn Boost', 0],
            ['Fire Amp', 74],
            ['Makougaon', 75],
            ['Invigorate 3', 76],
            ['Inferno', 78]
        ],
        stats: [42, 49, 43, 46, 43],
        trait: 'Crisis Control'
    },
    'Thunderbird': {
		name: 'Thunderbird',
        inherits: InheritanceType[Element.ELEC],
        level: 34,
		currentLevel: 34,
        arcana: Arcana.SUN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK],
        skills: [
            ['Mazionga', 0],
            ['Tarukaja', 0],
            ['Shock Boost', 0],
            ['Rebellion', 35],
            ['Ziodyne', 37],
            ['Elec Boost', 38],
            ['Maziodyne', 39]
        ],
        stats: [17, 24, 24, 26, 18],
        trait: 'Electric Bloodline'
    },
    'Titania': {
		name: 'Titania',
        inherits: InheritanceType[Element.NUKE],
        level: 56,
		currentLevel: 56,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST],
        skills: [ ['Freidyne', 0], ['Ziodyne', 0], ['Lullaby', 0], ['Concentrate', 59], ['Nuke Amp', 60], ['Mediarahan', 61] ],
        stats: [32, 40, 35, 38, 30],
        trait: 'Foul Stench'
    },
    'Trumpeter': {
		name: 'Trumpeter',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 59,
		currentLevel: 59,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NULL],
        skills: [
            ['Mafreidyne', 0],
            ['Abysmal Surge', 0],
            ['Brain Buster', 0],
            ['Fortify Spirit', 61],
            ['Gun Amp', 62],
            ['Life Aid', 63],
            ['Debilitate', 65]
        ],
        stats: [33, 42, 40, 38, 31],
        trait: 'Relentless'
    },
    'Unicorn': {
		name: 'Unicorn',
        inherits: InheritanceType[Element.BLESS],
        level: 39,
		currentLevel: 39,
        arcana: Arcana.FAITH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [
            ['Assault Dive', 0],
            ['Mahama', 0],
            ['Dekunda', 0],
            ['Samarecarm', 41],
            ['Swift Strike', 42],
            ['Kougaon', 43],
            ['Hamaon', 44]
        ],
        stats: [20, 27, 25, 28, 24],
        trait: 'Blessed Bloodline'
    },
    'Uriel': {
		name: 'Uriel',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 81,
		currentLevel: 81,
        arcana: Arcana.JUSTICE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.REPEL, Affinity.NEUTRAL],
        skills: [
            ['Deathbound', 0],
            ['Myriad Slashes', 0],
            ['Bloodbath', 0],
            ['Repel Nuke', 83],
            ['Megidolaon', 84],
            ['Angelic Grace', 85],
            ['Spell Master', 86]
        ],
        stats: [50, 54, 49, 55, 42],
        trait: 'Mouth of Savoring'
    },
    'Valkyrie': {
		name: 'Valkyrie',
        inherits: InheritanceType[Element.PHYS],
        level: 44,
		currentLevel: 44,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL],
        skills: [
            ['Rising Slash', 0],
            ['Counterstrike', 0],
            ['Attack Master', 45],
            ['Deathbound', 46],
            ['Matarukaja', 47],
            ['Dodge Phys', 49]
        ],
        stats: [33, 24, 28, 29, 25],
        trait: 'Skillful Combo'
    },
    'Vasuki': {
		name: 'Vasuki',
        special: true,
        inherits: InheritanceType[Element.AILMENT],
        level: 68,
		currentLevel: 68,
        arcana: Arcana.STAR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK],
        skills: [
            ['Mahamaon', 0],
            ['Brain Jack', 0],
            ['Triple Down', 0],
            ['Trigger Happy', 70],
            ['Makarakarn', 71],
            ['Brainwash Boost', 72],
            ['Null Curse', 73]
        ],
        stats: [42, 45, 44, 42, 38],
        trait: 'Foul Stench'
    },
    'Vishnu': {
		name: 'Vishnu',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 83,
		currentLevel: 83,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Megidolaon', 0],
            ['Magarudyne', 0],
            ['Ali Dance', 0],
            ['Vacuum Wave', 85],
            ['Concentrate', 86],
            ['Repel Fire', 87],
            ['Wind Amp', 88],
            ['Riot Gun', 90]
        ],
        stats: [56, 51, 49, 57, 43],
        trait: 'Vahana\'s Wings',
        max: true
    },
    'Vohu Manah': {
		name: 'Vohu Manah',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 80,
		currentLevel: 80,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NULL],
        skills: [
            ['Divine Judgement', 0],
            ['Bless Amp', 0],
            ['Makougaon', 0],
            ['Drain Bless', 82],
            ['Fortify Spirit', 83],
            ['Invigorate 3', 84],
            ['Salvation', 85]
        ],
        stats: [46, 59, 45, 56, 41],
        trait: 'Positive Thoughts',
        max: true
    },
    'White Rider': {
		name: 'White Rider',
        inherits: InheritanceType[Element.CURSE],
        level: 38,
		currentLevel: 38,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.REPEL],
        skills: [
            ['Triple Down', 0],
            ['Evil Touch', 0],
            ['Oni Kagura', 0],
            ['Gun Boost', 40],
            ['Maeiga', 41],
            ['Masukukaja', 42],
            ['Foul Breath', 43],
            ['Ailment Boost', 44]
        ],
        stats: [22, 21, 26, 27, 25],
        trait: 'Bloodstained Eyes'
    },
    'Yaksini': {
		name: 'Yaksini',
        inherits: InheritanceType[Element.ICE],
        level: 20,
		currentLevel: 20,
        arcana: Arcana.EMPRESS,
        affinities: [Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Hysterical Slap', 0],
            ['Wage War', 0],
            ['Counter', 0],
            ['Oni Kagura', 22],
            ['Attack Master', 23],
            ['Vicious Strike', 24]
        ],
        stats: [14, 11, 13, 16, 13],
        trait: 'Foul Odor'
    },
    'Yamata-no-Orochi': {
		name: 'Yamata-no-Orochi',
        inherits: InheritanceType[Element.ICE],
        level: 64,
		currentLevel: 64,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.DRAIN, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST],
        skills: [
            ['One-shot Kill', 0],
            ['Mabufudyne', 0],
            ['Freeze Boost', 0],
            ['Drain Ice', 66],
            ['Ice Amp', 67],
            ['Diamond Dust', 69]
        ],
        stats: [44, 38, 48, 36, 33],
        trait: 'Cold-Blooded'
    },
    'Yatagarasu': {
		name: 'Yatagarasu',
        inherits: InheritanceType[Element.FIRE],
        level: 57,
		currentLevel: 57,
        arcana: Arcana.COUNCILLOR,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK],
        skills: [
            ['Agidyne', 0],
            ['Makara Break', 0],
            ['Dekunda', 0],
            ['Mediarahan', 59],
            ['Last Stand', 60],
            ['Wind Break', 61],
            ['Null Wind', 64]
        ],
        stats: [35, 41, 30, 40, 32],
        trait: 'Potent Hypnosis'
    },
    'Yoshitsune': {
		name: 'Yoshitsune',
        special: true,
        inherits: InheritanceType[Element.PHYS],
        level: 87,
		currentLevel: 87,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NULL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL],
        skills: [
            ['Brave Blade', 0],
            ['Charge', 0],
            ['Ziodyne', 0],
            ['Last Stand', 89],
            ['Fast Heal', 90],
            ['Elec Amp', 92],
            ['Hassou Tobi', 94]
        ],
        stats: [63, 52, 50, 54, 49],
        trait: 'Retaliating Body'
    },
    'Yurlungur': {
		name: 'Yurlungur',
        inherits: InheritanceType[Element.ELEC],
        level: 43,
		currentLevel: 43,
        arcana: Arcana.SUN,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Brain Jack', 0],
            ['Mazionga', 0],
            ['Megidola', 0],
            ['Revolution', 45],
            ['Elec Break', 46],
            ['Tetra Break', 48],
            ['Elec Boost', 49]
        ],
        stats: [26, 29, 30, 27, 24],
        trait: 'Mouth of Savoring'
    },
    'Zaou-Gongen': {
		name: 'Zaou-Gongen',
        inherits: InheritanceType[Element.FIRE],
        level: 80,
		currentLevel: 80,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.REPEL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Maragidyne', 0],
            ['Abysmal Surge', 0],
            ['God\'s Hand', 0],
            ['Evade Phys', 82],
            ['Enduring Soul', 83],
            ['Gun Amp', 84],
            ['Blazing Hell', 86]
        ],
        stats: [57, 45, 50, 56, 39],
        trait: 'Undying Fury',
        max: true
    },
    'Zouchouten': {
		name: 'Zouchouten',
        inherits: InheritanceType[Element.ELEC],
        level: 31,
		currentLevel: 31,
        arcana: Arcana.STRENGTH,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Kill Rush', 0],
            ['Zionga', 0],
            ['Terror Claw', 32],
            ['Sharp Student', 33],
            ['Resist Fear', 34],
            ['Swift Strike', 35],
            ['Attack Master', 36]
        ],
        stats: [22, 19, 24, 18, 17],
        trait: 'Electric Bloodline'
    },
    'Ariadne': {
		name: 'Ariadne',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 30,
		currentLevel: 30,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Beast Weaver', 0],
            ['Apt Pupil', 0],
            ['Miracle Punch', 0],
            ['Attack Master', 31],
            ['Fortified Moxy', 32],
            ['Evade Phys', 34],
            ['Charge', 36]
        ],
        stats: [23, 19, 20, 17, 18],
        trait: 'Tag Team',
        'dlc': true
    },
    'Ariadne Picaro': {
		name: 'Ariadne Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 42,
		currentLevel: 42,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.RESIST, Affinity.NEUTRAL],
        skills: [
            ['Beast Weaver', 0],
            ['Apt Pupil', 0],
            ['Miracle Punch', 0],
            ['Auto-Mataru', 43],
            ['Heat Up', 44],
            ['Evade Phys', 46],
            ['Charge', 48]
        ],
        stats: [36, 23, 29, 24, 21],
        trait: 'Tag Team',
        'dlc': true
    },
    'Asterius': {
		name: 'Asterius',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 56,
		currentLevel: 56,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Titanomachia', 0],
            ['Maragidyne', 0],
            ['Burn Boost', 0],
            ['Auto-Mataru', 57],
            ['Fire Amp', 59],
            ['Tetrakarn', 60],
            ['Gigantomachia', 62]
        ],
        stats: [43, 43, 32, 32, 25],
        trait: 'Frenzied Bull',
        'dlc': true
    },
    'Asterius Picaro': {
		name: 'Asterius Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 62,
		currentLevel: 62,
        arcana: Arcana.FORTUNE,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Titanomachia', 0],
            ['Maragidyne', 0],
            ['Burn Boost', 0],
            ['Auto-Masuku', 63],
            ['Fire Amp', 65],
            ['Makarakarn', 66],
            ['Gigantomachia', 68]
        ],
        stats: [46, 46, 36, 36, 29],
        trait: 'Frenzied Bull',
        'dlc': true
    },
    'Athena': {
		name: 'Athena',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 46,
		currentLevel: 46,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.RESIST, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Akasha Arts', 0],
            ['Marakukaja', 0],
            ['Rising Slash', 0],
            ['Diarahan', 47],
            ['Matarukaja', 48],
            ['Auto-Maraku', 50],
            ['Samarecarm', 51],
            ['Megaton Raid', 52]
        ],
        stats: [33, 27, 29, 29, 27],
        trait: 'Grace of the Olive',
        'dlc': true
    },
    'Athena Picaro': {
		name: 'Athena Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 50,
		currentLevel: 50,
        arcana: Arcana.CHARIOT,
        affinities: [Affinity.RESIST, Affinity.NULL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Akasha Arts', 0],
            ['Matarukaja', 0],
            ['Rising Slash', 0],
            ['Diarahan', 51],
            ['Marakukaja', 52],
            ['Auto-Mataru', 54],
            ['Samarecarm', 55],
            ['Megaton Raid', 56]
        ],
        stats: [35, 30, 31, 32, 29],
        trait: 'Grace of the Olive',
        'dlc': true
    },
    'Izanagi': {
		name: 'Izanagi',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 20,
		currentLevel: 20,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Cross Slash', 0],
            ['Zionga', 0],
            ['Tarukaja', 0],
            ['Rising Slash', 21],
            ['Dodge Phys', 22],
            ['Mazionga', 24],
            ['Growth 3', 25]
        ],
        stats: [14, 13, 13, 14, 13],
        trait: 'God Maker',
        'dlc': true
    },
    'Izanagi Picaro': {
		name: 'Izanagi Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 23,
		currentLevel: 23,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL],
        skills: [
            ['Cross Slash', 0],
            ['Zionga', 0],
            ['Rakukaja', 0],
            ['Rising Slash', 24],
            ['Null Phys', 25],
            ['Mazionga', 27],
            ['Growth 3', 28]
        ],
        stats: [16, 15, 15, 16, 14],
        trait: 'God Maker',
        'dlc': true
    },
    'Izanagi-no-Okami': {
		name: 'Izanagi-no-Okami',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 80,
		currentLevel: 80,
        arcana: Arcana.WORLD,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Myriad Truths', 0],
            ['Victory Cry', 0],
            ['Angelic Grace', 0],
            ['Concentrate', 81],
            ['Heat Riser', 82],
            ['Heat Up', 83],
            ['Salvation', 84],
            ['Almighty Boost', 85]
        ],
        stats: [52, 56, 46, 48, 45],
        trait: 'Country Maker',
        'dlc': true
    },
    'Izanagi-no-Okami Picaro': {
		name: 'Izanagi-no-Okami Picaro',
        special: true,
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 89,
		currentLevel: 89,
        arcana: Arcana.WORLD,
        affinities: [Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL],
        skills: [
            ['Myriad Truths', 0],
            ['Victory Cry', 0],
            ['Angelic Grace', 0],
            ['Concentrate', 90],
            ['Debilitate', 91],
            ['Enduring Soul', 92],
            ['Salvation', 93],
            ['Almighty Boost', 94]
        ],
        stats: [54, 61, 56, 58, 45],
        trait: 'Country Maker',
        'dlc': true
    },
    'Kaguya': {
		name: 'Kaguya',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 16,
		currentLevel: 16,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Shining Arrows', 0],
            ['Mediarama', 0],
            ['Counterstrike', 0],
            ['Divine Grace', 17],
            ['Amrita Shower', 18],
            ['Diarahan', 21],
            ['Repel Phys', 22]
        ],
        stats: [11, 15, 12, 11, 6],
        trait: 'Inviolable Beauty',
        'dlc': true
    },
    'Kaguya Picaro': {
		name: 'Kaguya Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 25,
		currentLevel: 25,
        arcana: Arcana.MOON,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Shining Arrows', 0],
            ['Mediarama', 0],
            ['High Counter', 0],
            ['Divine Grace', 26],
            ['Amrita Shower', 27],
            ['Diarahan', 30],
            ['Repel Phys', 31]
        ],
        stats: [17, 20, 19, 15, 11],
        trait: 'Inviolable Beauty',
        'dlc': true
    },
    'Magatsu-Izanagi': {
		name: 'Magatsu-Izanagi',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 44,
		currentLevel: 44,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Magatsu Mandala', 0],
            ['Megidola', 0],
            ['Ghastly Wail', 0],
            ['Maziodyne', 45],
            ['Bloodbath', 46],
            ['Attack Master', 48],
            ['Heat Riser', 50]
        ],
        stats: [37, 35, 32, 25, 10],
        trait: 'Hollow Jester',
        'dlc': true
    },
    'Magatsu-Izanagi Picaro': {
		name: 'Magatsu-Izanagi Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 48,
		currentLevel: 48,
        arcana: Arcana.TOWER,
        affinities: [Affinity.NEUTRAL, Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL, Affinity.NULL],
        skills: [
            ['Magatsu Mandala', 0],
            ['Megidola', 0],
            ['Ghastly Wail', 0],
            ['Magarudyne', 49],
            ['Bloodbath', 50],
            ['Speed Master', 52],
            ['Heat Riser', 54]
        ],
        stats: [40, 38, 35, 27, 11],
        trait: 'Hollow Jester',
        'dlc': true
    },
    'Messiah': {
		name: 'Messiah',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 81,
		currentLevel: 81,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.REPEL, Affinity.WEAK],
        skills: [
            ['Oratorio', 0],
            ['Megidolaon', 0],
            ['God\'s Hand', 0],
            ['Regenerate 3', 82],
            ['Enduring Soul', 83],
            ['Invigorate 3', 84],
            ['Drain Phys', 85],
            ['Almighty Boost', 87]
        ],
        stats: [50, 50, 50, 50, 50],
        trait: 'Hallowed Spirit',
        'dlc': true
    },
    'Messiah Picaro': {
		name: 'Messiah Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 90,
		currentLevel: 90,
        arcana: Arcana.JUDGEMENT,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.RESIST, Affinity.REPEL, Affinity.WEAK],
        skills: [
            ['Oratorio', 0],
            ['Megidolaon', 0],
            ['Agneyastra', 0],
            ['Insta-Heal', 91],
            ['Enduring Soul', 92],
            ['Life Aid', 93],
            ['Firm Stance', 94],
            ['Almighty Boost', 96]
        ],
        stats: [56, 56, 55, 55, 55],
        trait: 'Hallowed Spirit',
        'dlc': true
    },
    'Orpheus': {
		name: 'Orpheus',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 26,
		currentLevel: 26,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK],
        skills: [
            ['Cadenza', 0],
            ['Agilao', 0],
            ['Tarunda', 0],
            ['Endure', 27],
            ['Maragion', 29],
            ['Marakukaja', 30],
            ['Fire Boost', 32]
        ],
        stats: [17, 17, 17, 17, 17],
        trait: 'Circle of Sadness',
        'dlc': true
    },
    'Orpheus F': {
		name: 'Orpheus F',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 11,
		currentLevel: 11,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK],
        skills: [
            ['Neo Cadenza', 0],
            ['Agi', 0],
            ['Tarunda', 0],
            ['Endure', 0],
            ['Maragion', 12],
            ['Marakukaja', 14],
            ['Dodge Curse', 15]
        ],
        stats: [8, 9, 8, 9, 6],
        trait: 'Circle of Sadness',
        'dlc': true
    },
    'Orpheus F Picaro': {
		name: 'Orpheus F Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 13,
		currentLevel: 13,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK],
        skills: [
            ['Neo Cadenza', 0],
            ['Maragi', 0],
            ['Rakunda', 0],
            ['Endure', 0],
            ['Agilao', 14],
            ['Marakukaja', 16],
            ['Dodge Curse', 17]
        ],
        stats: [9, 11, 9, 10, 7],
        trait: 'Circle of Sadness',
        'dlc': true
    },
    'Orpheus Picaro': {
		name: 'Orpheus Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 29,
		currentLevel: 29,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.RESIST, Affinity.WEAK],
        skills: [
            ['Cadenza', 0],
            ['Maragion', 0],
            ['Matarunda', 0],
            ['Endure', 30],
            ['Agidyne', 32],
            ['Matarukaja', 33],
            ['Fire Boost', 35]
        ],
        stats: [19, 19, 19, 19, 18],
        trait: 'Circle of Sadness',
        'dlc': true
    },
    'Raoul': {
		name: 'Raoul',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 76,
		currentLevel: 76,
        arcana: Arcana.FOOL,
        affinities: [Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.NULL],
        skills: [
            ['Phantom Show', 0],
            ['Eigaon', 0],
            ['Ali Dance', 0],
            ['Maeigaon', 78],
            ['Heat Riser', 79],
            ['Curse Amp', 80],
            ['Concentrate', 81],
            ['Life Aid', 82]
        ],
        stats: [47, 49, 43, 54, 42],
        trait: 'Hazy Presence',
        'dlc': true
    },
    'Thanatos': {
		name: 'Thanatos',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 65,
		currentLevel: 65,
        arcana: Arcana.DEATH,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL],
        skills: [
            ['Door of Hades', 0],
            ['Maeigaon', 0],
            ['Mamudoon', 0],
            ['Curse Amp', 66],
            ['One-shot Kill', 68],
            ['Fortified Moxy', 69],
            ['Enduring Soul', 70]
        ],
        stats: [43, 49, 41, 38, 31],
        trait: 'Iron Heart',
        'dlc': true
    },
    'Thanatos Picaro': {
		name: 'Thanatos Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 69,
		currentLevel: 69,
        arcana: Arcana.DEATH,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.REPEL],
        skills: [
            ['Door of Hades', 0],
            ['Maeigaon', 0],
            ['Mamudoon', 0],
            ['Mudo Boost', 70],
            ['One-shot Kill', 72],
            ['Adverse Resolve', 73],
            ['Enduring Soul', 74]
        ],
        stats: [45, 51, 43, 40, 35],
        trait: 'Iron Heart',
        'dlc': true
    },
    'Tsukiyomi': {
		name: 'Tsukiyomi',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 50,
		currentLevel: 50,
        arcana: Arcana.MOON,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.REPEL],
        skills: [
            ['Abyssal Wings', 0],
            ['Drain Curse', 0],
            ['Myriad Slashes', 0],
            ['Life Drain', 0],
            ['Curse Amp', 53],
            ['Vorpal Blade', 55],
            ['Arms Master', 56]
        ],
        stats: [38, 32, 33, 37, 17],
        trait: 'Bolstering Force',
        'dlc': true
    },
    'Tsukiyomi Picaro': {
		name: 'Tsukiyomi Picaro',
        inherits: InheritanceType[Element.ALMIGHTY],
        level: 55,
		currentLevel: 55,
        arcana: Arcana.MOON,
        affinities: [Affinity.RESIST, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.NEUTRAL, Affinity.WEAK, Affinity.RESIST, Affinity.REPEL],
        skills: [
            ['Abyssal Wings', 0],
            ['Drain Curse', 0],
            ['Myriad Slashes', 0],
            ['Spirit Drain', 0],
            ['Curse Amp', 58],
            ['Vorpal Blade', 60],
            ['Spell Master', 61]
        ],
        stats: [41, 35, 36, 40, 20],
        trait: 'Bolstering Force',
        'dlc': true
    }
};

export const DlcPersonas: string [][] = [
    ['Ariadne', 'Ariadne Picaro'],
    ['Asterius', 'Asterius Picaro'],
    ['Athena', 'Athena Picaro'],
    ['Izanagi', 'Izanagi Picaro'],
    ['Izanagi-no-Okami', 'Izanagi-no-Okami Picaro'],
    ['Kaguya', 'Kaguya Picaro'],
    ['Magatsu-Izanagi', 'Magatsu-Izanagi Picaro'],
    ['Messiah', 'Messiah Picaro'],
    ['Orpheus', 'Orpheus Picaro'],
    ['Orpheus F', 'Orpheus F Picaro'],
    ['Thanatos', 'Thanatos Picaro'],
    ['Tsukiyomi', 'Tsukiyomi Picaro'],
    ['Raoul'],
];

export const TreasurePersonas: string [] = [
    'Crystal Skull',
    'Koh-i-Noor',
    'Queen\'s Necklace',
    'Regent',
    'Stone of Scone',
    'Orlov',
    'Emperor\'s Amulet',
    'Hope Diamond',
    'Orichalcum',
];

interface TreasureModMap {
    [index: string]: number[];
}

export const TreasureModifiers: TreasureModMap = {
    [Arcana.FOOL]: [+2, +1, +1, -1, -1, -1, -1, +1, +1],
    [Arcana.MAGICIAN]: [+1, -1, -1, +1, +2, +1, +1, +1, -2],
    [Arcana.PRIESTESS]: [+1, +2, +1, -1, -1, +1, -1, +1, +1],
    [Arcana.EMPRESS]: [+1, +1, +2, -1, -1, +1, +1, -1, +1],
    [Arcana.EMPEROR]: [-1, -1, -1, +2, +1, -1, +1, +1, -1],
    [Arcana.HIEROPHANT]: [-1, -2, -1, +1, +1, -1, -1, -1, +2],
    [Arcana.LOVERS]: [+1, +1, +1, -1, -1, -1, -1, -2, -1],
    [Arcana.CHARIOT]: [-1, -1, -1, +1, +1, +1, -2, -1, -1],
    [Arcana.JUSTICE]: [+1, +2, -1, +1, -1, -2, +1, -1, +1],
    [Arcana.HERMIT]: [-2, +1, -1, +2, -1, -1, +1, +1, -1],
    [Arcana.FORTUNE]: [-1, -1, -1, +1, +2, +1, -1, +1, +1],
    [Arcana.STRENGTH]: [-1, +1, +1, -1, +1, +2, +1, -1, -1],
    [Arcana.HANGEDMAN]: [-1, -1, +1, +1, -1, +1, +2, -1, +1],
    [Arcana.DEATH]: [+1, +1, -1, +1, +1, -1, -1, +2, +1],
    [Arcana.TEMPERANCE]: [+2, -1, +1, -1, -1, +1, +1, -1, -1],
    [Arcana.DEVIL]: [-1, +1, +1, -2, -1, -1, +2, -1, +1],
    [Arcana.TOWER]: [-1, +1, -2, -1, +1, -1, +1, -1, -1],
    [Arcana.STAR]: [+1, -1, -1, +1, +1, +2, -1, +1, +1],
    [Arcana.MOON]: [-1, -1, +2, -1, -2, +1, -1, -1, -1],
    [Arcana.SUN]: [+1, +1, -1, +1, -1, +1, -1, +2, +1],
    [Arcana.JUDGEMENT]: [-1, -1, -1, -1, +1, -1, +1, -1, +1],
    [Arcana.WORLD]: [+1, +1, +1, +1, +1, +1, +1, +1, +1],
    [Arcana.FAITH]: [+1, +1, +1, -1, +1, -1, +1, +1, +2],
    [Arcana.COUNCILLOR]: [+1, +1, +1, +1, +1, -1, +1, +1, +1],
};

export const getAllPersonasOfArcana = (arcana: Arcana, lockedDlc?: string[]): PersonaData[] =>  {
    let arcanaPersonas: PersonaData[] = Object.values(Personas).filter(persona => persona.arcana === arcana).sort((a, b) => a.level - b.level);

    if (lockedDlc && 0 < lockedDlc.length)
        arcanaPersonas = arcanaPersonas.filter(persona => !lockedDlc.includes(persona.name));

    return arcanaPersonas;
}

export const personaHasSkill = (persona: PersonaData, skill: SkillData): boolean => {
    let has: boolean = false;
    persona.skills.forEach(s => {
        if (s[0] === skill.name)
            has = true;
    });
    return has;
}

export const personaCanInherit = (persona: PersonaData, element: Element): boolean => {
    const inherits = [ ...persona.inherits, Element.SUPPORT, Element.ALMIGHTY, Element.PASSIVE, Element.TRAIT];
    return inherits.includes(element);
}

export const getPersonaSkillLevel = (persona: PersonaData, skill: SkillData): number => {
    if (!personaHasSkill(persona, skill))
        return -1;

    let level = 0;
    persona.skills.forEach(s => {
        if (s[0] === skill.name)
            level = s[1];
    });

    return 0 === level ? persona.level : level;
}

export const getPersonaApproxCost = (persona: PersonaData): number => {
    return 2147 + (126 * persona.currentLevel) + (27 * persona.currentLevel * persona.currentLevel);
}

export const isPersonaData = (o: any): o is PersonaData => Object.values(Personas).includes(o);