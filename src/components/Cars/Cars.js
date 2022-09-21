import React, {useEffect, useState} from 'react';

import {Car} from "../Car/Car";
import {carService} from "../../services";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    let [cars, setCars] = useState([]);
    let [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data))
    }, []);

    const getCar = (updateCar) => {
        setCarForUpdate(updateCar);
    }

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} getCar={getCar}/>)}
        </div>
    );
};

export {Cars};