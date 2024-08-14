import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

const MyStudents = () => {
    const [MyStudents, setMyStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { user } = useContext(AuthContext);
    const [data, setData] = useState({});
    const email = user?.email
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/users/${email}`)
                .then(res => res.json())
                .then(data => setData(data))

        }
    }, [email]);



    console.log(data)



    useEffect(() => {
        const fetchMyStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users');
                const allStudents = response.data;

                // Filter students whose room_id matches the user's room_id
                const matchedMyStudents = allStudents.filter(student => student.room_id === data.room_id);

                setMyStudents(matchedMyStudents);
                setLoading(false);
            } catch (err) {
                setError('Failed to load MyStudents.');
                setLoading(false);
            }
        };

        fetchMyStudents();
    }, []);


    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">MyStudents</h2>
            {MyStudents.length > 0 ? (
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
                        {MyStudents.map((classmate, index) => (
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
                <div>No MyStudents found in your room.</div>
            )}
        </div>
    );
};

export default MyStudents;
