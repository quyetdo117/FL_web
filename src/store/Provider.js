import { useEffect, useReducer } from 'react'
import { getCart, getNews, getProduct } from '.'
import { initG_Data } from './constants'
import {Context} from './Context'
import { reducer } from './reducer'

function Provider({children}){
    const [stateG_Data, dispatchG_Data] = useReducer(reducer, initG_Data)
    useEffect(() => {
        fetch('https://61dceedb591c3a0017e1ab26.mockapi.io/api/Product')
                .then(response => response.json())
                .then(data => dispatchG_Data(getProduct(data)))
        fetch('https://61dceedb591c3a0017e1ab26.mockapi.io/api/Cart')
                .then(response => response.json())
                .then(data =>dispatchG_Data(getCart(data)))
        fetch('https://61dceedb591c3a0017e1ab26.mockapi.io/api/News')
                .then(response => response.json())
                .then(data =>dispatchG_Data(getNews(data)))
    },[])

    return (
        <Context.Provider value={[stateG_Data, dispatchG_Data]}>
            {children}
        </Context.Provider>
    )
}

export default Provider