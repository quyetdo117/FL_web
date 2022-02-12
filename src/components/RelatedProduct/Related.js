import React, { memo } from 'react'
import { useStore } from '../../store'
import RelatedItem from './RelatedItem';
import './Related.css'

function Related() {
    const [stateG_Data,] = useStore()
    const {listCart, listProduct} = stateG_Data
    let relatedProd = [];
    (() => {
        const sizeProd = listProduct.length
        const curreIdCart = listCart.map(item => {
            return item.idProduct
        })
        for(let i = 0; i < sizeProd; i++){
            if(relatedProd.length >= 5){
                break
            }else if(!(curreIdCart.includes(listProduct[i].id))){
                relatedProd = [...relatedProd, listProduct[i]]
            }
        }
    })()
    return (
        <>
            <div className='related'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col b-12'>
                            <div className='related__title'>
                                <h2>Sản phẩm liên quan</h2>
                            </div>
                        </div>
                    </div>
                    <div className='related__list'>
                        <div className='row'>
                            {
                                relatedProd.map(item => (
                                    <RelatedItem dataItem={item} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Related)