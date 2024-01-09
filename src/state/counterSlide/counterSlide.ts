import { combineReducers, createSlice } from '@reduxjs/toolkit'

const changeText = createSlice({
    name: 'changeText',
    initialState: {
        value: 'hello world',
    },
    reducers: {
        setText: (state) => {
            state.value = 'hello girl'
        }
    }
})

const counterSlide = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const {  increment, decrement} = counterSlide.actions
export default counterSlide.reducer
