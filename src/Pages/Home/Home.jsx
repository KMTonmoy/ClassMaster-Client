import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeatureSection from '../../Components/FeatureSection/FeatureSection';
import Testimonials from '../../Components/Testimonials/Testimonials';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import StaticsSection from '../../Components/Statistics/Statistics';
import FAQ from '../../Components/Faq/Faq';

const Home = () => {
    return (
        <div className='my-2'>
            <Banner />
            <FeatureSection />
            {/* <StaticsSection /> */}
            <FAQ />
            <Testimonials />
            <ContactInfo />
        </div>
    );
};

export default Home;