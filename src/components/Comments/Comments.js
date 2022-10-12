import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {jsonService} from "../../services";
import {LOAD_COMMENTS} from "../../reducers";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    let comments = useSelector(({commentsReducer}) => commentsReducer.comments)
    const dispatch = useDispatch();

    useEffect(() => {
        jsonService.getComments().then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))
    },[])

    return (
        <div>
            {comments.length && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};