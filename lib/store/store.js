import { configureStore } from "@reduxjs/toolkit"
import { applicationSlice } from "./application/application.slice"
import { authSlice } from "./auth/auth.slice"
export const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
    auth: authSlice.reducer,
  },
})
