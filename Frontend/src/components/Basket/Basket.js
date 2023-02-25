import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { baseUrl } from "../..";
import "./Basket.css";
import {
  addCountAction,
  remCountAction,
  remElemAction,
} from "../../store/basketReducer";
import { useNavigate } from "react-router-dom";
import del from "../img/xxx.svg";

export default function Basket() {
  let basket = useSelector((store) => store.basket.basket);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let backsite = () => navigate(-1);
  useEffect(() => {
    localStorage.setItem("goods", JSON.stringify(basket));
  }, [basket]);

  let totalPrice = basket.reduce((total,item)=>{
    return (total + item.discont_price) * item.count
  },0)
  
  

  return (
    <div>
      <Header />
      <div className="basket_main">
        <div>
          <h2 className="basket_title">Basket</h2>
        </div>
        <div className="basket_content">
          <div>
            <div className="basket_position">
              <p className="direction">Main/Basket</p>
              <p onClick={() => backsite()} className="backsite">
                Back to shop
              </p>
            </div>
            {basket.map((elem) => (
              <div className="basket_content__wrap">
                <hr />
                <div className="goods_part">
                  <div className="basket_wrapper">
                    <img
                      src={baseUrl + elem.image}
                      alt="photo"
                      width="193"
                      height="187"
                      className="basket_img"
                    />
                    <div className="title_count">
                      <p> {elem.title} </p>
                      <div className="basket_count">
                        <p onClick={() => dispatch(remCountAction(elem.id))}>
                          -
                        </p>
                        <p>{elem.count}</p>
                        <p onClick={() => dispatch(addCountAction(elem.id))}>
                          +
                        </p>
                      </div>
                    </div>
                    <p className="discont_price">{elem.discont_price*elem.count}$</p>
                    <p className="price">{elem.price*elem.count}$</p>
                  </div>
                  <img
                    src={del}
                    onClick={() => dispatch(remElemAction(elem.id))}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="goods_order">
            <h4 className="order_title">Order Details</h4>
            <div className="order_sum">
              <p className="sum_text">Sum</p>
              <p className="goods_sum">{totalPrice}$</p>
            </div>
            <input type="number" placeholder="Your phone number" className="order_input"/>
            <button className="btn">Order</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
