import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageTeachers = () => {
    const [Teachers, setTeachers] = useState([]);
    const [editingteacher, setEditingteacher] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'teacher'
    });

    // Fetch all Teachers
    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users');
                const teacherData = response.data.filter(user => user.role === 'teacher');
                setTeachers(teacherData);
            } catch (error) {
                console.error('Error fetching Teachers:', error.message);
                toast.error('Failed to fetch Teachers.');
            }
        };
        fetchTeachers();
    }, []);

    // Handle input changes for the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle editing a teacher
    const handleEdit = (teacher) => {
        setEditingteacher(teacher);
        setFormData(teacher);
    };

    // Fetch updated Teachers
    const fetchTeachers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users');
            const teacherData = response.data.filter(user => user.role === 'teacher');
            setTeachers(teacherData);
        } catch (error) {
            console.error('Error fetching Teachers:', error.message);
            toast.error('Failed to fetch Teachers.');
        }
    };

    // Handle saving the updated teacher data
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            // Exclude _id from formData
            const { _id, ...updateData } = formData;
            const response = await axios.put(`http://localhost:8000/users/${formData.email}`, updateData);
            if (response.status === 200) {
                toast.success('teacher data updated successfully!');
                setEditingteacher(null);
                fetchTeachers(); // Refresh the teacher list
            } else {
                throw new Error('Failed to update teacher data');
            }
        } catch (error) {
            console.error('Error updating teacher:', error.message);
            toast.error('Failed to update teacher data.');
        }
    };

    // Handle deleting a teacher
    const handleDelete = async (email) => {
        if (window.confirm('Are you sure you want to delete this teacher?')) {
            try {
                const response = await axios.delete(`http://localhost:8000/users/${email}`);
                if (response.status === 200) {
                    setTeachers(Teachers.filter(teacher => teacher.email !== email));
                    toast.success('teacher deleted successfully!');
                } else {
                    throw new Error('Failed to delete teacher');
                }
            } catch (error) {
                console.error('Error deleting teacher:', error.message);
                toast.error('Failed to delete teacher.');
            }
        }
    };
    const [classrooms, setClassrooms] = useState([]);
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
    return (
        <div className="flex w-full justify-center items-center ">
            <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Manage Teachers</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b-2 py-4 px-6 text-left">Name</th>
                            <th className="border-b-2 py-4 px-6 text-left">Email</th>
                            <th className="border-b-2 py-4 px-6 text-left">Phone</th>
                            <th className="border-b-2 py-4 px-6 text-left">Classroom</th>
                            <th className="border-b-2 py-4 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Teachers.map(teacher => (
                            <tr key={teacher.email}>
                                <td className="border-b py-4 px-6">{teacher.name}</td>
                                <td className="border-b py-4 px-6">{teacher.email}</td>
                                <td className="border-b py-4 px-6">{teacher.phone}</td>
                                <td className="border-b py-4 px-6">{teacher.classroom}</td>
                                <td className="border-b py-4 px-6">
                                    <button
                                        className="mr-2 text-blue-600 hover:text-blue-900"
                                        onClick={() => handleEdit(teacher)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => handleDelete(teacher.email)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {editingteacher && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Edit teacher</h3>
                        <form onSubmit={handleSave} className="space-y-4">
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
                                    readOnly
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
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
                                        <option key={classroom._id} value={classroom.classroomName}>
                                            {classroom.classroomName}
                                        </option>
                                    ))}
                                </select>
                            </div>




                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageTeachers;


