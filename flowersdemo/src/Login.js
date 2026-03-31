import React from 'react';
import "./App.css";

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <div className="login-card">
                    <h2>Login</h2>

                    <form>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Enter username" />

                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter password" />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;