import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode:'all',
    })
    // let {id, model, price, year} = carForUpdate


    useEffect(()=>{
        if(carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        } else {
            setValue('model', 'Sens')
            setValue('price', '3000')
            setValue('year', '2002')
        }
    },[carForUpdate])

    const submit = async (car) => {
        if(carForUpdate){
            await carService.updateById(carForUpdate.id, car);
            setCars(cars => {
                const index = cars.findIndex(car => car.id === carForUpdate.id);
                cars[index] = {
                    model: car.model,
                    price: car.price,
                    year: car.year,
                };
                return [...cars];
            })
            reset()
        }else {
            const {data} = await carService.createCar(car);
            setCars(car => [...car, data]);
            reset()
        }
    }



    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model&&<span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            {errors.year&&<span>{errors.year.message}</span>}
            {carForUpdate? <button disabled={!isValid}>update</button> : <button disabled={!isValid}>save</button>}
        </form>
    );
};

export {CarForm};