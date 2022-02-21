import React, { useState } from 'react';
import { addCart, convertPrice, updateCart, useStore } from '../../../store';
import Button from '../../Button';
import './BuyNow.css'
import NotiProduct from './NotiProduct';

function BuyNow({onHidden, dataProduct}) {
    const {src, name, color, price, size, id} = dataProduct
    const [buyNow, setBuyNow] = useState({sizeItem: 'S', quantityItem: 1, noti: false})
    const {sizeItem, quantityItem, noti} = buyNow
    const [stateG_Data,dispathG_Data] = useStore()
    const {listCart} = stateG_Data
    const onReduce = () => {
        if(quantityItem > 1){
            setBuyNow({...buyNow, quantityItem: quantityItem - 1})
        }
    }
    const onIncrease = () =>{
        setBuyNow({...buyNow, quantityItem: quantityItem + 1})
    }
    const onHiddenNoti = () => {
        setBuyNow({...buyNow, noti: false})
    }


    const setCart = () => {
        const dataProduct = {
            src: src,
            name: name,
            color: color,
            size: sizeItem,
            quantity: quantityItem,
            price: price,
            idProduct: id
        }
        const hadCartItem = listCart.find(item => {
            return (item.size === sizeItem && item.idProduct === id)
        })
        if(hadCartItem){
            const indexCartItem = listCart.indexOf(hadCartItem)
            fetch(`https://61dceedb591c3a0017e1ab26.mockapi.io/api/Cart/${hadCartItem.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...dataProduct,quantity: quantityItem + hadCartItem.quantity})
                }
            )
            const newCartItem = {...hadCartItem, quantity: quantityItem + hadCartItem.quantity}
            dispathG_Data(updateCart({cartItem: newCartItem, index: indexCartItem}))
        }else{
            fetch('https://61dceedb591c3a0017e1ab26.mockapi.io/api/Cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataProduct)
            })
            .then(response => response.json())
            .then(data => dispathG_Data(addCart(data)))
        }
        setBuyNow({...buyNow, noti: true})
    }
    return (
    <>
        {
            noti && <NotiProduct dataNoti={{src: src, name: name, quantity: quantityItem}} onHidden={onHiddenNoti}/>
        }
        <div className='product__buy-now' onClick={onHidden}>
            <div className='buy-now__container' onClick={(e) => e.stopPropagation()}>
                <div className='buy-now__close' onClick={onHidden}>
                <i className="fas fa-times"></i>
                </div>
                <h2 className='buy-now__header'>{name}</h2>
                <div className='buy-now__content'>
                    <img alt='img' src={src}></img>
                    <div className='buy-now__options'>
                        <span>Màu sắc : {color}</span>
                        <span className='price-color'>{convertPrice(price)}</span>
                        <div className='size'>
                            {
                                size && size.map((item, index) => (
                                    <div className='size__item' key={index}>
                                        <input type='radio'
                                        value={item}
                                        checked={sizeItem === item}
                                        onChange={() => setBuyNow({...buyNow, sizeItem: item})}
                                        name='size-product'
                                        className='size__input'></input>
                                        <span>{item}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='product__quantity'>
                            <button onClick={onReduce}>-</button>
                            <input type='number' disabled value={quantityItem} />
                            <button onClick={onIncrease}>+</button>
                        </div>
                    </div>
                </div>
                <div className='buy-now__btn'>
                    <Button onClick={setCart}>Thêm vào giỏ hàng</Button>
                </div>
            </div>
        </div>
    </>)
}

export default BuyNow;
