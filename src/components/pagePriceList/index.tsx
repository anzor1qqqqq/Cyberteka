import ListCharactCard from "./listCharactCard";
import ListRateCard from "./listRateCard";

import BackgroundPriceListStandartSVG from "@/svg/backgroundPriceList/zones/standart";

import { IPropsPageClubAbout } from "@/types/types";
import { FC } from 'react'

const PagePriceList: FC<IPropsPageClubAbout> = ({club}) => {
    return (
        <main>
            <section className="container_price_list_standart">
                <BackgroundPriceListStandartSVG/>

                <div className="block_price_list_standart">
                    <h1 className="block_price_list_standart-title">зона <strong className="block_price_list_standart-title-color">стандарт</strong></h1>

                    <div className="block_price_list_standart-charact">
                        <h1 className="block_price_list_standart-charact-title">ХАРАКТЕРИСТИКИ</h1>

                        <ListCharactCard/>
                    </div>

                    <div className="block_price_list_standart-rate">
                        <h1 className="block_price_list_standart-rate-title">ТАРИФЫ И ЦЕНЫ</h1>

                        <ListRateCard category={'standart'}/>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default PagePriceList;