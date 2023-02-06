import { logDOM } from '@testing-library/react';
import { MDBRow, MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';
import { MDBCol, MDBIcon } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminAllUsers = () => {
    const [formData, setFormData] = useState({});
    const [data, setData] = useState({});
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [userDataById, setUserDataById] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);

    useEffect(() => {
        fetch("https://justjayapi.000webhostapp.com/allusers").then(response => response.json()).then((result) => {
            console.log(result);
            setData(result.Data)
            setLoadingStatus(true)
        })
    }, [deleteStatus])

    let editdata = (event) => {
        // console.log(event);
        let id = event.target.dataset.tag;
        // console.log(tag); // should return Tagvalue
        fetch(`https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${id}`).then(response => response.json()).then((result) => {
            console.log(result.Data[0]);
            // setUserDataById(result.Data[0])
            setFormData(result.Data[0])

        })
    }


    const deletedata = (event) => {
        console.log("deletedata", event);
        console.log(event.target.value);
        fetch(`https://justjayapi.000webhostapp.com/deleteusergetmethod?id=${event.target.value}`)
            .then((response) => (response.json()))
            .then((res) => {
                console.log(res)
                setData(res.Data)
                setDeleteStatus(true)
            })


    }
    return (
        <>
            <MDBRow className="mb-4">
                <MDBCol md="12">
                    <MDBCard >

                        <MDBCardHeader>
                            <MDBRow end>
                                <MDBCol md="2">
                                    <Link className='btn btn-sm btn-primary' to="/admin/addnewuser">Add new</Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBRow>
                                {JSON.stringify(formData)}
                                <MDBCol md="2">

                                    <input type="text" onChange={(event) => setFormData({...formData,[event.target.name]: event.target.value })} name="username" id="username" value={formData.username} />
                                </MDBCol>
                            </MDBRow>
                            <table className='table table-bordered table-striped'>
                                <thead className='bg-dark text-light'>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loadingStatus ?
                                            Object.entries(data).map((val, ky) => {
                                                return <tr key={ky}>
                                                    <td>{val[1].username}</td>
                                                    <td>{val[1].email}</td>
                                                    <td>{val[1].mobile}</td>
                                                    <td>
                                                        <Link to={`/Admin/users/`+val[1].id}>edit</Link>
                                                        <button className='btn btn-sm btn-danger'><MDBIcon icon='pen' onClick={editdata} value="a" data-tag={val[1].id} />{val[1].id}</button>
                                                        <button className='btn btn-sm btn-info' onClick={deletedata}><MDBIcon icon='trash' />{val[1].id}</button>
                                                    </td>
                                                </tr>
                                            }) : "loading"
                                    }
                                </tbody>
                            </table>



                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
};

export default AdminAllUsers;