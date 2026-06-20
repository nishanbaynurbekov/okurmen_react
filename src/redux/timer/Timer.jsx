import { createSlice } from "@reduxjs/toolkit";
 
    const tmerSlice = createSlice({

    name: "counter",
    initialState: {
        sekond: 60,
        minut: 5
    },
    reducers: {
        number: state => {

        if(state.minut === 0 && state.sekond === 0){
       return
        }

         if(state.sekond === 0){
            state.minut = state.minut -1
            state.sekond = 60
         } 
        
         state.sekond = state.sekond -1

        },
        
        
    }

})

export const {number} = tmerSlice.actions
export default tmerSlice.reducer