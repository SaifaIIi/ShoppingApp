import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/productDatas/allProducts";
import { withRouter } from "react-router-dom";
import toCamelCase from "./toCamelCase";

function Cards(props) {
  // const count = useSelector((state) => state.allProducts.value);
  const dispatch = useDispatch();
  let off = 100 - (props.price * 100) / props.actualPrice;

  return (
    <div className="mainDiv" title={props.description}>
      <button
        onClick={() => {
          if (props.qty) {
            props.history.push("/my-cart");
          } else {
            dispatch(increment(props.index));
          }
        }}
        className={props.qty ? "go-cart" : "add-cart"}
      >
        {props.qty ? "Go to Cart" : "Add to Cart"}
      </button>
      <div
        className="card-s"
        onClick={() => {
          props.history.push(`detailed-product/${props.id}`);
        }}
      >
        <img src={props.image} alt="" />
        <div className="category">{toCamelCase(props.category)}</div>
        <div className="card-content">
          <h4>{toCamelCase(props.title)}</h4>

          <h3>
            {" "}
            ₹{props.price}{" "}
            <span className="actualPrice"> ₹{props.actualPrice}</span>
            <span className="percentOff">{off.toFixed(2)}% off</span>
          </h3>
        </div>
        <div className="ratting-wrapper">
          <div
            className={`ratting  ${
              Math.floor(props.rating.rate) >= 3
                ? "green"
                : Math.floor(props.rating.rate) === 2
                ? "orange"
                : Math.floor(props.rating.rate) === 1
                ? "red"
                : "no"
            }  `}
          >
            <span>{props.rating.rate}</span>{" "}
            <img src={require("./star.png")} alt="star" />
          </div>
          <span className="ratting-count">({props.rating.count})</span>
        </div>
        &nbsp;&nbsp;
        {props.qty ? (
          <div className="added-cart-text">Added to Cart</div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Cards);
