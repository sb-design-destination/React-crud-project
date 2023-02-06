import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCol, MDBIcon, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit';
import MainHeader from './mainheader';
import axios from 'axios';
import { Link} from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(()=>{
        //console.log('inside useEffect');
        axios.get(`https://reqres.in/api/users`)
        .then((res)=>{
            //console.log(res.data.data)
            setIsLoading(true)
            setUsers(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <>
        <MainHeader/>
        <div className="container">
            <h1 className='text-center mt-5'>All Users</h1>
            <MDBRow>
                {
                    users.map((user)=>{
                        return(
                            <>
                                <MDBCol xl={6} className='mb-4' key={user.id}>
                                    <MDBCard>
                                    <MDBCardBody>
                                        <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                            src={user.avatar}
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                            <p className='fw-bold mb-1'>{user.first_name} {user.last_name}</p>
                                            <p className='text-muted mb-0'>{user.email}</p>
                                            </div>
                                        </div>
                                            <Link to={`/user-details/${user.id}`}>
                                            <MDBBtn rounded color='info'>View</MDBBtn>
                                            </Link>
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
                            </>
                        )
                    })
                }
                </MDBRow>
            <div className="row">
                <div className="col-6 offset-3 mt-5">
                    {isLoading ?
                        <MDBListGroup style={{ minWidth: '22rem' }} dark="true">
                            {
                                users.map((user)=>{
                                    //console.log(user);
                                    return(
                                        <>
                                            <MDBListGroupItem className='d-flex justify-content-between align-items-center' key={user.id}>
                                                <div className='d-flex align-items-center'>
                                                <img
                                                    src={user.avatar}
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{user.first_name} {user.last_name}</p>
                                                    <p className='text-muted mb-0'>{user.email}</p>
                                                </div>
                                                </div>
                                                <Link to={`/user-details/${user.id}`}>
                                                    <MDBBtn size='sm' rounded color='info'>View</MDBBtn>
                                                </Link>
                                            </MDBListGroupItem>
                                        </>
                                    )
                                })
                            }
                        </MDBListGroup>
                     :"No data Found"}
                </div>
            </div>
        </div>
    </>
  );
}

export default UserList;