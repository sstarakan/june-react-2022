import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, loading} = useSelector(state => state.postReducer);

    useEffect(()=>{
        dispatch(postActions.getAll())
    },[])

    return (
        <div>
            {loading && <LoadingComponent/>}
            {posts.map(post => <Post key={post.id}  post={post} />)}
        </div>
    );
};

export {Posts};