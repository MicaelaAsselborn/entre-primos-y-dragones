import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    oro: 100,
    pociones: 0,
    armas: [],
    salud: 100
}

export const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        comprarPocion: (state) => {
            if (state.oro >= 50){
                state.pociones += 1
                state.oro = state.oro - 50
            } else {
                return
            }
            
        },
        usarPocion: (state) => {
        if (state.pociones >= 1 && state.salud < 100){
            state.pociones = state.pociones - 1;
            if (state.salud <= 80) {
                state.salud = state.salud + 20;
            } else {
                state.salud = 100 - state.salud;
            }
        }
        }
    }
});

export const {comprarPocion} = statsSlice.actions

export default statsSlice.reducer