import React from 'react';


class Login extends React.Component {
    render() {
        return (
            <div className="text-center">
                <div className="text-center">
                    <h2>Login</h2>

                    <form>
                        <label>Username:</label> 
                        <input type="text" name="username" placeholder="Enter username" /><br/><br/>

                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter password" /><br/><br/>
                        
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;