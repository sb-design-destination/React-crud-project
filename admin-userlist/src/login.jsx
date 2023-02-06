import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './login.css';
// import MainHeader from './mainheader';

const Login = () => {
    const id = useParams();
    let navigate = useNavigate();
    const [user,setUser] = useState();
    const [data,setData] = useState({
        username: '',
        password: ''
    });
    const[errors,setErrors] = useState({
        usernameError: '',
        passwordError: ''
    });

    const handleChange = (e) => {
        e.persist();
        if(e.target.type == "password"){
            if(e.target.value.length < 6){
                setErrors({...errors, [e.target.name+"Error"]:"password should be minimum 6 characters"});
            }
            else{
                setErrors({...errors, [e.target.name+"Error"]:""});
            }
        }
        setData({...data, [e.target.name]:e.target.value});
    }

    const handleCheck = (e) =>{
        e.persist();
        if(e.target.type == "text" || e.target.type == "password"){
            if(e.target.value == ""){
                setErrors({...errors, [e.target.name+"Error"]:"this field is required"});
            }else{
                setErrors({...errors, [e.target.name+"Error"]:""});
            }
        }else{
            setData({...data, [e.target.name]:e.target.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formdata = { username: data.username, password: data.password};

        fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            {data.id? navigate(`/home`) : alert("Error user not found..!")}
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <>
            {/* <MainHeader/> */}
            <div className="container1">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={(e)=>handleSubmit(e)}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="User name / Email" name='username' value={data.username} onBlur={handleCheck} onChange={handleChange}/>
                                {errors.usernameError}
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" name='password' value={data.password} onBlur={handleCheck} onChange={handleChange}/>
                                {errors.passwordError}
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <Link to='/signup'>
                                <button className="button login__submit">
                                    <span className="button__text">Sign Up</span>
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>	
                            </Link>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>		
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
        </>
    );
};

export default Login;