import { createSlice } from "@reduxjs/toolkit";
 
const tmerSlice = createSlice({
    name: "counter",
    initialState: {
        sekond: 59,
        minut: 2,
        score: 0,      // Учурдагы оюндагы упай
        highScore: 0   // 🏆 Оюнчунун эң жогорку рекорду (мурунку упайы)
    },
    reducers: {
        number: state => {
            if (state.minut === 0 && state.sekond === 0) {
                return;
            }
            if (state.sekond === 0) {
                state.minut = state.minut - 1;
                state.sekond = 59;
            } 
            state.sekond = state.sekond - 1;
        },
        addScore: (state, action) => {
            state.score += action.payload;
        },
        minusScore: (state, action) => {
            state.score = Math.max(0, state.score - action.payload);
        },
        // 🔄 Жаңы рекордду текшерип сактоо
        updateHighScore: state => {
            if (state.score > state.highScore) {
                state.highScore = state.score; // Эгер азыркы упай чоң болсо, рекорд жаңырат
            }
        },
        // 🧼 Учурдагы упайды гана нөлгө түшүрүү (Рекорд өчпөйт)
        clearCurrentScore: state => {
            state.score = 0;
        },
        // ⏱ Таймерди гана башынан баштоо
        resetTimer: state => {
            state.sekond = 59;
            state.minut = 2;
        }      
    }
});

export const { number, resetTimer, addScore, minusScore, updateHighScore, clearCurrentScore } = tmerSlice.actions;
export default tmerSlice.reducer;