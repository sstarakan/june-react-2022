import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

import {CHOOSE_COMMENT} from "../../reducers";

const Comment = ({comment}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let {name, id} = comment;
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={() => {
                navigate(id.toString());
                dispatch({type: CHOOSE_COMMENT, payload: comment});
            }}>Details</button>
        </div>
    );
};

export {Comment};