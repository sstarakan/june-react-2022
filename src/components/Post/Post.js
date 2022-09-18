import React from 'react';

const Post = ({post: {userId, id, title, body}}) => {
    return (
        <div>
            <h6>{userId}-{id} - {title}</h6>
            <p>{body}</p>
        </div>
    );
};

export default Post;