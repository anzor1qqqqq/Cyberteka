import * as React from 'react';

export interface IChildrenElement {
    children: React.ReactNode,
}

export interface IPropsPageClubAbout {
    club: 'prof' | 'bauman',
}

export interface IPropsCardClubZone extends IPropsPageClubAbout {
    category: 'standart' | 
    'standartPlus' |
    'console' | 
    'bootCamp'
}

export type TStateGlobal = 'bauman' | 'prof' | null;

export interface IPropsContext {
    clubName: TStateGlobal,
    setClubName: React.Dispatch<React.SetStateAction<TStateGlobal>>
}

export type TListRate = Pick<IPropsCardClubZone, 'category'>