import { configureStore } from "@reduxjs/toolkit"
import { applicationSlice } from "./store/application/application.slice"
export const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
  },
})
