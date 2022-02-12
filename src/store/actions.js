import { ADD_CART, GET_CART, GET_NEWS, GET_PRODUCT, REMOVE_CART, UPDATE_CART } from "./constants";


const getProduct = payload => (
    {
        type: GET_PRODUCT,
        payload
    }
)

const getCart = payload => (
    {
        type: GET_CART,
        payload
    }
)

const getNews = payload => (
    {
        type: GET_NEWS,
        payload
    }
)

const updateCart = payload => (
    {
        type: UPDATE_CART,
        payload
    }
)

const addCart = payload => ({
    type: ADD_CART,
    payload
})

const removeCart = payload => (
    {
        type: REMOVE_CART,
        payload
    }
)

export {getProduct, getCart, getNews, updateCart, addCart, removeCart}