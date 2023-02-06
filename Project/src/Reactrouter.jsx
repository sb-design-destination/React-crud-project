import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

    import Mainpage from "./Commanfile/Mainpage.jsx";
    import AboutUs from "./Commanfile/AboutUs";
    import ContactUs from "./Commanfile/ContactUs";
    import ApiCalling from "./Commanfile/ApiCalling.jsx";

    import Loginform from "./Commanfile/Loginform.jsx";
    import Register from "./Commanfile/Register.jsx";
    import "./Loginform.css";
    import Loader from "./Commanfile/Loader.jsx"


// import Outlet from 'react-dom/client';



const Reactrouter = () => {
    const AdmincompoLazy = React.lazy(() => { return import("./Compofile/Admin/Adminrouter") })
    return (
        <>
            <Routes>  
                {/* <Route path='/' element={<Mainpage/>}> */}
                <Route path='/'>
                    <Route index element={<Navigate to="/about" replace />}/> 
                    <Route path='about' element={<AboutUs/>} />
                    <Route path='contact' element={<ContactUs />} />
                    <Route path='apiexample' element={<ApiCalling />} />
                    <Route path='login' element={<Loginform />} />
                    <Route path='Register' element={<Register />} />
                    <Route path='Admin/*' element={<Suspense fallback={<h1><Loader/></h1>}><AdmincompoLazy/></Suspense>} />
               </Route>
            </Routes>


        </>
    );
};

export default Reactrouter;