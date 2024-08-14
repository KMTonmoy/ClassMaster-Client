import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Admit = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [classrooms, setClassrooms] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        classroom: ''
    });

    const { user } = useContext(AuthContext);
    const email = user?.email || '';
    const [data, setData] = useState({});

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/users/${email}`)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [email]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error.message);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                const response = await axios.get('http://localhost:8000/classroom');
                setClassrooms(response.data);
            } catch (error) {
                console.error('Error fetching classrooms:', error.message);
            }
        };

        fetchClassrooms();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const existingUser = users.find(user => user.phone === formData.phone);
        if (existingUser) {
            toast.error('Phone number already exists.');
            return;
        }

        try {
            const userData = {
                name: formData.name,
                password: formData.password,
                phone: formData.phone,
                email: formData.email,
                verified: false,
                role: formData.role,
                classroom: formData.classroom
            };

            const mongoResponse = await axios.post('http://localhost:8000/user', userData);

            if (mongoResponse.status === 201) {


                toast.success('Registration successful!');
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phone: '',
                    role: '',
                    classroom: ''
                });


            } else {
                throw new Error('Failed to save user to MongoDB');
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
            toast.error('Failed to register user. Please try again.');
        }
    };

    return (
        <div className="flex w-full justify-center items-center min-h-screen ">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    {user?.role === "teacher" ? "Admit Student or Teacher" : "Admit Student"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-lg font-medium text-gray-700">Role</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {user?.role === "teacher" || (
                                <option value="teacher" className='hidden' disabled>Teacher</option>
                            )}
                            {user?.role === "principal" || (
                                <option value="teacher" >Teacher</option>
                            )}

                            <option value="student">Student</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="classroom" className="block text-lg font-medium text-gray-700">ClassRoom</label>
                        <select
                            id="classroom"
                            name="classroom"
                            value={formData.classroom}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Classroom</option>
                            {classrooms.map((classroom) => (
                                <option key={classroom._id} value={classroom.name}>
                                    {classroom.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Admit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admit;
