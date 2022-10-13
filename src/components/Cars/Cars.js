import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.carReducer);

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
};

export {Cars};