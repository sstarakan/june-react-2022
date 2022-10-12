import {CHOOSE_COMMENT, LOAD_COMMENTS} from "./count.actions";

const init = {comments: [], comment: null};

const commentsReducer = (state = init, action) => {
    let {type, payload} = action;
    switch (type) {
        case LOAD_COMMENTS:
            return {...state, comments: payload};
        case CHOOSE_COMMENT:
            return {...state, comment: payload};
        default:
            return state;
    }
}

export {
    commentsReducer
}