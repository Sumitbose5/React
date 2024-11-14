import './regis.css'
import { useState } from 'react';

export const RegistrationReact = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser((prev) => ({ ...prev, [name]: value}));   // [name] is a dynamic value
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className='container'>
                    <h1>Sign up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder='Enter firstName'
                        required 
                        value={user.firstName}
                        autoComplete='off'
                        onChange={handleInputChange}
                    />


                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Enter Last Name'
                        required 
                        value={user.lastName}
                        autoComplete='off'
                        onChange={handleInputChange}
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder='Enter Email' name="email" required value={user.email}
                    onChange={handleInputChange} />


                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input 
                        type="password" 
                        name="password"
                        placeholder='Enter Password'
                        required
                        autoComplete='off'
                        value={user.password} 
                        onChange={handleInputChange}
                    />

                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>

                    <input 
                        type="phone" 
                        name="phoneNumber" 
                        placeholder='9876543352' 
                        required 
                        autoComplete=''
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{color : 'dodgerblue'}}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className='clearFix'>
                        <button type='submit' className='btn'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>

            <section
                className='summary'
                style={{textAlign: "center", marginTop: "30px"}}
            >

                <p>
                    Hello, my name is 
                    <span>
                        {user.firstName} {user.lastName}
                    </span>
                    . My email address is <span>{user.email}</span> and my phone number is 
                    <span>{user.phoneNumber}</span>.
                </p>
                
            </section>
        </>
    );

}