import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUsers = () => {
    const [formData, setFormData] = useState({});
    let { id } = useParams()
    useEffect(() => {
        // console.log(userId);
        fetch(`https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${id}`).then(response => response.json()).then((result) => {
            console.log(result.Data[0]);
            // setUserDataById(result.Data[0])
            setFormData(result.Data[0])

        })



    },[])

    return (
        <>
            <MDBRow>
                {JSON.stringify(formData)}
                <MDBCol md="2">

                    <input type="text" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} name="username" id="username" value={formData.username} />
                </MDBCol>
            </MDBRow>
        </>
    );
};

export default EditUsers;