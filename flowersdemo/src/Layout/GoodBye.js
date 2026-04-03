import React from "react";
import { useNavigate } from "react-router-dom";

const GoodBye = () => {

    const navigate = useNavigate();

    const handleClickBye = () => {
        console.log("Goodbye clickd");
        navigate('/');


    }
    return (
        <div className="text-center">
            <h3>Thank you for accepting me as your Mentor</h3>
            <button onClick={handleClickBye}>Hello</button>
            <br />
        </div>
    );
}

export default GoodBye;