import React from 'react';
import {Link} from 'react-router-dom'

const Singleservice = ({ service }) => {
    return (
        <div>
            <div className="w-11/12 mx-auto py-5 lg:w-9/12">
                <div className="card bg-base-100 w-96 shadow-lg">
                    <figure>
                        <img className='h-72 w-full' alt="Shoes" src={service.image}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {service.name}
                            <div className="badge badge-secondary">Top Rated</div>
                        </h2>
                        <p>{service.description}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{service.price_range}</div>
                            <div className="badge badge-outline">{service.delivery_time}</div>
                            <div>
                                <Link to={`/services/${service.name}`} className='btn btn-neutral'>View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singleservice;