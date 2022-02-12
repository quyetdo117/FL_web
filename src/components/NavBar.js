import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import './NavBar.css'

function NavBar() {
    const [stateClick, setStateClick] = useState(false)
    const [stateG_Data,] = useStore()
    const {listCart} = stateG_Data
    const setClick = () => {
        setStateClick(!stateClick)
    }


    return <>
        <div className='app__navbar'>
            <div className='grid'>
                <div className='row no-gutters'>
                    <div className='nav__logo'>
                        <img src='https://secureservercdn.net/45.40.145.201/kxr.369.myftpupload.com/wp-content/uploads/2021/08/Asset-3.png' alt='logo'></img>
                    </div>
                    <div className='nav__menu'>
                        <div className='menu__mobile' onClick={setClick}>
                            <i className="fas fa-bars"></i>
                            {
                                listCart.length !==0 &&
                                <div className='noti-mobile'></div>
                            }
                        </div>
                        <div className={
                            stateClick ? 'menu__list-coat--mb show' : 'menu__list-coat--mb'
                        }
                        onClick={setClick}
                        >
                            <ul className='menu__list'>
                                <li className='menu__item'>
                                    <Link to='/' className='menu__link'>
                                        Trang chủ
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/member' className='menu__link'>
                                        Thành viên
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/news' className='menu__link'>
                                        Tin tức
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/rank' className='menu__link'>
                                        BXH/Lịch đấu
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/product' className='menu__link'>
                                        Sản phẩm
                                    </Link>
                                </li>
                                <li className='menu__item cart'>
                                    <Link to='/cart' className='menu__link'>
                                        Giỏ hàng
                                    </Link>
                                    {
                                        listCart.length!==0 &&
                                        <div className='quantity-cart'>{listCart.length}</div>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavBar;
