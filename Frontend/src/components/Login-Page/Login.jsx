import React, { useState } from "react";

const Login = () => {
    const [state, setState] = useState("Login");
    // const [state, setState] = useState("Logn");

    const handleState = () => {
        state === "Login" ? setState("Sign up") : setState("Login");
    }

    return (
        <div>
            {
                state !== "Login" ? <h1>Create Account</h1> : <h1>Login</h1>
            }

            {
                state !== "Login" ?
                <div>
                    <label htmlFor="name">Full Name <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="name" id="name" placeholder="Your name" />
                </div> : <></>
            }

            <div>
                <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
                <input type="email" name="email" id="email" placeholder="Your email" />
            </div>

            <div>
                <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
                <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                />
            </div>

            { state !== "Login" ? 
            <div>
                <label htmlFor="radio">You are? <span style={{ color: "red" }}>*</span></label>
                <input type="radio" name="radio" id="radio" />Applicant
                <input type="radio" name="radio" id="radio" />Employeer
            </div>
            : <></> }

            

            <button>{state !== "Login" ? "Sign up" : "Login" }</button>

            {state !== "Login" ? <p>Have an account? <span onClick={handleState}>Login</span></p> : <p>Don't have an account? <span onClick={handleState}>SignUp</span></p>}
        </div>
    );
};

export default Login;
