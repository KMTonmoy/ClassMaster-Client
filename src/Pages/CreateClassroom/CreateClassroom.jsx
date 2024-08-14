import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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
    const [existingClassrooms, setExistingClassrooms] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Load existing classrooms when the component mounts
        const loadClassrooms = async () => {
            try {
                const response = await axios.get('http://localhost:8000/classroom');
                setExistingClassrooms(response.data);
            } catch (error) {
                console.error('Error loading classrooms:', error.message);
                toast.error('Failed to load existing classrooms.');
            }
        };

        loadClassrooms();
    }, []);

    const handleClassroomNameChange = (e) => {
        setFormData({ ...formData, classroomName: e.target.value });
        setErrors({ ...errors, classroomName: '' });
    };

    const handleTimeChange = (day, field, value) => {
        setFormData({
            ...formData,
            timetable: {
                ...formData.timetable,
                [day]: { ...formData.timetable[day], [field]: value },
            },
        });
        setErrors({ ...errors, [day]: { ...errors[day], [field]: '' } });
    };

    const validateTimes = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(formData.timetable).forEach((day) => {
            const { start, end } = formData.timetable[day];
            if (start && !end) {
                newErrors[day] = { end: 'End time is required if start time is selected.' };
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const validateClassroomName = () => {
        const classroomExists = existingClassrooms.some(
            (classroom) => classroom?.name?.toLowerCase() === formData.classroomName.toLowerCase()
        );

        if (classroomExists) {
            setErrors({ ...errors, classroomName: 'Classroom name already exists. Please choose a different name.' });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateClassroomName() || !validateTimes()) {
            toast.error('Please fix the errors before submitting.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/classrooms', formData);
            if (response.status === 201) {
                // Show success alert with SweetAlert2
                await Swal.fire({
                    title: 'Success!',
                    text: 'Classroom created successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

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
        <div className="flex w-full my-10 justify-center items-center min-h-screen">
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
                        {errors.classroomName && (
                            <p className="text-red-500 text-sm mt-1">{errors.classroomName}</p>
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-2">Classroom Timetable</h3>
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
                                {errors[day] && errors[day].end && (
                                    <p className="text-red-500 text-sm mt-1">{errors[day].end}</p>
                                )}
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
