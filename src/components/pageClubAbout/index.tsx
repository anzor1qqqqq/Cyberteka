'use client'

import { usePathname } from 'next/navigation'

import Link from "next/link";

import TopCoverProf from "../topСover/topCoverProf";
import TopCoverBauman from "../topСover/topCoverBauman";
import ListZones from "./listZones/listZones";
import SliderClub from "./slider";
import FooterClubInfo from './footerClub';

import BackgroundZonesSVG from "@/svg/clubInfo/backgroundClubInfo/backgroundZones";
import BackgroundPriceListSVG from "@/svg/clubInfo/backgroundClubInfo/backgroundPriceList";
import ArrowSVG from "@/svg/backgroundMainPage/arrow";

import { FC } from "react";
import { IPropsPageClubAbout } from "@/types/types";

const PageClubAbout: FC<IPropsPageClubAbout> = ({club}): JSX.Element => {
    const pathName = usePathname();

    return (
        <>
            <header>
                <ul className='header_list'>
                    <li className='header_list-li'>Главная</li>
                    <li className='header_list-li'>Зоны</li>
                    <li className='header_list-li'>Фото</li>
                    <li className='header_list-li'>Акции</li>
                    <li className='header_list-li'>Контакты</li>
                </ul>
            </header>

            <main>
                <section className='container_previe_prof_club'>
                    {club === 'bauman'
                    ? <TopCoverBauman/>
                    : <TopCoverProf/>
                    }
                    
                    <img
                    className='img_club_prof'
                    src={club === 'prof' 
                    ? '/static/img/gallery/clubProf/profFull.png' 
                    : '/static/img/gallery/clubBauman/baumanFull.png'}
                    />

                    <div className="contant_club_about">
                        <div className="block_logo_title">
                            <img
                            className="img_logo_club_about"
                            src={'/static/img/logo/logo.png'}
                            />

                            <div className="title_club_name">
                                <h1>кибертека</h1>

                                {club === 'bauman' 
                                ? <span>на бауманской</span>
                                : <span>на профсоюзной</span>
                                }
                            </div>
                        </div>

                        <div className="block_about_club_time_addrees">
                            {club === 'bauman' 
                            ? 
                            <>
                                <span>Спартаковская улица 21</span>
                                <span>Работаем круглосуточно!</span>
                                <span>8 977 752 20 01</span>
                            </>
                            : 
                            <>
                                <span>Профсоюзная улица 22/10к1</span>
                                <span>Работаем круглосуточно!</span>
                                <span>8 977 320 88 88</span>
                            </>
                            }
                            
                        </div>

                        <button className="btn_club_about_book">Забронировать!</button>
                    </div>
                </section>

                <section className="container_zones_info">
                    <BackgroundZonesSVG/>

                    <div className="contant_card_zone_club">
                        <h1 className="card_zone_club-title">разные зоны с разными условиями</h1>

                        <div className= {club === 'bauman' 
                        ? "block_list_card_zone_club bauman"
                        : "block_list_card_zone_club prof"
                        }>
                            <ListZones club={club}/>
                        </div>
                    </div>
                </section>

                <section className="container_slider_galerry_club">
                    <SliderClub club={club}/>
                </section>

                <section className="container_price_list_club">
                    <BackgroundPriceListSVG/>

                    <div className="contant_price_list_club">
                        <span className="price_lsit_text">Прайс-лист</span>
                        <Link className="price_list_link" href={`${pathName}/priceList`}>Подробнее <ArrowSVG/></Link>
                    </div>
                </section>

                <section className='container_footer_how_to_find_us'>
                    <FooterClubInfo club={club}/>
                </section>
            </main>
        </>
    );
}
 
export default PageClubAbout;