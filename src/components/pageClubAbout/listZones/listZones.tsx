'use client'

import CardClubZone from '../cardClubZone';

import { FC } from "react";
import { IPropsPageClubAbout } from "@/types/types";

const ListZones: FC<IPropsPageClubAbout> = ({club}): JSX.Element => {

    return (
        <>
            {
                club === 'bauman' 
                ? 
                <>
                    <CardClubZone club='bauman' category='standart'/>
                    <CardClubZone club='bauman' category='standartPlus'/>
                    <CardClubZone club='bauman' category='console'/>
                    <CardClubZone club='bauman' category='bootCamp'/>
                </>
                : 
                <>
                    <CardClubZone club='prof' category='standart'/>
                    <CardClubZone club='prof' category='standartPlus'/>
                    <CardClubZone club='prof' category='console'/>
                </>
            }
        </>
    );
}
 
export default ListZones;