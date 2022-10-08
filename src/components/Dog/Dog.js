import React from 'react';
import {deleteDog} from "../../reducers";

const Dog = ({dog:{name, id}, dispatch}) => {
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => dispatch({type: deleteDog, payload: id})}>delete dog</button>
        </div>
    );
};

export {Dog};