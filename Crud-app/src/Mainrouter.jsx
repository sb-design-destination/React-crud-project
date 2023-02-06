import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from "./Mainpage"
import About from "./About"
import Apicalling from "./Component/Apicalling.jsx"
import Loginform from "./Component/Loginform.jsx"
import Allusers from "./Component/Allusers.jsx"
import Addnew from "./Component/Addnew.jsx"
import "./login.css"
const Mainrouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Mainpage/>}>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/api' element={<Apicalling/>}></Route>
                <Route path='/login' element={<Loginform/>}></Route>
                <Route path='/alluser' element={<Allusers/>}></Route>
                <Route path='/addnew' element={<Addnew/>}></Route>
                 </Route>
            </Routes>
        </>
    );
};

export default Mainrouter;