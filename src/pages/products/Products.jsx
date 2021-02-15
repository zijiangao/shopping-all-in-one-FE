import shoppingAllInOneApi from "../../services/api";
import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import ProductCard from "../../components/ProductCard";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      status: "loading",
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
          this.setState({
            products: result,
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
            console.log(result);
            this.setState({
              products: result,
              status: "loaded",
            });
          });
      }
    }
  }
  render() {
    console.log(this.props.match.params.product);
    return (
      <div className="product_list container">
        <div className="searchPage">
          <div className="searchPage__header">
            <Link to="/">
              <img
                className="searchPage__logo"
                src="https://allinone.pk/wp-content/uploads/2020/09/all-in-one-logo.png"
              />
            </Link>
            <div className="searchPage__headerBody">
              <Search hideButtons={true} style={{ display: "inline-block" }} />
            </div>
          </div>
          <div className="searchPage__results"></div>
        </div>
        {this.state.status === "loading" ? <div class="loader"></div> : ""}
        <div
          className={`${
            !this.state.products || this.state.status == "loading"
              ? "scrollmenuHidden"
              : "scrollmenu"
          }`}
        >
          <h3 className="menuTitle">Lazada</h3>
          {!this.state.products
            ? ""
            : this.state.products.data.lazada.map((product) => {
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
            !this.state.products || this.state.status == "loading"
              ? "scrollmenuHidden"
              : "scrollmenu"
          }`}
        >
          <h3 className="menuTitle">Shopee</h3>
          {!this.state.products
            ? ""
            : this.state.products.data.shopee.map((product) => {
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
