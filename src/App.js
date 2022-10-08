import {usePetsReducer} from "./reducers";
import React from "react";

import {Cat, Dog, Form} from "./components";
import css from './App.module.css'

function App() {
    const [{cats, dogs}, dispatch] = usePetsReducer();

    return (
        <div>
            <Form dispatch={dispatch}/>
            <hr/>
            <div className={css.App}>
                <div>
                    {cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
                </div>
                <div>
                    {dogs.map((dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>))}
                </div>
            </div>
        </div>
    );
}

export default App;