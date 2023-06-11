import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector } from "../features/productDatas/allProducts";
import toCamelCase from "./toCamelCase";
import { withRouter } from "react-router-dom";

function CollapsibleExample(props) {
  const selctedCategory = useSelector(
    (state) => state.allProducts.categorySelected
  );
  const categoryData = useSelector((state) => state.allProducts.category);
  const toTalCount = useSelector((state) => state.allProducts.value).reduce(
    (p, c) => {
      return p + c.qty;
    },
    0
  );
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            props.history.push("/");
          }}
        >
          <img className="logo" src={require("./shopping.png")} alt="" />
        </Navbar.Brand>

        <div></div>
        <div>
        <Nav>
            <Nav.Link
              onClick={() => {
                props.history.push("/my-cart");
              }}
            >
              <img
                className="cart-logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zlaDoa85WZjGm8kw8cv1U_rwtQxoEx2W-w&usqp=CAU"
                alt=""
                title={toTalCount ? "" : "Your Cart is Empty "}
              />
              <span className="toTalCount">{toTalCount}</span>
            </Nav.Link>
          </Nav>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                props.history.push("/");
              }}
            >
              Home
            </Nav.Link>
            <NavDropdown
              title={
                selctedCategory
                  ? toCamelCase(selctedCategory)
                  : "Select Category"
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => {
                  dispatch(categorySelector(""));
                }}
              >
                Show All Categories
              </NavDropdown.Item>
              {categoryData.map((e) => {
                return (
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(categorySelector(e));
                    }}
                  >
                    {toCamelCase(e)}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(CollapsibleExample);
