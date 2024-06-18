import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addCart, convertPrice, updateCart, useStore } from '../../../store';
import Breadcrum from '../../Breadcrum';
import Button from '../../Button';
import Related from '../../RelatedProduct/Related';
import NotiProduct from './NotiProduct';
import './ProductInfo.css'
import NetWorking from '../../../NetWorking/NetWorking'

function ProductInfo(props) {
    const [dataProduct, setData] = useState({})
    const { productId } = useParams();
    const { src, name, color, printing, material, size, price, _id } = dataProduct
    const [infoProduct, setInfoProduct] = useState({ sizeItem: 'S', quantityItem: 1, noti: false })
    const { sizeItem, quantityItem, noti } = infoProduct
    const [stateG_Data, dispathG_Data] = useStore()
    const { listCart } = stateG_Data;
    useEffect(() => {
        let url = `/products/detail?id=${productId}`
        NetWorking.requestGet(url, (json) => {
            console.log('loggg jsonnn product', json);
            let { data } = json;
            setData(data)
        })
    }, [])

    const onReduce = () => {
        if (quantityItem > 1) {
            setInfoProduct({ ...infoProduct, quantityItem: quantityItem - 1 })
        }
    }
    const onIncrease = () => {
        setInfoProduct({ ...infoProduct, quantityItem: quantityItem + 1 })
    }
    const onHiddenNoti = () => {
        setInfoProduct({ ...infoProduct, noti: false })
    }

    const setCart = () => {
        const dataProduct = {
            src: src,
            name: name,
            color: color,
            size: sizeItem,
            quantity: quantityItem,
            price: price,
            idProduct: _id
        }
        let url = '/cart/add_product';
        NetWorking.requestPost(url, (json) => {
            let { error, data } = json;
            if(error == 0){
                setInfoProduct({ ...infoProduct, noti: true })
            }
        }, dataProduct)
    }
    return (
        <>
            {
                noti && <NotiProduct dataNoti={{ src: src, name: name, quantity: quantityItem }} onHidden={onHiddenNoti} />
            }
            <div className='product-item__info'>
                <Breadcrum>
                    <Link to='/product'>Sản phẩm </Link>
                    {`/ ${name}`}
                </Breadcrum>
                <div className='product-item__container'>
                    <div className=' grid'>
                        <div className='row'>
                            <div className='col b-6 s-12'>
                                <div className='product-item__img'>
                                    <img alt='img' src={src} />
                                </div>
                            </div>
                            <div className='col b-6 s-12'>
                                <div className='product-item__info--basic'>
                                    <h2>{name}</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='info-basic__title'>Màu sắc</td>
                                                <td className='info-basic__content'>{color}</td>
                                            </tr>
                                            <tr>
                                                <td className='info-basic__title'>Công nghệ in</td>
                                                <td className='info-basic__content'>{printing}</td>
                                            </tr>
                                            <tr>
                                                <td className='info-basic__title'>Chất liệu</td>
                                                <td className='info-basic__content'>{material}</td>
                                            </tr>
                                            <tr>
                                                <td className='info-basic__title'>Giá</td>
                                                <td className='info-basic__content price-color'>{convertPrice(price)}</td>
                                            </tr>
                                            <tr>
                                                <td className='info-basic__title'>Size</td>
                                                <td className='info-basic__content'>
                                                    <div className='size'>
                                                        {
                                                            size && size.map((item, index) => (
                                                                <div className='size__item' key={index}>
                                                                    <input type='radio'
                                                                        value={item}
                                                                        checked={sizeItem === item}
                                                                        onChange={() => setInfoProduct({ ...infoProduct, sizeItem: item })}
                                                                        name='size-product'
                                                                        className='size__input'></input>
                                                                    <span>{item}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='info-basic__title'>Số lượng</td>
                                                <td className='info-basic__content'>
                                                    <div className='product__quantity'>
                                                        <button onClick={onReduce}>-</button>
                                                        <input type='number' disabled value={quantityItem} />
                                                        <button onClick={onIncrease}>+</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='product-item__btn'>
                                        <Button onClick={setCart}>Thêm vào giỏ hàng</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Related />
            </div>
        </>
    )
}

export default ProductInfo;
