import React from 'react';
import UserTable from './pages/sections/UserTable';
import SideNavigation from './sideNavigation';

const AdminUser = () => {
    return (
        <>
          <div className="flexible-content">
           
            <SideNavigation />

            <main id="content" className="p-5">
            <UserTable />
            </main>
           
        </div>  
        </>
    );
};

export default AdminUser;