import { baseUrl } from "..";
import { AddCategoryAction} from "../store/categoryReducer";
import { AddProductsAction, filterProductsAction } from "../store/productsReducer";

export const fetchCategory = (id) => {
  return function (dispatch) {
    fetch(`${baseUrl}/categories/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(AddCategoryAction(data)));
  };
};

export const fetchAllProductsList  = () => {
  return function(dispatch){
      fetch(`${baseUrl}/products/all`)
          .then(res => res.json())
          .then(data => dispatch(AddProductsAction(data)))
  }
}

export const fetchAllSalesProductsList  = () => {
  return function(dispatch){
      fetch(`${baseUrl}/products/all`)
          .then(res => res.json())
          .then(data => {
              dispatch(AddProductsAction(data))
              dispatch(filterProductsAction(true))
          })
  }
}
