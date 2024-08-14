import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className='flex items-center '>
               

                    <Sidebar />
                 

                <div className='w-full h-[100%] overflow-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;