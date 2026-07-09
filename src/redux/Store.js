import { configureStore } from "@reduxjs/toolkit"
import timerReducer from "./timer/Timer"
import favoritesReducer from "./favoritesSlice"

const myStori = configureStore({
    reducer: {
     timer: timerReducer,
     favorites: favoritesReducer    
    }
})

export default myStori