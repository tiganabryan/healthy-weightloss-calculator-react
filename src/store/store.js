import { configureStore } from '@reduxjs/toolkit'
import userInputReducer from "./userInputSlice"

export const store = configureStore({
  reducer: {
    updateInput: userInputReducer
  },
})