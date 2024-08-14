import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

const Classmates = () => {
    const [classmates, setClassmates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { user } = useContext(AuthContext);
    const [data, setData] = useState({});
    const email = user?.email;

    useEffect(() => {
        const fetchUserData = async () => {
            if (email) {
                try {
                    const response = await fetch(`http://localhost:8000/users/${email}`);
                    const userData = await response.json();
                    setData(userData);
                } catch (err) {
                    console.error('Failed to fetch user data:', err);
                }
            }
        };

        fetchUserData();
    }, [email]);

    useEffect(() => {
        const fetchClassmates = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users');
                const allStudents = response.data;

                const matchedClassmates = allStudents.filter(student => student.room_id === data.room_id);

                setClassmates(matchedClassmates);
                setLoading(false);
            } catch (err) {
                setError('Failed to load classmates.');
                setLoading(false);
            }
        };

        fetchClassmates();
    }, [data.room_id]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Classmates</h2>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : classmates.length > 0 ? (
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Phone No</th>
                            <th className="py-2 px-4 border">Room ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classmates.map((classmate, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border">{classmate.name}</td>
                                <td className="py-2 px-4 border">{classmate.email}</td>
                                <td className="py-2 px-4 border">{classmate.phone}</td>
                                <td className="py-2 px-4 border">{classmate.room_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No classmates found in your room.</div>
            )}
        </div>
    );
};

export default Classmates;
