'use client'

import * as React from 'react';

import { GlobalContext } from "@/global/context";

import PagePriceList from "@/components/pagePriceList";

import '../../../style/priceListPage.css'

const ListPricePage = () => {
    const { clubName } = React.useContext(GlobalContext) as { clubName: 'bauman' | 'prof' };

    return (
        <>
            <PagePriceList club={clubName}/>
            
            {/* 

            <div className="contant_rate">
                <div className="round_background"></div>

                <div className="five_hour_rate"></div>

                <div className="five_hour_rate-round">
                    <div></div>
                </div>
            </div>

            <div className="contant_rate">
                <div className="round_background wrapper">
                    <div className="round_background-white_round">
                        <div className="block_rays_sun">
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                            <div className="block_rays_sun-rays"></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
 
export default ListPricePage;