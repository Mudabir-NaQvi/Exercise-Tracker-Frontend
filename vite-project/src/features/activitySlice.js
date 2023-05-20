import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activities : [],
}

const activitySlice = createSlice({
    name: "activities",
    initialState,

    reducers: {
        setAllActivities : (state, action) => {
            state.activities = action.payload;
        }
    }
})

export default activitySlice.reducer;
export const {setAllActivities} = activitySlice.actions;