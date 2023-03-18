import React,{useState, useEffect} from 'react';
import { Link, useNavigate} from "react-router-dom";
import styled from "sytled-components";
import Logo from "..assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { signupRoute } from "../utils/apiRoutes";

function signup() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    useEffect(() => {
        if(localStorage = getItem('chat-app-user')) {
            navigate("/");
        }
    },[])

const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
        const { password, username, email} = values;
        const { data } = await axios.post(signupRoute, {
            username,
            email,
            password,
        });
        if (data.status === false) {
            toast.error(data.msg, toastOptiond);
        } 
        if (data.status === true) {
            localStorage.setItem('chat-app-user', JSON.stringify(data.user));
            navigate("/");
        }   
    }
};
constValidation = ()=> {
    const { password, confrimPassword, username, email} = values;
    if (password !== confirmPassword) { 
        toast.error("password and confirm password should be same.", toastOptions);       
    }
};
const handleChange = (event) => {
    setValues({ ...values, [event.targt.name]: event.target.value});
};
}


    <FormContainer>
        <form onSubmit = {(event) => handleSubmit(event)}>
            <div className = "brand">
                <img src = {"Logo"} alt = "logo"/>
                <h1>yommy</h1>
            </div>
            <input
            type = "text"
            placeholder = "Username"
            name = "username"
            onChange = {(e) => handleChange(e)}/>

            <input
            type = "email"
            placeholder = "Email"
            name = "email"
            onChange = {(e) => handleChange(e)}/>

            <input
            type = "password"
            placeholder = "Password"
            name = "password"
            onChange = {(e) => handleChange(e)}/>

            <input
            type = "password"
            placeholder = "ConfrimPassword"
            name = "confirmPassword"
            onChange = {(e) => handleChange(e)}/>

            <button type = "submit" >Create User </button>
            <span> Already Have an Account? <Link to="/login"
            >Link</Link></span>
        </form>

    </FormContainer>
    
    
    // Setup styled-component react css framework embeded in code to easy css implementation. 

    const FormContainer = styled.className=div`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: cneter;
        gap: 1rem;
        align-items: center;
        background-color: #131324;
        .brand {
            display:flex;
            align-items: center;
            gap: 1rem
            justify-content: center;
            img {
                color: white;
                text-transform: uppercase;
            }}

            form {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                background-color: #00000076;
                border-radius: 2rem;
                padding: 3rem 5rem;
            }
                input {
                    background-color: transparent;
                    padding: 1rem;
                    border: 0.1rem;
                    border-radius: 0.4rem;
                    color: white;
                    width: 100%;
                    font-size: 1rem;
                    $: focus {
                        border: 0.1rem;
                        outline:none
                    }};

                    button {
                        background-color: #997af0
                        color: white;
                        padding: 1rem 2rem;
                        border: nome;
                        font-weight: bold;
                        cursor: pointer;
                        boarder-radius: 0.4rem;
                        font-size: 1rem;
                        text-transform: uppercase;
                        transition: 0.5s 5s;
                        $:hover {
                            background-color: #4e0eff;                            
                        }

                        span {
                            color: white;
                            text-transform: uppercase;
                            a {
                                color: #4e0eff;
                                text-decoration: nome;
                                font-weight: bold;
                            }
                        }
                    };

                    exports default Signup;
    `
        