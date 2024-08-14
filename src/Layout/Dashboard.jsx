import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className=' min-h-screen flex'>

                <Sidebar />

                <div className='  w-full   '>
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;