import React from 'react';

import css from "../Album/Album.module.css";

const Todo = ({todo: {userId, id, title, completed}}) => {
    return (
        <div>
            <div className={css.Album}>
                <div>{id} - {userId}</div>
                <div>{title}: {completed ? 'Completed' : 'Not completed'}</div>
            </div>
        </div>
    );
};

export default Todo;