import {Route, Routes} from "react-router";

import Homepage from "./components/HomePage/Homepage";
import Albums from "./components/Albums/Albums";
import Todos from "./components/Todos/Todos";
import Comments from "./components/Comments/Comments";
import Post from "./components/Post/Post";

function App() {
    return (
        <div>
            <Homepage/>
            <Routes>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;