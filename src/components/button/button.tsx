import React, {FC} from 'react'
import './button.sass'

type TButtonProps = {
    type: "button" | "submit" | "reset",
    children: React.ReactNode,
    onClick?: () => void
}

const Button: FC<TButtonProps> = ({type, children, onClick}) => {
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;