import ListCharactCard from "./listCharactCard";
import ListRateCard from "./listRateCard";
import MapHallClub from "./mapHallClub";

import BackgroundPriceListStandartSVG from "@/svg/backgroundPriceList/zones/standart";
import BackgroundPsSVG from "@/svg/backgroundPriceList/zones/ps";
import BackgroundStandartPlus from "@/svg/backgroundPriceList/zones/standartPlus";
import BackgroundBootCampSVG from "@/svg/backgroundPriceList/zones/bootCamp";
import BackgroundHalLMapSVG from "@/svg/backgroundPriceList/zones/hallMap/firstSvg";
import BackgroundHallMapSecondSVG from "@/svg/backgroundPriceList/zones/hallMap/secondSvg";
import BookingContantSVG from "@/svg/backgroundPriceList/zones/bookingContant";

import ArrowButtomBtnSVG from "@/svg/errorInput/arrowBottomBtn";
import ArrowLeftBtnSVG from "@/svg/errorInput/arrowLeftBtn";
import ButtonBookUI from "@/UI/buttonBook";

import { IPropsPageClubAbout } from "@/types/types";
import { FC } from 'react'

const PagePriceList: FC<IPropsPageClubAbout> = ({club}) => {
    return (
        <main>
            <section className="container_price_list_standart" id="standart">
                <BackgroundPriceListStandartSVG/>

                <div className="block_price_list_standart">
                    <h1 className="block_price_list_standart-title">зона <strong className="block_price_list_standart-title-color">стандарт</strong></h1>

                    <div className="block_price_list_standart_plus-charact">
                        <h1 className="block_price_list_standart-charact-title">ХАРАКТЕРИСТИКИ</h1>

                        <ListCharactCard club={club} category={'standart'}/>
                    </div>

                    <div className="block_price_list_standart-rate">
                        <h1 className="block_price_list_standart-rate-title">ТАРИФЫ И ЦЕНЫ</h1>

                        <ListRateCard category={'standart'}/>
                    </div>
                </div>
            </section>

            <section className="container_price_list_standart_plus" id="standartPlus">
                <BackgroundStandartPlus/>

                <div className="block_price_list_standart_plus">
                    <h1 className="block_price_list_standart_plus-title">зона <strong className="block_price_list_standart_plus-title-color">стандарт+</strong></h1>

                    <div className="block_price_list_standart_plus-charact">
                        <h1 className="block_price_list_standart_plus-charact-title">ХАРАКТЕРИСТИКИ</h1>

                        <ListCharactCard club={club} category={'standartPlus'}/>
                    </div>

                    <div className="block_price_list_standart_plus-rate">
                        <h1 className="block_price_list_standart_plus-rate-title">ТАРИФЫ И ЦЕНЫ</h1>

                        <ListRateCard category={'standartPlus'}/>
                    </div>
                </div>
            </section>

            {club === 'bauman' && 
                <section className="container_price_list_bootCamp" id="bootCamp">
                    <BackgroundBootCampSVG/>
                    
                    <div className="block_price_list_bootCamp">
                            <h1 className="block_price_list_bootCamp-title">зона <strong className="block_price_list_bootCamp-title-color">boot camp</strong></h1>

                            <div className="block_price_list_standart_plus-charact">
                                <h1 className="block_price_list_standart_plus-charact-title">ХАРАКТЕРИСТИКИ</h1>

                                <ListCharactCard club={club} category={'bootCamp'}/>
                            </div>

                            <div className="block_price_list_bootCamp-rate">
                                <h1 className="block_price_list_bootCamp-rate-title">ТАРИФЫ И ЦЕНЫ</h1>

                                <ListRateCard category={'bootCamp'}/>
                            </div>
                        </div> 
                </section>
            }

            <section className="container_price_list_ps" id="console">
                <BackgroundPsSVG/>
                
                <div className="block_price_list_ps">
                        <h1 className="block_price_list_ps-title">зона <strong className="block_price_list_ps-title-color">ps5</strong></h1>

                        <div className="block_price_list_ps-rate">
                            <h1 className="block_price_list_ps-rate-title">ТАРИФЫ И ЦЕНЫ</h1>

                            <ListRateCard category={'console'}/>
                        </div>
                    </div> 
            </section>

            <section className="container_booking_place">
                <BookingContantSVG/>
                
                <div className="block_booking_place">
                    <div className="block_booking_place-wrapper">
                        <div className="block_booking_place-wrapper-wrapper">
                            <div className="block_booking_place-main_title">
                                <h1 className="title_form">Забронируй место!</h1>
                            </div>

                            <div className="block_booking_place-other_input">
                                <div className="contant_input_name_time_date">
                                    <input className="input_booking name" type="text" placeholder='Имя'/>
                                    <input className="input_booking date" type="text" placeholder='Дата'/>
                                    <input className="input_booking time" type="text" placeholder='Время'/>
                                </div>

                                <div className="contant_input_number_quantity_wish">
                                    <div className="contant_input_number_quantity_wish-quantity">
                                        <span className="text_quantity">Количетсво гостей</span>
                                        <input className="input_booking quantity" type="text" placeholder='2' maxLength={2}/>
                                    </div>

                                    <input className="input_booking number" type="text" placeholder='Номер телефона'/>
                                    <textarea className="input_booking wish" name="textarea" placeholder='Ваши пожелания' cols={25} rows={4}/>

                                    <div className="contant_input_number_quantity_wish-body_armor">
                                        <ArrowButtomBtnSVG/>  

                                        <img className="body_armor" src={'/static/img/errorIcon/bodyArmor.png'}/>

                                        <img className="helmet" src={'/static/img/errorIcon/helmet.png'}/>

                                        <ArrowLeftBtnSVG/>
                                    </div>
                                </div>

                                <ButtonBookUI/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container_hall_map">
                <BackgroundHalLMapSVG/>
                <BackgroundHallMapSecondSVG/>

                <MapHallClub club={club}/>
            </section>
        </main>
    );
}
 
export default PagePriceList;