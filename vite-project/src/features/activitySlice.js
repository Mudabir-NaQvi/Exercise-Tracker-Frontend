import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activities: [],
    activityLogs: [],
}

const activitySlice = createSlice({
    name: "activities",
    initialState,

    reducers: {
        setAllActivities: (state, action) => {
            state.activities = action.payload;
        },
        setActivityLogs: (state, action) => {
            state.activityLogs = action.payload;
        }
    }
})

export default activitySlice.reducer;
export const { setAllActivities, setActivityLogs } = activitySlice.actions;