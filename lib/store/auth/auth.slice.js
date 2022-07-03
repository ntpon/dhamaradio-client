import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProfile } from "../../api"

const initialState = {
  token: null,
  userId: null,
  role: null,
  authReady: false,
}

export const checkTokenIsExpired = createAsyncThunk(
  "auth/checkTokenIsExpired",
  async (_, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token
      const response = await fetch(getProfile().url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      const { user } = await response.json()
      return { user, token }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
  // {
  //   condition: (_, state) => {
  //     if (!localStorage.getItem("user")) {
  //       return false
  //     }
  //   },
  // }
)

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
        })
      )
      state.token = action.payload.token
      state.role = action.payload.role
      state.userId = action.payload.userId
    },
    logout: (state, action) => {
      localStorage.removeItem("user")
      state.token = null
      state.role = null
      state.userId = null
    },
  },
  extraReducers: {
    [checkTokenIsExpired.fulfilled]: (state, action) => {
      state.token = action.payload.token
      state.role = action.payload.user.role
      state.userId = action.payload.user.id
      state.authReady = true
    },
    [checkTokenIsExpired.rejected]: (state, action) => {
      localStorage.removeItem("user")
      state.authReady = true
      state.token = null
      state.role = null
      state.userId = null
    },
  },
})

export const { loginSuccess, logout, setAuthReady } = authSlice.actions
