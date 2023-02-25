import { baseUrl } from "..";
import {
  AddCategoriesAction,
} from "../store/categoriesReducer";

export const fetchCategories = () => {
  return function (dispatch) {
    fetch(baseUrl + "/categories/all")
      .then((res) => res.json())
      .then((data) => dispatch(AddCategoriesAction(data)));
  };
};


