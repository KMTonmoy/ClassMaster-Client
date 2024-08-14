import React, { useEffect, useState } from 'react';

const MyStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(data => {
                const studentUsers = data.filter(user => user.role === 'student');
                setStudents(studentUsers);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">My Students</h1>
            {students.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Classroom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student._id}>
                                <td className="py-2 px-4 border-b">{student.name}</td>
                                <td className="py-2 px-4 border-b">{student.email}</td>
                                <td className="py-2 px-4 border-b">{student.classroom}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No students found.</p>
            )}
        </div>
    );
};

export default MyStudents;
