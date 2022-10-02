import {Route, Routes} from "react-router";

import {Albums, Comments, Homepage, Post, Todos} from "./components";

function App() {
    return (
        <div>
            <Homepage/>
            <Routes>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'comments'} element={<Comments/>}/>
                <Route path={'post/:postId'} element={<Post/>}/>
            </Routes>
        </div>
    );
}

export default App;