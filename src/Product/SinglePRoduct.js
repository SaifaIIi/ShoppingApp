import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { increment } from "../features/productDatas/allProducts";

function SinglePRoduct(props) {
  const product = useSelector((state) => state.allProducts.value).filter(
    (e) => {
      return e.id == props.match.params.id;
    }
  );
  const dispatch = useDispatch();


  return (
    <div className="main-single-product">
      {product.map((product, index) => {
        const productDescription = product.description;
        return (
          <React.Fragment key={product.id + index}>
            <div className="img-container">
              <img src={product.image} alt="product thumbnail" />
            </div>
            <div className="product-desc">
              <h2>{product.title}</h2>
              <p className="desc">
                {productDescription.charAt(0).toUpperCase() +
                  productDescription.slice(1)}
              </p>
              <p>
                <span className="price-value">₹{product.price.toFixed(2)}</span>
              </p>
              <button
                onClick={() => {
                  if (product.qty) {
                    props.history.push("/my-cart");
                  } else {
                    dispatch(increment(product.index));
                  }
                }}
                className={product.qty ? "go-cart" : "add-cart"}
              >
                {product.qty ? "Go to Cart" : "Add to Cart"}
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default withRouter(SinglePRoduct);
