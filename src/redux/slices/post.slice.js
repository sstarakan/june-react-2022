import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";


const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll()
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getPostById = createAsyncThunk(
    'postSlice/getPostById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postService.getById(id)
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        getPost: (state, action) => {
            state.post = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getPostById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload
            })
});

const {reducer: postReducer, actions: {getPost}} = postSlice;

const postActions = {
    getPost,
    getAll,
    getPostById
}

export {
    postReducer,
    postActions
}