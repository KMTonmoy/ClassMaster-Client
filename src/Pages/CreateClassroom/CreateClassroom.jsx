import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateClassroom = () => {
    const [formData, setFormData] = useState({
        classroomName: '',
        timetable: {
            Monday: { start: '', end: '' },
            Tuesday: { start: '', end: '' },
            Wednesday: { start: '', end: '' },
            Thursday: { start: '', end: '' },
            Friday: { start: '', end: '' },
            Saturday: { start: '', end: '' },
            Sunday: { start: '', end: '' },
        },
    });

    const handleClassroomNameChange = (e) => {
        setFormData({ ...formData, classroomName: e.target.value });
    };

    const handleTimeChange = (day, field, value) => {
        setFormData({
            ...formData,
            timetable: {
                ...formData.timetable,
                [day]: { ...formData.timetable[day], [field]: value },
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/classrooms', formData);
            if (response.status === 201) {
                toast.success('Classroom created successfully!');
                // Reset form after successful submission
                setFormData({
                    classroomName: '',
                    timetable: {
                        Monday: { start: '', end: '' },
                        Tuesday: { start: '', end: '' },
                        Wednesday: { start: '', end: '' },
                        Thursday: { start: '', end: '' },
                        Friday: { start: '', end: '' },
                        Saturday: { start: '', end: '' },
                        Sunday: { start: '', end: '' },
                    },
                });
            } else {
                throw new Error('Failed to create classroom');
            }
        } catch (error) {
            console.error('Error creating classroom:', error.message);
            toast.error('Failed to create classroom.');
        }
    };

    return (
        <div className="flex w-full justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Classroom</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="classroomName" className="block text-lg font-medium text-gray-700">
                            Classroom Name
                        </label>
                        <input
                            type="text"
                            id="classroomName"
                            name="classroomName"
                            value={formData.classroomName}
                            onChange={handleClassroomNameChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-2">Classroom Time Table</h3>
                        {Object.keys(formData.timetable).map((day) => (
                            <div key={day} className="mb-4">
                                <label className="block text-md font-medium text-gray-600">{day}</label>
                                <div className="flex space-x-4 mt-1">
                                    <input
                                        type="time"
                                        name={`${day}-start`}
                                        value={formData.timetable[day].start}
                                        onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                                        placeholder="Start Time"
                                        className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <input
                                        type="time"
                                        name={`${day}-end`}
                                        value={formData.timetable[day].end}
                                        onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                                        placeholder="End Time"
                                        className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Classroom
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateClassroom;
