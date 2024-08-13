import React, { useState } from 'react';

const faqData = [
    {
        question: 'How do I create a new classroom?',
        answer: 'As a principal, you can create a new classroom by navigating to the "Create Classroom" section in your dashboard. Enter the classroom details, including name, start and end times, and the days it will be in session.',
    },
    {
        question: 'Can I assign multiple teachers to a single classroom?',
        answer: 'No, each classroom can only be assigned to one teacher. This ensures that the teacher is fully responsible for managing their classroom’s timetable and students.',
    },
    {
        question: 'How do students access their timetables?',
        answer: 'Students can log in to their accounts and view the timetable under the "My Classroom" section. The timetable will display all the scheduled classes set by their teacher.',
    },
    {
        question: 'Can I edit or delete a classroom after creating it?',
        answer: 'Yes, as a principal, you have full control to edit or delete any classroom. Navigate to the "Manage Classrooms" section to make changes or remove a classroom.',
    },
    {
        question: 'How do I reset my password?',
        answer: 'If you’ve forgotten your password, you can reset it by clicking the "Forgot Password" link on the login page. Follow the instructions sent to your registered email to reset your password.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2">
                    <img src='https://t4.ftcdn.net/jpg/01/28/17/47/360_F_128174778_0XvhB1qi70yXNOPuUFzBNT85xKaWnVde.jpg' alt="FAQ" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                    <h2 className="text-3xl font-bold text-center lg:text-left mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-2xl mx-auto">
                        {faqData.map((item, index) => (
                            <div key={index} className="mb-6">
                                <button
                                    className="w-full text-left flex items-center justify-between py-4 px-6 bg-gray-100 rounded-lg shadow-md focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="text-lg font-medium">{item.question}</span>
                                    <span>{activeIndex === index ? '-' : '+'}</span>
                                </button>
                                {activeIndex === index && (
                                    <div className="mt-4 px-6 text-gray-700">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;