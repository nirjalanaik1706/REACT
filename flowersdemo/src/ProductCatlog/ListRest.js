import React, { useState, useEffect } from "react";
import Product from './Product';

function RestList() {
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:7777/products")
            .then(
                async response => {
                    const data = await response.json();
                    if (!response.ok) {
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    setProducts(data);
                })
            .catch(error => {
                setErrorMessage(error.toString());
                console.log("There was an error while fetching data" + error);
            });
        },
    );


    return (

        <div className="text-center">
            {errorMessage && <p>{errorMessage}</p>}
            {
                products.map(item => (
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

export default RestList;