// src/components/StaticsSection/StaticsSection.jsx
import React from 'react';

const statistics = [
    {
        title: 'Active Users',
        value: '1.2K',
        description: 'Students actively using ClassMaster',
        icon: '👩‍🎓',
    },
    {
        title: 'Classes Conducted',
        value: '850+',
        description: 'Successful classes managed through our platform',
        icon: '🏫',
    },
    {
        title: 'Teachers Onboarded',
        value: '150+',
        description: 'Educators using ClassMaster to enhance their teaching',
        icon: '👨‍🏫',
    },
    {
        title: 'Sessions Completed',
        value: '5K+',
        description: 'Completed study sessions and assignments',
        icon: '📝',
    },
];

const StaticsSection = () => {
    return (
        <section className="py-12   ">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statistics.map((stat, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="text-4xl mb-4">{stat.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{stat.value}</h3>
                            <p className="text-lg font-medium mb-2">{stat.title}</p>
                            <p className="text-gray-600">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StaticsSection;
