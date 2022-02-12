import React from 'react';
import './Footer.css'

function Footer() {
    return (
    <>
        <div className='app__footer'>
            <div className='grid'>
                <div className='row no-gutters'>
                    <div className='col b-12'>
                        <div className='footer__top'>
                            <h1>Kết nối với chung tôi</h1>
                            <div className='footer__socials'>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram-square"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                        <div className='footer__bottom'>
                            <h1>TEAM FLASH <i className="far fa-copyright"></i> 2022</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;
