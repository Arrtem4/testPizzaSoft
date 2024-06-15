import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("dataSlice/fetchData", async () => {
    const response = await fetch("/testPizzaSoft/employees.json");
    const data = await response.json();
    return data;
});

const profilesList = createSlice({
    name: "profilesList",
    initialState: {
        profilesListOriginal: [],
        profilesList: [],
        status: "idle",
        error: null,
    },
    reducers: {
        sortByName: (state) => {
            state.profilesList = state.profilesListOriginal.toSorted((a, b) =>
                a.name.localeCompare(b.name)
            );
        },
        sortByBirthday: (state) => {
            state.profilesList = state.profilesListOriginal.toSorted((a, b) => {
                const dateA = new Date(a.birthday);
                const dateB = new Date(b.birthday);
                return dateA - dateB;
            });
        },
        filterByRole: (state, action) => {
            state.profilesList = state.profilesList.filter(
                (profile) => profile.role === action.payload
            );
        },
        filterByArchive: (state, action) => {
            if (action.payload === true) {
                state.profilesList = state.profilesList.filter(
                    (profile) => profile.isArchive === true || profile.isArchive === false
                );
            } else {
                state.profilesList = state.profilesList.filter(
                    (profile) => profile.isArchive === false
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.profilesListOriginal = action.payload.toSorted((a, b) =>
                    a.name.localeCompare(b.name)
                );
                state.profilesList = state.profilesListOriginal.filter(
                    (profile) => profile.isArchive === false
                );
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { sortByName, sortByBirthday, filterByRole, filterByArchive } =
    profilesList.actions;
export default profilesList.reducer;
