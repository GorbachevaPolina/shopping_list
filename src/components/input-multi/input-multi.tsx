import React, {FC} from 'react'
import { TInputProps } from '../../services/types/card'
import './input-multi.sass'

const InputMulti: FC<TInputProps> = ({placeholder, value, onChange}) => {
    return(
        <textarea 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputMulti