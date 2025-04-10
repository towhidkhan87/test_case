import React from 'react';
import Hero from './Components/Hero';
import Company from './Components/Company';
import Services from './Components/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div>
            <h1 className="w-11/12 mx-auto mt-5 py-10 lg:w-9/12 text-center text-6xl font-bold">Work Experience with the Company</h1>
            <Company></Company>
            </div>
            
            <div className="w-11/12 mx-auto py-5 lg:w-9/12">
                <h1 className="w-11/12 mx-auto mt-5 py-10 lg:w-9/12 text-center text-6xl font-bold">Skilled Services</h1>
                <Services />
            </div>
        </div>
    );
};

export default Home;