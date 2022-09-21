import React from 'react';
import css from './car.module.css'
import {carService} from "../../services";

const Car = ({car, setCars, getCar }) => {
     let {id, model, year, price} = car;
    const deleteCar = async () => {
        console.log(id);
        await carService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(car => car.id === id);
            cars.splice(index, 1);
            return [...cars];
        })
    }

    return (
        <div className={css.wrap}>
            <div>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>year:{year}</div>
                <div>price: {price}</div>
            </div>
            <div>
                <button onClick={()=> getCar(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export {Car};