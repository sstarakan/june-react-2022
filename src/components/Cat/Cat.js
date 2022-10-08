import React from 'react';
import {deleteCat} from "../../reducers";

const Cat = ({cat:{name, id}, dispatch}) => {
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => dispatch({type: deleteCat, payload: id})}>delete cat</button>
        </div>
    );
};

export {Cat};