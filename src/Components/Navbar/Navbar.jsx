import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    ClassMaster
                </Link>

                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <Link to="/principal-dashboard" className="text-white hover:text-gray-200">
                        Principal Dashboard
                    </Link>
                    <Link to="/teacher-dashboard" className="text-white hover:text-gray-200">
                        Teacher Dashboard
                    </Link>
                    <Link to="/student-dashboard" className="text-white hover:text-gray-200">
                        Student Dashboard
                    </Link>
                    <Link to="/login" className="text-white hover:text-gray-200">
                        Login
                    </Link>
                    <Link to="/signup" className="text-white hover:text-gray-200">
                        Signup
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
