import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isModalLogin: false,
  isModalRegister: false,
  isModalAddFavorite: false,
  selectAudioId: null,
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
    changeIsModalAddFavorite: (state, action) => {
      state.isModalAddFavorite = action.payload
    },
    setSelectAudioId: (state, action) => {
      state.selectAudioId = action.payload
    },
  },
})

export const {
  changeIsModalLogin,
  changeIsModalRegister,
  setSelectAudioId,
  changeIsModalAddFavorite,
} = applicationSlice.actions
