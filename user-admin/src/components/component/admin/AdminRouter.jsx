import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AdminProfile from "./02AdminProfile.jsx";
import AdminUser from "./03AdminUser.jsx";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=4
// https://justjayapi.000webhostapp.com/updateusergetmethod?id=4&username=test&password=456&gender=Male
// https://justjayapi.000webhostapp.com/deleteusergetmethod?id=4
function ClassComponentRouter(props) {
    return (
        <Routes>
            <Route path="/"  >
                <Route index element={<DashboardPage />} />
                <Route path="profile" element={<AdminProfile />} />
                <Route path="user" element={<AdminUser />} />
            </Route>
        </Routes>
    );
}

export default ClassComponentRouter;