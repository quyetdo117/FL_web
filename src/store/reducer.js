import { ADD_CART, GET_CART, GET_NEWS, GET_PRODUCT, REMOVE_CART, UPDATE_CART } from "./constants"


const reducer = (state, action) => {
    const {listCart} = state
    const {type, payload} = action
    switch(type){
        case GET_PRODUCT: return {
            ...state,
            listProduct: payload
        }
        case GET_CART: return {
            ...state,
            listCart: payload
        }
        case GET_NEWS: return {
            ...state,
            listNews: payload
        }
        case ADD_CART: {
            const newListCart = [...listCart, payload]
            return {
                ...state,
                listCart: newListCart
            }
        }
        case UPDATE_CART: {
            const {cartItem, index} = payload
            const newListCart = [...listCart]
            newListCart.splice(index, 1, cartItem)
            return{
                ...state,
                listCart: newListCart
            }
        }
        case REMOVE_CART: {
            const newListCart = [...listCart];
            newListCart.splice(payload, 1)
            return {
                ...state,
                listCart: newListCart
            }
        }
        default:
            throw new Error('Error Action !!!!!!')
    }
}

export { reducer }