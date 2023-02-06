import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
 const Menudata = {"/":"Home","/about":"About us","/api":"Api calling","/login":"Login form","/alluser":"Crud Api"}
 const Menudatalist = Object.entries(Menudata).map(([ky,val],i)=>{
  // console.log("key is" ,ky ,"value is",val);
  return <Link className="navbar-brand fs-5"key={ky} to={ky}>{val}</Link>
 })

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        {Menudatalist}
        


        <MDBCollapse navbar >
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          
              

            <MDBNavbarItem>
              {/* <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink> */}
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}