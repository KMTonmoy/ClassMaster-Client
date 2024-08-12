
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">ClassMaster</h2>
                    <p className="text-sm">© 2024 ClassMaster. All rights reserved.</p>
                </div>

                <div className="flex space-x-4">
                    <Link to="/about" className="hover:text-gray-200">About</Link>
                    <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                    <Link to="/privacy-policy" className="hover:text-gray-200">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="hover:text-gray-200">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
