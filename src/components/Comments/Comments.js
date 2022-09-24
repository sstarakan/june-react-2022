import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router";

import {jsonService} from "../../services/jsonplaceholder.service";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        jsonService.getComments().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div>
            <Outlet/>
            <hr/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;