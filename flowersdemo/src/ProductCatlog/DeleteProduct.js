import React,{useState} from "react";

function DeleteProduct(){
    
    const[id,setId]=useState("");
    const[errorMessage,setError]=useState("");
    const handleDelete=()=>{
        if(!id){
            setError("Please enter id");
            return;
        }
        fetch(`http://localhost:7777/products/${id}`,{
            method:"DELETE"
        })
        .then(response=>{
            if(response.ok){
                setError("product deleted");
                setId("");
            }
            else{
                setError("product not found");
            }
        })
        .catch(()=>{
            setError("error deleteing product");
        });
    
    };

    return(
        <div className="text-center">
        <h3>Delete Product</h3>
        <input type="text" placeholder="id" value={id} onChange={(e)=>setId(e.target.value)}/>
        <br/> <br/>
        <button onClick={handleDelete}>Delete</button>
        <p>{errorMessage}</p>
        </div>
    )
}

export default DeleteProduct;