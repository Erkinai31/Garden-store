/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,  useParams } from "react-router-dom";
import { baseUrl } from "../..";
import { fetchCategories } from "../../asyncAction/categories";
import { fetchAllProductsList, fetchAllSalesProductsList, fetchCategory } from "../../asyncAction/category";
import { addElemsAction } from "../../store/basketReducer";
import Filtration from "../Filtration/Filtration";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./CategoryTypes.css";

export default function CategoryTypes() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let productsList = useSelector(
    (store) => store.productsList.productsList
  ).filter((elem) => elem.show && elem.show2);
  const categories = useSelector(
    (store) => store.categoriesList.categoriesList
  ).find((elem) => elem.id == id);
  

  useEffect(() => {
    if(id == 'all'){
      dispatch(fetchAllProductsList())
    }else if(id == 'sales'){
      dispatch(fetchAllSalesProductsList())
    }else if (!isNaN(+id)) {
      dispatch(fetchCategory(id))
  }
    dispatch(fetchCategories());  
  }, [id]);

  return (
    <div className="category_part">
      <div className="category_part_wrapper">
        <Header/>
        <div className="all_categories">
        <Filtration/>
          <div>
            <h3>{id != "all" ? categories?.title : "All products"}</h3>
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
                  <button onClick={(e)=> {
                    e.preventDefault()
                    dispatch(addElemsAction(elem))
                  }}  
                  className="btn btn_cart">Add to cart</button>
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
      </div>
      <Footer />
    </div>
  );
}
