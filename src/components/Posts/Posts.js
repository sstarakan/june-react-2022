import React, {useEffect, useState} from 'react';

import {getUserPosts} from "../../services/users.axios.service";
import Post from "../Post/Post";

const Posts = ({id}) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserPosts(id)
            .then(value => setPosts(value.data))
    }, [id])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;