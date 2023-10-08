import RateBlockUI from "@/UI/priceList/rateBlock";

import { TListRate } from "@/types/types";
import { FC } from "react";

const ListRateCard: FC<TListRate> = ({category}) => {
    return (
        <div className="block_rate_list_price">
            {category === 'standart'
            ?
                <>
                    <RateBlockUI color="#FFDAF1">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «1 Час»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="one_hour_rate">
                                <div className="one_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span className="contant_price_rate-name">Стандартный тариф</span>
                            <span className="contant_price_rate-price">140 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f7aedc">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «3 Часа»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="two_hour_rate">
                                <div className="two_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: '#f7aedc'}} className="contant_price_rate-name">Выгода: Час = 130 ₽</span>
                            <span className="contant_price_rate-price">390 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f48ecf">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «5 Часов»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="three_hour_rate">
                                <div className="three_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: '#f48ecf'}} className="contant_price_rate-name">Выгода: Час = 100 ₽</span>
                            <span className="contant_price_rate-price">490 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f96cc6">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «7 Часов»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="four_hour_rate">
                                <div></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: '#f48ecf'}} className="contant_price_rate-name">Выгода: Час = 85 ₽</span>
                            <span className="contant_price_rate-price">590 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f448b6">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «Ночь»</span>
                            <span className="contant_rate_time-available">23:00 ‒ 10:00</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="five_hour_rate"></div>

                            <div className="five_hour_rate-round">
                                <div></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: '#f448b6'}} className="contant_price_rate-name">Выгода: Час = 65 ₽</span>
                            <span className="contant_price_rate-price">690 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f9009f">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «День»</span>
                            <span className="contant_rate_time-available">10:00 ‒ 23:00</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background wrapper">
                                <div className="round_background-white_round">
                                    <div className="block_rays_sun">
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: '#f9009f'}} className="contant_price_rate-name">Выгода: Час = 60 ₽</span>
                            <span className="contant_price_rate-price">790 ₽</span>
                        </div>
                    </RateBlockUI>

                    <div className="contant_sale_info">
                        <div className="block_sale_info">
                            <div className="contant_sale_info-wrapper">
                                <span className="contant_sale_info-wrapper-days">с понедельника по среду</span>
                                <span className="contant_sale_info-wrapper-sale">скидка 20%</span>
                            </div>
                        </div>
                        
                        <div className="block_sale_info">
                            <div className="contant_sale_info-wrapper">
                                <span className="contant_sale_info-wrapper-days">по утрам с 05:00 до 14:00</span>
                                <span className="contant_sale_info-wrapper-sale-color">скидка 20%</span>
                            </div>
                        </div>
                    </div>
                </>
            : category === 'console' 
            ?
                <>
                    <RateBlockUI color="#8b90b8">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «1 Час»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="one_hour_rate">
                                <div className="one_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span className="contant_price_rate-name">Стандартный тариф</span>
                            <span className="contant_price_rate-price">240 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#525eb9">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «3 Часа»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="two_hour_rate">
                                <div className="two_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(168, 222, 255, 0.50)'}} className="contant_price_rate-name">Выгода: Час = 165 ₽</span>
                            <span className="contant_price_rate-price">490 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#2636C0">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «5 Часов»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="three_hour_rate">
                                <div className="three_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(126, 207, 255, 0.60)'}} className="contant_price_rate-name">Выгода: Час = 140 ₽</span>
                            <span className="contant_price_rate-price">690 ₽</span>
                        </div>
                    </RateBlockUI>
                </>
            : category === 'standartPlus' 
            ? 
                <>
                    <RateBlockUI color="#add4eb">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «1 Час»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="one_hour_rate">
                                <div className="one_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span className="contant_price_rate-name">Стандартный тариф</span>
                            <span className="contant_price_rate-price">140 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#9bcdeb">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «3 Часа»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="two_hour_rate">
                                <div className="two_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(168, 222, 255, 0.50)'}} className="contant_price_rate-name">Выгода: Час = 130 ₽</span>
                            <span className="contant_price_rate-price">390 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#7cc4ee">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «5 Часов»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="three_hour_rate">
                                <div className="three_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(126, 207, 255, 0.60)'}} className="contant_price_rate-name">Выгода: Час = 100 ₽</span>
                            <span className="contant_price_rate-price">490 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#58b2e7">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «7 Часов»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="four_hour_rate">
                                <div></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(84, 191, 255, 0.70)'}} className="contant_price_rate-name">Выгода: Час = 85 ₽</span>
                            <span className="contant_price_rate-price">590 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#5db5e9">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «Ночь»</span>
                            <span className="contant_rate_time-available">23:00 ‒ 10:00</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="five_hour_rate"></div>

                            <div className="five_hour_rate-round">
                                <div></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(42, 175, 255, 0.80)'}} className="contant_price_rate-name">Выгода: Час = 65 ₽</span>
                            <span className="contant_price_rate-price">690 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#00a0ff">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «День»</span>
                            <span className="contant_rate_time-available">10:00 ‒ 23:00</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background wrapper">
                                <div className="round_background-white_round">
                                    <div className="block_rays_sun">
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: '#019FFF'}} className="contant_price_rate-name">Выгода: Час = 60 ₽</span>
                            <span className="contant_price_rate-price">790 ₽</span>
                        </div>
                    </RateBlockUI>

                    <div className="contant_sale_info">
                        <div className="block_sale_info">
                            <div className="contant_sale_info-wrapper">
                                <span className="contant_sale_info-wrapper-days">с понедельника по среду</span>
                                <span style={{color: '#89D2FF'}} className="contant_sale_info-wrapper-sale">скидка 20%</span>
                            </div>
                        </div>
                        
                        <div className="block_sale_info">
                            <div className="contant_sale_info-wrapper">
                                <span className="contant_sale_info-wrapper-days">по утрам с 05:00 до 14:00</span>
                                <span style={{color: '#149EF2'}} className="contant_sale_info-wrapper-sale-color">скидка 20%</span>
                            </div>
                        </div>
                    </div>
                </>
            : category === 'bootCamp' 
            ?
                <>
                    <RateBlockUI color="#f4abbd">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «1 Час»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="one_hour_rate">
                                <div className="one_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span className="contant_price_rate-name">Стандартный тариф</span>
                            <span className="contant_price_rate-price">140 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f697af">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «3 Часа»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="two_hour_rate">
                                <div className="two_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(255, 151, 176, 0.50)'}} className="contant_price_rate-name">Выгода: Час = 130 ₽</span>
                            <span className="contant_price_rate-price">390 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#fb7597">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «5 Часов»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="three_hour_rate">
                                <div className="three_hour_rate-round"></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(255, 113, 147, 0.60)'}} className="contant_price_rate-name">Выгода: Час = 100 ₽</span>
                            <span className="contant_price_rate-price">490 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f75a82">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «7 Часов»</span>
                            <span className="contant_rate_time-available">Доступен 24/7</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="four_hour_rate">
                                <div></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(255, 76, 119, 0.70)'}} className="contant_price_rate-name">Выгода: Час = 85 ₽</span>
                            <span className="contant_price_rate-price">590 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#f93063">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «Ночь»</span>
                            <span className="contant_rate_time-available">23:00 ‒ 10:00</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background"></div>

                            <div className="five_hour_rate"></div>

                            <div className="five_hour_rate-round">
                                <div></div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: 'rgba(255, 38, 90, 0.80)'}} className="contant_price_rate-name">Выгода: Час = 65 ₽</span>
                            <span className="contant_price_rate-price">690 ₽</span>
                        </div>
                    </RateBlockUI>

                    <RateBlockUI color="#ff0041">
                        <div className="contant_rate_time">
                            <span className="contant_rate_time-hour">Тариф «День»</span>
                            <span className="contant_rate_time-available">10:00 ‒ 23:00</span>
                        </div>

                        <div className="contant_rate">
                            <div className="round_background wrapper">
                                <div className="round_background-white_round">
                                    <div className="block_rays_sun">
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                        <div className="block_rays_sun-rays"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contant_price_rate">
                            <span style={{color: '#FF013E;'}} className="contant_price_rate-name">Выгода: Час = 60 ₽</span>
                            <span className="contant_price_rate-price">790 ₽</span>
                        </div>
                    </RateBlockUI>

                    <div className="contant_sale_info">
                        <div className="block_sale_info">
                            <div className="contant_sale_info-wrapper">
                                <span className="contant_sale_info-wrapper-days">с понедельника по среду</span>
                                <span style={{color: '#FF7596'}} className="contant_sale_info-wrapper-sale">скидка 20%</span>
                            </div>
                        </div>
                        
                        <div className="block_sale_info">
                            <div className="contant_sale_info-wrapper">
                                <span className="contant_sale_info-wrapper-days">по утрам с 05:00 до 14:00</span>
                                <span style={{color: '#FF003D'}} className="contant_sale_info-wrapper-sale-color">скидка 20%</span>
                            </div>
                        </div>
                    </div>
                </>
            : ''
            }
        </div>
    );
}
 
export default ListRateCard;