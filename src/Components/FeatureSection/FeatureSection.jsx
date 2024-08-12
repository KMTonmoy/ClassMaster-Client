// src/components/FeatureSection/FeatureSection.jsx
import React from 'react';

const features = [
    {
        title: 'Efficient Classroom Management',
        description: 'Easily manage classrooms and assignments with a user-friendly interface.',
        icon: '📚'
    },
    {
        title: 'Interactive Timetables',
        description: 'Create and manage timetables that suit your classroom needs.',
        icon: '📅'
    },
    {
        title: 'Comprehensive Reporting',
        description: 'Generate detailed reports to track progress and performance.',
        icon: '📊'
    }
];

const FeatureSection = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
