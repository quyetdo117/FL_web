import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css'
import {CartPage, NewsPage, NewsInfo, ProductInfo, ProductPage, RankPage, HomePage, MemberPage} from './index'
import BuyerInfo from './pages/BuyerInfo/BuyerInfo';

function Main(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[pathname])
  return (<>
    <div className='app__main' style={{minHeight: window.innerHeight}}>
        <>
            <Routes>
                <Route path='/' element ={<HomePage />}></Route>
                <Route path='/FL_web' element ={<HomePage />}></Route>
                <Route path='/member' element={<MemberPage />}></Route>
                <Route path={'/product/:productId'} element={<ProductInfo/>}></Route>
                <Route path='/product' element={<ProductPage />}></Route>
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/buyerInfo' element={<BuyerInfo />}></Route>
                <Route path='/rank' element={<RankPage />}></Route>
                <Route path='/news' element={<NewsPage />}></Route>
                <Route path={`/news/:newsId`} element={<NewsInfo/>}></Route>
            </Routes>
        </>
    </div>
  </>)
}

export default Main;
