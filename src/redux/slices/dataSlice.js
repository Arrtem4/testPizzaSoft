import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("dataSlice/fetchData", async () => {
    const response = await fetch("/testPizzaSoft/employees.json");
    const data = await response.json();
    return data;
});

const initialState = {
    profilesList: [],
    status: "idle",
    error: null,
    filters: {
        role: "all",
        isArchive: false,
    },
};

const profilesList = createSlice({
    name: "profilesList",
    initialState,
    reducers: {
        sortProfiles: (state, action) => {
            switch (action.payload) {
                case "name": {
                    state.profilesList = state.profilesList.toSorted((a, b) =>
                        a.name.localeCompare(b.name)
                    );
                    break;
                }
                case "date": {
                    const parseDate = (dateStr) => {
                        const [day, month, year] = dateStr.split(".");
                        return new Date(year, month - 1, day);
                    };
                    state.profilesList = state.profilesList.toSorted((a, b) => {
                        const dateA = parseDate(a.birthday);
                        const dateB = parseDate(b.birthday);
                        return dateA - dateB;
                    });
                }
            }
        },
        setRoleFilter(state, action) {
            state.filters.role = action.payload;
        },
        setIsArchiveFilter(state, action) {
            state.filters.isArchive = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.profilesList = action.payload.toSorted((a, b) =>
                    a.name.localeCompare(b.name)
                );
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { sortProfiles, setRoleFilter, setIsArchiveFilter } =
    profilesList.actions;
export default profilesList.reducer;
