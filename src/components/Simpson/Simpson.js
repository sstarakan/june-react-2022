import React from 'react';

import css from './Simpson.module.css'

const Simpson = ({simpson}) => {
    let {name , surname, age, info, photo} = simpson
    return (
        <div className={css.simpsonWrap}>
            <h2>{name} {surname} - age {age}</h2>
            <p>{info}</p>
            <img src={photo} alt="simpson"/>
        </div>
    );
};

export default Simpson;