import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer, postReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}

