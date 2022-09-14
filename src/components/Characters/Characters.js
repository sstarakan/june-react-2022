import React, {useState} from 'react';

import Character from "../Character/Character";
import css from './Characters.module.css'

const Characters = () => {
    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results)
        })

    return (
        <div className={css.wrap}>
            {characters.map(character => <Character character={character} key={character.id} />)}
        </div>
    );
};

export default Characters;