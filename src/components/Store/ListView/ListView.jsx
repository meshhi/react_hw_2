import ShopCard from "./ShopCard/ShopCard";
import s from "./ListView.module.css";

const ListView = ({cards, isList}) => {
    return(
        <div className={`${s.list_view} ${isList ? s.list_view__list : s.list_view__tile}`}>
            {cards.map(cardData => <ShopCard key={cardData.uuid} cardData={cardData} isList={isList}/>)}
        </div>
    )
}

export default ListView;