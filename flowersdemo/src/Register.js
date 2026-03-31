import React from "react";

class Register extends React.Component {
    render() {
        return (
            <div>
                <h2>Register</h2>
                <form>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;