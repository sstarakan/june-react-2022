import React from 'react';
import {useDispatch} from "react-redux";

import css from './car.module.css'
import {carActions} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();

    const {id, model, price, year} = car

    return (
        <div className={css.Car}>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() =>{
                dispatch(carActions.deleteCar({id}))
            }}>Delete</button>
            <button onClick={() => {
                dispatch(carActions.setCar(car))
            }}>Update</button>
        </div>
    );
};

export {Car};