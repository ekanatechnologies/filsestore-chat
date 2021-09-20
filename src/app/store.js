import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import appReducer from '../features/app/appSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    app:appReducer
    
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
