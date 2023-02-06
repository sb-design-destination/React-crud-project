import React, { useState } from 'react';
import {
    MDBCard, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon, MDBCardBody,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';


const Addnew = () => {
    const [formdata, Setformdata] = useState({})
    const [status, Loadingstatus] = useState()
    const navigate = useNavigate();
    const insertdata = () => {
        fetch(`https://justjayapi.000webhostapp.com/registrationgetmethod?username=${formdata.username}&password=${formdata.password}&mobile=${formdata.mobile}&email=${formdata.email}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result.data.Code)
               if (result.data.Code == 1) {
                navigate("/about")
               } else {
                navigate("/")
               }
                // Setformdata(result)
            })
    }

    return (
        <>

            <MDBRow className="mb-4">
                <MDBCol md="12">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCol md="6">
                                {JSON.stringify(formdata)}
                                <div className="row">
                                    <div className="col">
                                        <input type="text" placeholder="Enter User Name" name="username" onChange={(event) => { Setformdata({...formdata, [event.target.name]:event.target.value})}} id="username" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" placeholder="Enter Password" name="password" onChange={(event)=>{Setformdata({...formdata,[event.target.name]:event.target.value})}} id="password" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" placeholder="Enter Your Email" name="email" onChange={(event)=>{Setformdata({...formdata,[event.target.name]:event.target.value})}}id="email" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" placeholder="Enter Your Mobile Number" name="mobile" onChange={(event)=>{Setformdata({...formdata,[event.target.name]:event.target.value})}}id="mobile" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <button onClick={insertdata}>save</button>
                                        {/* <input type="button" onClick={insertdata} value="Save" name="btn-save" id="btn-save" /> */}
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
};

export default Addnew;