import { createSlice } from "@reduxjs/toolkit";
import {monstruos} from "../utils/monstruos.js"

const initialState = {
    salud: 100,
    xp: 0
}

export const personajeSlice = createSlice({
    name: "personaje",
    initialState,
    reducers: {
        batalla: (state) => {
            state.salud = state.salud - 1
        }
    }
});

export const {batalla} = personajeSlice.actions

export default personajeSlice.reducer