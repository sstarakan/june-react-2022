import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

import {CHOOSE_USER} from "../../reducers";

const User = ({user}) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let {name, username, id} = user;

    return (
        <div>
            <h3>{name} - {username}</h3>
            <button onClick={() => {
                navigate(id.toString());
                dispatch({type: CHOOSE_USER, payload: user})
            }}>Details
            </button>
        </div>
    );
};

export {User};