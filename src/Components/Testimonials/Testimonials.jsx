// src/components/Testimonials/Testimonials.jsx
import React from 'react';

const testimonials = [
    {
        name: 'John Doe',
        text: 'ClassMaster has revolutionized the way I manage my classroom. The interface is intuitive and the features are incredibly useful.',
        avatar: 'https://via.placeholder.com/100'
    },
    {
        name: 'Jane Smith',
        text: 'The interactive timetable feature has made scheduling so much easier. Highly recommend ClassMaster!',
        avatar: 'https://via.placeholder.com/100'
    },
    {
        name: 'Emily Johnson',
        text: 'I love how easy it is to generate reports and track student progress. ClassMaster is a game-changer!',
        avatar: 'https://via.placeholder.com/100'
    }
];
 
const Testimonials = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-lg mb-4">"{testimonial.text}"</p>
                            <p className="font-semibold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
