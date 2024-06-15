import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("dataSlice/fetchData", async () => {
    const response = await fetch("/testPizzaSoft/employees.json");
    const data = await response.json();
    return data;
});

const initialState = {
    profilesListOriginal: [],
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
        sortByName: (state) => {
            state.profilesList = state.profilesListOriginal.toSorted((a, b) =>
                a.name.localeCompare(b.name)
            );
        },
        sortByBirthday: (state) => {
            console.log(`first`);
            const parseDate = (dateStr) => {
                const [day, month, year] = dateStr.split(".");
                return new Date(year, month - 1, day);
            };
            state.profilesList = state.profilesList.toSorted((a, b) => {
                const dateA = parseDate(a.birthday);
                const dateB = parseDate(b.birthday);
                console.log(dateA, dateB);
                return dateA - dateB;
            });
        },
        setItems(state, action) {
            state.items = action.payload;
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
                state.profilesListOriginal = action.payload.toSorted((a, b) =>
                    a.name.localeCompare(b.name)
                );
                state.profilesList = state.profilesListOriginal.toSorted(
                    (a, b) => a.name.localeCompare(b.name)
                );
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {
    sortByName,
    sortByBirthday,
    setItems,
    setRoleFilter,
    setIsArchiveFilter,
} = profilesList.actions;
export default profilesList.reducer;
