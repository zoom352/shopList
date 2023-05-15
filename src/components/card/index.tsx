import React from 'react';
import './card.scss';
import Button from "../../UI/button";
import {UseActions} from "../../hooks/useActions";

interface Props {
    id: string,
    title: string,
    price: string,
    image: string,
    description: string,
    isListProduct?: boolean
}
const Card = (props: Props) => {
    const {
        id,
        title,
        price,
        image,
        description,
        isListProduct
    } = props
    const {
        addProductList,
        deleteProductList,
        addNotification
    } = UseActions()

    return (
        <div className="card">
            <div className="card-image">
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-price">{price}</p>
                {description && <p className="card-description">{description}</p>}
                <div className="card-buttons">
                    <Button title="купить товар" onClick={() => {
                        window.alert("Товар был успешно куплен")
                        addNotification("Товар был успешно куплен")
                    }}/>
                    {isListProduct ? <Button title="удалить из списка" onClick={() => {
                        deleteProductList({
                            id
                        })
                        addNotification("Товар был удалён из списка")
                    }}/> : <Button title="добавить в список" onClick={() => {
                        addProductList({
                            id,
                            product: {
                                id,
                                title,
                                price,
                                image,
                                description
                            }
                        })
                        addNotification("Товар был добавлен в список")
                    }}/>}
                </div>
            </div>
        </div>
    )
}

export default Card
