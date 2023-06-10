import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/productDatas/allProducts";
import { withRouter } from "react-router-dom";
import toCamelCase from "./toCamelCase";



function Cards(props) {
  // const count = useSelector((state) => state.allProducts.value);
  const dispatch = useDispatch();
  return (
    <div className="mainDiv">
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

          <h3> ₹{props.price}</h3>
        </div>

        {props.qty ? (
          <div className="added-cart-text">Added to Cart</div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Cards);
