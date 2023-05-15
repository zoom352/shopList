import {IProduct} from "../../../models/IProduct";

export interface ProductsState {
    products: IProduct[],
    productsList: IProduct[],
    notifications: Array<string>,
    isLoading: boolean
}

export enum ProductsActionEnum {
    GET_PRODUCTS = 'GET_PRODUCTS',
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    IS_LOADING = 'IS_LOADING',
    ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST',
    DELETE_PRODUCT_LIST = 'DELETE_PRODUCT_LIST',
    ADD_NOTIFICATION = 'ADD_NOTIFICATION'
}

export interface GetProductsAction {
    type: ProductsActionEnum.GET_PRODUCTS;
    payload: IProduct[]
}

export interface CreateProductAction {
    type: ProductsActionEnum.CREATE_PRODUCT;
    payload: IProduct
}

export interface DeleteProductAction {
    type: ProductsActionEnum.DELETE_PRODUCT_LIST;
    payload: {
        id: string
    }
}

export interface IsLoadingAction {
    type: ProductsActionEnum.IS_LOADING;
    payload: boolean
}

export interface AddProductAction {
    type: ProductsActionEnum.ADD_PRODUCT_LIST;
    payload: {
        product: IProduct
    }
}

export interface AddNotificationAction {
    type: ProductsActionEnum.ADD_NOTIFICATION;
    payload: string
}

export type ProductAction = GetProductsAction
    | IsLoadingAction
    | CreateProductAction
    | AddProductAction
    | DeleteProductAction
    | AddNotificationAction
