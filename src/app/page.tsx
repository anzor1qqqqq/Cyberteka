import ButtonBookUI from '@/UI/buttonBook';

import BackgroundSVG from '@/svg/backgroundMainPage/backgroundSVG'
import ArrowSVG from '@/svg/backgroundMainPage/arrow';

import '../style/mainPage.css'

export default function Home() {

  return (
    <>
      <div className='background_main_page'>
        <BackgroundSVG/>
      </div>

      <div className='container_about_comp_club'> 
        <div className='contant_main_club_about'>
          <div className='block_main_info'>
            <img className='block_main_info-img' src="/static/img/logo/logo.png" alt="" />

            <div className='block_main_title'>
              <h1 className='block_main_title-title'>кибертека</h1>
              <span className='block_main_title-slogan'>Компьютерный клуб для тебя и твоих друзей</span>
            </div>
          </div>
          
          <div className='main_club_about_text'>
            {'Выбираешь клуб для того что бы провести вечер?\nТы как раз вовремя, потому что в июле мы обновили видеокарты до 30 серии!'
            .split(/\n/).map((text, i) => 
              <p key={i}>{text}</p>
              )
            }
          </div>

          <ButtonBookUI/>
        </div>

        <div className='container_img_info_club'>
          <div className='block_img_info_club'>
            <div className='shadow_background prof'></div>
            <img className='img_info_club-img' src="/static/img/gallery/mainPage/club-prof.jpg" alt="" />

            <div className='block_location_club'>
              <h1 className='location_club-title'>кибертека</h1>
              <span className='location_club-text'>на профсоюзной</span>
            </div>

            <button className='img_info_club-btn'>Подробнее <ArrowSVG/></button>
          </div>

          <div className='block_img_info_club'>
            <div className='shadow_background bauman'></div>
            <img className='img_info_club-img' src="/static/img/gallery/mainPage/club-baum.jpg" alt={'Picture'}/> 

            <div className='block_location_club'>
              <h1 className='location_club-title'>кибертека</h1>
              <span className='location_club-text'>на бауманской</span>
            </div>

            <button className='img_info_club-btn'>Подробнее <ArrowSVG/></button>
          </div>
        </div>
      </div>
    </>
  )
}