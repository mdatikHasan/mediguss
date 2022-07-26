import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Service from './Service';


const Services = () => {
    const navigate = useNavigate()

    const [services, setServices] = useState([])

    useEffect(()=>{
       fetch('./services.json')
       .then(res => res.json())
       .then(data => setServices(data)) 
    }, [])

    return (
        <div className='container'>
            <h1>This is Services</h1>
            <div className='row'>
                {
                    services.map((service) => <Service service={service} key={service.id}></Service> )
                }
            </div>
            <button onClick={()=> {navigate('/')}}>Go Home</button>
        </div>
    );
};

export default Services;