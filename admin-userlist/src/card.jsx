import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Card() {
  return (
    <MDBCard className='w-50 mt-5'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='' alt='User Img' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>User Name</MDBCardTitle>
            <MDBCardText>
              User Description
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}