import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div>
            <h5>{name} - {email}</h5>
            <div>{postId} - {id}</div>
            <p>{body}</p>
            <div><Link to={`/post/${postId}`}>View post</Link></div>
        </div>
    );
};

export {Comment};