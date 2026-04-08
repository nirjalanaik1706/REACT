import React, { useState } from "react";

function InsertProduct() {

    const [id, setId] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const[unitprice,setUnitprice]=useState("")
    const[likes,setLikes]=useState("");
    const[imageurl,setImageurl]=useState("");
    const [message, setMessage] = useState("");

    const handleInsert = () => {
        if (!id || !title || !description|| !unitprice ||!likes ) {
            setMessage("Please fill all fields");
            return;
        }

        fetch("http://localhost:7777/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id:id,
                title:title,
                description: description,
                imageurl:imageurl,
                unitprice:unitprice,
                likes:likes
            })
        })
        .then(response => {
            if (response.ok) {
                setMessage("Product added successfully");
                setId("");
                settitle("");
                setdescription("");
                setImageurl("");
                setUnitprice("");
                setLikes("");
            } else {
                setMessage("Product not added");
            }
        })
        .catch(() => {
            setMessage("Error added product");
        });
    };

    return (
        <div className="text-center">
            <h3>Add Product</h3>

            <input
                type="text"
                placeholder="Enter Product ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Enter New Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Enter New description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Enter New Imageurl"
                value={imageurl}
                onChange={(e) => setImageurl(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Enter New unitprice"
                value={unitprice}
                onChange={(e) => setUnitprice(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Enter New likes"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
            />
            <br /><br />



            <button onClick={handleInsert}>
                Insert
            </button>

            <p>{message}</p>
        </div>
    );
}

export default InsertProduct;