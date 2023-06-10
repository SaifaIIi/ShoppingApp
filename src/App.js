import { useEffect } from "react";
import "././Css/App.css";
import Cart from "./Product/Cart";
import Product from "./Product/Product";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import { addCategory, allData } from "./features/productDatas/allProducts";
import { useDispatch } from "react-redux";
import SinglePRoduct from "./Product/SinglePRoduct";
import NavScrollExample from "./Product/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
        let products = data.data.map((e, i) => {
          return { ...e, inCart: false, qty: 0, index: i };
        });
        dispatch(allData(products));
        dispatch(addCategory(products));
      })
      .catch((er) => {
        
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navBar-s">
          <NavScrollExample />
        </div>
        <Route exact path="/">
          <Product />
        </Route>
        <Route exact path="/detailed-product/:id">
          <SinglePRoduct />
        </Route>
        <Route exact path="/my-cart">
          <Cart />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
