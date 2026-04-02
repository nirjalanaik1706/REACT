import React from 'react';
import Item from './Item';
import data from '../data/cart.json';

class Cart extends React.Component {
    render() {
        const cartitems = data;

        return (
            <div className="text-center">
                {
                    cartitems.map(item => (
                        <Item
                            key={item.id} 
                            title={item.title}
                            imageurl={item.imageurl} 
                            unitprice={item.unitprice}
                            quantity={item.quantity}
                            
                        />
                    ))
                }
            </div>
        );
    }
}

export default Cart;