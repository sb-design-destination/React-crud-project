import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DashboardPage from "./pages/DashboardPage";
import Dashboard from "../../Compofile/Admin/Dashboard"
import AdminProfile from "./AdminProfile.jsx";
import AdminProducts from "./AdminProducts.jsx";
import AdminAllUsers from "./AdminAllUsers.jsx";
import EditUsers from "./EditUsers.jsx";

import AdminAddNewsuser from "./AdminAddNewsuser.jsx";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Adminrouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<DashboardPage/>}>
                <Route path='Dashboard' element={<Dashboard/>}/>
                <Route path='/Profile' element={<AdminProfile/>}/>
                <Route path='/Products' element={<AdminProducts/>}/>
                <Route path='/allUsers' element={<AdminAllUsers/>}/>

                <Route path='/users/:id' element={<EditUsers/>}/>

                <Route path='/addnewuser' element={<AdminAddNewsuser/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default Adminrouter;