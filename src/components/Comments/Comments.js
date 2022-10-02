import React, {useEffect, useState} from 'react';

import {jsonService} from "../../services";
import {Comment} from "../Comment/Comment";



const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        jsonService.getComments().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};