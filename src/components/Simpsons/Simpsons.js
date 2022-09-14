import React from 'react';

import Simpson from "../Simpson/Simpson";
import {simpsons} from "../simpsonArray/simpsonAray";
import css from './Simpsons.module.css'


const Simpsons = () => {

    return (
        <div className={css.simpsonsWrap}>
            {simpsons.map((simpson,index) => <Simpson simpson={simpson} key={index} />)}
        </div>
    );
};

export default Simpsons;