/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Product.css'
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../asyncAction/product';
import { baseUrl } from '../..';
import { addElemsAction} from '../../store/basketReducer';




function Product() {
    let dispatch = useDispatch();
    let { id } = useParams();
    const product = useSelector((store) => store.oneProduct.oneProduct);
    
  
    useEffect(() => {
      dispatch(fetchOneProduct(id));
    }, [id]);
  return (
    <div className='category_part'>
        <div className='category_part_wrapper'>
            <Header/>
      <div className='all_categories'>
        <div className="category_types">
          {product.map((elem) => (
            <div className='one_product'>
              <div className='title_img_product'>
                <h3>{elem.title}</h3>
              <img
                src={baseUrl + elem.image}
                alt="photo"
                width="710"
                height="710"
              />
              </div>
              <div className='product_info'>
              <div>
                    {(elem.price - elem.discont_price != 0) ?
                    <div className="product_price">
                    <p className="discont_price">{elem.discont_price}$</p>
                    <p className="price">{elem.price}</p>
                    <p className="percent">
                    -
                    {Math.round(
                      100 - (elem.discont_price * 100) / elem.price
                    )}
                    %
                  </p>
                      </div>:<p className="discont_price">{elem.price}$</p>}
                   
                  </div>
                <button onClick={()=> dispatch(addElemsAction(elem))} className='btn'>Add to cart</button>
                <span className='line'></span>
                <div>
                  <h4>Description</h4>
                <p className='description'>{elem.description}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
        <Footer/> 
    </div>
  )
}

export default Product
