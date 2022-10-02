import React from 'react';

import css from './Album.module.css'

const Album = ({album:{userId, id, title}}) => {

    return (
        <div className={css.Album}>
            <div>{id} - {userId}</div>
            <div>{title}</div>
        </div>
    );
};

export {Album};