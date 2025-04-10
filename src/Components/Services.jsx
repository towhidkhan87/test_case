import React, { useEffect, useState } from 'react';
import Singleservice from './Singleservice';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(()=>{
        fetch('/public/services.json')
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center mx-auto w-10/12 mt-10 gap-6'>
                {
                    services.map(service=> <Singleservice service={service}></Singleservice>)
                }
            </div>
        </div>
    );
};

export default Services;