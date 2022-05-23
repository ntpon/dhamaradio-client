import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isModalLogin: false,
  isModalRegister: false,
  activeSongs: [],
  activeSong: null,
}

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    changeIsModalLogin: (state, action) => {
      state.isModalRegister = false
      state.isModalLogin = action.payload
    },
    changeIsModalRegister: (state, action) => {
      state.isModalLogin = false
      state.isModalRegister = action.payload
    },
  },
})

export const { changeIsModalLogin, changeIsModalRegister } =
  applicationSlice.actions
