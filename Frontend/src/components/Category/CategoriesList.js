import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories} from "../../asyncAction/categories";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { baseUrl } from "../..";

function CategoriesList() {
  let categories = useSelector((store) => store.categoriesList.categoriesList);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="category_part">
      <div className="category_part_wrapper">
        <Header />
        <div className="all_categories">
          <div>
            <h3>Categories</h3>
          </div>
          <div className="all_categories_types">
            {categories.map((elem) => (
              <div>
                <Link key={elem.id} to={`/categories/${elem.id}`} state={{checked: false}}>
                  <img
                    src={baseUrl + elem.image}
                    alt="photo"
                    width="350"
                    height="330"
                  />
                  <p className="category_text">{elem.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoriesList;
