import {Route, Routes} from "react-router";

import {Header} from "./components";
import {
    CommentDetailsPage,
    CommentsPage,
    HomePage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UsersPage
} from "./pages";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'users/:id'} element={<UserDetailsPage/>}/>
                <Route path={'posts/:id'} element={<PostDetailsPage/>}/>
                <Route path={'comments/:id'} element={<CommentDetailsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;