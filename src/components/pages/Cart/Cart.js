import { Link } from 'react-router-dom';
import { convertPrice, useStore } from '../../../store';
import Breadcrum from '../../Breadcrum';
import Button from '../../Button';
import Related from '../../RelatedProduct/Related';
import './Cart.css'
import CartItem from './CartItem';

function Cart() {
    const [stateG_Data,] = useStore();
    return (
        <>
            <div className='app__cart'>
                <Breadcrum>Giỏ hàng</Breadcrum>
                <div className='cart__container'>
                    <div className='grid'>
                        <div className='row'>
                            <div className='col b-9 m-12 s-12'>
                                <div className={stateG_Data.listCart.length === 0 ? 'no-cart' : 'no-cart hidden'}>
                                    <span>Giỏ hàng trống !</span>
                                    <div className='no-cart__img'>
                                        <img src="https://uchimart.com/assets/images/no-cart.png" alt="img"></img>
                                    </div>
                                    Đi đến
                                    <Link to='/product'>Cửa hàng</Link>
                                </div>
                                <div className='cart__list'>
                                    {
                                        stateG_Data.listCart &&
                                        stateG_Data.listCart.map((item, index) => (
                                            <CartItem dataItem={item} key={index} indexCart={index}/>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='col b-3 m-12 s-12'>
                                <div className='cart__buy'>
                                    <div className='cart__total'>
                                        <span>Tổng tiền :</span>
                                        <span className='cart__total-price price-color'>
                                            {
                                                stateG_Data.listCart &&
                                                convertPrice(
                                                    stateG_Data.listCart.reduce((total, currentItem) => {
                                                        return total + currentItem.quantity*currentItem.price
                                                    }, 0)
                                                )
                                            }
                                        </span>
                                    </div>
                                    <div className='cart__btn' onClick={() => alert('Bạn đẫ hết tiền !!!!!!')}>
                                        <Button>Thanh toán</Button>
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
