import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { pokemonReducer } from "./reducers/pokemon.reducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
