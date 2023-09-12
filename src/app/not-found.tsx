import Image from 'next/image'

import ButtonBookUI from '@/UI/buttonBook'

import ErrorSVG from '@/svg/backgroundError/error'
import ArrowButtomBtnSVG from '@/svg/errorInput/arrowBottomBtn'
import ArrowLeftBtnSVG from '@/svg/errorInput/arrowLeftBtn'

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

        <div className='container_form_contact'>
          <div className='contant_form_contact'>
            <div className='block_title_form'>
              <h1 className='title_form'>Забронируй место!</h1>
            </div>

            <div className='block_input_date'>
              <div className='block_input_date-input'>
                <input className='input_error name' type="text" placeholder='Имя'/>
                <input className='input_error date' type="text" placeholder='Дата'/>
                <input className='input_error date' type="text" placeholder='Время'/>
              </div>

              <div className='block_input_other'>
                <div className='contant_input_other'>
                  <span className='input_other_quantity'>Количетсво гостей</span>
                  <input className='input_error num' type="text" placeholder='2'/>
                </div>

                <div className='block_input_number_wishes'>
                  <input className='input_error' type="text" placeholder='Номер телефона'/>
                  <textarea className='input_error textarea' name="textarea" placeholder='Ваши пожелания' cols={25} rows={4}/>
                </div>

                <div className='block_body_armor'>
                  <ArrowButtomBtnSVG/>  

                  <Image
                  className='body_armor'
                  src={'/static/img/errorIcon/bodyArmor.png'}
                  width={250}
                  height={280}
                  alt='body armor'
                  />

                  <Image
                  className='helmet'
                  src={'/static/img/errorIcon/helmet.png'}
                  width={140}
                  height={140}
                  alt='body armor'
                  />

                  <ArrowLeftBtnSVG/>
                </div>
                
              </div>

              <ButtonBookUI/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}