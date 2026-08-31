import { createSlice, current } from "@reduxjs/toolkit";

const getInitialRecords = () => {

  try {
    const parsed = JSON.parse(localStorage.getItem("record"));
    // Эгер чындап массив болсо өзүн кайтарабыз, болбосо бош массив []
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};
 
const tmerSlice = createSlice({
    name: "counter",
    initialState: {
        sekond: 59,
        minut: 4,
        score: 0,
        recordScore: 0,
        highScore: getInitialRecords() // 🏆 Оюнчунун эң жогорку рекорду (мурунку упайы)
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
            if (state.score > 0) {
             if (!Array.isArray(state.highScore)) {
                state.highScore = []
             }
 
             state.highScore.push(state.score)

             localStorage.setItem("record", JSON.stringify(state.highScore) )
            }

            if (state.score > state.recordScore) {
                state.recordScore = state.score
            }
        },
        // 🧼 Учурдагы упайды гана нөлгө түшүрүү (Рекорд өчпөйт)
        clearCurrentScore: state => {
            state.score = 0;
        },
        // ⏱ Таймерди гана башынан баштоо
        resetTimer: state => {
            state.sekond = 59;
            state.minut = 4;
        }
    }
});

export const { number, resetTimer, addScore, minusScore, updateHighScore, clearCurrentScore } = tmerSlice.actions;
export default tmerSlice.reducer;