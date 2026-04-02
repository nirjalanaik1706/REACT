import React, { useState } from "react";
import "../App.css";

function Item(props) {

    // state (same as constructor)
    const [quantity, setQuantity] = useState(props.quantity);

    return (
        <div className="text-center">
            <h2>Item Details</h2> 

            <p><b>Title:</b> {props.title}</p>
            <img src={props.imageurl} alt="item"style={{ width: "200px", height: "200px" }}/>
            <p><b>Quantity :</b> {quantity}</p>
            <p><b>Unit Price:</b> {props.unitprice}</p>
            <p><b>Amount:</b> {props.unitprice * quantity} Rs.</p>    



            <button>Remove</button>
        </div>
    );
}

export default Item;