import React, {useEffect, useState} from 'react';
import './notification.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Modal from "../../UI/modal";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const NotificationIcon = () => {
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const {notifications} = useTypedSelector(state => state.product)

    useEffect(() => {
        if(notifications.length){
            setShowNotification(true)
        }
    }, [notifications])

    function handleNotification() {
        setActive(true)
        setShowNotification(false)
    }

    return (
        <>
            <div className="notification-icon" onClick={handleNotification}>
                <div className={`notification-dot ${showNotification ? 'active' : ''}`} />
                <i className="fas fa-bell" />
            </div>
            <Modal
                active={active}
                setActive={setActive}
            >
                {notifications.map((item: string) => {
                    return <h3>{item}</h3>
                })}
            </Modal>
        </>
    );
}

export default NotificationIcon;
