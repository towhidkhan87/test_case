import React, { useState } from 'react';

const Form = () => {

    const [selectedService, setSelectedService] = useState('');

    const handleSelectService = (service) => {
        setSelectedService(service);
    };

    return (
        <div className='flex justify-center items-center h-fit mb-5'>
            <fieldset className="fieldset w-xl bg-gray-300 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend font-bold text-2xl text-center translate-y-8">Contact Form</legend>

                <label className="fieldset-legend">Email</label>
                <input type="email" className="input w-full" placeholder="Enter Your Email Address" />

                <label className="fieldset-legend">First Name</label>
                <input type="text" className="input w-full" placeholder="Enter Your First Name" />

                <div className='dropdown dropdown-start'>
                    <label className="fieldset-legend">Service Category</label>
                    <input
                        tabIndex={0}
                        type="text"
                        className="input w-full text-start"
                        placeholder="Choose Your Desire Service"
                        value={selectedService} readOnly
                    />
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
                        <li><a onClick={() => handleSelectService('Web Development')}>Web Development</a></li>
                        <li><a onClick={() => handleSelectService('UI/UX Design')}>UI/UX Design</a></li>
                        <li><a onClick={() => handleSelectService('Data Analysis')}>Data Analysis</a></li>
                        <li><a onClick={() => handleSelectService('Email Marketing')}>Email Marketing</a></li>
                    </ul>
                </div>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Message</legend>
                    <textarea className="textarea h-24 w-full" placeholder="Describe you needs and desires"></textarea>
                </fieldset>

                <button className="btn btn-neutral mt-4 w-24 mx-auto">Submit</button>
            </fieldset>
        </div>
    );
};

export default Form;