import React from 'react'
import { Link } from 'react-router-dom'
import './RelatedItem.css'

function RelatedItem({dataItem}) {
    const {src, name, color, id} = dataItem
    return (
        <>
            <div className='col b-3 m-4 s-6'>
                <Link to={`/product/${id}`} className='related__item'>
                    <div className='related__item-img'>
                        <img src={src} alt='img'></img>
                    </div>
                    <div className='related__item-name'>
                        <h2>{`${name} - ${color}`}</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default RelatedItem