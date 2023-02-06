import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
// import MainHeader from './mainheader';

const SignUp = () => {
    let navigate = useNavigate();

    const [data,setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const[errors,setErrors] = useState({
        firstnameError: '',
        lastnameError: '',
        emailError: '',
        passwordError: ''
    });

    const handleChange = (e) => {
        e.persist();
        if(e.target.type == "text"){
            var Pattern = /^([A-Za-z])+$/;
            if(Pattern.test(e.target.value)){
                setErrors({...errors, [e.target.name+"Error"]:""});
            }
            else{
                setErrors({...errors, [e.target.name+"Error"]:"Invalid Name Formate"});
            }
        }
        else if(e.target.type == "email"){
            var Pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z]{2,4})$/;
            if(Pattern.test(e.target.value)){
                setErrors({...errors, [e.target.name+"Error"]:""});
            }
            else{
                setErrors({...errors, [e.target.name+"Error"]:"Invalid Email Formate"});
            }
        }
        else if(e.target.type == "password"){
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
        if(e.target.type == "text" || e.target.type == "email" || e.target.type == "password"){
            if(e.target.value == ""){
                setErrors({...errors, [e.target.name+"Error"]:"this field is required"});
            }else{
                setErrors({...errors, [e.target.name+"Error"]:""});
            }
        }else{
            setData({...data, [e.target.name]:e.target.value});
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const formdata = { firstname: data.firstname, lastname: data.lastname, email: data.email, password: data.password};

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
            {data.isSuccess? navigate(`/login`) : alert("Email already registered ..!")}
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
                        <form className="register" onSubmit={(e)=>handleSubmit(e)}>
                            <div className="register__field">
                                <i className="register__icon fas fa-user"></i>
                                <input type="text" className="register__input" placeholder="First Name"name='firstname' value={data.firstname} onBlur={handleCheck} onChange={handleChange}/>
                                {errors.firstnameError}
                            </div>
                            <div className="register__field">
                                <i className="register__icon fas fa-user"></i>
                                <input type="text" className="register__input" placeholder="Last Name" name='lastname' value={data.lastname} onBlur={handleCheck} onChange={handleChange}/>
                                {errors.lastnameError}
                            </div>
                            <div className="register__field">
                                <i className="register__icon fas fa-user"></i>
                                <input type="email" className="register__input" placeholder="Email" name='email' value={data.email} onBlur={handleCheck} onChange={handleChange}/>
                                {errors.emailError}
                            </div>
                            <div className="register__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="register__input" placeholder="Password" name='password' value={data.password} onBlur={handleCheck} onChange={handleChange}/>
                                {errors.passwordError}
                            </div>
                            <button className="button register__submit">
                                <span className="button__text">Register Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <Link to='/'>
                                <button className="button register__submit">
                                    <span className="button__text">Back</span>
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

export default SignUp;