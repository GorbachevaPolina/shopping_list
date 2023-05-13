import React, {FC} from 'react'
import Card from '../card/card';
import { useSelector } from '../../services/types/store';
import './card-list.sass'

const CardList: FC = () => {
    const { cards } = useSelector((store) => store.cards)
    
    return(
        <section>
            <ul>
            {
                cards && cards.length > 0 ?
                cards.map((card) => {
                    return(
                        <Card card={card} key={card.id}/>
                    )
                }) :
                <p>Пока нет товаров.</p>
            }
            </ul>
        </section>
    )
}

export default CardList;