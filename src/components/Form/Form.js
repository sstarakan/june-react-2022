import React from 'react';

import css from './Form.module.css'
import {CatForm} from "../CatForm/CatForm";
import {DogForm} from "../DogForm/DogForm";


const Form = ({dispatch}) => {


    return (
        <div className={css.Form}>
            <CatForm dispatch={dispatch}/>
            <DogForm dispatch={dispatch}/>
        </div>
    );
};

export {Form};