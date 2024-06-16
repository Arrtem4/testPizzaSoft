import { configureStore } from "@reduxjs/toolkit";
import profilesDataSlice from "./slices/profilesDataSlice";
import profileDataSlice from "./slices/profileDataSlice";

export default configureStore({
    reducer: {
        profilesDataSlice: profilesDataSlice,
        profileDataSlice: profileDataSlice,
    },
});
