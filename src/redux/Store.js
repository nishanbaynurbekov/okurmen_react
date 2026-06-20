import { configureStore } from "@reduxjs/toolkit"
import timerReducer from "./timer/Timer"

const myStori = configureStore({
    reducer: {
     timer: timerReducer
    }
})

export default myStori