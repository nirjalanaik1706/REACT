import React from 'react';
import Product from './Product';
import data from '../data/Products.json'; 

class List extends React.Component {
    render() {
        const flowers = data;

        return (
            <div className="text-center">
                {
                    flowers.map(item => (
                        <Product
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            imageurl={item.imageurl}
                            unitprice={item.unitprice}
                            likes={item.likes}
                        />
                    ))
                }
            </div>
        );
    }
}

export default List;