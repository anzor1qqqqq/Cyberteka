'use client'

import * as React from 'react';

import { usePathname } from "next/navigation";

import PagePriceList from "@/components/pagePriceList";

import '../../../style/priceListPage.css'

const ListPriceProfPage = () => {
    const [clubName, setClubName] = React.useState<'bauman' | 'prof'>('prof');

    const pathName = usePathname();

    React.useMemo(() => {
        const findClubName = pathName.includes('profClub');

        findClubName ? setClubName('prof') : setClubName('bauman');
    }, []);

    return (
        <PagePriceList club={clubName}/>
    );
}
 
export default ListPriceProfPage;