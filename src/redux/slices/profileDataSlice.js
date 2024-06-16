import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDataProfile = createAsyncThunk(
    "profileDataSlice/fetchDataProfile",
    async (id) => {
        const response = await fetch("/testPizzaSoft/employees.json");
        const data = await response.json();
        const profile = data.find((profile) => profile.id === id);
        if (profile) {
            return profile;
        } else {
            throw new Error("Profile not found");
        }
    }
);

const initialState = {
    profile: {},
    status: "idle",
    error: null,
};

const profileData = createSlice({
    name: "profileData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataProfile.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchDataProfile.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.profile = action.payload;
            })
            .addCase(fetchDataProfile.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default profileData.reducer;
