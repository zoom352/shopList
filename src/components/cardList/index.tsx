import React, {useEffect} from 'react'
import Card from "../card"
import './cardList.scss'
import {UseActions} from "../../hooks/useActions"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IProduct} from "../../models/IProduct";


const ProductCard = () => {
    const {
        fetchProducts
    } = UseActions()
    const {products, isLoading, productsList} = useTypedSelector(state => state.product)

    useEffect(() => {
        fetchProducts()
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return <div className="cardList">
        <div className="products">
            <h2>Созданные товары</h2>
            {products.map((item: IProduct) => {
                return (
                    <Card
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                    />
                )
            })}
        </div>
        <div className="products">
            <h2>Список товаров</h2>
            {productsList.map((item: IProduct) => {
                return (
                    <Card
                        isListProduct={true}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                    />
                )
            })}
        </div>
    </div>
};

export default ProductCard;
