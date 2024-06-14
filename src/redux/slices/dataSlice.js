import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("dataSlice/fetchData", async () => {
    const response = await fetch("/testPizzaSoft/employees.json");
    const data = await response.json();
    return data;
});

const profilesList = createSlice({
    name: "profilesList",
    initialState: {
        profilesList: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.profilesList = action.payload;
                console.log(state.profilesList);
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default profilesList.reducer;