import Image from 'next/image'


import ErrorSVG from '@/svg/backgroundError/error'

import '../style/error.css'

export default function NotFound() {
  return (
    <main>
      <div className="background_error_page">
        <ErrorSVG/>
      </div>

      <div className='container_error_info'>
        <div className='contant_404'>
          <div className='contant_404-icon'>
            <span className='number_fouth'>4</span>
            <Image 
            className='error_icon'
            src={'/static/img/errorIcon/errorIcon.png'}
            width={300}
            height={300}
            alt='error icon'
            />
            <span className='number_fouth'>4</span>
          </div>

          <div className='contant_error_text'>
            <span className='block_title_error-text'>Что то пошло не так, страница не найдена...</span>
            <span className='block_about_error-text'>Если ты попал сюда когда искал акцию, не беда! Назови промокод <b>404</b> администратору при регистрации и получи 200₽ на банас!</span>
          </div>
        </div>
      </div>
    </main>
  )
}