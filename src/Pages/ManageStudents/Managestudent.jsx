import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageStudent = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'student'
    });

    // Fetch all students
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users');
                const studentData = response.data.filter(user => user.role === 'student');
                setStudents(studentData);
            } catch (error) {
                console.error('Error fetching students:', error.message);
                toast.error('Failed to fetch students.');
            }
        };
        fetchStudents();
    }, []);

    // Handle input changes for the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle editing a student
    const handleEdit = (student) => {
        setEditingStudent(student);
        setFormData(student);
    };

    // Fetch updated students
    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users');
            const studentData = response.data.filter(user => user.role === 'student');
            setStudents(studentData);
        } catch (error) {
            console.error('Error fetching students:', error.message);
            toast.error('Failed to fetch students.');
        }
    };

    // Handle saving the updated student data
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            // Exclude _id from formData
            const { _id, ...updateData } = formData;
            const response = await axios.put(`http://localhost:8000/users/${formData.email}`, updateData);
            if (response.status === 200) {
                toast.success('Student data updated successfully!');
                setEditingStudent(null);
                fetchStudents(); // Refresh the student list
            } else {
                throw new Error('Failed to update student data');
            }
        } catch (error) {
            console.error('Error updating student:', error.message);
            toast.error('Failed to update student data.');
        }
    };

    // Handle deleting a student
    const handleDelete = async (email) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                const response = await axios.delete(`http://localhost:8000/users/${email}`);
                if (response.status === 200) {
                    setStudents(students.filter(student => student.email !== email));
                    toast.success('Student deleted successfully!');
                } else {
                    throw new Error('Failed to delete student');
                }
            } catch (error) {
                console.error('Error deleting student:', error.message);
                toast.error('Failed to delete student.');
            }
        }
    };

    return (
        <div className="flex w-full justify-center items-center min-h-screen  ">
            <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Manage Students</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b-2 py-4 px-6 text-left">Name</th>
                            <th className="border-b-2 py-4 px-6 text-left">Email</th>
                            <th className="border-b-2 py-4 px-6 text-left">Phone</th>
                            <th className="border-b-2 py-4 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.email}>
                                <td className="border-b py-4 px-6">{student.name}</td>
                                <td className="border-b py-4 px-6">{student.email}</td>
                                <td className="border-b py-4 px-6">{student.phone}</td>
                                <td className="border-b py-4 px-6">
                                    <button
                                        className="mr-2 text-blue-600 hover:text-blue-900"
                                        onClick={() => handleEdit(student)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => handleDelete(student.email)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {editingStudent && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Edit Student</h3>
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

export default ManageStudent;
