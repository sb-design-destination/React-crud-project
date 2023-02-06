import { MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdbreact';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminProducts = () => {
    return (
        <>
          <MDBRow className="mb-4">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <div className="row">
                <div className="col">
                  <input type="text" name="product_title" id="product_title" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" name="product_description" id="product_description" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" name="product_title" id="product_title" />
                </div>
              </div>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
     
        </>
    );
};

export default AdminProducts;