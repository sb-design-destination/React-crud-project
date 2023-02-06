import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
            <div className="container">
                <h1 className='mt-5'>Welcome to Employee App</h1>
                <div className="row">
                    <div className="col mt-5">
                        <h4>Do you wanna login?</h4>
                        <Link to='/login'>
                            <MDBBtn>Login</MDBBtn>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        <h4>Do you wanna register?</h4>
                        <Link to='/signup'>
                            <MDBBtn>SignUp</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MainPage;