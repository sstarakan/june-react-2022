import {combineReducers, createStore} from "redux";

import {commentsReducer, postsReducer, userReducer} from "../reducers";

let reducer = combineReducers({
    userReducer,
    postsReducer,
    commentsReducer
})


let store = createStore(reducer)

export {
    store
}