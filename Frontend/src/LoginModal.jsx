import React, { useState } from "react";

const LoginModal = (props) => {
    const [state, setState] = useState("login");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleState = () => {
        setState(prev => (prev === "login" ? "signup": "login"));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(state === "signup") {
            setNameError(name === "");
        }
        setEmailError(email === "" || !/\S+@\S+\.\S+/.test(email));
        setPasswordError(password === "" || password.length < 4);

        if (email && password && !emailError && !passwordError) {
            console.log(name, email, password);
            props.handleClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <form className="bg-white w-11/12 sm:w-2/3 md:w-2/3 lg:w-1/3 p-8 pt-12 pb-12 rounded-xl shadow-lg relative" onSubmit={handleSubmit}>
                <button className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800 focus:outline-none" onClick={props.handleClose}>&times;</button>
                
                <p className="font-bold text-center mb-2">{ state === "login" ? "Sign in to your account" : "Create your account" }</p>
                
                <p className="font-thin text-center mb-4">{ state === "login" ? "Welcome back! Please sign in to continue" : "Hi! Please sign up to continue" }</p>

                {
                    state === "signup" && (
                        <div className="mb-4">
                            <label htmlFor="name" className="text-left">Full name</label><br />
                            <input type="text" name="name" id="name" className={`border w-full rounded p-2 required:border-red-500 ${nameError ? 'outline-red-600' : 'outline-none'}`} value={name} onChange={(e) => setName(e.target.value)} />
                            {nameError && <p className="text-red-500 text-sm">Name is required.</p>}
                        </div>
                    )
                }

                <div className="mb-4">
                    <label htmlFor="email" className="text-left">Email address</label><br />
                    <input type="email" name="email" id="email" className={`border w-full rounded p-2 required:border-red-500 ${emailError ? 'outline-red-600' : 'outline-none'}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className="text-red-500 text-sm">Please enter a valid email.</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" className={`border w-full rounded p-2 required:border-red-500 ${passwordError ? 'outline-red-600' : 'outline-none'}`} value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <p className="text-red-500 text-sm">Password must be at least 6 characters.</p>}
                </div>

                <div className="flex justify-center m-4">
                    <input type="submit" value={ state === "login" ? "Signin" : "Signup" } className="bg-blue-400 py-1 px-6 rounded-md font-semibold text-white hover:scale-105 cursor-pointer hover:shadow-lg duration-300 ease-in-out w-2/3" />
                </div>

                <p className="text-center">
                    {
                        state === "login" ?
                        <>Don't have an account? <span className="hover:font-semibold cursor-pointer duration-300 ease-in-out" onClick={handleState}>Sign up</span></> :
                        <>Already have an account? <span className="hover:font-semibold cursor-pointer duration-300 ease-in-out" onClick={handleState}>Sign in</span></>
                    }
                </p>
            </form>
        </div>
    );
};

export default LoginModal;