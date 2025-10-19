import { configureStore } from "@reduxjs/toolkit";

import statsReducer from "./stats";
import personajeReducer from "./personaje";

export const store = configureStore({
    reducer:{
        stats: statsReducer,
        personaje: personajeReducer
    }
})