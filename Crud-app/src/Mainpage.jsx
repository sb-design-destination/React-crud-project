import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Component/Header"

const Mainpage = () => {
    return (
        <>
           
            <Header/>
            <Outlet></Outlet>
        </>
    );
};

export default Mainpage;