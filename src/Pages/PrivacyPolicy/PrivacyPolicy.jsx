import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg mb-4">
                        At ClassMaster, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect various types of information to provide and improve our services. This includes:
                        <ul className="list-disc pl-5">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when registering or using our services.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and access times.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect for various purposes, including:
                        <ul className="list-disc pl-5">
                            <li>To provide, operate, and maintain our services.</li>
                            <li>To improve and personalize your experience on our website.</li>
                            <li>To communicate with you, including sending updates, promotions, and support.</li>
                            <li>To monitor and analyze usage and trends to enhance our services.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">3. Data Protection and Security</h2>
                    <p className="mb-4">
                        We implement a range of security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your data, but we cannot guarantee its absolute security.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
                    <p className="mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the following circumstances:
                        <ul className="list-disc pl-5">
                            <li><strong>With Service Providers:</strong> We may share information with trusted third parties who assist us in operating our website and providing services.</li>
                            <li><strong>For Legal Reasons:</strong> We may disclose information to comply with legal obligations, enforce our policies, or protect our rights and property.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">5. Your Choices and Rights</h2>
                    <p className="mb-4">
                        You have the right to access, correct, or delete your personal information. You can also opt-out of receiving marketing communications from us. If you wish to exercise any of these rights, please contact us using the information provided below.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
                        <br />
                        <strong>Email:</strong> support@classmaster.com
                        <br />
                        <strong>Phone:</strong> (123) 456-7890
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
