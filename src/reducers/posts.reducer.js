import {CHOOSE_POST, LOAD_POSTS} from "./count.actions";

const init = {posts: [], post: null};

const postsReducer = (state = init, action) => {
    let {type, payload} = action;
    switch (type) {
        case LOAD_POSTS:
            return {...state, posts: payload};
        case CHOOSE_POST:
            return {...state, post: payload};
        default:
            return state;
    }
}

export {
    postsReducer
}