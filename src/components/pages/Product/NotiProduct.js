import React from 'react';
import './NotiProduct.css'

function NotiProduct({dataNoti, onHidden}) {
    return (
        <>
            <div className='product__noti' onClick={onHidden}>
                <div className='noiti__box-content' onClick={(e) => e.stopPropagation()}>
                    <div className='noti__close' onClick={onHidden}>
                        <i className="far fa-times-circle"></i>
                    </div>
                    <div className='noti__success'>
                        <i className="far fa-check-circle"></i>
                        <span>Thêm thành công vào giỏ hàng</span>
                    </div>
                    <div className='noti__info'>
                        <img src={dataNoti.src} alt='img'></img>
                        <span>{`${dataNoti.name} - x${dataNoti.quantity}`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotiProduct;
