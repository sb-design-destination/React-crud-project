import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import SigninCompo from './login';
import Registration from './Registration';

function MainRouter(props) {
    const AdminPanel = React.lazy(() => import("./component/admin/AdminRouter.jsx"));
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<SigninCompo />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="admin/*" element={<React.Suspense fallback={<h1>Loading...</h1>}> <AdminPanel /></React.Suspense>} />
            </Routes>
        </>
    );
}

export default MainRouter;