import React, { useEffect, useState } from 'react';

const Apicalling = () => {
    const [data, Setdata] = useState({})
    useEffect(() => {
        fetch("https://justjayapi.000webhostapp.com/allusers")
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                Setdata(result.Data)
            })
    }, [])

    return (
        <>
                
                <table  className='table table-bordered table-striped'>
                <thead className='bg-dark text-light'>
                                    <tr>
                                        <th>id</th>
                                        <th>username</th>
                                        <th>password</th>
                                        <th>gender</th>
                                        <th>mobile</th>
                                       
                                    </tr>
                                </thead>
              
                <tbody>
                    {
                        Object.entries(data).map((ky, val) => {
                            // console.log(i); 
                            // console.log(val[2].title);
                            console.log("val is", val);
                            console.log("key is", ky[1].username);
                            return <tr key={val}>
                                <td>{ky[1].id}</td>
                                <td>{ky[1].username}</td>
                                <td>{ky[1].password}</td>
                                <td>{ky[1].gender}</td>
                                <td>{ky[1].mobile}</td>

                            </tr>
                        })
                    }
                </tbody>
                </table>
                
            </>
            );
};

            export default Apicalling;