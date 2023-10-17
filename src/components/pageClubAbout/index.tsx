'use client'

import * as React from 'react';

import { usePathname } from 'next/navigation';

import Link from "next/link";

import { ThrotlingScroll } from "@/function/functionGlobal";

import TopCoverBauman from "../topСover/topCoverBauman";
import TopCoverProf from "../topСover/topCoverProf";
import FooterClubInfo from './footerClub';
import ListZones from "./listZones/listZones";
import SliderClub from "./slider";

import ArrowSVG from "@/svg/backgroundMainPage/arrow";
import BackgroundPriceListSVG from "@/svg/clubInfo/backgroundClubInfo/backgroundPriceList";
import BackgroundZonesSVG from "@/svg/clubInfo/backgroundClubInfo/backgroundZones";

import { IPropsPageClubAbout } from "@/types/types";
import { FC } from "react";

const PageClubAbout: FC<IPropsPageClubAbout> = ({club}): JSX.Element => {
    const pathName = usePathname();

    React.useEffect(() => {
        let bool: boolean = true;

        const scrollListen = () => {
            const headerLisLiActive = document.querySelector('.header_list-li.active') as HTMLLinkElement;
            const headerLisLi = document.querySelectorAll('.header_list-li') as NodeListOf<HTMLLinkElement>;

            const firstContainer = document.querySelector('.container_previe_prof_club') as HTMLElement;
            const secondContainer = document.querySelector('.container_zones_info') as HTMLDivElement;
            const thirdContainer = document.querySelector('.container_slider_galerry_club') as HTMLDivElement;
            const fourthContainer = document.querySelector('.container_price_list_club') as HTMLDivElement;
            const fifthContainer = document.querySelector('.container_footer_how_to_find_us') as HTMLDivElement;    

            if (firstContainer?.getBoundingClientRect().top <= 0 
                && -(firstContainer?.getBoundingClientRect().top) < firstContainer?.getBoundingClientRect().height 
                && !headerLisLi[0].classList.contains('active')) {
                    
                headerLisLiActive?.classList.remove('active');

                headerLisLi[0].classList.add('active');

                return;
            };

            if (secondContainer?.getBoundingClientRect().top <= 0 
                && -(secondContainer?.getBoundingClientRect().top) < secondContainer?.getBoundingClientRect().height
                && !headerLisLi[1].classList.contains('active')) {

                headerLisLiActive?.classList.remove('active');

                headerLisLi[1].classList.add('active');

                return;
            };

            if (thirdContainer?.getBoundingClientRect().top <= 0 
                && -(thirdContainer?.getBoundingClientRect().top) < parseInt(String(thirdContainer?.getBoundingClientRect().height)) 
                && !headerLisLi[2].classList.contains('active')) {

                headerLisLiActive?.classList.remove('active');

                headerLisLi[2].classList.add('active');

                return;
            };

            if (fourthContainer?.getBoundingClientRect().top <= 5
                && Math.round(-fourthContainer?.getBoundingClientRect().top) < parseInt(String(fourthContainer?.getBoundingClientRect().height))
                && !headerLisLi[3].classList.contains('active')) {

                headerLisLiActive?.classList.remove('active');

                headerLisLi[3].classList.add('active');

                return;
            };

            if (fifthContainer?.getBoundingClientRect().top <= 5 
                && -(fifthContainer?.getBoundingClientRect().top) < fifthContainer?.getBoundingClientRect().height
                && !headerLisLi[4].classList.contains('active')) {

                headerLisLiActive?.classList.remove('active');

                headerLisLi[4].classList.add('active');

                return;
            };
        };

        if (bool && window.innerWidth >= 1000) {
            scrollListen()

            bool = !bool;
        };

        {window.innerWidth <= 1000 
        ? ''
        : window.addEventListener('scroll', ThrotlingScroll(scrollListen));
        }  

        return () => {
            window.removeEventListener('scroll', ThrotlingScroll(scrollListen));
        };
    }, []);

    const scrollContainer = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const target: HTMLLinkElement = e.target as HTMLLinkElement;

        const id = target.getAttribute('href') as string;

        (document.querySelector(id) as HTMLElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <>
            <header>
                <ul className="header_list">
                    <Link href={'#main'} className="header_list-li" onClick={e => scrollContainer(e)}>Главная</Link>
                    <Link href={'#zones'} className="header_list-li" onClick={e => scrollContainer(e)}>Зоны</Link>
                    <Link href={'#slider'} className="header_list-li" onClick={e => scrollContainer(e)}>Фото</Link>
                    <Link href={'#priceList'} className="header_list-li" onClick={e => scrollContainer(e)}>Прайс</Link>
                    <Link href={'#address'} className="header_list-li" onClick={e => scrollContainer(e)}>Контакты</Link>
                </ul>
            </header>

            <main>
                <section className='container_previe_prof_club' id='main'>
                    {club === 'bauman'
                    ? <TopCoverBauman/>
                    : <TopCoverProf/>
                    }
                    
                    <img
                    className={club === 'bauman' ? 'img_club_prof bauman' : 'img_club_prof'}
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

                <section className={club === 'bauman' ? "container_zones_info bauman": "container_zones_info"} id='zones' >
                    <BackgroundZonesSVG/>

                    <div className={club === 'bauman' ? 'contant_card_zone_club bauman' : 'contant_card_zone_club'}>
                        <h1 className="card_zone_club-title">Зоны и тарифы</h1>

                        <div className= {club === 'bauman' 
                        ? 'block_list_card_zone_club bauman'
                        : 'block_list_card_zone_club prof'
                        }>
                            <ListZones club={club}/>
                        </div>
                    </div>
                </section>

                <section className="container_slider_galerry_club" id='slider'>
                    <SliderClub club={club}/>
                </section>

                <section className="container_price_list_club" id='priceList'>
                    <BackgroundPriceListSVG/>

                    <div className="contant_price_list_club">
                        <span className="price_lsit_text">Прайс-лист</span>
                        <Link className="price_list_link" href={`${pathName}/priceList`}>Подробнее <ArrowSVG/></Link>
                    </div>
                </section>

                <section className='container_footer_how_to_find_us' id='address'>
                    <FooterClubInfo club={club}/>
                </section>
            </main>
        </>
    );
}
 
export default PageClubAbout;



