import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { convertPrice, removeCart, updateCart, useStore } from '../../../store';
import './CartItem.css';
import NetWorking from '../../../NetWorking/NetWorking'

function CartItem({ dataItem, indexCart, callback }) {
    const { src, name, color, size, price, quantity, idProduct, _id } = dataItem
    const [quantityItem, setNum] = useState(quantity)

    const onRemove = () => {
        let url = `/cart/delete_product`;
        let body = {
            id: _id
        }
        NetWorking.requestPost(url, (json) => {
            console.log('loggg jsonnn product', json);
            let { error } = json;
            if (error == 0) {
                if(callback){
                    callback();
                }
            }
        }, body)
    }

    const onReduce = () => {
        if (quantityItem > 1) {
            let url = `/cart/update_quantity`;
            let body = {
                quantity: quantityItem - 1,
                id: _id
            }
            NetWorking.requestPost(url, (json) => {
                console.log('loggg jsonnn product', json);
                let { error } = json;
                if (error == 0) {
                    setNum(quantityItem - 1)
                }
            }, body)
        }
    }
    const onInrease = () => {
        let url = `/cart/update_quantity`;
        let body = {
            quantityItem: quantityItem + 1,
            id: _id
        }
        NetWorking.requestPost(url, (json) => {
            console.log('loggg jsonnn product', json);
            let { error } = json;
            if (error == 0) {
                setNum(quantityItem + 1)
            }
        }, body)
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
                            {convertPrice(price * quantity)}
                        </span>
                    </div>
                    <span className='cart__color'>{`Màu : ${color}`}</span>
                    <span className='cart__size'>{`Size : ${size}`}</span>
                    <div className='cart__item--bottom'>
                        <div className='product__quantity'>
                            <button onClick={onReduce}>-</button>
                            <input type='number' disabled value={quantityItem} />
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
