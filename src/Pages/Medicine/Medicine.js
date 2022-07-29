import React, { useEffect, useState } from 'react';
import MedicineItem from './MedicineItem';

const Medicine = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(()=>{
        fetch('./medicines.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    }, [])

    console.log(medicines);
    
    return (
        <div>
            <h1>Medicines</h1>
            <div className='row'>
                {
                    medicines.map(medicine => <MedicineItem medicine={medicine} key={medicine.id}></MedicineItem>)
                }
            </div>
        </div>
    );
};

export default Medicine;