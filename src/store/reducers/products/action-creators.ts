import {IProduct} from "../../../models/IProduct";
import {
    AddNotificationAction,
    AddProductAction,
    CreateProductAction,
    DeleteProductAction,
    GetProductsAction,
    IsLoadingAction,
    ProductsActionEnum
} from "./types";
import {AppDispatch} from "../../index";
import ProductService from "../../../Api/ProductService";


export const ProductsActionCreators = {
    getProducts: (payload: IProduct[]): GetProductsAction =>
        ({type: ProductsActionEnum.GET_PRODUCTS, payload}),

    setIsLoading: (payload: boolean): IsLoadingAction =>
        ({type: ProductsActionEnum.IS_LOADING, payload}),

    createProduct: (payload: IProduct): CreateProductAction =>
        ({type: ProductsActionEnum.CREATE_PRODUCT, payload}),

    addProductList: (payload: { id: string, product: IProduct }): AddProductAction =>
        ({type: ProductsActionEnum.ADD_PRODUCT_LIST, payload}),

    deleteProductList: (payload: { id: string }): DeleteProductAction =>
        ({type: ProductsActionEnum.DELETE_PRODUCT_LIST, payload}),

    addNotification: (payload: string): AddNotificationAction =>
        ({type: ProductsActionEnum.ADD_NOTIFICATION, payload}),

    fetchProducts: () => async(dispatch: AppDispatch) => {
        try {
            dispatch(ProductsActionCreators.setIsLoading(true))
            const response = await ProductService.getProducts()
            dispatch(ProductsActionCreators.getProducts(response.data))
            dispatch(ProductsActionCreators.setIsLoading(false))
        } catch(e) {
            console.log(e)
        }
    }
}
