import React from "react";
import { useNavigate } from 'react-router-dom';


const Hello = () => {

    const navigate = useNavigate();

    const handleClickhello = () => {
        console.log("Hello button is clicked");
        navigate('/goodbye')
    }
    const handleClicklogin = () => {
        console.log("login ");
        navigate('/login');
    }
    return (
        <div className="text-center">
            <h3>Welcome to transflower</h3>
            <button onClick={handleClickhello} >GoodBye</button>
            <button onClick={handleClicklogin} >Sign In</button>

        </div>
    );
}

export default Hello; 