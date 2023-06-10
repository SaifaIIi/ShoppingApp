import React from "react";
import { withRouter } from "react-router-dom";

function EmptyCart(props) {
  return (
    <div className="empty-cart" >
      <div class="container-fluid  mt-100">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Your Cart</h5>
              </div>
              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img
                    src="https://i.imgur.com/dCdflKN.png"
                    width="130"
                    height="130"
                    class="img-fluid mb-4 mr-3"
                  />
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Add something in Cart</h4>
                  <button
                  onClick={()=>{props.history.push("/")}}
                    class="btn btn-primary cart-btn-transform m-3"
                    data-abc="true"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(EmptyCart);
