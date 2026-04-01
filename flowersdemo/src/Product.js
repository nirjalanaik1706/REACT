import React from "react";
import "./App.css";
import Counter from "./Counter";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state={likes:props.likes};
        this.handler=this.handler.bind(this);
    }
    handler(data){
        this.setState({likes:data});

    }
    render() {
        return (
            <div className="text-center">
                <h2>Flower Details</h2> 

                    <p><b>Title:</b> {this.props.title}</p>
                    <img src={this.props.imageurl} alt="flower"/>
                    <p><b>Description:</b> {this.props.description}</p>
                    <p><b>Quantity available:</b> {this.props.quantity}</p>
                    <p><b>Unit Price:</b> {this.props.unitprice}</p>
                    <p><b>Total likes:</b> {this.state.likes}</p>
                    <Counter count={this.props.likes} handler={this.handler}> </Counter>
                    <br />
                    <button>Add to cart</button>
            </div>
        );
    }
}

export default Product;


