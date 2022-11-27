import React, {useState} from "react";

export default function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        const {name, value, type} = event.target
        setLogin(prevLogin => ({
            ...prevLogin,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        
    }

    return(
        <div className="login_form">
            <form className="form" action="" onSubmit={handleSubmit}>
            <input
                    type="text" 
                    placeholder="Username"
                    name="username"
                    className="login--input"
                    value={login.username}
                    onChange={handleChange}
                />
                <input
                    type="password" 
                    placeholder="Password"
                    name="password"
                    className="login--input"
                    value={login.password}
                    onChange={handleChange}
                />
                <button 
                    className="login--submit"
                >
                    Sign in
                </button>
            </form>
        </div>
    )
}