import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
    const { name } = useParams(null)
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => {
                const filterdata = data.find(service => service.name === name)
                setservices(filterdata)
            })
    }, [name])
    return (
        <div className='w-11/12 mx-auto py-5 lg:w-9/12'>
            <div className="text-center">
                <h1 className="text-5xl font-bold">{services?.name}</h1>
                <p className="py-6">
                    {services.description}
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:mx-auto items-center">
                <img className='lg:w-6/12' src={services.image} />
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Type Your Email Address" />
                            <label className="fieldset-label">First Name</label>
                            <input type="email" className="input" placeholder="Type Your Email Address" />
                            <label className="fieldset-label">Last Name</label>
                            <input type="password" className="input" placeholder="Type Your Last Name" />
                            <button className="btn btn-neutral mt-4">Confirm Now</button>
                        </fieldset>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;