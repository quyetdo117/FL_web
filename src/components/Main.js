import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './Main.css'
import {CartPage, NewsPage, NewsInfo, ProductInfo, ProductPage, RankPage, HomePage, MemberPage} from './index'
import { useStore } from '../store';

function Main() {
  const [stateG_Data] = useStore();
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  },[pathname])
  return (<>
    <div className='app__main' style={{minHeight: window.innerHeight}}>
        <>
            <Routes>
                <Route path='/' element ={<HomePage />}></Route>
                <Route path='/member' element={<MemberPage />}></Route>
                <Route path='/product' element={<ProductPage />}></Route>
                {
                  stateG_Data.listProduct &&
                  stateG_Data.listProduct.map((item, index) => (
                    <Route path={`/product/${item.id}`} element={<ProductInfo dataItem={item}/>} key={index}></Route>
                  ))
                }
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/rank' element={<RankPage />}></Route>
                <Route path='/news' element={<NewsPage />}></Route>
                {
                  stateG_Data.listNews &&
                  stateG_Data.listNews.map((item, index) => (
                    <Route path={`/news/${item.id}`} element={<NewsInfo dataItem={item}/>} key={index}></Route>
                  ))
                }
            </Routes>
        </>
    </div>
  </>)
}

export default Main;
