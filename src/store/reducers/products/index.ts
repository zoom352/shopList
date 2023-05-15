import {ProductAction, ProductsActionEnum, ProductsState} from "./types";


const initialState: ProductsState = {
    products: [],
    productsList: [],
    notifications: [],
    isLoading: false
}

const ProductReducer = (state = initialState, action: ProductAction):ProductsState => {
    switch(action.type) {
        case ProductsActionEnum.GET_PRODUCTS:
            return {...state, products: action.payload}

        case ProductsActionEnum.CREATE_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }

        case ProductsActionEnum.ADD_PRODUCT_LIST:
            return {
                ...state,
                productsList: [
                    ...state.productsList,
                    action.payload.product
                ]
            }

        case ProductsActionEnum.ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    action.payload
                ]
            }

        case ProductsActionEnum.DELETE_PRODUCT_LIST:
            return {
                ...state,
                productsList: state.productsList.filter(item => item.id !== action.payload.id)
            }

        case ProductsActionEnum.IS_LOADING:
            return {...state, isLoading: action.payload}

        default:
            return state
    }
}


export default ProductReducer;
