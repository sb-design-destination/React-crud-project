import axios from 'axios';
import { MDBRow, MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdbreact';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminAddNewsuser = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);

    const insertdata = () => {
        console.log(formData);
        axios.get(`https://justjayapi.000webhostapp.com/registrationgetmethod?username=${formData.username}&password=${formData.Password}&mobile=${formData.mobile}&email=${formData.email}`)
            .then(function (result) {
                console.log(result);
                // console.log(result.Data[0].id);
                // console.log(result.Data[0].role_id);
                // setCookie('loginStatus',true);
                // setCookie('userid',result.data.Data[0].id);
                if (result.data.Code == 1) {
                    navigate("/admin/allUsers")
                } else {
                    navigate("/")
                }
            }).catch(function (error) {
                // console.log(error);
            });
    }

    return (
        <>
            <MDBRow className="mb-4">
                {/* <MDBCol md="1" /> */}
                {/* <Link to="/">Add new</Link> */}
                <MDBCol md="12">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCol md="6">
                                {JSON.stringify(formData)}
                                <div className="row">
                                    <div className="col">
                                        <input type="text" onChange={(event) => setformData({ ...formData, [event.target.name]: event.target.value })} placeholder="Enter User Name" name="username" id="username" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" onChange={(event) => setformData({ ...formData, [event.target.name]: event.target.value })} placeholder="Enter Password" name="password" id="password" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" onChange={(event) => setformData({ ...formData, [event.target.name]: event.target.value })} placeholder="Enter Your Email" name="email" id="email" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" onChange={(event) => setformData({ ...formData, [event.target.name]: event.target.value })} placeholder="Enter Your Mobile Number" name="mobile" id="mobile" className='form-control' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="button" value="Save" onClick={insertdata} name="btn-save" id="btn-save" />
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

export default AdminAddNewsuser;