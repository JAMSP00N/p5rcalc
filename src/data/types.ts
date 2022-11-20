export enum Arcana {
    FOOL =          'Fool',
    MAGICIAN =      'Magician',
    PRIESTESS =     'Priestess',
    EMPRESS =       'Empress',
    EMPEROR =       'Emperor',
    HIEROPHANT =    'Hieropant',
    LOVERS =        'Lovers',
    CHARIOT =       'Chariot',
    JUSTICE =       'Justice',
    HERMIT =        'Hermit',
    FORTUNE =       'Fortune',
    STRENGTH =      'Strength',
    HANGEDMAN =     'Hanged Man',
    DEATH =         'Death',
    TEMPERANCE =    'Temperance',
    DEVIL =         'Devil',
    TOWER =         'Tower',
    STAR =          'Star',
    MOON =          'Moon',
    SUN =           'Sun',
    JUDGEMENT =     'Judgement',
    WORLD =         'World',
    FAITH =         'Faith',
    COUNCILLOR =    'Councillor',
};

export enum Element {
    PHYS =      'Physical',
    GUN =       'Gun',
    FIRE =      'Fire',
    ICE =       'Ice',
    ELEC =      'Electricity',
    WIND =      'Wind',
    PSY =       'Psychokinesis',
    NUKE =      'Nuclear',
    BLESS =     'Bless',
    CURSE =     'Curse',
    HEALING =   'Healing',
    AILMENT =   'Ailment',
    SUPPORT =   'Support',
    ALMIGHTY =  'Almighty',
    PASSIVE =   'Passive',
    TRAIT =     'Trait',
};

export const enum Affinity {
    NEUTRAL =   '-',
    WEAK =      'wk',
    RESIST =    'rs',
    NULL =      'nu',
    REPEL =     'rp',
    DRAIN =    'dr',
};

interface InheritanceMap {
    [index: string]: Element [];
}

export const InheritanceType: InheritanceMap = {
    [ Element.PHYS ]: [ Element.PHYS, Element.GUN, Element.HEALING, Element.AILMENT ],
    [ Element.FIRE ]: [ Element.PHYS, Element.GUN, Element.FIRE, Element.ELEC, Element.WIND, Element.PSY, Element.NUKE, Element.BLESS, Element.CURSE, Element.HEALING, Element.AILMENT ],
    [ Element.ICE ]: [ Element.PHYS, Element.GUN, Element.ICE, Element.ELEC, Element.WIND, Element.PSY, Element.NUKE, Element.BLESS, Element.CURSE, Element.HEALING, Element.AILMENT ],
    [ Element.ELEC ]: [ Element.PHYS, Element.GUN, Element.FIRE, Element.ICE, Element.ELEC, Element.PSY, Element.NUKE, Element.BLESS, Element.CURSE, Element.HEALING, Element.AILMENT ],
    [ Element.WIND ]: [ Element.PHYS, Element.GUN, Element.FIRE, Element.ICE, Element.WIND, Element.PSY, Element.NUKE, Element.BLESS, Element.CURSE, Element.HEALING, Element.AILMENT ],
    [ Element.PSY ]: [ Element.PHYS, Element.GUN, Element.FIRE, Element.ICE, Element.ELEC, Element.WIND, Element.PSY, Element.BLESS, Element.CURSE, Element.HEALING, Element.AILMENT ],
    [ Element.NUKE ]: [ Element.PHYS, Element.GUN, Element.FIRE, Element.ICE, Element.ELEC, Element.WIND, Element.NUKE, Element.BLESS, Element.CURSE, Element.HEALING, Element.AILMENT ],
    [ Element.BLESS ]: [ Element.FIRE, Element.ICE, Element.ELEC, Element.WIND, Element.PSY, Element.NUKE, Element.BLESS, Element.HEALING ],
    [ Element.CURSE ]: [ Element.FIRE, Element.ICE, Element.ELEC, Element.WIND, Element.PSY, Element.NUKE, Element.CURSE, Element.AILMENT ],
    [ Element.HEALING ]: [ Element.FIRE, Element.ICE, Element.ELEC, Element.WIND, Element.PSY, Element.NUKE, Element.BLESS, Element.HEALING, Element.AILMENT ],
    [ Element.AILMENT ]: [ Element.PHYS, Element.GUN, Element.FIRE, Element.ICE, Element.ELEC, Element.WIND, Element.PSY, Element.NUKE, Element.CURSE, Element.AILMENT ],
    [ Element.ALMIGHTY ]: [ Element.PHYS, Element.GUN, Element.FIRE, Element.ICE, Element.ELEC, Element.WIND, Element.PSY, Element.NUKE, Element.BLESS, Element.CURSE, Element.HEALING, Element.AILMENT ],
};

interface InheritQty {
    parents: number;
    result: number;
}

export const InheritanceQuantities: InheritQty [] = [
    { parents: 0, result: 1 },
    { parents: 6, result: 2 },
    { parents: 9, result: 3 },
    { parents: 13, result: 4 },
    { parents: 24, result: 5 },
    { parents: 32, result: 6 },
    { parents: 42, result: 8 }
];