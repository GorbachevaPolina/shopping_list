import React, {FC, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "../../services/types/store";
import { SET_NOTIFICATION } from "../../services/constants/cards";
import "./notification.sass"

const notificationRoot = document.getElementById('react-notification') as HTMLElement;

const Notification: FC = () => {
    const { isNotification, title, message, type } = useSelector((store) => store.cards)
    const [output, setOutput] = useState(<></>)
    const dispatch = useDispatch()

    useEffect(() => {
        if(isNotification) {
            setOutput(
                <div className={`notification ${type}`}>
                    <p className="title">{title}</p>
                    <p>
                        {message}
                    </p>
                </div>
            )
            setTimeout(() => setOutput(<></>), 5000)
            dispatch({
                type: SET_NOTIFICATION
            })
        }
    }, [isNotification, message])

    return ReactDOM.createPortal(
            output,
            notificationRoot
        )
}

export default Notification