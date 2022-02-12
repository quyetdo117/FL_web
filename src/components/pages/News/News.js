import React from 'react';
import Breadcrum from '../../Breadcrum';
import { useStore } from '../../../store';
import NewsItem from './NewsItem';


function News() {
    const [stateG_Data,] = useStore();
    const {listNews} = stateG_Data
    return (
        <>
            <div className='app__news'>
                <Breadcrum>Tin tức</Breadcrum>
                <div className='news__container'>
                    <div className='grid'>
                        <div className='news__list'>
                            <div className='row'>
                                {
                                    listNews && listNews.map((item, index) => (
                                        <NewsItem dataItem={item} key={index}/>
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
