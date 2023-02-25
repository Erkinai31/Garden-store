import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { baseUrl } from "../..";
import { fetchAllProductsList } from "../../asyncAction/category";
import { addElemsAction } from "../../store/basketReducer";
import Filtration from "../Filtration/Filtration";

function ProductsList() {
    let productsList = useSelector((store) => store.productsList.productsList).filter((elem) => elem.show && elem.show2);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsList());
  }, []);
  

  return (
    <div className="category_part">
      <div className="category_part_wrapper">
        <Header />
        <div className="all_categories">
          <div>
            <h3>Products</h3> 
            <Filtration/>
          </div>
          <div className="category_types">
            {productsList.map((elem) => (
              <Link to={`/products/${elem.id}`} className="category_text">
              <div key={elem.id}>
                <div className="img_cart">
                  <img
                  src={baseUrl + elem.image}
                  alt="photo"
                  width="318"
                  height="330"
                />
                <button onClick={()=> dispatch(addElemsAction(elem))} className="btn btn_cart">Add to cart</button>
                </div>
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
                    </div>:<div className="product_price"><p className="discont_price">{elem.price}$</p></div>}
                </div>
               <p className="ctg_title">{elem.title}</p> 
              </div> 
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
}
export default ProductsList;