import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
const Mainpage = () => {
    return (
        <>
        <h2>Something</h2>

           <Outlet/>
           <div className="container">
            
           </div>
            
        </>
    );
};

export default Mainpage;