import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  filterProductsAction,
  filterProductsPriceAction,
  sortProductsAction,
} from "../../store/productsReducer";

function Filtration({id}) {
  let dispatch = useDispatch();
  const formRef = useRef();

  function setMinMaxPrice(e) {
      let data = new FormData(formRef.current);
      data = Object.fromEntries(data);
      data.max_price = (!data.max_price) ? Infinity : +data.max_price;
      data.min_price = (!data.min_price) ? -Infinity : +data.min_price;
      dispatch(filterProductsPriceAction(data));
    }
      


  return (
    <div>
      <div className="filtration">
        <div className="price_filtration">
          <p>Price</p>
          <form ref={formRef} onChange={(e) => setMinMaxPrice(e)} className="MinMaxPrice">
            <input name="min_price" type={"number"} placeholder="from" />
            <input name="max_price" type={"number"} placeholder="to" />
          </form>
        </div>
        <div className="checkbox">
          <p>Items on sale</p>
          <input
            onChange={(e) => dispatch(filterProductsAction(e.target.checked))}
            type={"checkbox"}
          />
        </div>
        <div className="select_filtration">
          <p>Sort:</p>
          <select
            onChange={(e) => dispatch(sortProductsAction(e.target.value))}
          >
            <option value={0}>default</option>
            <option value={1}>Price Descending</option>
            <option value={2}>Ascending price</option>
            <option value={3}>alphabetically</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filtration;
