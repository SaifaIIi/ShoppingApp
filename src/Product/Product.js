import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelData } from "../features/productDatas/allProducts";
import Cards from "./Cards";
import Loader from "./Loader";
import ConfirmationPopup from "./ConfirmationPopup";

function Product() {
  const dispatch = useDispatch();
  const allDatas = useSelector((state) => state.allProducts.value);
  const selctedCategory = useSelector(
    (state) => state.allProducts.categorySelected
  );
  const onHideConfirmationPopup = () => {
    dispatch(modelData({ msg: "", show: false }));
  };
  const onUpdateConfirmationPopup = () => {};
  const msg = useSelector((state) => state.allProducts.model.msg);
  const show = useSelector((state) => state.allProducts.model.show);

  if (!allDatas.length) {
    return <Loader show={true} />;
  }
  return (
    <div>
      <div className="demo"></div>
      <main>
        {selctedCategory
          ? allDatas
              .filter((e) => {
                return e.category == selctedCategory;
              })
              .map((ele) => {
                return <Cards {...ele} />;
              })
          : allDatas.map((ele) => {
              return <Cards {...ele} />;
            })}
      </main>
      <ConfirmationPopup
        show={show}
        msg={msg}
        onHideConfirmationPopup={onHideConfirmationPopup}
        onUpdateConfirmationPopup={onUpdateConfirmationPopup}
      />
    </div>
  );
}

export default Product;
