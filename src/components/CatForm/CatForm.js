import React from 'react';
import {useForm} from "react-hook-form";

import {addCat} from "../../reducers";

const CatForm = ({dispatch}) => {
    const {register, handleSubmit} = useForm();

    const submitCat = (cat) => {
        dispatch({type: addCat, payload: cat.cat})
        console.log(cat);
    }
    return (
        <div>

            <form onSubmit={handleSubmit(submitCat)}>
                <input type="text" placeholder={'cat'} {...register('cat')}/>
                <button>add cat</button>
            </form>
        </div>
    );
};

export {CatForm};