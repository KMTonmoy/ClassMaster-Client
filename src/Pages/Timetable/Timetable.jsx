import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Timetable = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState({});
    const [rooms, setRooms] = useState([]);
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

    const myRoomId = data?.room_id;

    useEffect(() => {
        const fetchRoomData = async () => {
            if (myRoomId) {
                try {
                    const response = await fetch(`http://localhost:8000/classroom`);
                    const roomData = await response.json();
                    const matchedRooms = roomData.filter(room => room.room_id === myRoomId);
                    setRooms(matchedRooms);
                } catch (err) {
                    console.error('Failed to fetch classroom data:', err);
                }
            }
        };

        fetchRoomData();
    }, [myRoomId]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Timetable</h2>
            {rooms.length > 0 ? (
                rooms.map((room, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-bold mb-2">{room.classroomName}</h3>
                        <table className="min-w-full bg-white border mb-4">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border">Day</th>
                                    <th className="py-2 px-4 border">Start Time</th>
                                    <th className="py-2 px-4 border">End Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(room.timetable).map((day, i) => (
                                    <tr key={i}>
                                        <td className="py-2 px-4 border">{day}</td>
                                        <td className="py-2 px-4 border">{room.timetable[day].start || 'N/A'}</td>
                                        <td className="py-2 px-4 border">{room.timetable[day].end || 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (
                <div>No timetable available for your room.</div>
            )}
        </div>
    );
};

export default Timetable;
