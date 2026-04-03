import React from "react";

function Order(props) {
    return (
        <div className="text-center" style={{border: "1px solid gray", margin: "10px", padding: "10px"}}>
            
            <p><b>Order ID:</b> {props.id}</p>
            <p><b>Customer:</b> {props.customer}</p>
            <p><b>Order Date:</b> {props.orderdate}</p>
            <p><b>Amount:</b> ₹{props.Amount}</p>

        </div>
    );
}

export default Order;