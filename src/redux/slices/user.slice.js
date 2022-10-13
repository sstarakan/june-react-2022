import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../../services";

const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getUserById = createAsyncThunk(
    'userSlice/getUserById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.pending,(state, action) => {
                state.loading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getUserById.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUserById.fulfilled, (state, action)=>{
                state.user = action.payload;
                state.loading = false;
            })
});

const {reducer: userReducer, actions: {getUser}} = userSlice;

const userActions = {
    getAll,
    getUser,
    getUserById
}

export {
    userReducer,
    userActions
}