import React from "react";
import Order from "./Order";
import data from "../data/orders.json";  

function Orders() {

    const orders = data;

    return (
        <div className="text-center">
            <h2>Orders List</h2>

            {
                orders.map(order => (
                    <Order
                        key={order.id}
                        id={order.id}
                        customer={order.customer}
                        orderdate={order.orderdate}
                        Amount={order.Amount}
                    />
                ))
            }
        </div>
    );
}

export default Orders;