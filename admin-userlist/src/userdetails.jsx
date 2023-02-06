import axios from 'axios';
import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from './mainheader';

const UserDetails = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [avatar, setAvatar] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((res)=>{
            console.log(res.data.data);
            setFirstname(res.data.data.first_name);
            setLastname(res.data.data.last_name);
            setEmail(res.data.data.email);
            setAvatar(res.data.data.avatar)
        })
    }, [])
    
    return (
        <>
            <MainHeader/>
            <div className="container">
                <h1 className='text-center mt-5'>User Details</h1>
                <MDBRow>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                        <MDBCardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <img
                                src={avatar}
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                                />
                                <div className='ms-3'>
                                <p className='fw-bold mb-1'>{firstname} {lastname}</p>
                                <p className='text-muted mb-0'>{email}</p>
                                </div>
                            </div>
                            </div>
                        </MDBCardBody>
                        <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                            Message <MDBIcon fas icon='envelope' />
                            </MDBBtn>
                            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                            Call <MDBIcon fas icon='phone' />
                            </MDBBtn>
                        </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>  
        </>
    );
};

export default UserDetails;