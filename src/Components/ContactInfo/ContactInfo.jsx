// src/components/ContactinfoSection/ContactinfoSection.jsx
import React, { useState } from 'react';

const ContactinfoSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('https://formspree.io/f/your-form-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <p className="mb-4 text-gray-700">
                            We would love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to reach out to us.
                        </p>
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
                            <p className="text-gray-700 mb-2">
                                <strong>Phone:</strong> +1 (555) 123-4567
                            </p>
                            <p className="text-gray-700">
                                <strong>Email:</strong> <a href="mailto:contact@classmaster.com" className="text-blue-500 hover:underline">contact@classmaster.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                                >
                                    Send
                                </button>
                                {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactinfoSection;
