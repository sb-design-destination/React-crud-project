import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link, NavLink } from 'react-router-dom';

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand to='/'>Employee App</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <NavLink to='/home' className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
            <NavLink to='/userlist' className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Employees List</NavLink>
            {/* <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/signup' className='nav-link'>Sign Up</Link> */}
          </MDBNavbarNav>
          <Link to='/'>
            <MDBBtn color='danger'>Logout</MDBBtn>
          </Link>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}