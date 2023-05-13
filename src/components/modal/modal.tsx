import React, {FC} from 'react'
import ReactDOM from 'react-dom'
import './modal.sass'

const modalRoot = document.getElementById('react-modals') as HTMLElement;

type TModalProps = {
    children?: React.ReactNode;
    header: string | null;
    onClose: () => void;
};

const Modal: FC<TModalProps> = ({children, header, onClose}) => {
    return ReactDOM.createPortal(
        <>
            <div className='modal-container'>
                <div className='header'>
                    <p>{header}</p>
                    <p onClick={onClose} className='close-btn'>&#10005;</p>
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
            <div onClick={onClose} className='modal-overlay'></div>
        </>,
        modalRoot
    )
}

export default Modal;