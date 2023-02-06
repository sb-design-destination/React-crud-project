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
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    let navigate = useNavigate();

    const {inputs, handleInputChange,checkValid,errors} = ValidationHook({},{});
    let clickHandle=() =>{
        // console.log("called");
        // console.log(inputs);
        // fetch(`https://justjayapi.000webhostapp.com/registrationgetmethod?username=${inputs.username}&fname=checking&lname=data&password=${inputs.password}&email=${inputs.email}&mobile=${inputs.mobile}`).then((res)=>{console.log(res);}).then((ReturnData)=>{
        fetch(`https://justjayapi.000webhostapp.com/registrationgetmethod?username=${inputs.username}&fname=checking&lname=data&password=${inputs.password}&email=${inputs.email}&mobile=${inputs.mobile}`).then((res)=>res.json()).then((ReturnData)=>{
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
            <MainHeader />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <MDBCard border='primary'>
                            <MDBCardHeader border='primary' className='text-center'>Registration</MDBCardHeader>
                            <MDBCardBody>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='User Name' onBlur={checkValid} onChange={handleInputChange} value={inputs.username} name="username" id='username' type='text' />
                                        {errors.usernameError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='password'  onBlur={checkValid} onChange={handleInputChange} value={inputs.password} name="password" id='password' type='password' />
                                        {errors.passwordError}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='Email'  onBlur={checkValid} onChange={handleInputChange} value={inputs.email} id='email' type='email' name='email' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <MDBInput label='Mobile Number' onBlur={checkValid} onChange={handleInputChange} value={inputs.mobile} id='mobile' name='mobile' type='text' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <MDBBtn onClick={clickHandle}>Register</MDBBtn> &nbsp;
                                        <MDBBtn className='btn-danger'>Cancel</MDBBtn>

                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;