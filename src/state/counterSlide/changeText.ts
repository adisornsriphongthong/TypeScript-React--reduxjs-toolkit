import { createSlice } from "@reduxjs/toolkit"

const changeText = createSlice({
    name: 'changeText',
    initialState: {
        value: 'hello world',
    },
    reducers: {
        setText: (state, actions) => {
            state.value = actions.payload
        }
    }
})

export const { setText } = changeText.actions
export default changeText.reducer