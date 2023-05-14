import React, {FC} from 'react'
import { TInputProps } from '../../services/types/card'
import './input-single.sass'

const InputSingle: FC<TInputProps> = ({placeholder, value, onChange}) => {
    return(
        <input 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
        />
    )
}

export default InputSingle