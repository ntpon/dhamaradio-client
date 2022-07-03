const url = `${process.env.NEXT_WEB_API}`

export const login = (email, password) => {
  return { url: `${url}/auth/login`, method: "POST", body: { email, password } }
}

export const register = (firstName, lastName, email, password) => {
  // console.log(`${process.env.NEXT_WEB_API}`)
  return {
    url: `${url}/auth/register`,
    method: "POST",
    body: { firstName, lastName, email, password },
  }
}
export const contact = (fullName, email, phone, title, description, userId) => {
  return {
    url: `${url}/client/contact`,
    method: "POST",
    body: { fullName, email, phone, title, description, userId },
    auth: true,
  }
}

export const addAudioToHistory = (albumId, audioId, typeAlbum = "album") => {
  return {
    url: `${url}/member/history/audio`,
    method: "POST",
    body: { album: albumId, audio: audioId, type: typeAlbum },
    auth: true,
  }
}

export const getAlbumsFormSearch = (data) => {
  return {
    url: `${url}/client/search?value=${data}`,
    method: "GET",
  }
}
export const getHistoryAudio = () => {
  return {
    url: `${url}/member/playlist/HISTORY`,
    method: "GET",
    auth: true,
  }
}

export const getFavoriteMeList = () => {
  return {
    url: `${url}/member/playlist`,
    method: "GET",
    auth: true,
  }
}

export const addAudioToFavoriteList = (slug, audioId) => {
  return {
    url: `${url}/member/playlist`,
    method: "PATCH",
    body: {
      slug,
      audioId,
    },
    auth: true,
  }
}

export const addAudioToDefaultFavoriteList = (audioId) => {
  return {
    url: `${url}/member/playlist/default`,
    method: "POST",
    body: {
      audio_id: audioId,
    },
    auth: true,
  }
}
export const getFavoriteAudio = () => {
  return {
    url: `${url}/member/playlist/HISTORY`,
    method: "GET",
    auth: true,
  }
}
export const getFavoriteAudioBySlug = (slug) => {
  return {
    url: `${url}/member/playlist/${slug}`,
    method: "GET",
    auth: true,
  }
}

export const createFavorite = (name, description, isPrivate) => {
  return {
    url: `${url}/member/playlist`,
    method: "POST",
    body: { name, description, isPrivate },
    auth: true,
  }
}

export const getProfile = () => {
  return {
    url: `${url}/auth/me`,
    method: "GET",
    auth: true,
  }
}

export const updateProfile = (firstName, lastName, avatar) => {
  const formData = new FormData()
  formData.append("firstName", firstName)
  formData.append("lastName", lastName)
  if (avatar) {
    formData.append("avatar", avatar)
  }

  return {
    url: `${url}/auth/me`,
    method: "PATCH",
    body: formData,
    auth: true,
    file: true,
  }
}

export const updatePassword = (oldPassword, newPassword) => {
  return {
    url: `${url}/auth/password`,
    method: "PATCH",
    body: {
      oldPassword: oldPassword,
      newPassword: newPassword,
    },
    auth: true,
  }
}
