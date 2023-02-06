import React, { Component, useEffect, useState } from 'react';
// import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


const UserTable = () => {
  const [users, setUsers] = useState()
  const [isLoading, SetIsLoading] = useState(false)

  // const fetchData = async() =>{
  //   const response = await fetch(`https://justjayapi.000webhostapp.com/allusers`)
  //   const data = await response.json()
  //   setUsers(data)
  // }
  const fetchData = async () => {
    // SetIsLoading(true)
    await fetch(`https://justjayapi.000webhostapp.com/allusers`)
      .then(response => {
        return response.json()
      })
      .then((data) => {
        setUsers(data)
        SetIsLoading(true)
        console.log("inside response", data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log("isLoading : ", isLoading);
  if (isLoading === true) {
    console.log(users);
    return (
      <>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-4">
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Email</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {
                      users.Data.map(
                        user =>
                          <tr key={user.id}>

                            <td>
                              {user.fullname}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                          </tr>
                      )
                    }
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </>
    );
  } else {
    return (
      <h3>No data Found</h3>
    );
  }

};

export default UserTable;
// class UserTable extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       users : []
//     }
//   }

//   componentDidMount(){
//       // axios.get(`https://justjayapi.000webhostapp.com/user`).then((res)=>{
//       //   this.setState({users: res.data});
//       // });

//       fetch(`https://justjayapi.000webhostapp.com/user`)
//       .then(res => res.json())
//       .then(
//         (users) => {
//           this.setState({ users: users});
//         },
//         (error) => {
//           alert(error);
//         }
//       )
//   }

//   render() {
//     return (
//       <>
//         <MDBRow className="mb-4">
//               <MDBCol>
//                   <MDBCard>
//                       <MDBCardBody>
//                         <MDBTable hover>
//                           <MDBTableHead color="blue lighten-4">
//                             <tr>
//                               <th>#</th>
//                               <th>First</th>
//                               <th>Last</th>
//                               <th>Email</th>
//                               <th>Edit</th>
//                               <th>Delete</th>
//                             </tr>
//                           </MDBTableHead>
//                           <MDBTableBody>
//                             {
//                               this.state.users.map(
//                                 user =>
//                                 <tr key={user.id}>
//                                     <td>{user.firstName}</td>
//                                     <td>{user.lastName}</td>
//                                     <td>{user.Email}</td>
//                                 </tr>
//                               )
//                             }
//                           </MDBTableBody>
//                         </MDBTable>
//                       </MDBCardBody>
//                   </MDBCard>
//               </MDBCol>
//           </MDBRow>
//       </>
//     );
//   }
// }

//export default UserTable;