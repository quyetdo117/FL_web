import React, { useEffect, useState } from 'react';
import Breadcrum from '../../Breadcrum';
import { useStore } from '../../../store';
import NewsItem from './NewsItem';
import NetWorking from '../../../NetWorking/NetWorking'


function News() {
    const [newsList, setList] = useState([]);
    useEffect(() => {
        let url = '/news_list'
        NetWorking.requestGet(url, (json) => {
            let { data } = json;
            setList(data)
        })
    }, []);
    return (
        <>
            <div className='app__news'>
                <Breadcrum>Tin tức</Breadcrum>
                <div className='news__container'>
                    <div className='grid'>
                        <div className='news__list'>
                            <div className='row'>
                                {
                                    newsList && newsList.map((item, index) => (
                                        <NewsItem dataItem={item} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;
