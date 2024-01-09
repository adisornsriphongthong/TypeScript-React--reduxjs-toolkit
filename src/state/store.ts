import { configureStore } from "@reduxjs/toolkit";
import counterSlide from "./counterSlide/counterSlide";
import changeText from "./counterSlide/changeText";
const store = configureStore({
    reducer: {
        counter: counterSlide,
        changeText: changeText
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store