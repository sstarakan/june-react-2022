import React from 'react';
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";

import {CHOOSE_POST} from "../../reducers";

const Post = ({post}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let {title, id} = post;

    return (
        <div>
            <h3>{title}</h3>
            <button onClick={() => {
                navigate(id.toString())
                dispatch({type: CHOOSE_POST, payload: post})
            }}>Details
            </button>
        </div>
    );
};

export {Post};