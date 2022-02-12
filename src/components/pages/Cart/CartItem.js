import React from 'react';
import { Link } from 'react-router-dom';
import { convertPrice, removeCart, updateCart, useStore } from '../../../store';
import './CartItem.css'

function CartItem({dataItem, indexCart}) {
    const {src, name, color, size, price, quantity, idProduct, id} = dataItem
    const [, dispatchG_Data] = useStore()

    const onRemove = () => {
        dispatchG_Data(removeCart(indexCart))
        fetch(`https://61dceedb591c3a0017e1ab26.mockapi.io/api/Cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const onReduce = () => {
        if(quantity > 1){
            fetch(`https://61dceedb591c3a0017e1ab26.mockapi.io/api/Cart/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...dataItem, quantity: quantity - 1})
            })
                    .then(response => response.json())
                    .then(data => dispatchG_Data(updateCart({cartItem: data, index: indexCart})))
        }
    }
    const onInrease = () => {
        fetch(`https://61dceedb591c3a0017e1ab26.mockapi.io/api/Cart/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...dataItem, quantity: quantity + 1})
            })
                    .then(response => response.json())
                    .then(data => dispatchG_Data(updateCart({cartItem: data, index: indexCart})))
    }
    return (
        <>
            <div className='cart__item'>
                <div className='cart__item-img'>
                    <img alt='img' src={src}></img>
                </div>
                <div className='cart__item-info'>
                    <div className='cart__name-price'>
                        <Link to={`/product/${idProduct}`} className='cart__name'>{name}</Link>
                        <span className='cart__price price-color'>
                            {convertPrice(price*quantity)}
                        </span>
                    </div>
                    <span className='cart__color'>{`Màu : ${color}`}</span>
                    <span className='cart__size'>{`Size : ${size}`}</span>
                    <div className='cart__item--bottom'>
                        <div className='product__quantity'>
                            <button onClick={onReduce}>-</button>
                            <input type='number' disabled value={quantity} />
                            <button onClick={onInrease}>+</button>
                        </div>
                        <span className='cart__remove' onClick={onRemove}>Xóa</span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem;
