import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
    currentCar: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue}) =>{
        try{
            const {data} = await carService.getAll()
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car},{rejectWithValue}) =>{
        try {
            const {data} = await carService.createCar(car)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue})=>{
        try{
            await carService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id , car}, {rejectWithValue}) => {
        try{
            await carService.updateById(id, car);
            return {id, ...car};
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCar: (state, action) => {
            state.currentCar = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.cars = action.payload
            })
            .addCase(createCar.pending, (state, action) =>{
                state.loading = true;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.loading = false;
                state.cars = [...state.cars, action.payload]
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.cars = state.cars.filter(car => car.id !== action.payload)
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id)
                state.cars[index] = action.payload
                state.currentCar = null
            })
})

const {reducer: carReducer, actions: {setCar}} = carSlice

const carActions = {
    getAll,
    createCar,
    deleteCar,
    setCar,
    updateCar
}

export {
    carReducer,
    carActions
}