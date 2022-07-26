import React, { useEffect, useState } from 'react';
import Banner from '../../Shared/Banner/Banner';
import Services from '../Services/Services';
import HomeServices from './HomeServices';

const Home = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='row'>
                {
                    services.map(service => <HomeServices service={service} key={service.id}></HomeServices>)
                }
            </div>
        </div>
    );
};

export default Home;