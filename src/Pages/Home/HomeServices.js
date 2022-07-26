import React from 'react';
import {Link} from 'react-router-dom'

const HomeServices = ({service}) => {
    const { name, id, img, priceMin, priceMax, describe } = service;

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str
        }
    }
    return (

        <div className="col-lg-4 g-5 mb-5">
            <div className='mb-5'>
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h4>Price: {priceMin} to  {priceMax}</h4>
                        <p className="card-text">{truncateString(describe, 100)}</p>
                    </div>
                    <Link to={name} className='button-link mb-3' state={{ name, img, priceMax, priceMin, describe }}><button className='btn btn-danger'>See Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default HomeServices;