'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { IPropsPageClubAbout } from '@/types/types';
import { FC } from 'react'

const SliderClub: FC<IPropsPageClubAbout> = ({club}) => {
    const clubName: string = club === 'bauman' ? 'Bauman' : 'Prof';

    return (
        <>
            <Swiper
            className="mySwiper"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={{clickable: true}}
            modules={[EffectCoverflow, Pagination]}
            >

                <SwiperSlide>
                    <img
                    className='img_slider'
                    src={`/static/img/gallery/club${clubName}/slider/1.png`}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                    className='img_slider'
                    src={`/static/img/gallery/club${clubName}/slider/2.png`}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                    className='img_slider'
                    src={`/static/img/gallery/club${clubName}/slider/3.png`}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                    className='img_slider'
                    src={`/static/img/gallery/club${clubName}/slider/4.png`}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                    className='img_slider'
                    src={`/static/img/gallery/club${clubName}/slider/5.png`}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                    className='img_slider'
                    src={`/static/img/gallery/club${clubName}/slider/6.png`}
                    />
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
 
export default SliderClub;