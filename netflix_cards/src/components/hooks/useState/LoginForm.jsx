import { useState } from "react";
import "./regis.css"

export const LoginForm = () => {

    const[loginData, setLoginData] = useState({
        userName: "",
        password: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prev) => ({...prev, [name] : value}));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="userName" required autoComplete="off" onChange={handleInputChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required autoComplete="off" onChange={handleInputChange}/>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}