import {CHOOSE_USER, LOAD_USERS} from "./count.actions";

const init = {users: [], user: null};

const userReducer = (state = init, action) => {
    let {type, payload} = action;
    switch (type) {
        case LOAD_USERS:
            return {...state, users: payload};
        case CHOOSE_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}

export {
    userReducer
}