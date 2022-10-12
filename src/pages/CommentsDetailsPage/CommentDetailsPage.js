import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {jsonService} from "../../services";
import {CHOOSE_COMMENT} from "../../reducers";

const CommentDetailsPage = () => {
    let comment = useSelector(({commentsReducer}) => commentsReducer.comment);
    const dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        if (!comment || comment.id !== id) {
            jsonService.getCommentById(id).then(({data}) => dispatch({type: CHOOSE_COMMENT, payload: data}))
        }
    }, [id])

    return (
        <div>
            {comment && <div>
                <h2>{comment.name}</h2>
                <h4>{comment.email}</h4>
                <p>{comment.body}</p>
            </div>}

        </div>
    );
};

export {CommentDetailsPage};