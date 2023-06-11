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

  let starts = [];
  let rating = product[0]?.rating.rate;
  let mainRate = `${product[0]?.rating.rate.toFixed(1)}`.slice(0, 1);
  let fractionVal = `${product[0]?.rating.rate.toFixed(1)}`.slice(2, 3);
  let off = 100 - (product[0]?.price * 100) / product[0]?.actualPrice;

  if (mainRate) {
    for (let i = 1; i <= 5; i++) {
      if (mainRate >= i) {
        starts = [...starts, <span class="fa fa-star checked"></span>];
      } else if (Number(mainRate) + 1 == i && fractionVal > 5) {
        starts = [...starts, <span class="fa fa-star checked"></span>];
      } else if (fractionVal >= 3 && fractionVal <= 5) {
        starts = [
          ...starts,
          <span class="fa fa-star-half-full checked"></span>,
        ];
      } else {
        starts = [...starts, <span class="fa fa-star"></span>];
      }
    }
  }

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
                <span className="price-value">
                  ₹{product.price.toFixed(2)}{" "}
                  <span className="actualPrice"> ₹{product.actualPrice}</span>
                  <span className="percentOff">{off.toFixed(2)}% off</span>{" "}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 2rem 0",
                }}
              >
                {starts}
                <div className="ratting-wrapper">
                  <div
                    className={`ratting  ${
                      Math.floor(product.rating.rate) >= 3
                        ? "green"
                        : Math.floor(product.rating.rate) === 2
                        ? "orange"
                        : Math.floor(product.rating.rate) === 1
                        ? "red"
                        : "no"
                    }  `}
                  >
                    <span>{product.rating.rate}</span>{" "}
                    <img src={require("./star.png")} alt="star" />
                  </div>
                  <span className="ratting-count">
                    ({product.rating.count})
                  </span>
                </div>
              </div>
              <div>
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
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default withRouter(SinglePRoduct);
