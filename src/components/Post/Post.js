import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

import {postActions} from "../../redux";

const Post = ({post}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {title, id} = post;

    return (
        <div>
            <h3>{title}</h3>
            <button onClick={()=>{
                navigate(id.toString())
                dispatch(postActions.getPost(post))
            }}>details</button>
        </div>
    );
};

export {Post};