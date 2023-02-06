import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardHeader, MDBIcon, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Allusers = () => {
    const [data, Setdata] = useState({})
 
    const [status, setLoadingStatus] = useState(false)
    const [deletdata, setDeleteStatus] = useState(false)
    useEffect(() => {
        fetch("https://justjayapi.000webhostapp.com/allusers")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                Setdata(result.Data)
                setLoadingStatus(true)
            })
    }, [deletdata])

    const editData = () => {
        console.log("edit");
    }
    const deletData = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        fetch(`https://justjayapi.000webhostapp.com/deleteusergetmethod?id=${event.target.value}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                Setdata(result.Data)
                setDeleteStatus(true)

            })
        console.log("delet");
    }


 
    return (
        <>
           
            <table className='table table-bordered table-striped'>
                <thead className='bg-dark text-light'>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                        <th>gender</th>
                        <th>mobile</th>
                        <th><Link to="/addnew">Add new</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(data)} */}

                    {status ?
                        Object.entries(data).map((ky, val) => {
                            // console.log(ky[1].id);
                            // console.log(val);
                            return <tr key={val}>
                                <td>{ky[1].id}</td>
                                <td>{ky[1].username}</td>
                                <td>{ky[1].password}</td>
                                <td>{ky[1].gender}</td>
                                <td>{ky[1].mobile}</td>
                                <td width="200px">
                                    <button className='btn btn-sm btn-danger me-2' onClick={editData}><MDBIcon icon='pen' /></button>
                                    <button className='btn btn-sm btn-danger' value={ky[1].id} onClick={deletData}  ><MDBIcon icon='trash' />{ky[1].id}</button>
                                </td>


                            </tr>

                        }) : "loading.."}
                </tbody>
            </table>


        </>
    );
};

export default Allusers;