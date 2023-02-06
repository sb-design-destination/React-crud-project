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
import { Link} from "react-router-dom";

export default function App() {
  // const [showBasic, setShowBasic] = useState(false);
  const MenuData = {"/":"Home","/about":"About Us","/contact":"Contact Us","/apiexample":"ApiCalling","/login":"Log In"}
 const MenuDataList= Object.entries(MenuData).map(([ky,val],i)=>{
  console.log("Key is",ky,"valuse is",val);
    return <Link className="navbar-brand fs-6" to={ky} key={i}>{val}</Link>
  })

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        {/* <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand> */}
        {MenuDataList}


     
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 '>
            <MDBNavbarItem>
           
           
            </MDBNavbarItem>

            <MDBNavbarItem>
              {/* <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink> */}
              {/* <Link className="nav-link" to="example">Example</Link> */}
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            {/* <input type='search' className='form-control' placeholder='Type query' aria-label='Search' /> */}
            {/* <MDBBtn color='primary'>Search</MDBBtn> */}
          </form>

      </MDBContainer>
    </MDBNavbar>
  )
}