import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { convertPrice } from '../../../store';
import BuyNow from './BuyNow';
import './ProductItem.css'

function ProductItem({dataProduct}) {
    const {src, name, color, price, id } = dataProduct
    const [stateShow, setStateShow] = useState(false)
    const onBuyNow = () => {
        setStateShow(!stateShow)
      }
    return (
    <>
        {
          stateShow && <BuyNow dataProduct={dataProduct} onHidden={onBuyNow}/>
        }
        <div className='col b-3 m-4 s-6'>
            <div className='product__item'>
                <div className='product__img'>
                    <img alt='img' src={src}/>
                    <div className='product__coat'>
                        <span className='product__coat-option' onClick={onBuyNow}>
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                        <Link to={id} className='product__coat-option'>
                            <i className="fas fa-eye"></i>
                        </Link>
                    </div>
                </div>
                <div className='product__discription'>
                    <Link to={id} className='product__name'>
                        {`${name} - ${color}`}
                    </Link>
                    <span className='product__price'>{convertPrice(price)}</span>
                </div>
            </div>
        </div>
    </>
    );
}

export default ProductItem;
