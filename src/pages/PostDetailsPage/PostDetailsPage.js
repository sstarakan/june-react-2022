import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {jsonService} from "../../services";
import {CHOOSE_POST} from "../../reducers";

const PostDetailsPage = () => {
    let post = useSelector(({postsReducer}) => postsReducer.post);
    const dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        if (!post || post.id !== id) {
            jsonService.getPostById(id).then(({data}) => dispatch({type: CHOOSE_POST, payload: data}))
        }
    }, [id])

    return (
        <div>
            {post && <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>}
        </div>
    );
};

export {PostDetailsPage};