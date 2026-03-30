import React from "react";
class Products extends React.Component {
  render() {
    return (
      <div>
        <h3>Flower Details</h3>
        <hr/>
        <p>Title: Gerbera</p>
        <p>Description: A beautiful red flower.</p>
        <p>Quantity Available: 10</p>
        <p>Unit Price: 5.99</p>
        <p>Likes: 15</p>
        <br/>
        <button>Add to Cart</button>
      </div>
    );
  }
}
export default Products;