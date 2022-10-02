import React from 'react';
import {Link} from "react-router-dom";

import css from "./Homepage.module.css"

const Homepage = () => {
    return (
        <>
            <div className={css.Homepage}>
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'/albums'}>Albums</Link></div>
                <div><Link to={'/todos'}>Todos</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
            </div>
        </>
    );
};

export {Homepage};