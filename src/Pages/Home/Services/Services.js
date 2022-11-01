import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div>
                <p className="text-2xl font-bold text-center text-orange-600">Services</p>
                <h2 className="text-5xl font-bold text-center">Our Service Area</h2>
                <p className="text-xl text-center">The majority have suffered alteration in some form, <br /> by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div>
                <h2>Services: {services.length}</h2>
                {

                }
            </div>
        </div>
    );
};

export default Services;