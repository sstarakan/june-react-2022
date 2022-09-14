import React from 'react';

import css from './Character.module.css'

const Character = ({character}) => {

    let {id, name, status, species, gender, image} = character;

    return (
        <div className={css.characterWrap}>
            <h2>{name}</h2>
            <p>id: {id} <br/>
                Status: {status}<br/>
                Species: {species}<br/>
                Gender: {gender}
            </p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;