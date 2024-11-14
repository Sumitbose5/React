import { useState } from "react";
import "./regis.css"

export const ContactForm = () => {

    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        message: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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

                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        required
                        autoComplete="off"
                        rows="6"
                        onChange={handleInputChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}