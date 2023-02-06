import React from 'react';
import MainHeader from './common/header';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
import ValidationHook from '../hooks/validationHooks';
import { Link, useNavigate } from 'react-router-dom';
import  './registration.css';
const HomePage = () => {
    let navigate = useNavigate();

    const { inputs, handleInputChange, checkValid, errors } = ValidationHook({}, {});
    let clickHandle = () => {
        // console.log("called");
        // console.log(inputs);
        // fetch(`https://justjayapi.000webhostapp.com/registrationgetmethod?username=${inputs.username}&fname=checking&lname=data&password=${inputs.password}&email=${inputs.email}&mobile=${inputs.mobile}`).then((res)=>{console.log(res);}).then((ReturnData)=>{
        fetch(`https://justjayapi.000webhostapp.com/registrationgetmethod?username=${inputs.username}&fname=checking&lname=data&password=${inputs.password}&email=${inputs.email}&mobile=${inputs.mobile}`).then((res) => res.json()).then((ReturnData) => {
            console.log(ReturnData);
            if (ReturnData.Code == 1) {
                navigate(`/login`);
            } else {
                alert("Error while inserting try after sometime")
            }
        })
        // https://justjayapi.000webhostapp.com/registrationgetmethod?username=test&fname=checking&lname=data&password=2312&email=mail@mail.com&mobile=9879879875
    }
    return (
        <>
            <div className="form_wrapper">
                <Link to={'/login'}>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className='homeicon' alt="" /> */}
                    <img src="https://banner2.cleanpng.com/20180422/uve/kisspng-computer-icons-clip-art-5adc80ddcfdd16.3997119115244003498514.jpg" className='homeicon' alt="" />
                </Link>
                <div className="form_container">
                    <div className="title_container">
                        <h2>Registration Form</h2>
                    </div>
                    <div className="row clearfix">

                        <div className="">
                            <form>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" onBlur={checkValid} onChange={handleInputChange} value={inputs.email} />
                                    {errors.emailError}
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" onBlur={checkValid} onChange={handleInputChange} value={inputs.password}/>
                                    {errors.passwordError}
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Re-type Password" onBlur={checkValid} onChange={handleInputChange} value={inputs.password}/>
                                    {errors.passwordError}
                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="firstname" placeholder="First Name"onBlur={checkValid} onChange={handleInputChange} value={inputs.firstname} />
                                            {errors.firstnameError}
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="lastname" placeholder="Last Name" onBlur={checkValid} onChange={handleInputChange} value={inputs.lastname} />
                                            {errors.lastnameError}
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field radio_option">
                                    <input type="radio" name="radiogroup1" id="rd1"/>
                                        <label for="rd1">Male</label>
                                        <input type="radio" name="radiogroup1" id="rd2"/>
                                            <label for="rd2">Female</label>
                                        </div>
                                        <div className="input_field select_option">
                                            <select>
                                                <option>Select a country</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                            <div className="select_arrow"></div>
                                        </div>
                                        <div className="input_field checkbox_option">
                                            <input type="checkbox" id="cb1"/>
                                                <label for="cb1">I agree with terms and conditions</label>
                                        </div>
                                        <div className="input_field checkbox_option">
                                            <input type="checkbox" id="cb2"/>
                                                <label for="cb2">I want to receive the newsletter</label>
                                        </div>
                                        <input className="button" type="submit" value="Register"onClick={clickHandle} />
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </>
            );
};

            export default HomePage;