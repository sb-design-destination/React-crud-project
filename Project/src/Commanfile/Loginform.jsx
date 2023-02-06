import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate , Link} from "react-router-dom";
import Customhook from "../Hooks/Customhook";
import Header from "../Commanfile/Header";

const Loginform = () => {
    const [data, Statedata] = useState({})
    const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate()
    const { handleChangeinput, inp, inpe } = Customhook({  username: "", password: ""}, { usernameerror: "", passworderror: "" }
      
    );
    useEffect(() => {

    }, [])
    let LoginClick = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: inp.username, password: inp.password, id:"1" })
            // body: JSON.stringify({username:"Bhavyata", password:"1234"})
        };

        fetch("https://reqres.in/api/admin", requestOptions)
        // fetch("https://localhost/API/login", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                console.log(result.id);
                setCookie("submitStatus",true)
                setCookie("loginStatus",result.id)
                Statedata(result)
                if (result.id==1) {
                    navigate("/Admin")
                } else {
                    navigate("/")
                    
                }

            })
    }
    return (
        <>
        <Header/>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="username" value={inp.username} onChange={handleChangeinput} required="" />
                        <label>Username</label>
                        {/* {JSON.stringify(inp)}
                        {JSON.stringify(inpe.usernameerror)} */}
                        {inpe.usernameerror}
                    </div>
                    <div className="user-box">
                    {/* <input type="current-password" name="password" required value/> */}
                        <input type="password" name="password" value={inp.password} onChange={handleChangeinput} required="value" />
                        <label>Password</label>
                        {inpe.passworderror}
                    </div>
                    <a href="#">
                        <button onClick={LoginClick}>Submit</button>

                    </a>
                    <Link to="/Register">Create a New Account</Link>
                </form>
            </div>
        
        </>
    );
};

export default Loginform;