import ButtonBookUI from "@/UI/buttonBook";
import VKIconSVG from "@/svg/clubInfo/svgIcon/vk";

import { IPropsPageClubAbout } from "@/types/types";
import { FC } from "react";

const FooterClubInfo: FC<IPropsPageClubAbout> = ({club}) => {

    return (
        <div className='contant_footer_find'>
            <div className="block_address_number">
                <div className="block_address_number-layot">
                    <h1 className="block_address_number-title">Как нас найти?</h1>

                    <div className="block_address_number-metro">
                        {club === 'prof' 
                        ?
                        <>
                            <div id="block_metro">
                                <span className="address_name">Метро Профсоюзная</span>

                                <div className="round prof"></div>

                                <span className="time_to_metro">4 минуты пешком</span>
                            </div>

                            <div id="block_metro">
                                <span className="address_name">Метро Академическая</span>

                                <div className="round akad"></div>

                                <span className="time_to_metro">5 минут пешком</span>
                            </div>
                        </>
                        :
                        <>
                            <div id="block_metro">
                                <span className="address_name">Метро Бауманская</span>

                                <div className="round bauman"></div>

                                <span className="time_to_metro">4 минуты пешком</span>
                            </div>

                            <div id="block_metro">
                                <span className="address_name">Метро Красноселькая</span>

                                <div className="round kras"></div>

                                <span className="time_to_metro">5 минут пешком</span>
                            </div>
                        </>
                        }
                    </div>

                    <div className="block_address_number-address_number">
                    {club === 'prof' 
                        ?
                        <>
                            <span className="address_text">Адрес: <span className="address">Профсоюзная улица 22/10 к1</span></span>
                            <span className="number_text">Телефон: <span className="number">+7 977 320 88 88</span></span>
                        </>
                        :
                        <>
                            <span className="address_text">Адрес: <span className="address">Спартаковская, 21</span></span>
                            <span className="number_text">Телефон: <span className="number">+7 977 752 20 01</span></span>
                        </>
                        }
                    </div>

                    <div className="block_address_number-about_info">
                        <span>По вопросам сотрудничества</span>
                        <p>Коммерческие предложения можно направить в группу ВК или в Телеграм</p>
                    </div>

                    <div className="block_address_number-book_svg">
                        <ButtonBookUI/>
                        <a href="https://vk.com/cyberteka" target="_blank"><VKIconSVG/></a>
                    </div>
                </div>
            </div>

            <div className="block_map_club">
                <img src="/static/img/gallery/clubProf/map/mapProf.png" alt="" />
            </div>
        </div>
    );
}
 
export default FooterClubInfo;