import React, {FC, useState} from "react";
import Button from "../button/button";
import { useDispatch } from "../../services/types/store";
import { createCard } from "../../services/actions/cards";
import { v4 as uuidv4 } from "uuid"
import './create-card-form.sass'
import InputSingle from "../input-single/input-single";
import InputMulti from "../input-multi/input-multi";

type TCreateCardFromProps = {
    onCreate: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateCardForm: FC<TCreateCardFromProps> = ({onCreate}) => {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        name: "",
        price: "",
        description: "",
        image: ""
    })

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if(files) {
            const localImageUrl = window.URL.createObjectURL(files[0]);
            setInputs({...inputs, image: localImageUrl})
        }
      }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            ...inputs,
            id: uuidv4(),
            isBought: false
        }
        dispatch(createCard(data))
        onCreate(false)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <InputSingle 
                placeholder="Имя товара"
                value={inputs.name}
                onChange={(e) => setInputs({...inputs, name: e.target.value})}
            />
            <InputSingle
                placeholder="Цена товара"
                value={inputs.price}
                onChange={(e) => setInputs({...inputs, price: e.target.value})}
            />
            <InputMulti 
                placeholder="Описание товара"
                value={inputs.description}
                onChange={(e) => setInputs({...inputs, description: e.target.value})}
            />
            <input
                type="file"
                onChange={(e) => handleFile(e)}
            />
            <Button type="submit">Добавить товар в список</Button>
        </form>
    )
}

export default CreateCardForm;