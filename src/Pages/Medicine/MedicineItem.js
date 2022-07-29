import React from 'react';
import './Medicine.css'

const MedicineItem = ({ medicine }) => {
    const { barndName, genericName, dosageFrom, strength, packSixe, price } = medicine;

    return (
        <div className='col-lg-4 col-md-6 col-12  medicine'>
            <div className="card p-3 m-3">
                <h1><b>Barnd Name:</b> {barndName}</h1>
                <h4><b>Generic Name:</b> {genericName}</h4>
                <h3><b>DosageFrom:</b> {dosageFrom}</h3>
                <h3><b>Strength:</b> {strength}</h3>
                <h3><b>PackSixe:</b> {packSixe}</h3>
                <h3><b>Price:</b> {price}</h3>
            </div>
        </div>
    );
};

export default MedicineItem;