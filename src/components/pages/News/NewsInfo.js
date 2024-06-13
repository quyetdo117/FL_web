import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrum from '../../Breadcrum';
import './NewsInfo.css';
import NetWorking from '../../../NetWorking/NetWorking'

function NewsInfo({ dataItem }) {
    const { newsId } = useParams();
    const [infoNews, setInfoNews] = useState({});

    useEffect(() => {
        let url = `/news_list/detail?id=${newsId}`
        NetWorking.requestGet(url, (json) => {
            let { data } = json;
            console.log('loggg xem nao', json);
            setInfoNews(data)
        })
    }, []);

    let {image, title, content} = infoNews

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
                                        <img src={image} alt='img'></img>
                                    </div>
                                </div>
                                <div className='news__info-content'>
                                    <h2>{title}</h2>
                                    <p>{content}</p>
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
