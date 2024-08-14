import React from 'react';
import { FaChalkboardTeacher, FaAward, FaEnvelope } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-900 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">About the Class Master</h1>
            </header>

            <main className="p-8 max-w-4xl mx-auto">
                {/* Introduction Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                    <div className="flex items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mr-6">
                            <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-700">
                                Hello! I'm [Your Name], the Class Master dedicated to fostering a productive and engaging learning environment.
                                With a focus on interactive teaching methods and student development, I aim to create an enriching classroom experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Teaching Philosophy Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Teaching Philosophy</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />
                        <p className="text-lg text-gray-700">
                            My teaching philosophy revolves around creating an inclusive and stimulating environment where students feel encouraged to explore and learn.
                            I emphasize critical thinking, creativity, and real-world applications of knowledge, ensuring that lessons are engaging and relevant.
                        </p>
                    </div>
                </section>

                {/* Class Management Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Class Management</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InfoCard icon={<SiReact className="text-4xl text-green-500" />} title="Organizational Skills" description="Efficiently managing class schedules, assignments, and student progress." />
                        <InfoCard icon={<FaAward className="text-4xl text-yellow-500" />} title="Student Development" description="Fostering student growth through personalized feedback and mentorship." />
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Achievements</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <FaAward className="text-4xl text-yellow-500 mb-4" />
                        <p className="text-lg text-gray-700">
                            Over the years, I have been recognized for my contributions to education with several awards and accolades, reflecting my commitment to teaching excellence.
                            These achievements include "Best Teacher of the Year" and "Innovative Teaching Award."
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                        <FaEnvelope className="text-4xl text-blue-500 mr-4" />
                        <div>
                            <p className="text-lg text-gray-700">Email: classmaster@example.com</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-blue-900 text-white p-6 text-center">
                <p>&copy; 2024 [Your Name]. All rights reserved.</p>
            </footer>
        </div>
    );
};

const InfoCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="mr-4">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
);

export default About;
