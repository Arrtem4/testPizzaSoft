import { configureStore } from "@reduxjs/toolkit";
import profilesDataSlice from "./slices/profilesDataSlice";

export default configureStore({
    reducer: {
        profilesDataSlice: profilesDataSlice,
    },
});
