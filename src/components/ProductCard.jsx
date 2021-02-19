import "./ProductCard.scss";
import React from "react";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      productUrl: "",
      image: "",
      name: "",
      price: "",
    };
  }
  render() {
    //console.log(this.state.input);
    return (
      <div className="productCard item-container">
        <div className="item-container">
          <a
            target="_blank"
            href={this.props.productUrl}
            className="product-card"
            rel="noreferrer"
          >
            <div className="img-container">
              <img className="img-fluid" src={this.props.image} alt="" />
            </div>
            <div className="card-text">
              <h5 className="card-title">{this.props.name}</h5>
              <div className="card-price">Price: ${this.props.price}</div>
            </div>
          </a>
        </div>
        <p></p>
      </div>
    );
  }
}
export default ProductCard;
