'use client'

import * as React from 'react';

import { useRouter } from "next/navigation";

import ArrowEntranceSVG from "@/svg/clubInfo/svgIcon/arrowEntrance";
import CameraSVG from "@/svg/clubInfo/svgIcon/camera";

import { IPropsPageClubAbout } from "@/types/types";
import { FC } from "react";

const MapHallClub: FC<IPropsPageClubAbout> = ({ club }) => {
    const router = useRouter();

    const popUpImg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, nameElem: string): void => {
        const nameElemDoc = document.querySelector(`.img_photo.${nameElem}`) as HTMLDivElement;

        const sizeHeight = parseInt(getComputedStyle(nameElemDoc).height);
        const sizeWidth = parseInt(getComputedStyle(nameElemDoc).width);

        if (e.clientY + sizeHeight + 30 >= window.innerHeight) {
            if (e.clientX + sizeWidth <= window.innerWidth) {
                nameElemDoc.style.display = 'block';
                nameElemDoc.style.transform = 'translateY('+(e.clientY - (sizeHeight + 30))+'px)';
                nameElemDoc.style.transform += 'translateX('+(e.clientX)+'px)';
            } else {
                nameElemDoc.style.display = 'block';
                nameElemDoc.style.transform = 'translateY('+(e.clientY - (sizeHeight + 30))+'px)';
                nameElemDoc.style.transform += 'translateX('+(e.clientX - sizeWidth)+'px)';
            }
        } else if (e.clientY + sizeHeight + 30 <= window.innerHeight) {
            if (e.clientX + sizeWidth <= window.innerWidth) {
                nameElemDoc.style.display = 'block';
                nameElemDoc.style.transform = 'translateY('+(e.clientY + 30)+'px)';
                nameElemDoc.style.transform += 'translateX('+(e.clientX)+'px)';
            } else {
                nameElemDoc.style.display = 'block';
                nameElemDoc.style.transform = 'translateY('+(e.clientY + 30)+'px)';
                nameElemDoc.style.transform += 'translateX('+(e.clientX - sizeWidth)+'px)';
            }
        }
    }; 

    const closePopUp = (nameElem: string): void => {
        const nameElemDoc = document.querySelector(`.img_photo.${nameElem}`) as HTMLDivElement;

        nameElemDoc.style.display = 'none';
    };

    return (
        <div className="block_hall_map_info">
            <h1 className="block_hall_map_info-title">карта клуба</h1>

            <div className="back_arrow" onClick={() => router.back()}>
                <ArrowEntranceSVG/>
            </div>
            
            <div className="overwloy">
                {club === 'prof'
                    ?
                    <div className="contant_hall_map">
                        <div className="first_part_table"></div>

                        <div className="second_part_table">
                            <div className="wall_big"></div>

                            <div className="admin_wc">
                                <span>admin</span>
                            </div>

                            <div className="wall_min"></div>

                            <div className="admin_wc">
                                <span>wc</span>
                            </div>

                            <div className="wall_big"></div>

                            <div className="standart_pc_zone">
                                <div className="standart_pc_zone-numbering">
                                    <span className="standart_pc_zone-numbering_color">2</span>
                                    <span className="standart_pc_zone-numbering_color">3</span>
                                </div>

                                <div className="standart_pc_zone-numbering">
                                    <span className="standart_pc_zone-numbering_color">1</span>
                                    <span className="standart_pc_zone-numbering_color">4</span>
                                </div>
                            </div>

                            <div className="wall_min"></div>

                            <div className="standart_pc_zone">
                                <div className="standart_pc_zone-numbering">
                                    <span className="standart_pc_zone-numbering_color">6</span>
                                    <span className="standart_pc_zone-numbering_color">7</span>
                                </div>

                                <div className="standart_pc_zone-numbering">
                                    <span className="standart_pc_zone-numbering_color">5</span>
                                    <span className="standart_pc_zone-numbering_color">8</span>
                                </div>
                            </div>

                            <div className="wall_min"></div>

                            <div className="standart_pc_zone">
                                <div className="standart_pc_zone-numbering">
                                    <span className="standart_pc_zone-numbering_color">10</span>
                                    <span className="standart_pc_zone-numbering_color">11</span>
                                </div>

                                <div className="standart_pc_zone-numbering">
                                    <span className="standart_pc_zone-numbering_color">9</span>
                                    <span className="standart_pc_zone-numbering_color">12</span>
                                </div>
                            </div>

                            <div className="wall_min"></div>

                            <div className="ps_zone">
                                <div className="ps_zone-block">
                                    <span className="ps_text">ps</span>
                                </div>
                            </div>

                            <div className="wall_solid"></div>
                        </div>

                        <div className="third_part_table">
                            <div className="contant_arrow_entrance_camera">
                                <ArrowEntranceSVG />

                                <div className="around_camera entrance" 
                                    onMouseMove={e => popUpImg(e, 'entrance')} 
                                    onMouseLeave={() => closePopUp('entrance')}>

                                    <CameraSVG />

                                    <div className="img_photo entrance"></div>
                                </div>
                            </div>

                            <div className="around_camera standart_plus"
                                onMouseMove={e => popUpImg(e, 'standart_plus')} 
                                onMouseLeave={() => closePopUp('standart_plus')}>

                                <CameraSVG />

                                <div className="img_photo standart_plus"></div>
                            </div>

                            <div className="extreme_wall_ps">
                                <div className="around_camera ps"
                                    onMouseMove={e => popUpImg(e, 'ps')} 
                                    onMouseLeave={() => closePopUp('ps')}>

                                    <CameraSVG />

                                    <div className="img_photo ps"></div>
                                </div>

                                <div className="wall_solid"></div>
                            </div>

                        </div>

                        <div className="fourth_part_table">
                            <div className="wall_big"></div>

                            <div className="around_camera standart"
                                onMouseMove={e => popUpImg(e, 'standart')} 
                                onMouseLeave={() => closePopUp('standart')}>
                                <CameraSVG />

                                <div className="img_photo standart"></div>
                            </div>

                            <div className="wall_big_two"></div>

                            <div className="wall_big_three"></div>

                            <div className="wall_big_four"></div>

                            <div className="wall_big_five"></div>
                        </div>

                        <div className="five_part_table">
                            <div className="side_left_standart">
                                <div className="wall_standart_pc">
                                    <div className="wall_big"></div>

                                    <div className="side_left_standart_pc">
                                        <div className="side_left_standart_pc-numbering">32</div>
                                        <div className="side_left_standart_pc-numbering">31</div>
                                        <div className="side_left_standart_pc-numbering">30</div>
                                        <div className="side_left_standart_pc-numbering">29</div>
                                    </div>
                                </div>

                                <div className="wall_big_bottom"></div>
                            </div>

                            <div className="center_standart_pc_wall">
                                <div className="center_standart_pc-pc">
                                    <div className="center_standart_pc-pc-first">
                                        <div className="center_standart_pc-pc-first-pc">
                                            <div className="center_standart_pc-pc-first-pc-numbering">33</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">34</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">35</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">36</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">37</div>
                                        </div>

                                        <div className="wall_min"></div>

                                        <div className="center_standart_pc-pc-first-pc">
                                            <div className="center_standart_pc-pc-first-pc-numbering">28</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">27</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">26</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">25</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">24</div>
                                        </div>
                                    </div>

                                    <div className="center_standart_pc-pc-first second">
                                        <div className="center_standart_pc-pc-first-pc">
                                            <div className="center_standart_pc-pc-first-pc-numbering">38</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">39</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">40</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">41</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">42</div>
                                        </div>

                                        <div className="wall_min"></div>

                                        <div className="center_standart_pc-pc-first-pc">
                                            <div className="center_standart_pc-pc-first-pc-numbering">23</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">22</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">21</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">20</div>
                                            <div className="center_standart_pc-pc-first-pc-numbering">19</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="wall_big_bottom"></div>
                            </div>

                            <div className="side_right_standart">
                                <div className="side_right_standart-pc_wall">
                                    <div className="side_right_standart-pc_wall-pc">
                                        <div className="side_right_standart-pc_wall-pc-numbering">15</div>
                                        <div className="side_right_standart-pc_wall-pc-numbering">16</div>
                                        <div className="side_right_standart-pc_wall-pc-numbering">17</div>
                                        <div className="side_right_standart-pc_wall-pc-numbering">18</div>
                                    </div>

                                    <div className="wall"></div>
                                </div>

                                <div className="wall"></div>
                            </div>

                            <div id="now">
                                <div className="separate_standart_plus_pc_about_color">
                                    <div className="separate_standart_plus_pc">
                                        <div className="separate_standart_plus_pc_wall">
                                            <div className="separate_standart_plus_pc_wall-pc">
                                                <div className="separate_standart_plus_pc_wall-pc-numbering">14</div>
                                            </div>

                                            <div className="wall"></div>
                                        </div>

                                        <div className="wall"></div>
                                    </div>

                                    <div className="separate_standart_plus_pc">
                                        <div className="separate_standart_plus_pc_wall">
                                            <div className="separate_standart_plus_pc_wall-pc">
                                                <div className="separate_standart_plus_pc_wall-pc-numbering">13</div>
                                            </div>

                                            <div className="wall"></div>
                                        </div>

                                        <div className="wall border"></div>
                                    </div>
                                </div>

                                <div className="contant_about_color">
                                    <div className="block_about_color">
                                        <div className="block_about_color-standart">
                                            <div></div>
                                            <span>Стандарт</span>
                                        </div>

                                        <div className="block_about_color-standart_plus">
                                            <div></div>
                                            <span>Стандарт+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="contant_hall_map_bauman">
                        <div className="hall_map_bauman">
                            <div className="first_part_map">
                                <div className="wall"></div>

                                <ArrowEntranceSVG />

                                <div className="wall_big"></div>
                            </div>

                            <div className="second_part_map">
                                <div className="wall"></div>

                                <div className="contant_standart_pc">
                                    <div className="contant_standart_pc-pc">1</div>
                                    <div className="contant_standart_pc-pc">2</div>
                                    <div className="contant_standart_pc-pc">3</div>
                                    <div className="contant_standart_pc-pc">4</div>
                                    <div className="contant_standart_pc-pc">5</div>
                                    <div className="contant_standart_pc-pc">6</div>
                                    <div className="contant_standart_pc-pc">7</div>
                                </div>

                                <div className="wall_centart"></div>

                                <div className="wall_right"></div>
                            </div>

                            <div className="third_part_map">
                                <div className="wall"></div>

                                <div className="around_camera admin_bauman"
                                    onMouseMove={e => popUpImg(e, 'admin_bauman')} 
                                    onMouseLeave={() => closePopUp('admin_bauman')}>

                                    <CameraSVG />

                                    <div className="img_photo admin_bauman"></div>
                                </div>

                                <div className="around_camera_right standart_plus_bauman" 
                                    onMouseMove={e => popUpImg(e, 'standart_plus_bauman')} 
                                    onMouseLeave={() => closePopUp('standart_plus_bauman')}>

                                    <CameraSVG />

                                    <div className="img_photo standart_plus_bauman"></div>
                                </div>

                                <div className="wall_right"></div>

                            </div>

                            <div className="fourth_part_map">
                                <div className="wall"></div>

                                <div className="admin">
                                    <span>admin</span>
                                </div>

                                <div className="contant_standart_pc">
                                    <div className="contant_standart_pc-pc_double">
                                        <div className="contant_standart_pc-pc_double-pc">
                                            <div className="contant_standart_pc-pc_double-pc-pc">11</div>
                                            <div className="contant_standart_pc-pc_double-pc-pc">10</div>
                                            <div className="contant_standart_pc-pc_double-pc-pc">9</div>
                                            <div className="contant_standart_pc-pc_double-pc-pc">8</div>
                                        </div>

                                        <div className="wall"></div>

                                        <div className="contant_standart_pc-pc_double-pc">
                                            <div className="contant_standart_pc-pc_double-pc-pc">12</div>
                                            <div className="contant_standart_pc-pc_double-pc-pc">13</div>
                                            <div className="contant_standart_pc-pc_double-pc-pc">14</div>
                                            <div className="contant_standart_pc-pc_double-pc-pc">15</div>
                                        </div>
                                    </div>

                                    <div className="contant_standart_pc-pc">
                                        <div className="contant_standart_pc-pc">
                                            <div className="contant_standart_pc-pc_double-pc-pc">16</div>
                                            <div className="contant_standart_pc-pc_double-pc-pc">17</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="wall_right"></div>

                                <div className="contant_standart_plus">
                                    <div className="contant_standart_plus-pc">
                                        <div className="contant_standart_plus-pc-numbering">42</div>
                                        <div className="contant_standart_plus-pc-numbering">41</div>
                                    </div>

                                    <div className="contant_standart_plus-pc-right">
                                        <div className="contant_standart_plus-pc-right-numbering">16</div>
                                        <div className="contant_standart_plus-pc-right-numbering">16</div>
                                    </div>
                                </div>

                                <div className="contant_wall_right_min">
                                    <div className="wall"></div>
                                </div>

                                <div className="contant_standart_plus end">
                                    <div className="contant_standart_plus-pc">
                                        <div className="contant_standart_plus-pc-numbering">42</div>
                                        <div className="contant_standart_plus-pc-numbering">41</div>
                                    </div>
                                </div>

                                <div className="wall_end"></div>
                            </div>

                            <div className="five_part_map">
                                <div className="wall_left"></div>

                                <div className="wall_center_left"></div>

                                <div className="door"></div>

                                <div className="wall_center_right"></div>

                                <div className="contant_standart_pc">
                                    <div className="contant_standart_pc-pc">40</div>
                                    <div className="contant_standart_pc-pc">35</div>
                                </div>

                                <div className="wall_min"></div>

                                <div className="contant_standart_pc one">
                                    <div className="contant_standart_pc-pc">45</div>
                                </div>

                                <div className="wall_big"></div>
                            </div>

                            <div className="six_part_map">
                                <div className="contant_wc_ps">
                                    <div className="contant_wc_ps-wc">
                                        <div className="wall_left"></div>

                                        <div className="contant_wc_ps-wc-wall">
                                            <div className="wc">
                                                <span>wc</span>

                                                <div className="around_camera wc_bauman"
                                                    onMouseMove={e => popUpImg(e, 'wc_bauman')} 
                                                    onMouseLeave={() => closePopUp('wc_bauman')}>

                                                    <CameraSVG />

                                                    <div className="img_photo wc_bauman"></div>
                                                </div>
                                            </div>

                                            <div className="wall"></div>
                                        </div>

                                        <div className="wall_right"></div>
                                    </div>

                                    <div className="contant_wc_ps-ps">
                                        <div className="door"></div>

                                        <div className="contant_wall_door">
                                            <div className="wall"></div>

                                            <div className="door"></div>

                                            <div className="wall_right"></div>
                                        </div>

                                        <div className="contant_pc_wall">
                                            <div className="ps">
                                                <span>ps</span>
                                            </div>

                                            <div className="wall"></div>
                                        </div>

                                        <div className="wall"></div>
                                    </div>

                                    <div className="contant_boot_camp_zone">
                                        <div className="boot_camp_wall">
                                            <div className="boot_camp_wall-pc">
                                                <div className="boot_camp_wall-pc-numbering">18</div>
                                                <div className="boot_camp_wall-pc-numbering">19</div>
                                                <div className="boot_camp_wall-pc-numbering">20</div>
                                                <div className="boot_camp_wall-pc-numbering">21</div>
                                                <div className="boot_camp_wall-pc-numbering">22</div>
                                            </div>

                                            <div className="wall"></div>
                                        </div>

                                        <div className="wall"></div>
                                    </div>

                                    <div className="contant_boot_camp_zone_two">
                                        <div className="contant_boot_camp_zone_two-pc-wall">
                                            <div className="pc">
                                                <div className="pc_numbering">32</div>
                                                <div className="pc_numbering">31</div>
                                                <div className="pc_numbering">30</div>
                                                <div className="pc_numbering">29</div>
                                                <div className="pc_numbering">28</div>
                                            </div>

                                            <div className="around_camera boot_camp"
                                                onMouseMove={e => popUpImg(e, 'boot_camp')} 
                                                onMouseLeave={() => closePopUp('boot_camp')}>

                                                <CameraSVG/>

                                                <div className="img_photo boot_camp"></div>
                                            </div>

                                            <div className="pc_two">
                                                <div className="pc_two_numbering">23</div>
                                                <div className="pc_two_numbering">24</div>
                                                <div className="pc_two_numbering">25</div>
                                                <div className="pc_two_numbering">26</div>
                                                <div className="pc_two_numbering">27</div>
                                            </div>

                                            <div className="wall"></div>
                                        </div>

                                        <div className="wall"></div>
                                    </div>

                                    <div className="contant_boot_camp_standart_plus_zone">
                                        <div className="contant_standart_plus">
                                            <div className="standart_plus-wall">
                                                <div className="standart_plus-wall-one">
                                                    <div className="standart_plus-wall-one-numbering one">39</div>

                                                    <div className="standart_plus-wall-one-numbering two">36</div>

                                                    <div className="wall"></div>
                                                    
                                                    <div className="standart_plus-wall-one-numbering three">44</div>

                                                    <div className="wall_big"></div>
                                                </div>
                                            </div>

                                            <div className="standart_plus-wall">
                                                <div className="standart_plus-wall-one">
                                                    <div className="standart_plus-wall-one-numbering one margin">38</div>

                                                    <div className="standart_plus-wall-one-numbering two margin">37</div>

                                                    <div className="wall bottom"></div>
                                                    
                                                    <div className="standart_plus-wall-one-numbering three margin">43</div>

                                                    <div className="wall_big bottom"></div>
                                                </div>
                                            </div>

                                            <div className="contant_bootcamp_wall">
                                                <div className="contant_boot_camp_wall_door">
                                                    <div className="wall_door">
                                                        <div className="wall"></div>

                                                        <div className="door"></div>

                                                        <div className="wall_big"></div>
                                                    </div>

                                                    <div className="boot_camp_pc_wall">
                                                        <div className="boot_camp_pc">
                                                            <div className="boot_camp_pc-numbering">52</div>
                                                            <div className="boot_camp_pc-numbering">51</div>
                                                            <div className="boot_camp_pc-numbering">50</div>
                                                            <div className="boot_camp_pc-numbering">49</div>
                                                            <div className="boot_camp_pc-numbering">48</div>
                                                        </div>
                                                        
                                                        <div className="wall"></div>
                                                    </div>
                                                </div>

                                                <div className="wall_big"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="about_color_zone">
                            <div className="about_color_zone-standart">
                                <div className="about_color_zone-standart-color"></div>

                                <span className="about_color_zone-standart-text">Стандарт</span>
                            </div>

                            <div className="about_color_zone-standart_plus">
                                <div className="about_color_zone-standart_plus-color"></div>

                                <span className="about_color_zone-standart_plus-text">Стандарт+</span>
                            </div>

                            <div className="about_color_zone-boot_camp">
                                <div className="about_color_zone-boot_camp-color"></div>

                                <span className="about_color_zone-boot_camp-text">Boot Camp</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MapHallClub;