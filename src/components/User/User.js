import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

import {userActions} from "../../redux";

const User = ({user}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {name, username, id} = user;

    return (
        <div>
            <h2>{name} -- {username}</h2>
            <button onClick={() => {
                dispatch(userActions.getUser(user))
                navigate(id.toString())
            }}>details</button>
        </div>
    );
};

export {User};