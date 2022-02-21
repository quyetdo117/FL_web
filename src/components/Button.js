import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

function Button({disabled, toLink, onClick, type, children}) {
    let typeBtn = 'button'
    if(type){
        typeBtn = type
    }
    return (
        <>
            {
                toLink ?
                <Link to={toLink} className='btn'>
                    {children}
                </Link>
                :
                <input type={typeBtn} className='btn' onClick={onClick && ((e) => {
                    e.preventDefault();
                    onClick()
                })} disabled={disabled} value={children}>
                </input>
            }
        </>
    )
}

export default memo(Button);
