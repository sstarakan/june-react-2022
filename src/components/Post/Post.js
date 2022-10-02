import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {jsonService} from "../../services";


const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        jsonService.getPost(postId).then(({data}) => setPost({...data}));

    }, [postId]);


    return (
        <div>
            {post ? <div>
                <h3>{post.title}</h3>
                <p>{post.userId} - {post.id}</p>
                <p>{post.body}</p>
            </div> : ''
            }
        </div>
    );
};


export {Post};