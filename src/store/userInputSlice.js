import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    age: 0,
    height: 0,
    gender: 0,
    weight: 0,
    unit: 'kg',
    activityLevel: 0,
    dietLength: 0,
    bmr: 0,
    tdee: 0,
    weightloss: 0
}

export const userInputSlice = createSlice({
    name: "userInput",
    initialState,
    reducers: {
        updateInput: (state) => {
            state.age = !state.age
        }
    }
})

export const { updateInput } = userInputSlice.actions

export default userInputSlice.reducer