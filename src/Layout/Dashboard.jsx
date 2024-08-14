import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className='flex'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;