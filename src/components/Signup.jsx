import React from  from "react";

export default function Signup() {

    return (
        <div className="signup_form">
            <input
                type="text"
                placeholder="Firstname"
                name="first_name"
                className="signup"
                value={signup.firstname}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Lastname"
                name="last_name"
                className="signup"
                value={signup.lastname}
                onChange={handleChange}
            />
            <input 
                type="email" 
                placeholder="Email address"
                name="email"
                className="signup"
                value={signup.email}
                onChange={handleChange}
            />
            <input
                type="text" 
                placeholder="Username"
                name="username"
                className="signup"
                value={signup.username}
                onChange={handleChange}
            />
            <input
                type="password" 
                placeholder="Password"
                name="password"
                className="signup"
                value={signup.password}
                onChange={handleChange}
            />
            <input
                type="password" 
                placeholder="Confirm Password"
                name="password_confirm"
                className="signup"
                value={signup.password_confirm}
                onChange={handleChange}
            />
            
        </div>
    )
}