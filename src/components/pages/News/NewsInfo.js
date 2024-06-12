import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrum from '../../Breadcrum';
import './NewsInfo.css'

function NewsInfo({ dataItem }) {
    const { src, title, content } = dataItem;
    const { newsId } = useParams();

    useEffect(() => {

    }, [])
    return (
        <>
            <div className='news__info'>
                <Breadcrum><Link to='/news'>Tin tức</Link>
                </Breadcrum>
                <div className='news__info-container'>
                    <div className='grid'>
                        <div className='row no-gutters'>
                            <div className='col b-12'>
                                <div className='news__info-img-box'>
                                    <div className='news__info-img'>
                                        <img src={src} alt='img'></img>
                                    </div>
                                </div>
                                <div className='news__info-content'>
                                    <h2>{title}</h2>
                                    {
                                        content && content.map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsInfo;
