import React, {FC, useState} from 'react'
import { TCard } from '../../services/types/card'
import Modal from '../modal/modal'
import Button from '../button/button'
import { useDispatch } from '../../services/types/store'
import { buyCard, deleteCard } from '../../services/actions/cards'
import './card.sass'

type TCardProps = {
    card: TCard
}

const Card: FC<TCardProps> = ({card}) => {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleDelete = () => {
        dispatch(deleteCard(card.id))
    }

    const handleBuy = () => {
        dispatch(buyCard(card.id))
    }

    return(
        <>
        <li>
            <p onClick={() => setIsModalOpen(true)} className={card.isBought ? "line" : undefined}>
                {card.name}
            </p>
            {
                !card.isBought && <Button type='button' onClick={handleBuy}>Купить</Button>
            }
            <Button type="button" onClick={handleDelete}>Удалить товар из списка</Button>
        </li>
        {
            isModalOpen && <Modal header="Информация о товаре" onClose={() => setIsModalOpen(false)}>
                <div className='card-modal'>
                <p><span>Имя товара:</span> {card.name}</p>
                <p><span>Цена:</span> {card.price}</p>
                {
                    card.description === "" ?
                        null :
                        <p><span>Описание:</span> {card.description}</p>
                }
                {
                    card.image === "" ?
                        null :
                        <img src={card.image} alt="item"/>
                }
                </div>
            </Modal>
        }
        </>
    )
}

export default Card;