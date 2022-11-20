import { Element } from './types';

export interface SkillData {
    name: string;
    effect: string;
    element: Element;
    
    unique?: boolean;
}

interface SkillMap {
    [index: string]: SkillData;
}

export const Skills: SkillMap = {
    'Drain Bless': {
		name: 'Drain Bless',
        effect: 'Drain Bless attacks.',
        element: Element.PASSIVE,
    },
    'Drain Curse': {
		name: 'Drain Curse',
        effect: 'Drain Curse attacks.',
        element: Element.PASSIVE,
    },
    'Drain Elec': {
		name: 'Drain Elec', effect: 'Drain Electric attacks.', element: Element.PASSIVE},
    'Drain Fire': {
		name: 'Drain Fire',
        effect: 'Drain Fire attacks.',
        element: Element.PASSIVE,
    },
    'Drain Ice': {
		name: 'Drain Ice',
        effect: 'Drain Ice attacks.',
        element: Element.PASSIVE,
    },
    'Drain Nuke': {
		name: 'Drain Nuke',effect: 'Drain Nuclear attacks.', element: Element.PASSIVE, },
    'Drain Phys': {
		name: 'Drain Phys',
        effect: 'Drain Phys attacks.',
        element: Element.PASSIVE,
    },
    'Drain Psy': {
		name: 'Drain Psy',effect: 'Drain Psy attacks.', element: Element.PASSIVE, },
    'Drain Wind': {
		name: 'Drain Wind',effect: 'Drain Wind attacks.', element: Element.PASSIVE, },
    'Abysmal Surge': {
		name: 'Abysmal Surge',
        effect: 'Inflict Despair (medium odds) to all foes.',
        element: Element.AILMENT,    },
    'Abyssal Eye': {
		name: 'Abyssal Eye',
        effect: 'Deal severe Almighty damage to all foes.',
        element: Element.ALMIGHTY,
        unique: true
    },
    'Abyssal Wings': {
		name: 'Abyssal Wings',
        effect: 'Deal severe Curse damage to all foes.',
        element: Element.CURSE,
        unique: true
    },
    'Active Support': {
		name: 'Active Support',
        effect: 'Moral Support may now Charge or recover SP.',
        element: Element.PASSIVE,
        unique: true
    },
    'Adverse Resolve': {
		name: 'Adverse Resolve',
        effect: 'Increase critical rate when being ambushed.',
        element: Element.PASSIVE,
    },
    'Agi': {
		name: 'Agi',
        effect: 'Deal weak Fire damage to 1 foe.',
        element: Element.FIRE,
    },
    'Agidyne': {
		name: 'Agidyne',
        effect: 'Deal heavy Fire damage to 1 foe.',
        element: Element.FIRE,

    },
    'Agilao': {
		name: 'Agilao',
        effect: 'Deal medium Fire damage to 1 foe.',
        element: Element.FIRE,
    },
    'Agneyastra': {
		name: 'Agneyastra',
        effect: 'Deal 1 to 3 times medium Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Ailment Boost': {
		name: 'Ailment Boost',
        effect: 'Increase chance of inflicting all ailments.',
        element: Element.PASSIVE,
    },
    'Ailment Hunter': {
		name: 'Ailment Hunter',
        effect: 'Damage +25% for each foe afflicted with an ailment',
        element: Element.TRAIT,
    },
    'Akasha Arts': {
		name: 'Akasha Arts',
        effect: 'Deal 1-2 times severe Phys damage to all foes.',
        element: Element.PHYS,
        unique: true
    },
    'Ali Dance': {
		name: 'Ali Dance',
        effect: 'Half hit rate of all incoming attacks.',
        element: Element.PASSIVE,
    },
    'All-out Attack Boost': {
		name: 'All-out Attack Boost',effect: 'Increases damage from All-out Attacks', element: Element.PASSIVE},
    'Almighty Amp': {
		name: 'Almighty Amp', effect: 'Strengthen Almighty attacks by 50%.', element: Element.PASSIVE},
    'Allure of Wisdom': {
		name: 'Allure of Wisdom',
        effect: 'Reduces costs of magic skills by 75%',
        element: Element.TRAIT,
    },
    'Almighty Boost': {
		name: 'Almighty Boost',
        effect: 'Strengthen Almighty attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Ambient Aid': {
		name: 'Ambient Aid',
        effect: 'Greatly increase inflicting rate of all status effects under rainy day or special weather warning.',
        element: Element.PASSIVE,
    },
    'Amrita Drop': {
		name: 'Amrita Drop',
        effect: 'Cure all ailments of 1 ally except for unique status.',
        element: Element.HEALING,
    },
    'Amrita Shower': {
		name: 'Amrita Shower',
        effect: 'Cure all ailments of party except for unique status.',
        element: Element.HEALING,
    },
    'Analysis': {
		name: 'Analysis',
        effect: 'Confirm affinities you have previously attacked.',
        element: Element.PASSIVE,
        unique: true
    },
    'Angelic Grace': {
		name: 'Angelic Grace',
        effect: 'Double evasion against Fire/Ice/Elec/Wind/Nuke/Psy/Bless/Curse attacks.',
        element: Element.PASSIVE,
    },
    'Apt Pupil': {
		name: 'Apt Pupil',
        effect: 'Increase critical rate.',
        element: Element.PASSIVE,
    },
    'Arms Master': {
		name: 'Arms Master',
        effect: 'Half HP cost for physical skills.',
        element: Element.PASSIVE,
    },
    'Assault Dive': {
		name: 'Assault Dive',
        effect: 'Deal heavy Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Atomic Bloodline': {
		name: 'Atomic Bloodline',
        effect: 'Halves costs of Nuke skills',
        element: Element.TRAIT,
    },
    'Atomic Flare': {
		name: 'Atomic Flare',
        effect: 'Deal severe Nuclear damage to 1 foe.',
        element: Element.NUKE,
    },
    'Atomic Hellscape': {
		name: 'Atomic Hellscape',effect: 'Reduces costs of Nuke skills by 75%', element: Element.TRAIT,  },
    'Attack Master': {
		name: 'Attack Master',
        effect: 'Automatic Tarukaja at the start of battle.',
        element: Element.PASSIVE,
    },
    'Attract': {
		name: 'Attract',
        effect: 'Raises chance of being targeted',
        element: Element.SUPPORT
    },
    'Auto-Maraku': {
		name: 'Auto-Maraku',
        effect: 'Automatic Marakukaja at the start of battle. (Overwrites Defense Master)',
        element: Element.PASSIVE,
    },
    'Auto-Masuku': {
		name: 'Auto-Masuku',
        effect: 'Automatic Masukukaja at the start of battle. (Overwrites Speed Master)',
        element: Element.PASSIVE,
    },
    'Auto-Mataru': {
		name: 'Auto-Mataru',
        effect: 'Automatic Matarukaja at the start of battle. (Overwrites Attack Master)',
        element: Element.PASSIVE,
    },
    'Ave Maria': {
		name: 'Ave Maria',effect: 'Reduces costs of Support spells by 75%', element: Element.TRAIT, },
    'Ayamur': {
		name: 'Ayamur',
        effect: 'Deal 3 times medium Phys damage to 1 foe. High accuracy.',
        element: Element.PHYS,
        unique: true
    },
    'Bad Beat': {
		name: 'Bad Beat',
        effect: 'Deal medium Phys damage and inflict Despair (low odds) to all foes.',
        element: Element.PHYS,
    },
    'Baisudi': {
		name: 'Baisudi',
        effect: 'Cure Burn/Freeze/Shock of 1 ally.',
        element: Element.HEALING,
    },
    'Bargain Bolts': {
		name: 'Bargain Bolts',effect: 'Reduces costs of Elec skills by 75%', element: Element.TRAIT, },
    'Beast Weaver': {
		name: 'Beast Weaver',
        effect: 'Deal grave Phys damage to 1 foe and user is debuffed with Tarunda.',
        element: Element.PHYS,
        unique: true
    },
    'Black Viper': {
		name: 'Black Viper',
        effect: 'Deal severe Almighty damage to 1 foe.',
        element: Element.ALMIGHTY,
        unique: true
    },
    'Blazing Hell': {
		name: 'Blazing Hell',
        effect: 'Deal severe Fire damage to all foes.',
        element: Element.FIRE,
    },
    'Bleeding Dry Brush': {
		name: 'Bleeding Dry Brush',
        effect: 'Drains next non-Almighty attack for 1 ally, Removes innate weaknesses',
        element: Element.SUPPORT,
        unique: true
    },
    'Bless Amp': {
		name: 'Bless Amp',
        effect: 'Strengthen (non instant death) Bless attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Bless Boost': {
		name: 'Bless Boost',
        effect: 'Strengthen (non instant death) Bless attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Blessed Bloodline': {
		name: 'Blessed Bloodline',
        effect: 'Halves costs of Bless skills',
        element: Element.TRAIT,
    },
    'Bloodbath': {
		name: 'Bloodbath',
        effect: 'Deal heavy Phys damage and inflict Fear (low odds) to all foes.',
        element: Element.PHYS,

    },
    'Bloodstained Eyes': {
		name: 'Bloodstained Eyes',
        effect: 'Raises evasion against foes afflicted with ailments',
        element: Element.TRAIT,
    },
    'Bolstering Force': {
		name: 'Bolstering Force',
        effect: 'Damage dealt during 1 More +50%',
        element: Element.TRAIT,
        unique: true
    },
    'Brain Buster': {
		name: 'Brain Buster',
        effect: 'Deal heavy Phys damage and inflict Brainwash (low odds) to all foes.',
        element: Element.PHYS,
    },
    'Brain Jack': {
		name: 'Brain Jack',
        effect: 'Inflict Brainwash (medium odds) to all foes.',
        element: Element.AILMENT,
    },
    'Brain Shake': {
		name: 'Brain Shake',
        effect: 'Deal medium Phys damage and inflict Brainwash (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Brainwash Boost': {
		name: 'Brainwash Boost',
        effect: 'Increase chance of inflicting Brainwash.',
        element: Element.PASSIVE,
    },
    'Brave Blade': {
		name: 'Brave Blade',
        effect: 'Deal grave Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Brave Step': {
		name: 'Brave Step',
        effect: 'Raises critical rate for 3 turns for all allies',
        element: Element.SUPPORT,
        unique: true
    },
    'Bufu': {
		name: 'Bufu',
        effect: 'Deal weak Ice damage to 1 foe.',
        element: Element.ICE,
    },
    'Bufudyne': {
		name: 'Bufudyne',
        effect: 'Deal heavy Ice damage to 1 foe.',
        element: Element.ICE,
    },
    'Bufula': {
		name: 'Bufula',
        effect: 'Deal medium Ice damage to 1 foe.',
        element: Element.ICE,
    },
    'Burn Boost': {
		name: 'Burn Boost',
        effect: 'Increase chance of inflicting Burn.',
        element: Element.PASSIVE,
    },
    'Cadenza': {
		name: 'Cadenza',
        effect: 'Restore 50% HP of party and increase evasion rate.',
        element: Element.HEALING,
        unique: true
    },
    'Champion\'s Cup': {
		name: 'Champion\'s Cup',
        effect: 'Diarama + Tarukaja',
        element: Element.HEALING,
        unique: true
    },
    'Charge': {
		name: 'Charge',
        effect: 'Multiply user\'s next Phys attack damage by 2.5.',
        element: Element.SUPPORT,
    },
    'Checkmate': {
		name: 'Checkmate', effect: 'Matarunda + Marakunda + Masukunda', element: Element.SUPPORT, unique: true},
    'Chi You\'s Blessing': {
		name: 'Chi You\'s Blessing',
        effect: 'Reduces costs of Psy skills by 75%',
        element: Element.TRAIT,
    },
    'Circle of Sadness': {
		name: 'Circle of Sadness',
        effect: 'Activates endure up to 4 times',
        element: Element.TRAIT,
        unique: true
    },
    'Cleave': {
		name: 'Cleave',
        effect: 'Deal weak Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Climate Decorum': {
		name: 'Climate Decorum',
        effect: 'Greatly increase evasion under rainy day or special weather warning.',
        element: Element.PASSIVE,
    },
    'Cocytus': {
		name: 'Cocytus',effect: 'Reduces costs of Ice skills by 75%', element: Element.TRAIT, },
    'Cold-Blooded': {
		name: 'Cold-Blooded',
        effect: 'Increases chance of inflicting Freeze during 1 More',
        element: Element.TRAIT,
    },
    'Conceal': {
		name: 'Conceal',
        effect: 'Lowers chance of being targeted',
        element: Element.SUPPORT
    },
    'Concentrate': {
		name: 'Concentrate',
        effect: 'Multiply user\'s next magical attack damage by 2.5.',
        element: Element.SUPPORT,
    },
    'Confuse Boost': {
		name: 'Confuse Boost',
        effect: 'Increase chance of inflicting Confuse.',
        element: Element.PASSIVE,
    },
    'Cool Customer': {
		name: 'Cool Customer',
        effect: 'Reduces ailment susceptibility by 50% for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Cornered Fang': {
		name: 'Cornered Fang',
        effect: 'Deal medium Phys damage to 1 foe. More powerful when being ambushed.',
        element: Element.PHYS,
    },
    'Cosmic Flare': {
		name: 'Cosmic Flare',
        effect: 'Deal severe Nuclear damage to all foes.',
        element: Element.NUKE,
    },
    'Counter': {
		name: 'Counter',
        effect: '10% chance of reflecting Phys attacks.',
        element: Element.PASSIVE,
    },
    'Counterstrike': {
		name: 'Counterstrike',
        effect: '15% chance of reflecting Phys attacks.',
        element: Element.PASSIVE,
    },
    'Country Maker': {
		name: 'Country Maker',
        effect: 'Scales damage dealt and received against Compendium completion rate',
        element: Element.TRAIT,
        unique: true
    },
    'Crisis Control': {
		name: 'Crisis Control',
        effect: 'Reduces damage taken when weakness struck',
        element: Element.TRAIT,
    },
    'Cross Slash': {
		name: 'Cross Slash',
        effect: 'Deal 2 times heavy Phys damage to 1 foe. High accuracy.',
        element: Element.PHYS,
        unique: true
    },
    'Curse Amp': {
		name: 'Curse Amp',
        effect: 'Strengthen (non instant death) Curse attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Curse Boost': {
		name: 'Curse Boost',
        effect: 'Strengthen (non instant death) Curse attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Cursed Bloodline': {
		name: 'Cursed Bloodline',
        effect: 'Halves costs of Curse skills',
        element: Element.TRAIT,
    },
    'Dazzler': {
		name: 'Dazzler',
        effect: 'Inflict Dizzy (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'Deadly Fury': {
		name: 'Deadly Fury',
        effect: 'Deal severe Phys damage to 1 foe. More powerful under Baton Pass.',
        element: Element.PHYS,
    },
    'Death Scythe': {
		name: 'Death Scythe',
        effect: 'Deal severe Phys damage and inflict Fear (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Deathbound': {
		name: 'Deathbound',
        effect: 'Deal 1 to 2 times medium Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Deathly Illness': {
		name: 'Deathly Illness',
        effect: 'Increases success rate of instant death skills',
        element: Element.TRAIT,
    },
    'Debilitate': {
		name: 'Debilitate',
        effect: 'Decrease 1 foe\'s Attack, Defense and Agility for 3 turns.',
        element: Element.SUPPORT,
    },
    'Defense Master': {
		name: 'Defense Master',
        effect: 'Automatic Rakukaja at the start of battle.',
        element: Element.PASSIVE,
    },
    'Dekaja': {
		name: 'Dekaja',
        effect: 'Negate all -kaja buff effects of all foes.',
        element: Element.SUPPORT,
    },
    'Dekunda': {
		name: 'Dekunda',
        effect: 'Negate all -nda debuff effects of party.',
        element: Element.SUPPORT,
    },
    'Demon\'s Bite': {
		name: 'Demon\'s Bite',effect: 'Doubles own HP recovery', element: Element.TRAIT, },
    'Demonic Decree': {
		name: 'Demonic Decree',
        effect: 'Half remaining HP of 1 foe.',
        element: Element.CURSE,
    },
    'Despair Boost': {
		name: 'Despair Boost',
        effect: 'Increase chance of inflicting Despair.',
        element: Element.PASSIVE,
    },
    'Dia': {
		name: 'Dia',
        effect: 'Slightly restore 1 ally\'s HP.',
        element: Element.HEALING,
    },
    'Diamond Dust': {
		name: 'Diamond Dust',
        effect: 'Deal severe Ice damage to 1 foe.',
        element: Element.ICE,
    },
    'Diarahan': {
		name: 'Diarahan',
        effect: 'Fully restore 1 ally\'s HP.',
        element: Element.HEALING,
    },
    'Diarama': {
		name: 'Diarama',
        effect: 'Moderately restore 1 ally\'s HP.',
        element: Element.HEALING,
    },
    'Die For Me!': {
		name: 'Die For Me!',
        effect: 'High chance of instantly killing all foes.',
        element: Element.CURSE,
        unique: true
    },
    'Divine Grace': {
		name: 'Divine Grace',
        effect: 'Effects of healing magic are increased by 50%.',
        element: Element.PASSIVE,
    },
    'Divine Judgement': {
		name: 'Divine Judgement',
        effect: 'Half remaining HP of 1 foe.',
        element: Element.BLESS,
    },
    'Dizzy Boost': {
		name: 'Dizzy Boost',
        effect: 'Increase chance of inflicting Dizzy.',
        element: Element.PASSIVE,
    },
    'Dodge Bless': {
		name: 'Dodge Bless',
        effect: 'Double evasion rate against (non instant death) Bless attacks.',
        element: Element.PASSIVE,
    },
    'Dodge Curse': {
		name: 'Dodge Curse',
        effect: 'Double evasion rate against (non instant death) Curse attacks.',
        element: Element.PASSIVE,
    },
    'Dodge Elec': {
		name: 'Dodge Elec',
        effect: 'Double evasion rate against Electric attacks.',
        element: Element.PASSIVE,
    },
    'Dodge Fire': {
		name: 'Dodge Fire',
        effect: 'Double evasion rate against Fire attacks.',
        element: Element.PASSIVE,
    },
    'Dodge Ice': {
		name: 'Dodge Ice',
        effect: 'Double evasion rate against Ice attacks.',
        element: Element.PASSIVE,
    },
    'Dodge Nuke': {
		name: 'Dodge Nuke',
        effect: 'Double evasion rate against Nuclear attacks.',
        element: Element.PASSIVE,
    },
    'Dodge Phys': {
		name: 'Dodge Phys',
        effect: 'Doubles evasion rate against Phys attacks',
        element: Element.PASSIVE,
    },
    'Dodge Psy': {
		name: 'Dodge Psy',
        effect: 'Double evasion rate against Psy attacks.',
        element: Element.PASSIVE,
    },
    'Dodge Wind': {
		name: 'Dodge Wind',
        effect: 'Double evasion rate against Wind attacks.',
        element: Element.PASSIVE,
    },
    'Door of Hades': {
		name: 'Door of Hades',
        effect: 'Deal heavy Almighty damage to all foes with medium chance of instant kill.',
        element: Element.ALMIGHTY,
        unique: true
    },
    'Dormin Rush': {
		name: 'Dormin Rush',
        effect: 'Deal medium Phys damage and inflict Sleep (low odds) to all foes.',
        element: Element.PHYS,
    },
    'Dormina': {
		name: 'Dormina',
        effect: 'Inflict Sleep (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'Double Fangs': {
		name: 'Double Fangs',
        effect: 'Deal 2 times medium Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Double Shot': {
		name: 'Double Shot',
        effect: 'Deal 2 times light Gun damage to 1 foe.',
        element: Element.GUN,
    },
    'Draining Mouth': {
		name: 'Draining Mouth',
        effect: 'Doubles effectiveness of absorption skills',
        element: Element.TRAIT,
    },
    'Dream Needle': {
		name: 'Dream Needle',
        effect: 'Deal weak Gun damage and inflict Sleep (medium odds) to 1 foe.',
        element: Element.GUN,
    },
    'Drunken Passion': {
		name: 'Drunken Passion',effect: 'Reduces costs of Fire skills by 75%', element: Element.TRAIT, },
    'EXP Boost': {
		name: 'EXP Boost',effect: 'EXP +15% after battle', element: Element.PASSIVE},
    'Eccentric Temper': {
		name: 'Eccentric Temper',
        effect: 'Low chance to strengthen Phys attacks by 80% for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Eiga': {
		name: 'Eiga',
        effect: 'Deal medium Curse damage to 1 foe.',
        element: Element.CURSE,
    },
    'Eigaon': {
		name: 'Eigaon',
        effect: 'Deal heavy Curse damage to 1 foe.',
        element: Element.CURSE,
    },
    'Eiha': {
		name: 'Eiha',
        effect: 'Deal weak Curse damage to 1 foe.',
        element: Element.CURSE,
    },
    'Elec Amp': {
		name: 'Elec Amp',
        effect: 'Strengthen Electric attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Elec Boost': {
		name: 'Elec Boost',
        effect: 'Strengthen Electric attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Elec Break': {
		name: 'Elec Break',
        effect: 'Negate Electric resistances of all foes.',
        element: Element.SUPPORT,
    },
    'Elec Wall': {
		name: 'Elec Wall',
        effect: 'Create a shield on 1 ally to reduce damage of Electric attacks for 3 turns.',
        element: Element.SUPPORT,
    },
    'Electric Bloodline': {
		name: 'Electric Bloodline',
        effect: 'Halves costs of Elec skills',
        element: Element.TRAIT,
    },
    'Emergency Shift': {
		name: 'Emergency Shift',
        effect: 'Chance to swap current party with backups when 2 or more people are KO\'d.',
        element: Element.PASSIVE,
        unique: true
    },
    'Endure': {
		name: 'Endure',
        effect: 'Survive one fatal blow with 1 HP remaining.',
        element: Element.PASSIVE,
    },
    'Enduring Soul': {
		name: 'Enduring Soul',
        effect: 'Survive one fatal blow with HP completely recovered.',
        element: Element.PASSIVE,
    },
    'Energy Drop': {
		name: 'Energy Drop',
        effect: 'Cure Confuse/Fear/Despair/Rage/Brainwash of 1 ally.',
        element: Element.HEALING,
    },
    'Energy Shower': {
		name: 'Energy Shower',
        effect: 'Cure Confuse/Fear/Despair/Rage/Brainwash of party.',
        element: Element.HEALING,
    },
    'Evade Bless': {
		name: 'Evade Bless',
        effect: 'Triple evasion rate against (non instant death) Bless attacks.',
        element: Element.PASSIVE,
    },
    'Evade Curse': {
		name: 'Evade Curse',
        effect: 'Triple evasion rate against (non instant death) Curse attacks.',
        element: Element.PASSIVE,
    },
    'Evade Elec': {
		name: 'Evade Elec',
        effect: 'Triple evasion rate against Electric attacks.',
        element: Element.PASSIVE,
    },
    'Evade Fire': {
		name: 'Evade Fire',
        effect: 'Triple evasion rate against Fire attacks.',
        element: Element.PASSIVE,
    },
    'Evade Ice': {
		name: 'Evade Ice',effect: 'Triple evasion rate against Ice attacks.', element: Element.PASSIVE, },
    'Evade Nuke': {
		name: 'Evade Nuke',
        effect: 'Triple evasion rate against Nuclear attacks.',
        element: Element.PASSIVE,
    },
    'Evade Phys': {
		name: 'Evade Phys',
        effect: 'Triples evasion rate against Phys attacks',
        element: Element.PASSIVE,
    },
    'Evade Psy': {
		name: 'Evade Psy',
        effect: 'Triple evasion rate against Psy attacks.',
        element: Element.PASSIVE,
    },
    'Evade Wind': {
		name: 'Evade Wind',
        effect: 'Triple evasion rate against Wind attacks.',
        element: Element.PASSIVE,
    },
    'Evil Smile': {
		name: 'Evil Smile',
        effect: 'Inflict Fear (medium odds) to all foes.',
        element: Element.AILMENT,
    },
    'Evil Touch': {
		name: 'Evil Touch',
        effect: 'Inflict Fear (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'Explosive Scheme': {
		name: 'Explosive Scheme',
        effect: 'Restores 25% HP after Futaba\'s All-Out Attack for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Famine\'s Scream': {
		name: 'Famine\'s Scream',
        effect: 'Inflict Hunger (medium odds) to all foes.',
        element: Element.AILMENT,
        unique: true
    },
    'Fast Heal': {
		name: 'Fast Heal',
        effect: 'Half the time needed to recover from ailments.',
        element: Element.PASSIVE,
    },
    'Fear Boost': {
		name: 'Fear Boost',
        effect: 'Increase chance of inflicting Fear.',
        element: Element.PASSIVE,
    },
    'Fighting Spirit': {
		name: 'Fighting Spirit',
        effect: 'Next Phys attack +150% damage for all allies',
        element: Element.SUPPORT,
        unique: true
    },
    'Final Guard': {
		name: 'Final Guard',
        effect: 'Chance to nullify a fatal attack to a current party member.',
        element: Element.PASSIVE,
        unique: true
    },
    'Fire Amp': {
		name: 'Fire Amp',
        effect: 'Strengthen Fire attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Fire Boost': {
		name: 'Fire Boost',
        effect: 'Strengthen Fire attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Fire Break': {
		name: 'Fire Break',
        effect: 'Negate Fire resistances of all foes.',
        element: Element.SUPPORT,
    },
    'Fire Wall': {
		name: 'Fire Wall',
        effect: 'Create a shield on 1 ally to reduce damage of Fire attacks for 3 turns.',
        element: Element.SUPPORT,
    },
    'Firm Stance': {
		name: 'Firm Stance',
        effect: 'Half all incoming damage by sacrificing evasion completely.',
        element: Element.PASSIVE,
    },
    'Flash Bomb': {
		name: 'Flash Bomb',
        effect: 'Deal medium Phys damage and inflict Dizzy (low odds) to all foes.',
        element: Element.PHYS,
    },
    'Forget Boost': {
		name: 'Forget Boost',
        effect: 'Increase chance of inflicting Forget.',
        element: Element.PASSIVE,
    },
    'Fortified Moxy': {
		name: 'Fortified Moxy',
        effect: 'Increase critical rate when beginning battle with preemptive turn.',
        element: Element.PASSIVE,
    },
    'Fortify Spirit': {
		name: 'Fortify Spirit',
        effect: 'Reduce susceptibilities to all ailments.',
        element: Element.PASSIVE,
    },
    'Foul Breath': {
		name: 'Foul Breath',
        effect: 'Increase susceptibility to all ailments of 1 foe.',
        element: Element.ALMIGHTY,
    },
    'Foul Odor': {
		name: 'Foul Odor',
        effect: 'Increases chance of inflicting ailments after Baton Pass',
        element: Element.TRAIT,
    },
    'Foul Stench': {
		name: 'Foul Stench',
        effect: 'Increases chance of inflicting ailments',
        element: Element.TRAIT,
    },
    'Freeze Boost': {
		name: 'Freeze Boost',
        effect: 'Increase chance of inflicting Freeze.',
        element: Element.PASSIVE,
    },
    'Frei': {
		name: 'Frei',
        effect: 'Deal weak Nuclear damage to 1 foe.',
        element: Element.NUKE,
    },
    'Freidyne': {
		name: 'Freidyne',
        effect: 'Deal heavy Nuclear damage to 1 foe.',
        element: Element.NUKE,
    },
    'Freila': {
		name: 'Freila',
        effect: 'Deal medium Nuclear damage to 1 foe.',
        element: Element.NUKE,
    },
    'Frenzied Bull': {
		name: 'Frenzied Bull',
        effect: 'Scales damage dealt against lost HP under 50%',
        element: Element.TRAIT,
        unique: true
    },
    'Frigid Bloodline': {
		name: 'Frigid Bloodline',
        effect: 'Halves costs of Ice skills',
        element: Element.TRAIT,
    },
    'Gaia Blessing': {
		name: 'Gaia Blessing',
        effect: 'Increases chance of inflicting Burn, Freeze, and Shock by 50% for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Gaia Pact': {
		name: 'Gaia Pact',
        effect: 'Increases chance of inflicting Burn, Freeze, and Shock by 25% for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Gambler\'s Foresight': {
		name: 'Gambler\'s Foresight',
        effect: 'Masukukaja, Begins battle with Concentrate',
        element: Element.SUPPORT,
        unique: true
    },
    'Garu': {
		name: 'Garu',
        effect: 'Deal weak Wind damage to 1 foe.',
        element: Element.WIND,
    },
    'Garudyne': {
		name: 'Garudyne',
        effect: 'Deal heavy Wind damage to 1 foe.',
        element: Element.WIND,
    },
    'Garula': {
		name: 'Garula',
        effect: 'Deal medium Wind damage to 1 foe.',
        element: Element.WIND,
    },
    'Gattling Blows': {
		name: 'Gattling Blows',
        effect: 'Deal 3 to 4 times light Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Ghastly Wail': {
		name: 'Ghastly Wail',
        effect: 'Instantly kill all foes under Fear.',
        element: Element.ALMIGHTY,
    },
    'Ghost Nest': {
		name: 'Ghost Nest',
        effect: 'Increases chance of inflicting ailments on downed foes',
        element: Element.TRAIT,
    },
    'Giant Slice': {
		name: 'Giant Slice',
        effect: 'Deal medium Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Gigantomachia': {
		name: 'Gigantomachia',
        effect: 'Deal grave Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Gloomy Child': {
		name: 'Gloomy Child',
        effect: 'Activates all equipped special weather passives',
        element: Element.TRAIT,
    },
    'Gluttonmouth': {
		name: 'Gluttonmouth',
        effect: 'Strengthens own HP recovery by 50%',
        element: Element.TRAIT,
    },
    'God Maker': {
		name: 'God Maker',
        effect: 'Increases chance of ally traits activating',
        element: Element.TRAIT,
        unique: true
    },
    'God\'s Hand': {
		name: 'God\'s Hand',
        effect: 'Deal grave Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Grace of Mother': {
		name: 'Grace of Mother',
        effect: 'Reduces costs of Recovery skills by 75%',
        element: Element.TRAIT,
    },
    'Grace of the Olive': {
		name: 'Grace of the Olive',
        effect: 'Reduces costs of skills to 0 during 1 More',
        element: Element.TRAIT,
        unique: true
    },
    'Great Aim': {
		name: 'Great Aim',effect: 'Gun hit rate +5%', element: Element.PASSIVE},
    'Growth 1': {
		name: 'Growth 1',
        effect: 'Persona gains 1/4 EXP while inactive.',
        element: Element.PASSIVE,
    },
    'Growth 2': {
		name: 'Growth 2',
        effect: 'Persona gains 1/2 EXP while inactive.',
        element: Element.PASSIVE,
    },
    'Growth 3': {
		name: 'Growth 3',
        effect: 'Persona gains full EXP even while inactive.',
        element: Element.PASSIVE,
    },
    'Guiding Tendril': {
		name: 'Guiding Tendril',
        effect: 'Downs all foes, Only usable when ambushing foe, Life Aid',
        element: Element.SUPPORT,
        unique: true
    },
    'Gun Amp': {
		name: 'Gun Amp',
        effect: 'Gun damage +50%',
        element: Element.PASSIVE,
    },
    'Gun Boost': {
		name: 'Gun Boost',effect: 'Gun damage +25%', element: Element.PASSIVE, },
    'Hallowed Spirit': {
		name: 'Hallowed Spirit',
        effect: 'Doubles own HP and SP recovery',
        element: Element.TRAIT,
        unique: true
    },
    'Hama': {
		name: 'Hama',
        effect: 'Small chance of instantly killing 1 foe.',
        element: Element.BLESS,
    },
    'Hama Boost': {
		name: 'Hama Boost',
        effect: 'Increase success rate of instant death by Bless skills.',
        element: Element.PASSIVE,
    },
    'Hamaon': {
		name: 'Hamaon',
        effect: 'Medium chance of instantly killing 1 foe.',
        element: Element.BLESS,
    },
    'Hassou Tobi': {
		name: 'Hassou Tobi',
        effect: 'Deal 8 times weak Phys damage to all foes.',
        element: Element.PHYS,
        unique: true
    },
    'Hazy Presence': {
		name: 'Hazy Presence',
        effect: 'Increases chance of ally follow-up attacks',
        element: Element.TRAIT,
        unique: true
    },
    'Headbutt': {
		name: 'Headbutt',
        effect: 'Deal medium Phys damage and inflict Forget (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Heat Riser': {
		name: 'Heat Riser',
        effect: 'Increase 1 ally\'s Attack, Defense and Agility for 3 turns.',
        element: Element.SUPPORT,
    },
    'Heat Up': {
		name: 'Heat Up',
        effect: 'Recover 5% HP and 10 SP at the start of preemptive turn.',
        element: Element.PASSIVE,
    },
    'Heat Wave': {
		name: 'Heat Wave',
        effect: 'Deal heavy Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Heated Bloodline': {
		name: 'Heated Bloodline',
        effect: 'Halves costs of Fire skills',
        element: Element.TRAIT,
    },
    'High Counter': {
		name: 'High Counter',
        effect: '20% chance of reflecting Phys attacks.',
        element: Element.PASSIVE,
    },
    'High Energy': {
		name: 'High Energy',
        effect: 'Next Magic attack +150% damage for all allies',
        element: Element.SUPPORT,
        unique: true
    },
    'Hollow Jester': {
		name: 'Hollow Jester',
        effect: 'Damage +40% for each foe afflicted with an ailment',
        element: Element.TRAIT,
        unique: true
    },
    'Holy Benevolence': {
		name: 'Holy Benevolence',
        effect: 'Revive all allies with 100% HP',
        element: Element.HEALING,
        unique: true
    },
    'Holy Embrace': {
		name: 'Holy Embrace',
        effect: 'Recover 25% max HP each turn in battle',
        element: Element.PASSIVE,
        unique: true
    },
    'Holy Whisper': {
		name: 'Holy Whisper',
        effect: 'Recover 15% max HP and 15 SP each turn in battle',
        element: Element.PASSIVE,
        unique: true
    },
    'Hyakka Ryouran': {
		name: 'Hyakka Ryouran',
        effect: 'Matarukaja + Marakukaja + Masukukaja',
        element: Element.SUPPORT,
        unique: true
    },
    'Hysterical Slap': {
		name: 'Hysterical Slap',
        effect: 'Deal medium Phys damage and inflict Rage (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Ice Age': {
		name: 'Ice Age',
        effect: 'Deal severe Ice damage to all foes.',
        element: Element.ICE,
    },
    'Ice Amp': {
		name: 'Ice Amp',
        effect: 'Strengthen Ice attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Ice Boost': {
		name: 'Ice Boost',
        effect: 'Strengthen Ice attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Ice Break': {
		name: 'Ice Break',
        effect: 'Negate Ice resistances of all foes.',
        element: Element.SUPPORT,
    },
    'Ice Wall': {
		name: 'Ice Wall',
        effect: 'Create a shield on 1 ally to reduce damage of Ice attacks for 3 turns.',
        element: Element.SUPPORT,
    },
    'Icy Glare': {
		name: 'Icy Glare',
        effect: 'Reduces ailment susceptibility by 25% for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Immunity': {
		name: 'Immunity',
        effect: 'Nullifies ailments',
        element: Element.TRAIT,
    },
    'Inferno': {
		name: 'Inferno',
        effect: 'Deal severe Fire damage to 1 foe.',
        element: Element.FIRE,
    },
    'Infinite Scheme': {
		name: 'Infinite Scheme',
        effect: 'Restores 100% after Futaba\'s All-Out Attack for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Ingenious Spirit': {
		name: 'Ingenious Spirit',
        effect: 'Chance to halve Support and Almighty skill costs for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Insta-Heal': {
		name: 'Insta-Heal',
        effect: 'Recover from an ailment in 1 turn.',
        element: Element.PASSIVE,
    },
    'Intense Focus': {
		name: 'Intense Focus',
        effect: 'Single-target magic damage +20%',
        element: Element.TRAIT,
    },
    'Internal Hypnosis': {
		name: 'Internal Hypnosis',
        effect: 'Extends buffs received by 1 turn',
        element: Element.TRAIT,
    },
    'Invigorate 1': {
		name: 'Invigorate 1',
        effect: 'Recover 3 SP each turn in battle.',
        element: Element.PASSIVE,
    },
    'Invigorate 2': {
		name: 'Invigorate 2',
        effect: 'Recover 5 SP each turn in battle.',
        element: Element.PASSIVE,
    },
    'Invigorate 3': {
		name: 'Invigorate 3',
        effect: 'Recover 7 SP each turn in battle.',
        element: Element.PASSIVE,
    },
    'Inviolable Beauty': {
		name: 'Inviolable Beauty',
        effect: 'Triples damage dealt by Counter skills',
        element: Element.TRAIT,
        unique: true
    },
    'Iron Heart': {
		name: 'Iron Heart',
        effect: 'Halves costs of SP skills after Baton Pass',
        element: Element.TRAIT,
        unique: true
    },
    'Just Die': {
		name: 'Just Die',effect: 'Reduces costs of instant death skills to 0', element: Element.TRAIT, },
    'Kill Rush': {
		name: 'Kill Rush',
        effect: 'Deal 1-3 times light Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Kouga': {
		name: 'Kouga',
        effect: 'Deal medium Bless damage to 1 foe.',
        element: Element.BLESS,
    },
    'Kougaon': {
		name: 'Kougaon',
        effect: 'Deal heavy Bless damage to 1 foe.',
        element: Element.BLESS,
    },
    'Kouha': {
		name: 'Kouha',
        effect: 'Deal weak Bless damage to 1 foe.',
        element: Element.BLESS,
    },
    'Kuzunoha\'s Order': {
		name: 'Kuzunoha\'s Order',effect: 'Reduces skill costs by 25%', element: Element.PASSIVE},
    'Laevateinn': {
		name: 'Laevateinn', effect: 'Colossal damage to 1 foe', element: Element.PHYS, unique: true},
    'Last Stand': {
		name: 'Last Stand',
        effect: 'Reduces enemy hit rate by 2/3 when ambushed',
        element: Element.PASSIVE,
    },
    'Life Aid': {
		name: 'Life Aid',
        effect: 'Recover 8% HP and SP after a successful battle.',
        element: Element.PASSIVE,
    },
    'Life Boost': {
		name: 'Life Boost',effect: 'All Stats +3, SP +20', element: Element.PASSIVE},
    'Life Drain': {
		name: 'Life Drain',
        effect: 'Drains HP from 1 foe.',
        element: Element.ALMIGHTY,
    },
    'Life Leech': {
		name: 'Life Leech',effect: 'Drains 150 HP from 1 foe.', element: Element.ALMIGHTY, unique: true},
    'Life Wall': {
		name: 'Life Wall',
        effect: 'Repels next non-Almighty attack for all allies',
        element: Element.SUPPORT,
        unique: true
    },
    'Linked Bloodline': {
		name: 'Linked Bloodline',
        effect: 'Greatly raises damage dealt after Baton Pass',
        element: Element.TRAIT,
    },
    'Lucky Punch': {
		name: 'Lucky Punch',
        effect: 'Deal minuscule Phys damage to 1 foe. High critical rate.',
        element: Element.PHYS,
    },
    'Lullaby': {
		name: 'Lullaby',
        effect: 'Inflict Sleep (medium odds) to all foes.',
        element: Element.AILMENT,
    },
    'Lunge': {
		name: 'Lunge',
        effect: 'Deal weak Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Mabaisudi': {
		name: 'Mabaisudi',
        effect: 'Cure Burn/Freeze/Shock of party.',
        element: Element.HEALING,
    },
    'Mabufu': {
		name: 'Mabufu',
        effect: 'Deal weak Ice damage to all foes.',
        element: Element.ICE,
    },
    'Mabufudyne': {
		name: 'Mabufudyne',
        effect: 'Deal heavy Ice damage to all foes.',
        element: Element.ICE,
    },
    'Mabufula': {
		name: 'Mabufula',
        effect: 'Deal medium Ice damage to all foes.',
        element: Element.ICE,
    },
    'Maeiga': {
		name: 'Maeiga',
        effect: 'Deal medium Curse damage to all foes.',
        element: Element.CURSE,
    },
    'Maeigaon': {
		name: 'Maeigaon',
        effect: 'Deal heavy Curse damage to all foes.',
        element: Element.CURSE,
    },
    'Maeiha': {
		name: 'Maeiha',
        effect: 'Deal weak Curse damage to all foes.',
        element: Element.CURSE,
    },
    'Mafrei': {
		name: 'Mafrei',
        effect: 'Deal weak Nuclear damage to all foes.',
        element: Element.NUKE,
    },
    'Mafreidyne': {
		name: 'Mafreidyne',
        effect: 'Deal heavy Nuclear damage to all foes.',
        element: Element.NUKE,
    },
    'Mafreila': {
		name: 'Mafreila',
        effect: 'Deal medium Nuclear damage to all foes.',
        element: Element.NUKE,
    },
    'Magaru': {
		name: 'Magaru',
        effect: 'Deal small Wind damage to all foes.',
        element: Element.WIND,
    },
    'Magarudyne': {
		name: 'Magarudyne',
        effect: 'Deal heavy Wind damage to all foes.',
        element: Element.WIND,
    },
    'Magarula': {
		name: 'Magarula',
        effect: 'Deal medium Wind damage to all foes.',
        element: Element.WIND,
    },
    'Magatsu Mandala': {
		name: 'Magatsu Mandala',
        effect: 'Deal heavy Curse damage to all foes and inflict Confuse/Fear/Despair (medium odds).',
        element: Element.CURSE,
        unique: true
    },
    'Magic Ability': {
		name: 'Magic Ability',
        effect: 'Strengthen all magical attacks by 25%.',
        element: Element.PASSIVE
    },
    'Mahama': {
		name: 'Mahama',
        effect: 'Small chance of instantly killing all foes.',
        element: Element.BLESS,
    },
    'Mahamaon': {
		name: 'Mahamaon',
        effect: 'Medium chance of instantly killing all foes.',
        element: Element.BLESS,
    },
    'Majestic Presence': {
		name: 'Majestic Presence',
        effect: 'Doubles effectiveness and decreases costs of Recovery skills for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Makajam': {
		name: 'Makajam',
        effect: 'Inflict Forget (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'Makajamaon': {
		name: 'Makajamaon',
        effect: 'Inflict Forget (medium odds) to all foes.',
        element: Element.AILMENT,
    },
    'Makara Break': {
		name: 'Makara Break',
        effect: 'Remove magic-repellent shields from all foes.',
        element: Element.SUPPORT,
    },
    'Makarakarn': {
		name: 'Makarakarn',
        effect: 'Create a shield on 1 ally to repel 1 magical attack.',
        element: Element.SUPPORT,
    },
    'Makouga': {
		name: 'Makouga',
        effect: 'Deal medium Bless damage to all foes.',
        element: Element.BLESS,
    },
    'Makougaon': {
		name: 'Makougaon',
        effect: 'Deal heavy Bless damage to all foes.',
        element: Element.BLESS,
    },
    'Makouha': {
		name: 'Makouha',
        effect: 'Deal weak Bless damage to all foes.',
        element: Element.BLESS,
    },
    'Mamudo': {
		name: 'Mamudo',
        effect: 'Small chance of instantly killing all foes.',
        element: Element.CURSE,
    },
    'Mamudoon': {
		name: 'Mamudoon',
        effect: 'Medium chance of instantly killing all foes.',
        element: Element.CURSE,
    },
    'Mapsi': {
		name: 'Mapsi',
        effect: 'Deal weak Psy damage to all foes.',
        element: Element.PSY,
    },
    'Mapsio': {
		name: 'Mapsio',
        effect: 'Deal medium Psy damage to all foes.',
        element: Element.PSY,
    },
    'Mapsiodyne': {
		name: 'Mapsiodyne',
        effect: 'Deal heavy Psy damage to all foes.',
        element: Element.PSY,
    },
    'Maragi': {
		name: 'Maragi',
        effect: 'Deal weak Fire damage to all foes.',
        element: Element.FIRE,
    },
    'Maragidyne': {
		name: 'Maragidyne',
        effect: 'Deal heavy Fire damage to all foes.',
        element: Element.FIRE,
    },
    'Maragion': {
		name: 'Maragion',
        effect: 'Deal medium Fire damage to all foes.',
        element: Element.FIRE,
    },
    'Marakukaja': {
		name: 'Marakukaja',
        effect: 'Increase party\'s Defense for 3 turns.',
        element: Element.SUPPORT,
    },
    'Marakunda': {
		name: 'Marakunda',
        effect: 'Decrease all foes\' Defense for 3 turns.',
        element: Element.SUPPORT,
    },
    'Marin Karin': {
		name: 'Marin Karin',
        effect: 'Inflict Brainwash (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'Martyr\'s Gift': {
		name: 'Martyr\'s Gift',
        effect: 'Reduces costs of Bless skills by 75%',
        element: Element.TRAIT,
    },
    'Masquerade': {
		name: 'Masquerade', effect: 'Severe damage to 1 foe, x2 hits', element: Element.PHYS, unique: true},
    'Mastery of Magic': {
		name: 'Mastery of Magic',
        effect: 'Low chance to decrease attack spell costs for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Masukukaja': {
		name: 'Masukukaja',
        effect: 'Increase party\'s Agility for 3 turns.',
        element: Element.SUPPORT,
    },
    'Masukunda': {
		name: 'Masukunda',
        effect: 'Decrease all foes\' Agility for 3 turns.',
        element: Element.SUPPORT,
    },
    'Matarukaja': {
		name: 'Matarukaja',
        effect: 'Increase party\'s Attack power for 3 turns.',
        element: Element.SUPPORT,
    },
    'Matarunda': {
		name: 'Matarunda',
        effect: 'Decrease all foes\' Attack power for 3 turns.',
        element: Element.SUPPORT,
    },
    'Mazio': {
		name: 'Mazio',
        effect: 'Deal weak Electric damage to all foes.',
        element: Element.ELEC,
    },
    'Maziodyne': {
		name: 'Maziodyne',
        effect: 'Deal heavy Electric damage to all foes.',
        element: Element.ELEC,
    },
    'Mazionga': {
		name: 'Mazionga',
        effect: 'Deal medium Electric damage to all foes.',
        element: Element.ELEC,
    },
    'Me Patra': {
		name: 'Me Patra',
        effect: 'Cure Dizzy/Forget/Sleep/Hunger of party.',
        element: Element.HEALING,
    },
    'Media': {
		name: 'Media',
        effect: 'Slightly restore party\'s HP.',
        element: Element.HEALING,
    },
    'Mediarahan': {
		name: 'Mediarahan',
        effect: 'Fully restore party\'s HP.',
        element: Element.HEALING,
    },
    'Mediarama': {
		name: 'Mediarama',
        effect: 'Moderately restore party\'s HP.',
        element: Element.HEALING,
    },
    'Megaton Raid': {
		name: 'Megaton Raid',
        effect: 'Deal severe Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Megido': {
		name: 'Megido',
        effect: 'Deal medium Almighty damage to all foes.',
        element: Element.ALMIGHTY,
    },
    'Megidola': {
		name: 'Megidola',
        effect: 'Deal heavy Almighty damage to all foes.',
        element: Element.ALMIGHTY,
    },
    'Megidolaon': {
		name: 'Megidolaon',
        effect: 'Deal severe Almighty damage to all foes.',
        element: Element.ALMIGHTY,
            },
    'Mementos Scan': {
		name: 'Mementos Scan',
        effect: 'Chance to fully map a floor of Mementos when entering that floor.',
        element: Element.PASSIVE,
        unique: true
    },
    'Memory Blow': {
		name: 'Memory Blow',
        effect: 'Deal light Phys damage and inflict Forget (low odds) to all foes.',
        element: Element.PHYS,
    },
    'Mighty Gaze': {
		name: 'Mighty Gaze',
        effect: 'All-target magic damage +20%',
        element: Element.TRAIT,
    },
    'Mind Slice': {
		name: 'Mind Slice',
        effect: 'Deal medium Phys damage and inflict Confuse (low odds) to all foes.',
        element: Element.PHYS,
    },
    'Miracle Punch': {
		name: 'Miracle Punch',
        effect: 'Deal medium Phys damage to 1 foe. High critical rate.',
        element: Element.PHYS,
    },
    'Miracle Rush': {
		name: 'Miracle Rush',
        effect: 'Deal medium Phys damage to all foes. High critical rate.',
        element: Element.PHYS,
        unique: true
    },
    'Money Boost': {
		name: 'Money Boost',effect: 'Doubles money earned after battle', element: Element.PASSIVE},
    'Moral Support': {
		name: 'Moral Support',
        effect: 'Chance to cast Kaja or party-healing magic during battle.',
        element: Element.PASSIVE,
        unique: true
    },
    'Morning Star': {
		name: 'Morning Star',
        effect: 'Deal severe Almighty damage to all foes.',
        element: Element.ALMIGHTY,
        unique: true
    },
    'Mother\'s Lament': {
		name: 'Mother\'s Lament',
        effect: 'Reduces costs of Curse skills by 75%',
        element: Element.TRAIT,
    },
    'Mouth of Savoring': {
		name: 'Mouth of Savoring',
        effect: 'Strengthens own SP recovery by 50%',
        element: Element.TRAIT,
    },
    'Mudo': {
		name: 'Mudo',
        effect: 'Small chance of instantly killing 1 foe.',
        element: Element.CURSE,
    },
    'Mudo Boost': {
		name: 'Mudo Boost',
        effect: 'Increase success rate of instant death by Curse skills.',
        element: Element.PASSIVE,
    },
    'Mudoon': {
		name: 'Mudoon',
        effect: 'medium chance of instantly killing 1 foe.',
        element: Element.CURSE,
    },
    'Myriad Slashes': {
		name: 'Myriad Slashes',
        effect: 'Deal 2 to 3 times medium Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Myriad Truths': {
		name: 'Myriad Truths',
        effect: 'Deal 3 times heavy Almighty damage to all foes.',
        element: Element.ALMIGHTY,
        unique: true
    },
    'Naranari': {
		name: 'Naranari',effect: 'Doubles effectiveness of SP regeneration skills', element: Element.TRAIT, },
    'Negative Pile': {
		name: 'Negative Pile',
        effect: 'Deal heavy Phys damage and inflict Despair (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Neo Cadenza': {
		name: 'Neo Cadenza',
        effect: 'Restore 50% HP of party and increase attack, defense, and evasion rate.',
        element: Element.HEALING,
        unique: true
    },
    'Nocturnal Flash': {
		name: 'Nocturnal Flash',
        effect: 'Inflict Dizzy (medium odds) to all foes.',
        element: Element.AILMENT,
    },
    'Nuke Amp': {
		name: 'Nuke Amp',
        effect: 'Strengthen Nuclear attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Nuke Boost': {
		name: 'Nuke Boost',
        effect: 'Strengthen Nuclear attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Nuke Break': {
		name: 'Nuke Break',
        effect: 'Negate Nuclear resistances of all foes.',
        element: Element.SUPPORT,
    },
    'Nuke Wall': {
		name: 'Nuke Wall',
        effect: 'Create a shield on 1 ally to reduce damage of Nuclear attacks for 3 turns.',
        element: Element.SUPPORT
    },
    'Null Bless': {
		name: 'Null Bless',
        effect: 'Impart immunity against Bless attacks.',
        element: Element.PASSIVE,
    },
    'Null Brainwash': {
		name: 'Null Brainwash',
        effect: 'Impart immunity against Brainwash.',
        element: Element.PASSIVE,
    },
    'Null Burn': {
		name: 'Null Burn',effect: 'Immune to Burn', element: Element.PASSIVE},
    'Null Confuse': {
		name: 'Null Confuse',effect: 'Impart immunity against Confuse.', element: Element.PASSIVE, },
    'Null Curse': {
		name: 'Null Curse',
        effect: 'Impart immunity against Curse attacks.',
        element: Element.PASSIVE,
    },
    'Null Despair': {
		name: 'Null Despair',effect: 'Impart immunity against Despair.', element: Element.PASSIVE},
    'Null Dizzy': {
		name: 'Null Dizzy',
        effect: 'Impart immunity against Dizzy.',
        element: Element.PASSIVE,
    },
    'Null Elec': {
		name: 'Null Elec',
        effect: 'Impart immunity against Electric attacks.',
        element: Element.PASSIVE,
    },
    'Null Fear': {
		name: 'Null Fear',effect: 'Impart immunity against Fear.', element: Element.PASSIVE},
    'Null Fire': {
		name: 'Null Fire',
        effect: 'Impart immunity against Fire attacks.',
        element: Element.PASSIVE,
    },
    'Null Forget': {
		name: 'Null Forget',effect: 'Impart immunity against Forget.', element: Element.PASSIVE, },
    'Null Freeze': {
		name: 'Null Freeze',effect: 'Immune to Freeze', element: Element.PASSIVE},
    'Null Hunger': {
		name: 'Null Hunger',effect: 'Immune to Hunger', element: Element.PASSIVE},
    'Null Ice': {
		name: 'Null Ice',
        effect: 'Impart immunity against Ice attacks.',
        element: Element.PASSIVE,
    },
    'Null Mortal': {
		name: 'Null Mortal',effect: 'Nullifies damage from Bless and Curse attacks', element: Element.PASSIVE},
    'Null Nuke': {
		name: 'Null Nuke',effect: 'Impart immunity against Nuclear attacks.', element: Element.PASSIVE},
    'Null Phys': {
		name: 'Null Phys',
        effect: 'Impart immunity against Phys attacks.',
        element: Element.PASSIVE,
    },
    'Null Psy': {
		name: 'Null Psy',effect: 'Impart immunity against Psy attacks.', element: Element.PASSIVE},
    'Null Rage': {
		name: 'Null Rage',
        effect: 'Impart immunity against Rage.',
        element: Element.PASSIVE,
    },
    'Null Shock': {
		name: 'Null Shock',effect: 'Immune to Shock', element: Element.PASSIVE},
    'Null Sleep': {
		name: 'Null Sleep',effect: 'Impart immunity against Sleep.', element: Element.PASSIVE, },
    'Null Wind': {
		name: 'Null Wind',
        effect: 'Impart immunity against Wind attacks.',
        element: Element.PASSIVE,
    },
    'Omen': {
		name: 'Omen',
        effect: 'Greatly increases success rate of instant death skills',
        element: Element.TRAIT,
    },
    'Ominous Words': {
		name: 'Ominous Words',
        effect: 'Inflict Despair (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'One-shot Kill': {
		name: 'One-shot Kill',
        effect: 'Deal severe Gun damage to 1 foe. High critical rate.',
        element: Element.GUN,
    },
    'Oni Kagura': {
		name: 'Oni Kagura',
        effect: 'Deal medium Phys damage and inflict Rage (low odds) to all foes.',
        element: Element.PHYS,
    },
    'Oratorio': {
		name: 'Oratorio',
        effect: 'Fully restore party\'s HP and negate all -nda debuffs.',
        element: Element.HEALING,
        unique: true
    },
    'Pagan Allure': {
		name: 'Pagan Allure',
        effect: 'Magic damage +50%, Cannot exceed 100% limit',
        element: Element.TRAIT,
    },
    'Panta Rhei': {
		name: 'Panta Rhei',
        effect: 'Deal severe Wind damage to 1 foe',
        element: Element.WIND,
    },
    'Patra': {
		name: 'Patra',
        effect: 'Cure Dizzy/Forget/Sleep/Hunger of 1 ally.',
        element: Element.HEALING,
    },
    'Phantom Show': {
		name: 'Phantom Show',
        effect: 'Inflict Sleep (high odds) to all foes.',
        element: Element.AILMENT,
        unique: true
    },
    'Pinch Anchor': {
		name: 'Pinch Anchor',
        effect: 'Allows use of ambush-only skills after Baton Pass',
        element: Element.TRAIT,
    },
    'Pinnacle of Magic': {
		name: 'Pinnacle of Magic',
        effect: 'Low chance to halve attack spell costs for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Position Hack': {
		name: 'Position Hack',
        effect: 'Chance to instantly Hold Up enemies when starting a battle.',
        element: Element.PASSIVE,
        unique: true
    },
    'Positive Thoughts': {
		name: 'Positive Thoughts',
        effect: 'Extends buffs received by 2 turns',
        element: Element.TRAIT,
    },
    'Potent Hypnosis': {
		name: 'Potent Hypnosis',
        effect: 'Extends buffs cast by 1 turn',
        element: Element.TRAIT,
    },
    'Power Slash': {
		name: 'Power Slash',
        effect: 'Deal medium Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'President\'s Insight': {
		name: 'President\'s Insight',
        effect: 'Next Magic attack +150% damage for 1 ally, Attack Master',
        element: Element.SUPPORT,
        unique: true
    },
    'Proud Presence': {
		name: 'Proud Presence',
        effect: 'Doubles effectiveness of Recovery skills for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Psi': {
		name: 'Psi',
        effect: 'Deal weak Psy damage to 1 foe.',
        element: Element.PSY,
    },
    'Psio': {
		name: 'Psio',
        effect: 'Deal medium Psy damage to 1 foe.',
        element: Element.PSY,
    },
    'Psiodyne': {
		name: 'Psiodyne',
        effect: 'Deal heavy Psy damage to 1 foe.',
        element: Element.PSY,
    },
    'Psy Amp': {
		name: 'Psy Amp',
        effect: 'Strengthen Psy attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Psy Boost': {
		name: 'Psy Boost',effect: 'Strengthen Psy attacks by 25%.', element: Element.PASSIVE, },
    'Psy Break': {
		name: 'Psy Break',
        effect: 'Negate Psy resistances of all foes.',
        element: Element.SUPPORT,
    },
    'Psy Wall': {
		name: 'Psy Wall',
        effect: 'Create a shield on 1 ally to reduce damage of Psy attacks for 3 turns.',
        element: Element.SUPPORT,
    },
    'Psychic Bloodline': {
		name: 'Psychic Bloodline',
        effect: 'Halves costs of Psy skills',
        element: Element.TRAIT,
    },
    'Psycho Blast': {
		name: 'Psycho Blast',
        effect: 'Deal severe Psy damage to all foes.',
        element: Element.PSY,
    },
    'Psycho Force': {
		name: 'Psycho Force',
        effect: 'Deal severe Psy damage to 1 foe.',
        element: Element.PSY,
    },
    'Pulinpa': {
		name: 'Pulinpa',
        effect: 'Inflict Confuse (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'Rage Boost': {
		name: 'Rage Boost',
        effect: 'Increase chance of inflicting Rage.',
        element: Element.PASSIVE,
    },
    'Raging Temper': {
		name: 'Raging Temper',
        effect: 'Low chance to strengthen Phys attacks by 40% for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Rakukaja': {
		name: 'Rakukaja',
        effect: 'Increase 1 ally\'s Defense for 3 turns.',
        element: Element.SUPPORT,
    },
    'Rakunda': {
		name: 'Rakunda',
        effect: 'Decrease 1 foe\'s Defense for 3 turns.',
        element: Element.SUPPORT,
    },
    'Rampage': {
		name: 'Rampage',
        effect: 'Deal 1 to 3 times weak Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Rare Antibody': {
		name: 'Rare Antibody',
        effect: 'Reduces susceptibility to ailments',
        element: Element.TRAIT,
    },
    'Rebellion': {
		name: 'Rebellion',
        effect: 'Increase 1 ally\'s critical rate for 3 turns.',
        element: Element.SUPPORT,
    },
    'Rebellion Blade': {
		name: 'Rebellion Blade',
        effect: 'Colossal damage to 1 foe, Damage +150% when target downed',
        element: Element.ALMIGHTY,
        unique: true
    },
    'Recarm': {
		name: 'Recarm',
        effect: 'Revive 1 ally with 50% HP recovered.',
        element: Element.HEALING,
    },
    'Regenerate 1': {
		name: 'Regenerate 1',
        effect: 'Restore 2% of max HP each turn in battle.',
        element: Element.PASSIVE,
    },
    'Regenerate 2': {
		name: 'Regenerate 2',
        effect: 'Recover 4% of max HP each turn in battle.',
        element: Element.PASSIVE,
    },
    'Regenerate 3': {
		name: 'Regenerate 3',
        effect: 'Recover 6% of max HP each turn in battle.',
        element: Element.PASSIVE,
    },
    'Relentless': {
		name: 'Relentless',
        effect: 'Damage that strikes foe weaknesses +50%',
        element: Element.TRAIT,
    },
    'Relief Bloodline': {
		name: 'Relief Bloodline',
        effect: 'Halves costs of Support skills',
        element: Element.TRAIT,
    },
    'Repel Bless': {
		name: 'Repel Bless',
        effect: 'Repel Bless attacks.',
        element: Element.PASSIVE,
    },
    'Repel Curse': {
		name: 'Repel Curse',effect: 'Repel Curse attacks.', element: Element.PASSIVE, },
    'Repel Elec': {
		name: 'Repel Elec',effect: 'Repel Electric attacks.', element: Element.PASSIVE,  },
    'Repel Fire': {
		name: 'Repel Fire',
        effect: 'Repel Fire attacks.',
        element: Element.PASSIVE,
    },
    'Repel Ice': {
		name: 'Repel Ice',
        effect: 'Repel Ice attacks.',
        element: Element.PASSIVE,
    },
    'Repel Nuke': {
		name: 'Repel Nuke',
        effect: 'Repel Nuclear attacks.',
        element: Element.PASSIVE,
    },
    'Repel Phys': {
		name: 'Repel Phys',
        effect: 'Repel Phys attacks.',
        element: Element.PASSIVE,
    },
    'Repel Psy': {
		name: 'Repel Psy',effect: 'Repel Psy attacks.', element: Element.PASSIVE,  },
    'Repel Wind': {
		name: 'Repel Wind',
        effect: 'Repel Wind attacks.',
        element: Element.PASSIVE,
    },
    'Resist Bless': {
		name: 'Resist Bless',effect: 'Reduce damage from Bless attacks.', element: Element.PASSIVE, },
    'Resist Brainwash': {
		name: 'Resist Brainwash',
        effect: 'Reduce susceptibility to Brainwash.',
        element: Element.PASSIVE,
    },
    'Resist Burn': {
		name: 'Resist Burn',effect: 'Halves susceptibility to Burn', element: Element.PASSIVE},
    'Resist Confuse': {
		name: 'Resist Confuse',effect: 'Reduce susceptibility to Confuse.', element: Element.PASSIVE, },
    'Resist Curse': {
		name: 'Resist Curse',effect: 'Reduce damage from Curse attacks.', element: Element.PASSIVE},
    'Resist Despair': {
		name: 'Resist Despair',
        effect: 'Reduce susceptibility to Despair.',
        element: Element.PASSIVE,
    },
    'Resist Dizzy': {
		name: 'Resist Dizzy',
        effect: 'Reduce susceptibility to Dizzy.',
        element: Element.PASSIVE,
    },
    'Resist Elec': {
		name: 'Resist Elec',effect: 'Reduce damage from Electric attacks.', element: Element.PASSIVE},
    'Resist Fear': {
		name: 'Resist Fear',
        effect: 'Reduce susceptibility to Fear.',
        element: Element.PASSIVE,
    },
    'Resist Fire': {
		name: 'Resist Fire',effect: 'Reduce damage from Fire attacks.', element: Element.PASSIVE},
    'Resist Forget': {
		name: 'Resist Forget',
        effect: 'Reduce susceptibility to Forget.',
        element: Element.PASSIVE,
    },
    'Resist Freeze': {
		name: 'Resist Freeze',effect: 'Halves susceptibility to Freeze', element: Element.PASSIVE},
    'Resist Hunger': {
		name: 'Resist Hunger',effect: 'Halves susceptibility to Hunger', element: Element.PASSIVE},
    'Resist Ice': {
		name: 'Resist Ice',effect: 'Reduce damage from Ice attacks.', element: Element.PASSIVE},
    'Resist Nuke': {
		name: 'Resist Nuke',effect: 'Reduce damage from Nuclear attacks.', element: Element.PASSIVE},
    'Resist Phys': {
		name: 'Resist Phys',effect: 'Reduce damage from Phys attacks.', element: Element.PASSIVE},
    'Resist Psy': {
		name: 'Resist Psy',effect: 'Reduce damage from Psy attacks.', element: Element.PASSIVE, },
    'Resist Rage': {
		name: 'Resist Rage',effect: 'Reduce susceptibility to Rage.', element: Element.PASSIVE},
    'Resist Shock': {
		name: 'Resist Shock',effect: 'Halves susceptibility to Shock', element: Element.PASSIVE},
    'Resist Sleep': {
		name: 'Resist Sleep',
        effect: 'Reduce susceptibility to Sleep.',
        element: Element.PASSIVE,
    },
    'Resist Wind': {
		name: 'Resist Wind',effect: 'Reduce damage from Wind attacks.', element: Element.PASSIVE, },
    'Retaliating Body': {
		name: 'Retaliating Body',
        effect: 'Doubles damage from Counter skills',
        element: Element.TRAIT,
    },
    'Reverse Rub': {
		name: 'Reverse Rub',effect: 'Inflict Rage (100%) to 1 ally.', element: Element.AILMENT, unique: true},
    'Revolution': {
		name: 'Revolution',
        effect: 'Increase all foes and allies\' critical rate for 3 turns.',
        element: Element.SUPPORT,
    },
    'Riot Gun': {
		name: 'Riot Gun',
        effect: 'Deal severe Gun damage to all foes.',
        element: Element.GUN,
    },
    'Rising Slash': {
		name: 'Rising Slash',
        effect: 'Deal heavy Phys damage to 1 foe. More powerful under Baton Pass.',
        element: Element.PHYS,
    },
    'Salvation': {
		name: 'Salvation',
        effect: 'Fully restore HP and cure all ailments of party except for unique status.',
        element: Element.HEALING,
    },
    'Samarecarm': {
		name: 'Samarecarm',
        effect: 'Revive 1 ally with all HP recovered.',
        element: Element.HEALING,
    },
    'Samsara': {
		name: 'Samsara',
        effect: 'High chance of instantly killing all foes.',
        element: Element.BLESS,
        unique: true
    },
    'Samurai\'s Ruling': {
		name: 'Samurai\'s Ruling',effect: 'Raises critical rate and Magic evasion', element: Element.PASSIVE},
    'Savior Bloodline': {
		name: 'Savior Bloodline',
        effect: 'Halves costs of Recovery skills',
        element: Element.TRAIT,
    },
    'Scoundrel Eyes': {
		name: 'Scoundrel Eyes',
        effect: 'Raises evasion rate against Phys attacks for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Self-Destruct': {
		name: 'Self-Destruct',
        effect: 'Sacrifice self and deal medium Almighty damage to all.',
        element: Element.ALMIGHTY,
        unique: true
    },
    'Sharp Student': {
		name: 'Sharp Student',
        effect: 'Lower odds of receiving critical hit.',
        element: Element.PASSIVE,
    },
    'Shining Arrows': {
		name: 'Shining Arrows',
        effect: 'Deal 4 to 8 times weak Bless damage to all foes.',
        element: Element.BLESS,
        unique: true
    },
    'Shock Boost': {
		name: 'Shock Boost',
        effect: 'Increase chance of inflicting Shock.',
        element: Element.PASSIVE,
    },
    'Skillful Combo': {
		name: 'Skillful Combo',
        effect: 'Raises damage dealt after Baton Pass',
        element: Element.TRAIT,
    },
    'Skillful Technique': {
		name: 'Skillful Technique',
        effect: 'Technical damage +25%',
        element: Element.TRAIT,
    },
    'Skull Cracker': {
		name: 'Skull Cracker',
        effect: 'Deal medium Phys damage and inflict Confuse (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Sledgehammer': {
		name: 'Sledgehammer',
        effect: 'Deal medium Phys damage and inflict Dizzy (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Sleep Boost': {
		name: 'Sleep Boost',
        effect: 'Increase chance of inflicting Sleep.',
        element: Element.PASSIVE,
    },
    'Snap': {
		name: 'Snap',
        effect: 'Deal medium Gun damage to 1 foe.',
        element: Element.GUN,
    },
    'Soul Chain': {
		name: 'Soul Chain',
        effect: 'Recover 20 SP when performing Baton Pass.',
        element: Element.PASSIVE
    },
    'Soul Touch': {
		name: 'Soul Touch',effect: 'Recover 5 SP after Baton Pass', element: Element.PASSIVE},
    'Speed Master': {
		name: 'Speed Master',
        effect: 'Automatic Sukukaja at the start of battle.',
        element: Element.PASSIVE,
    },
    'Spell Master': {
		name: 'Spell Master',
        effect: 'Half SP cost for magic skills.',
        element: Element.PASSIVE,
    },
    'Spirit Drain': {
		name: 'Spirit Drain',
        effect: 'Drains SP from 1 foe.',
        element: Element.ALMIGHTY,
    },
    'Spirit Leech': {
		name: 'Spirit Leech',effect: 'Drains 150 SP from 1 foe.', element: Element.ALMIGHTY, unique: true},
    'Stagnant Air': {
		name: 'Stagnant Air',
        effect: 'Increase susceptibility to all ailments of all foes and allies.',
        element: Element.ALMIGHTY,
    },
    'Static Electricity': {
		name: 'Static Electricity',
        effect: 'Increases chance of inflicting Shock on downed foes',
        element: Element.TRAIT,
    },
    'Stealth': {
		name: 'Stealth',effect: 'Lowers chance of being targeted', element: Element.PASSIVE},
    'Stomach Blow': {
		name: 'Stomach Blow',
        effect: 'Medium Physical damage to 1 foe and inflict Hunger.',
        element: Element.PHYS,
        unique: true
    },
    'Striking Weight': {
		name: 'Striking Weight',
        effect: 'Phys damage +20%',
        element: Element.TRAIT,
    },
    'Subrecover HP': {
		name: 'Subrecover HP',
        effect: 'After battle, 10% HP recovery for backup allies.',
        element: Element.PASSIVE,
        unique: true
    },
    'Subrecover HP EX': {
		name: 'Subrecover HP EX',
        effect: 'After battle, 20% HP recovery for backup allies.',
        element: Element.PASSIVE,
        unique: true
    },
    'Subrecover SP': {
		name: 'Subrecover SP',
        effect: 'After battle, 1% SP recovery for backup allies.',
        element: Element.PASSIVE,
        unique: true
    },
    'Subrecover SP EX': {
		name: 'Subrecover SP EX',
        effect: 'After battle, 3% SP recovery for backup allies.',
        element: Element.PASSIVE,
        unique: true
    },
    'Sukukaja': {
		name: 'Sukukaja',
        effect: 'Increase 1 ally\'s Agility for 3 turns.',
        element: Element.SUPPORT,
    },
    'Sukunda': {
		name: 'Sukunda',
        effect: 'Decrease 1 foe\'s Agility for 3 turns.',
        element: Element.SUPPORT,
    },
    'Summon': {
		name: 'Summon',effect: 'Summon ally reinforcements.', element: Element.ALMIGHTY, unique: true},
    'Support Plus 1': {
		name: 'Support Plus 1',
        effect: 'Adds Masukunda to Moral Support pool',
        element: Element.PASSIVE,
        unique: true
    },
    'Support Plus 2': {
		name: 'Support Plus 2',
        effect: 'Adds Masukunda and Marakunda to Moral Support pool',
        element: Element.PASSIVE,
        unique: true
    },
    'Support Plus 3': {
		name: 'Support Plus 3',
        effect: 'Adds Masukunda, Marakunda, and Matarunda to Moral Support pool',
        element: Element.PASSIVE,
        unique: true
    },
    'Support Rate Up': {
		name: 'Support Rate Up',
        effect: 'Raises chance of Moral Support activating',
        element: Element.PASSIVE,
        unique: true
    },
    'Survival Trick': {
		name: 'Survival Trick',
        effect: 'Survive one instant death attack with 1 HP remaining.',
        element: Element.PASSIVE,
    },
    'Swift Strike': {
		name: 'Swift Strike',
        effect: 'Deal 2 to 4 times weak Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Sword Dance': {
		name: 'Sword Dance',
        effect: 'Deal grave Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Tactical Spirit': {
		name: 'Tactical Spirit',
        effect: 'Chance to halve Support skill costs for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Tag Team': {
		name: 'Tag Team',
        effect: 'Allows use of consumables without expending them after Baton Pass',
        element: Element.TRAIT,
        unique: true
    },
    'Tarukaja': {
		name: 'Tarukaja',
        effect: 'Increase 1 ally\'s Attack power for 3 turns.',
        element: Element.SUPPORT,
    },
    'Tarunda': {
		name: 'Tarunda',
        effect: 'Decrease 1 foe\'s Attack power for 3 turns.',
        element: Element.SUPPORT,
    },
    'Taunt': {
		name: 'Taunt',
        effect: 'Inflict Rage (high odds) to 1 foe.',
        element: Element.AILMENT,
    },
    'Tempest Slash': {
		name: 'Tempest Slash',
        effect: 'Deal 3 to 5 times minuscule Phys damage to 1 foe.',
        element: Element.PHYS,
    },
    'Tentarafoo': {
		name: 'Tentarafoo',
        effect: 'Inflict Confuse (medium odds) to all foes.',
        element: Element.AILMENT,
    },
    'Terror Claw': {
		name: 'Terror Claw',
        effect: 'Deal medium Phys damage and inflict Fear (medium odds) to 1 foe.',
        element: Element.PHYS,
    },
    'Tetra Break': {
		name: 'Tetra Break',
        effect: 'Remove physical-repellent shields from all foes.',
        element: Element.SUPPORT,
    },
    'Tetraja': {
		name: 'Tetraja',
        effect: 'Create shields on party to nullify one instant death attack of Bless or Curse types.',
        element: Element.SUPPORT,
    },
    'Tetrakarn': {
		name: 'Tetrakarn',
        effect: 'Create a shield on 1 ally to repel 1 Phys attack.',
        element: Element.SUPPORT,
    },
    'Thermal Conduct': {
		name: 'Thermal Conduct',
        effect: 'Increases chance of inflicting Burn after Baton Pass',
        element: Element.TRAIT,
    },
    'Thermopylae': {
		name: 'Thermopylae',
        effect: 'Increase party\'s Attack, Defense and Agility for 3 turns. Only usable if the party is being ambushed.',
        element: Element.SUPPORT,
    },
    'Thunder Reign': {
		name: 'Thunder Reign',
        effect: 'Deal severe Electric damage to 1 foe.',
        element: Element.ELEC,
    },
    'Titanomachia': {
		name: 'Titanomachia',
        effect: 'Deal severe Fire damage to all foes and inflict Fear (high odds).',
        element: Element.FIRE,
        unique: true
    },
    'Touch n\' Go': {
		name: 'Touch n\' Go',
        effect: 'Apply Sukukaja when performing Baton Pass.',
        element: Element.PASSIVE,
    },
    'Treasure Reboot': {
		name: 'Treasure Reboot',
        effect: 'Chance to revive search objects in the area after battle.',
        element: Element.PASSIVE,
        unique: true
    },
    'Treasure Skimmer': {
		name: 'Treasure Skimmer',
        effect: 'Find out if a foe is carrying a rare item ahead of time.',
        element: Element.PASSIVE,
        unique: true
    },
    'Trigger Happy': {
		name: 'Trigger Happy',
        effect: 'Increase critical rate of Gun attacks.',
        element: Element.PASSIVE,
    },
    'Triple Down': {
		name: 'Triple Down',
        effect: 'Deal 3 times small Gun damage to all foes.',
        element: Element.GUN,
    },
    'Tyrant\'s Mind': {
		name: 'Tyrant\'s Mind',
        effect: 'All damage +25%, Can exceed 100% limit',
        element: Element.PASSIVE,
        unique: true
    },
    'Tyrant\'s Will': {
		name: 'Tyrant\'s Will',
        effect: 'Next Phys attack +150% damage for 1 ally, Defense Master',
        element: Element.SUPPORT,
        unique: true
    },
    'Ultimate Support': {
		name: 'Ultimate Support',
        effect: 'Moral Support may now fully recover and buff all allies',
        element: Element.PASSIVE,
        unique: true
    },
    'Ultimate Vessel': {
		name: 'Ultimate Vessel',
        effect: 'Carries multiple traits to pass down during fusion',
        element: Element.TRAIT,
        unique: true
    },
    'Undying Fury': {
		name: 'Undying Fury',effect: 'Phys damage +30%', element: Element.TRAIT, },
    'Universal Law': {
		name: 'Universal Law',effect: 'Technical damage +50%', element: Element.TRAIT, },
    'Unparalleled Eyes': {
		name: 'Unparalleled Eyes',
        effect: 'Greatly raises evasion rate against Phys attacks for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Unshaken Will': {
		name: 'Unshaken Will',
        effect: 'Impart immunity against all mental ailments.',
        element: Element.PASSIVE,
        unique: true
    },
    'Vacuum Wave': {
		name: 'Vacuum Wave',
        effect: 'Deal severe Wind damage to all foes.',
        element: Element.WIND,
    },
    'Vahana\'s Wings': {
		name: 'Vahana\'s Wings',effect: 'Reduces costs of Wind skills by 75%', element: Element.TRAIT, },
    'Vajra Blast': {
		name: 'Vajra Blast',
        effect: 'Deal medium Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Vault Guardian': {
		name: 'Vault Guardian',
        effect: 'Marakukaja, Begins battle with Tetrakarn + Makarakarn',
        element: Element.SUPPORT,
        unique: true
    },
    'Veil of Midnight': {
		name: 'Veil of Midnight',
        effect: 'Chance to prevent down when weakness struck for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Veil of Sunrise': {
		name: 'Veil of Sunrise',
        effect: 'High chance to prevent down when weakness struck for all allies',
        element: Element.TRAIT,
        unique: true
    },
    'Vicious Strike': {
		name: 'Vicious Strike',
        effect: 'Deal medium Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Victory Cry': {
		name: 'Victory Cry',
        effect: 'Recover full HP and SP after a successful battle.',
        element: Element.PASSIVE,
    },
    'Vitality of the Tree': {
		name: 'Vitality of the Tree',
        effect: 'Allows use of ambush-only skills under normal conditions',
        element: Element.TRAIT,
    },
    'Vorpal Blade': {
		name: 'Vorpal Blade',
        effect: 'Deal severe Phys damage to all foes.',
        element: Element.PHYS,
    },
    'Wage War': {
		name: 'Wage War',
        effect: 'Inflict Rage (medium odds) to all foes.',
        element: Element.AILMENT,
    },
    'Wealth of Lotus': {
		name: 'Wealth of Lotus',effect: 'Extends buffs cast by 2 turns', element: Element.TRAIT, },
    'Wild Thunder': {
		name: 'Wild Thunder',
        effect: 'Deal severe Electric damage to all foes.',
        element: Element.ELEC,
    },
    'Will of the Sword': {
		name: 'Will of the Sword',
        effect: 'Charge-type effects +200% damage instead, Begins battle with Concentrate',
        element: Element.TRAIT,
    },
    'Wind Amp': {
		name: 'Wind Amp',
        effect: 'Strengthen Wind attacks by 50%.',
        element: Element.PASSIVE,
    },
    'Wind Bloodline': {
		name: 'Wind Bloodline',
        effect: 'Halves costs of Wind skills',
        element: Element.TRAIT,
    },
    'Wind Boost': {
		name: 'Wind Boost',
        effect: 'Strengthen Wind attacks by 25%.',
        element: Element.PASSIVE,
    },
    'Wind Break': {
		name: 'Wind Break',
        effect: 'Negate Wind resistances of all foes.',
        element: Element.SUPPORT,
    },
    'Wind Wall': {
		name: 'Wind Wall',
        effect: 'Create a shield on 1 ally to reduce damage of Wind attacks for 3 turns.',
        element: Element.SUPPORT,
    },
    'Wings of Wisdom': {
		name: 'Wings of Wisdom',
        effect: 'Amrita Shower, Speed Master',
        element: Element.SUPPORT,
        unique: true
    },
    'Zio': {
		name: 'Zio',
        effect: 'Deal weak Electric damage to 1 foe.',
        element: Element.ELEC,
    },
    'Ziodyne': {
		name: 'Ziodyne',
        effect: 'Deal heavy Electric damage to 1 foe.',
        element: Element.ELEC,
    },
    'Zionga': {
		name: 'Zionga',
        effect: 'Deal medium Electric damage to 1 foe.',
        element: Element.ELEC,
    }
}

export const getAllSkillsOfElement = (element: Element): SkillMap => {
  const elementSkills: SkillMap = {};
  Object.keys(Skills).forEach(skill => {
    if (element === Skills[skill].element)
      elementSkills[skill] = Skills[skill];
  });

  return elementSkills;
};