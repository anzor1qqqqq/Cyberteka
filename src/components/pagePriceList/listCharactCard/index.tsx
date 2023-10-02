import CharactBlockUI from "@/UI/priceList/charactBlock";

const ListCharactCard = () => {
    return (
        <div className="block_price_list_standart-charact-card-list">
            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">процессор</span>
                    <span className="block_about_card-config-model">AMD Ryzen 7 2700X</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/processor.png" alt="" />
                </div>
            </CharactBlockUI>

            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">видеокарта</span>
                    <span className="block_about_card-config-model">GeForce GTX 1080</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/videoCard.png" alt="" />
                </div>
            </CharactBlockUI>

            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">память</span>
                    <span className="block_about_card-config-model">DDR4 16GB</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/memory.png" alt="" />
                </div>
            </CharactBlockUI>

            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">накопитель</span>
                    <span className="block_about_card-config-model">NVMe SSD</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/ssd.png" alt="" />
                </div>
            </CharactBlockUI>

            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">монитор</span>
                    <span className="block_about_card-config-model">27`&quot;` 144Hz</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/display.png" alt="" />
                </div>
            </CharactBlockUI>

            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">клавиатура</span>
                    <span className="block_about_card-config-model">Gamdias Hermes E2</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/keyboard.png" alt="" />
                </div>
            </CharactBlockUI>

            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">мышка</span>
                    <span className="block_about_card-config-model">Logitech G403</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/mouse.png" alt="" />
                </div>
            </CharactBlockUI>

            <CharactBlockUI>
                <div className="block_about_card">
                    <span className="block_about_card-config">наушники</span>
                    <span className="block_about_card-config-model">Corsair HS50</span>
                </div>

                <div className="block_img_card">
                    <img src="/static/img/priceListIcons/headphones.png" alt="" />
                </div>
            </CharactBlockUI>

            
        </div>
    );
}
 
export default ListCharactCard;