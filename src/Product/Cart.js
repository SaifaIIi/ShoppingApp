import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  decrement,
  deleteItem,
  increment,
  modelData,
} from "../features/productDatas/allProducts";
import EmptyCart from "./EmptyCart";
import ConfirmationPopup from "./ConfirmationPopup";
let index = "";
function MyCart(props) {
  const allDatas = useSelector((state) => state.allProducts.value).filter(
    (ele) => {
      return ele.qty;
    }
  );
  const toTalCount = useSelector((state) => state.allProducts.value).reduce(
    (p, c) => {
      return p + c.qty;
    },
    0
  );
  const toTalPrice = useSelector((state) => state.allProducts.value).reduce(
    (p, c) => {
      return p + c.price * c.qty;
    },
    0
  );

  const onHideConfirmationPopup = () => {
    dispatch(modelData({ msg: "", show: false }));
  };
  const onUpdateConfirmationPopup = () => {
    dispatch(decrement(index));
    onHideConfirmationPopup();
  };
  const msg = useSelector((state) => state.allProducts.model.msg);
  const show = useSelector((state) => state.allProducts.model.show);

  const dispatch = useDispatch();

  if (!allDatas.length) {
    return <EmptyCart />;
  }

  return (
    <div>
      <div className="cart-container">
        {allDatas.map((product) => {
          let off = 100 - (product.price * 100) / product.actualPrice;

          return (
            <div className="cart" key={product.id}>
              <Link
                className="cart-link"
                to={`/detailed-product/${product.id}`}
              >
                <div className="img-container">
                  <img className="img" src={product.image} alt="product" />
                </div>
                <div className="cart-desc">
                  <p> {product.title}</p>
                  <span className="spanTotal">
                    <span span style={{ fontSize: "18px" }}>
                      Price:
                    </span>
                    &nbsp;
                    <span className="mainPrice"> ₹{product.price}</span>
                    &nbsp;&nbsp;Total&nbsp;
                    <span className="ttlspan">
                    ₹{(product.qty * product.price).toFixed(2)}
                    </span>
                  </span>
                </div>
              </Link>
              <div className="cart-nav">
                <button
                  onClick={() => {
                    if (product.qty > 1) {
                      dispatch(decrement(product.index));
                    } else {
                      dispatch(
                        modelData({
                          msg: "Do You Really Want To Remove",
                          show: true,
                        })
                      );
                      index = product.index;
                    }
                  }}
                >
                  ➖
                </button>

                <div className="cart-qty">
                  <span>{product.qty}</span>
                </div>
                <button
                  onClick={() => {
                    dispatch(increment(product.index));
                  }}
                >
                  ➕
                </button>
                <div
                  className="deletItem"
                  onClick={() => {
                    if (product.qty > 1) {
                      dispatch(deleteItem(product.index));
                    } else {
                      dispatch(
                        modelData({
                          msg: "Do You Really Want To Remove From Cart",
                          show: true,
                        })
                      );
                      index = product.index;
                    }
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSTLpt6bm3VTxfIFyVUIXZceRO0-cmY91umM-1YGczyYJTVngai3DfiwuPD1ZkjJYDw0&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}

        {allDatas.length ? (
          <>
            <div className="cart">
              <div className="subTotal">
                Subtotal ({toTalCount} items)
                <div className="subTotalPrice"> ₹ {toTalPrice.toFixed(2)}</div>
              </div>
              <div className="proceed-buy">Proceed to checkout</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <ConfirmationPopup
        show={show}
        msg={msg}
        onHideConfirmationPopup={onHideConfirmationPopup}
        onUpdateConfirmationPopup={onUpdateConfirmationPopup}
      />
    </div>
  );
}

export default withRouter(MyCart);
