
import ProductItem from './ProductItem';
import './Product.css'
import Breadcrum from '../../Breadcrum';
import { useEffect, useState } from 'react';
import NetWorking from '../../../NetWorking/NetWorking'

function Product() {
  const [dataList, setData] = useState([]);
  useEffect(() => {
    let url = '/products'
    NetWorking.requestGet(url, (json) => {
      console.log('loggg jsonnn product', json);
      let { data } = json;
      setData(data)
    })
  }, [])
  return (
    <>
      <div className='main__product'>
        <Breadcrum>Sản phẩm</Breadcrum>
        <div className='product__container'>
          <div className='product__list'>
            <div className='grid'>
              <div className='row'>
                {
                  dataList.length ? dataList.map((item, index) => (
                    <ProductItem dataProduct={item} key={index} />
                  )) : null
                }
              </div >
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
