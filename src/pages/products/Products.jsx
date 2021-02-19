import shoppingAllInOneApi from "../../services/api";
import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import ProductCard from "../../components/ProductCard";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      status: "loading",
      sortMethod: "Best Match",
      sortedData: null,
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.product);
    if (this.props.match.params.product != null) {
      this.setState({
        status: "loading",
      });
      shoppingAllInOneApi
        .getProduct(this.props.match.params.product)
        .then((result) => {
          let newArr0 = {
            lazada: result.data.lazada.map((x) => x),
            shopee: result.data.shopee.map((x) => x),
          };
          let newArr1 = {
            lazada: result.data.lazada.map((x) => x),
            shopee: result.data.shopee.map((x) => x),
          };
          let newArr2 = {
            lazada: result.data.lazada.map((x) => x),
            shopee: result.data.shopee.map((x) => x),
          };
          newArr1.lazada.sort((a, b) => a.price - b.price);
          newArr1.shopee.sort((a, b) => a.price - b.price);
          newArr2.lazada.sort((a, b) => b.price - a.price);
          newArr2.shopee.sort((a, b) => b.price - a.price);
          let newArr = [].concat(newArr0, newArr1, newArr2);
          console.log(newArr);
          this.setState({
            products: newArr[0],
            sortedData: newArr,
            status: "loaded",
          });
        });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.product !== prevProps.match.params.product) {
      if (this.props.match.params.product != null) {
        this.setState({
          status: "loading",
        });
        shoppingAllInOneApi
          .getProduct(this.props.match.params.product)
          .then((result) => {
            let newArr0 = {
              lazada: result.data.lazada.map((x) => x),
              shopee: result.data.shopee.map((x) => x),
            };
            let newArr1 = {
              lazada: result.data.lazada.map((x) => x),
              shopee: result.data.shopee.map((x) => x),
            };
            let newArr2 = {
              lazada: result.data.lazada.map((x) => x),
              shopee: result.data.shopee.map((x) => x),
            };
            newArr1.lazada.sort((a, b) => a.price - b.price);
            newArr1.shopee.sort((a, b) => a.price - b.price);
            newArr2.lazada.sort((a, b) => b.price - a.price);
            newArr2.shopee.sort((a, b) => b.price - a.price);
            let newArr = [].concat(newArr0, newArr1, newArr2);
            console.log(newArr);
            this.setState({
              products: newArr[0],
              sortedData: newArr,
              status: "loaded",
            });
          });
      }
    }
  }
  sortSelect = (e) => {
    if (e === "Best Match") {
      this.setState({
        sortMethod: e,
        products: this.state.sortedData[0],
      });
    }
    if (e === "Price low to high") {
      this.setState({
        sortMethod: e,
        products: this.state.sortedData[1],
      });
    }
    if (e === "Price high to low") {
      this.setState({
        sortMethod: e,
        products: this.state.sortedData[2],
      });
    }
  };
  render() {
    return (
      <div className="product_list container">
        <div className="searchPage">
          <div className="searchPage__header">
            <Link to="/">
              <img
                className="searchPage__logo"
                src="https://allinone.pk/wp-content/uploads/2020/09/all-in-one-logo.png"
                alt=""
              />
            </Link>
            <div className="searchPage__headerBody">
              <Search hideButtons={true} style={{ display: "inline-block" }} />
            </div>
          </div>
          <div className="searchPage__results"></div>
        </div>
        {this.state.status === "loading" ? (
          <div class="loader"></div>
        ) : (
          <div className="dropdownContainer">
            <p className="dropdownHeading">Sort by: </p>
            <Dropdown alignLeft>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.sortMethod}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Best Match" onSelect={this.sortSelect}>
                  Best Match
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Price low to high"
                  onSelect={this.sortSelect}
                >
                  Price low to high
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Price high to low"
                  onSelect={this.sortSelect}
                >
                  Price high to low
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        <div
          className={`${
            !this.state.products || this.state.status === "loading"
              ? "scrollmenuHidden"
              : "scrollmenu"
          }`}
        >
          <h3 className="menuTitle">Lazada</h3>
          {!this.state.products
            ? ""
            : this.state.products.lazada.map((product) => {
                return (
                  <ProductCard
                    productUrl={product.productUrl}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                );
              })}
        </div>
        <div
          className={`${
            !this.state.products || this.state.status === "loading"
              ? "scrollmenuHidden"
              : "scrollmenu"
          }`}
        >
          <h3 className="menuTitle">Shopee</h3>
          {!this.state.products
            ? ""
            : this.state.products.shopee.map((product) => {
                return (
                  <ProductCard
                    productUrl={product.productUrl}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}
export default Products;
