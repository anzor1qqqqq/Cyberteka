export interface IPropsPageClubAbout {
    club: 'prof' | 'bauman',
}

export interface IPropsCardClubZone extends IPropsPageClubAbout {
    category: 'standart' | 
    'standartPlus' |
    'console' | 
    'bootCamp'
}