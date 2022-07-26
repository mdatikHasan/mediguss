import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';


const ServiceDatails = () => {
    const { name } = useParams();
    const location = useLocation();
    console.log(location);
    const  {img, priceMax, priceMin, describe } = location.state;

    return (
        <div>
            <div className='row'>
                <div className="col-lg-4 g-4">
                    <div>
                        <div className="card">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <h4>Price: {priceMin} to  {priceMax}</h4>
                                <p>{describe}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDatails;