import React, {useState} from "react"

export default function Signup() {
    const [signup, setSignup] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        password_confirm: ""
    })

    function handleChange(event) {
        const {name, value, type} = event.target
        setSignup(prevSignup => ({
            ...prevSignup,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (signup.password === signup.password_confirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Password does not match")
        }
    }

    return (
        <div className="signup_form">
            <form className="form" action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Firstname"
                    name="firstname"
                    className="signup--input"
                    value={signup.firstname}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Lastname"
                    name="lastname"
                    className="signup--input"
                    value={signup.lastname}
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    placeholder="Email address"
                    name="email"
                    className="signup--input"
                    value={signup.email}
                    onChange={handleChange}
                />
                <input
                    type="text" 
                    placeholder="Username"
                    name="username"
                    className="signup--input"
                    value={signup.username}
                    onChange={handleChange}
                />
                <input
                    type="password" 
                    placeholder="Password"
                    name="password"
                    className="signup--input"
                    value={signup.password}
                    onChange={handleChange}
                />
                <input
                    type="password" 
                    placeholder="Confirm Password"
                    name="password_confirm"
                    className="signup--input"
                    value={signup.password_confirm}
                    onChange={handleChange}
                />
                <button 
                    className="signup--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}