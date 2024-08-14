import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ManageTeachers from '../ManageTeachers/ManageTeachers';

const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const email = user?.email
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/users/${email}`)
                .then(res => res.json())
                .then(data => setData(data))

        }
    }, [email]);
    const role = data?.role
    console.log(role)
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                <div className=" mb-5 bg-white text-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-4">Welcome, {data.name || 'User'}!</h1>
                    <p className="text-lg mb-4">Email: <span className="font-semibold">{data.email}</span></p>
                    {/* Display other user data here */}
                </div>
                {role === 'principal' && (<>
                    <ManageTeachers></ManageTeachers>
                </>)}
            </div>
        </div>
    );
};

export default DashboardHome;