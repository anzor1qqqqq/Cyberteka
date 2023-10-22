'use client'

import { usePathname } from 'next/navigation'

import Link from 'next/link';

import ArrowSVG from '@/svg/backgroundMainPage/arrow';

import { FC } from 'react';
import { IPropsCardClubZone } from "@/types/types";

const CardClubZone: FC<IPropsCardClubZone> = ({club, category}): JSX.Element => {
    const pathName = usePathname();

    const clubName: string = club === 'bauman' ? 'Bauman' : 'Prof';

    return (
        <div className={club === 'bauman' ? 'block_card_zone_club bauman' : "block_card_zone_club"} >
            <div className='block_card_zone_club-border'>
                <div className='block_card_zone_club-about'>
                    {category === 'bootCamp' 
                    ?
                    <>
                        <span className='card_zone-config'>На 5 или 10 мест + лучшие ПК</span>
                        <h1 className='card_zone-title'>BOOT CAMP</h1> 
                    </>
                    : category === 'console' 
                    ?
                    <>
                        <span className='card_zone-config'>Подписка PS+ и 2 геймпада</span>
                        <h1 className='card_zone-title'>ПРИСТАВКА</h1> 
                    </>
                    : category === 'standart' 
                    ?
                    <>
                        <span className='card_zone-config'>Игровой ПК и переферия</span>
                        <h1 className='card_zone-title'>Стандарт</h1>
                    </>
                    : category === 'standartPlus' 
                    ?
                    <>
                        <span className='card_zone-config'>Монитор больше + ПК мощнее</span>
                        <h1 className='card_zone-title'>Стандарт+</h1>
                    </>
                    : ''
                    }

                    <div className={category === 'bootCamp' 
                    ? 'card_zone-border boot_camp'
                    : category === 'console' 
                    ? 'card_zone-border console' 
                    : category === 'standart' 
                    ? 'card_zone-border standart'
                    : category === 'standartPlus' 
                    ? 'card_zone-border standart_plus'
                    : ''
                    }>
                        <img
                        className="img_zones_card"
                        src={`/static/img/gallery/club${clubName}/zones/${category}${clubName}.png`}
                        />
                    </div>

                    {category === 'bootCamp'
                    ?
                    <>
                        <span className='card_zone-name'>Отдельная Комната</span>
                        <Link href={`${pathName}/priceList#bootCamp`} className='card_zone-btn boot_camp'>Подробнее <ArrowSVG/></Link>
                    </>
                    : category === 'console' && club === 'bauman'
                    ?
                    <>
                        <span className='card_zone-name'>Комната с диваном</span>
                        <Link href={`${pathName}/priceList#console`} className='card_zone-btn console'>Подробнее <ArrowSVG/></Link>
                    </>
                    : category === 'console' && club === 'prof' 
                    ?
                    <>
                        <span className='card_zone-name'>Диван + PS5</span>
                        <Link href={`${pathName}/priceList#console`} className='card_zone-btn console'>Подробнее <ArrowSVG/></Link>
                    </>
                    : category === 'standart' 
                    ?
                    <>
                        <span className='card_zone-name'>Общая Зона</span>
                        <Link href={`${pathName}/priceList#standart`} className='card_zone-btn standart'>Подробнее <ArrowSVG/></Link>
                    </>
                    : category === 'standartPlus' 
                    ?
                    <>
                        <span className='card_zone-name'>Лучшие Места</span>
                        <Link href={`${pathName}/priceList#standartPlus`} className='card_zone-btn standart_plus'>Подробнее <ArrowSVG/></Link>
                    </>
                    : ''
                    }
                </div>
            </div>
        </div>
    );
}
 
export default CardClubZone;