import s from './ShopCard.module.css';

const ShopCard = ({cardData, isList}) => {
    return(
        <div className={`${s.shop_card} ${isList ? s.shop_card__list : s.shop_card__tile}`}>
            <h2 className={s.shop_card__title}>{cardData.name}</h2>
            <span className={s.shop_card__color}>{cardData.color}</span>
            <img className={s.shop_card__image} src={cardData.img} alt="" />
            {
                isList
                ? <>
                <span className={s.shop_card__price}>${cardData.price}</span>
                <button className={s.shop_card__add_btn}>Add to cart</button>
                </>
                : <div className={s.btn__wrapper}>
                    <span className={s.shop_card__price}>${cardData.price}</span>
                    <button className={s.shop_card__add_btn}>Add to cart</button>
                </div>

            }
            
        </div>
    )
}

export default ShopCard;