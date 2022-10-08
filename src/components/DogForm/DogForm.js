import React from 'react';
import {useForm} from "react-hook-form";

import {addDog} from "../../reducers";

const DogForm = ({dispatch}) => {
    const {register, handleSubmit} = useForm();

    const submitCat = (dog) => {
        dispatch({type: addDog, payload: dog.dog})
    }
    return (
        <div>

            <form onSubmit={handleSubmit(submitCat)}>
                <input type="text" placeholder={'dog'} {...register('dog')}/>
                <button>add dog</button>
            </form>
        </div>
    );
};

export {DogForm};