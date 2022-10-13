import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {postActions} from "../../redux";
import {LoadingComponent} from "../../components";

const PostDetailsPage = () => {
    const dispatch = useDispatch();
    const {post, loading} = useSelector(state => state.postReducer);

    const {id} = useParams();

    useEffect(() => {
        if (!post || post.id !== post) {
            dispatch(postActions.getPostById({id}))
        }
    }, [id])

    return (
        <div>
            {loading && <LoadingComponent/>}
            {post && <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>}
        </div>
    );
};

export {PostDetailsPage};