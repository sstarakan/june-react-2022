import css from './App.module.css';
import Users from "./components/Users/Users";
import {useState} from "react";
import Posts from "./components/Posts/Posts";

function App() {
    let [id, setId] = useState(null);

    const getId = (id) => {
        setId(id)
    }


    return (
        <div className={css.wrap}>
            <div className={css.users}><Users getId={getId}/></div>
            <div className={css.posts}>{id ? <Posts id={id}/> : ''}</div>
        </div>
    );
}

export default App;