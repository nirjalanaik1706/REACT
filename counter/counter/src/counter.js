import React,{useState} from "react";


const Counter=({count:initialCount,update})=>{

    const[count,setCount]=useState(initialCount);

    const increment=()=>{
        setCount(count+1);
        update(count+1);

    }

    const decrement=()=>{
        setCount(count-1);
        update(count-1);
    };

    return(
        <div>
           
            <p>Counter:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;