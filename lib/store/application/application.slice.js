import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isModalLogin: false,
  isModalRegister: false,
  isModalAddFavorite: false,
  selectAudioId: null,
  activeAlbum: "",
  activeAudio: null,
  activeAudios: [],
}

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    changeActiveAlbum: (state, action) => {
      state.activeAlbum = action.payload
    },
    changeActiveAudio: (state, action) => {
      state.activeAudio = action.payload
    },
    changeActiveAudios: (state, action) => {
      state.activeAudios = action.payload
    },
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
    reset: (state, action) => {
      state.selectAudioId = null
      state.activeAlbum = "null"
      state.activeAudio = null
      state.activeAudios = []
    },
  },
})

export const {
  changeIsModalLogin,
  changeIsModalRegister,
  setSelectAudioId,
  changeIsModalAddFavorite,
  changeActiveAudio,
  changeActiveAudios,
  changeActiveAlbum,
  reset,
} = applicationSlice.actions
