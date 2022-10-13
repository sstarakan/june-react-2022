import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";

const Form = () => {
    const dispatch = useDispatch();
    const {currentCar} = useSelector(state => state.carReducer);

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    useEffect(() => {
        if (currentCar) {
            setValue('model', currentCar.model)
            setValue('price', currentCar.price)
            setValue('year', currentCar.year)
        } else {
            setValue('model', 'Sens')
            setValue('price', '3000')
            setValue('year', '2002')
        }
    }, [currentCar])

    const submit = (car) => {
        if (currentCar) {
            dispatch(carActions.updateCar({id: currentCar.id, car}))
        } else {
            dispatch(carActions.createCar({car}))
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            {currentCar ? <button disabled={!isValid}>Update</button> : <button disabled={!isValid}>Save</button>}
        </form>
    );
};

export {Form};