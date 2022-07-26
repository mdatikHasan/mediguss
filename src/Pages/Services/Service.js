import React from 'react';
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
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
            <div>
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h4>Price: {priceMin} to  {priceMax}</h4>
                        <p className="card-text">{truncateString(describe, 100)}</p>
                        <Link to={name} state={{ name, img, priceMax, priceMin, describe }}><button className='btn btn-info'><b>See Details</b></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;