import { useStore } from '../../../store';
import ProductItem from './ProductItem';
import './Product.css'
import Breadcrum from '../../Breadcrum';

function Product() {
  const [stateG_Data,] = useStore();
  return (
      <>
        <div className='main__product'>
            <Breadcrum>Sản phẩm</Breadcrum>
            <div className='product__container'>
              <div className='product__list'>
                <div className='grid'>
                  <div className='row'>
                    {
                      stateG_Data.listProduct && stateG_Data.listProduct.map((item, index) => (
                        <ProductItem dataProduct={item} key={index}/>
                      ))
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
