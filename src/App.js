import {Route, Routes} from "react-router";

import {CarsPage, HomePage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";
import {Header} from "./components";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'users/:id'} element={<UserDetailsPage/>}/>
                <Route path={'posts/:id'} element={<PostDetailsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;