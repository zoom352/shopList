import React, {ChangeEvent, useState} from 'react'
import './App.css'
import ProductCard from "./components/cardList/index"
import Button from "./UI/button"
import Modal from "./UI/modal";
import Input from "./UI/input";
import {UseActions} from "./hooks/useActions";
import {IProduct} from "./models/IProduct";
import NotificationIcon from "./components/notification";

function App() {
    const [active, setActive] = useState<boolean>(false)
    const [product, setProduct] = useState<IProduct>({
        id: Math.random().toString(),
        title: "",
        price: "",
        image: "",
        description: ""
    })
    const {
        createProduct,
        addNotification
    } = UseActions()


    const titleOnChange = (value: string) => {
        setProduct({...product, title: value})
    }

    const priceOnChange = (value: string) => {
        setProduct({...product, price: value})
    }

    const imageOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        const file = event.target.files[0]
        setProduct({...product, image: URL.createObjectURL(file)})
    }

    const descriptionOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setProduct({...product, description: e.target.value})
    }

    return (
        <div className="App">
            <div className="create-product-button">
                <Button
                    width="200px"
                    height="30px"
                    onClick={() => setActive(true)}
                    title="Создать товар"
                />
                <NotificationIcon />
            </div>
            <ProductCard/>
            <Modal active={active} setActive={setActive}>
                <h3>Заполните все поля</h3>
                <p>Название</p>
                <Input
                    onChange={titleOnChange}
                    value={product.title}
                />
                <p>Стоимость</p>
                <Input
                    onChange={priceOnChange}
                    value={product.price}
                    type="number"
                />
                <p>Изображение</p>
                <input
                    onChange={imageOnChange}
                    type="file"
                />
                <p>Дополнительное описание</p>
                <textarea
                    rows={7}
                    cols={35}
                    onChange={(e) => descriptionOnChange(e)}
                />
                <div className="create-product-button">
                    <Button
                        onClick={() => {
                            setActive(false)
                            createProduct(product)
                            addNotification("Товар был создан")
                        }}
                        title="Создать товар"
                        disabled={product.title && product.image && product.price && product.description ? false : true}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default App;
