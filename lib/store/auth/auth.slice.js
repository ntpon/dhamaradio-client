import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: null,
  userId: null,
  role: null,
  profile: null,
  authReady: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthReady: (state, action) => {
      state.authReady = action.payload
    },
    loginSuccess: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: action.payload.token,
          role: action.payload.role,
          userId: action.payload.userId,
          profile: action.payload.user,
        })
      )
      state.token = action.payload.token
      state.role = action.payload.role
      state.userId = action.payload.userId
      state.profile = action.payload.user
    },
    logout: (state, action) => {
      localStorage.removeItem("user")
      state.token = null
      state.role = null
      state.userId = null
      state.profile = null
    },
  },
})

export const { loginSuccess, logout, setAuthReady } = authSlice.actions
