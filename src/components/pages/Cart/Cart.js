import { Link } from 'react-router-dom';
import { convertPrice, useStore } from '../../../store';
import Breadcrum from '../../Breadcrum';
import Button from '../../Button';
import Related from '../../RelatedProduct/Related';
import './Cart.css'
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import NetWorking from '../../../NetWorking/NetWorking'

function Cart() {
    const [dataList, setData] = useState([]);

    useEffect(() => {
        requestCart();
    }, []);

    const requestCart = () => {
        let url = `/cart`
        NetWorking.requestGet(url, (json) => {
            console.log('loggg jsonnn product', json);
            let { data } = json;
            setData(data)
        })
    }

    const callBack = () => {
        requestCart();
    }

    return (
        <>
            <div className='app__cart'>
                <Breadcrum>Giỏ hàng</Breadcrum>
                <div className='cart__container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col b-9 m-12 s-12'>
                                <div className={dataList.length === 0 ? 'no-cart' : 'no-cart hidden'}>
                                    <span>Giỏ hàng trống !</span>
                                    <div className='no-cart__img'>
                                        <img src="https://uchimart.com/assets/images/no-cart.png" alt="img"></img>
                                    </div>
                                    Đi đến
                                    <Link to='/product'>Cửa hàng</Link>
                                </div>
                                <div className='cart__list'>
                                    {
                                        dataList.length ?
                                        dataList.map((item, index) => (
                                            <CartItem dataItem={item} key={index} indexCart={index} callback={callBack}/>
                                        )) : null
                                    }
                                </div>
                            </div>
                            <div className='col b-3 m-12 s-12'>
                                <div className='cart__buy'>
                                    <div className='cart__total'>
                                        <span>Tổng tiền :</span>
                                        <span className='cart__total-price price-color'>
                                            {
                                                dataList.length ?
                                                convertPrice(
                                                    dataList.reduce((total, currentItem) => {
                                                        return total + currentItem.quantity*currentItem.price
                                                    }, 0)
                                                ) : null
                                            }
                                        </span>
                                    </div>
                                    <div
                                        className='cart__btn'
                                    >
                                        <Button
                                            disabled={!!!(dataList.length)}
                                            toLink={ !!(dataList.length) && '/buyerInfo' }
                                        >Đặt hàng</Button>
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

export default Cart;
