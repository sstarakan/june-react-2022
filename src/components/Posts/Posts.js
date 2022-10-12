import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {jsonService} from "../../services";
import {LOAD_POSTS} from "../../reducers";
import {Post} from "../Post/Post";

const Posts = () => {
    let posts = useSelector(({postsReducer}) => postsReducer.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        jsonService.getPosts().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}))
    }, [])

    return (
        <div>
            {posts.length && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};