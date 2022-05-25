const url = `${process.env.NEXT_WEB_API}`

export const login = (email, password) => {
  return { url: `${url}/auth/login`, method: "POST", body: { email, password } }
}

export const register = (firstName, lastName, email, password) => {
  // console.log(`${process.env.NEXT_WEB_API}`)
  return {
    url: `${url}/auth`,
    method: "POST",
    body: { first_name: firstName, last_name: lastName, email, password },
  }
}
export const contact = (
  fullName,
  email,
  phone,
  title,
  description,
  creator
) => {
  return {
    url: `${url}/client/contact`,
    method: "POST",
    body: { fullname: fullName, email, phone, title, description, creator },
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

export const getHistoryAudio = () => {
  return {
    url: `${url}/member/history/audio`,
    method: "GET",
    auth: true,
  }
}

export const getFavoriteMeList = () => {
  return {
    url: `${url}/member/favorit/me`,
    method: "GET",
    auth: true,
  }
}

export const addAudioToFavoriteList = (favoriteId, audioId) => {
  return {
    url: `${url}/member/favorit/${favoriteId}`,
    method: "POST",
    body: {
      audio_id: audioId,
    },
    auth: true,
  }
}

export const addAudioToDefaultFavoriteList = (audioId) => {
  return {
    url: `${url}/member/favorit/default`,
    method: "POST",
    body: {
      audio_id: audioId,
    },
    auth: true,
  }
}
export const getFavoriteAudio = () => {
  return {
    url: `${url}/member/favorit`,
    method: "GET",
    auth: true,
  }
}
export const getFavoriteAudioById = (id) => {
  return {
    url: `${url}/member/favorit/${id}`,
    method: "GET",
    auth: true,
  }
}

export const createFavorite = (name, description, isPrivate) => {
  return {
    url: `${url}/member/favorit`,
    method: "POST",
    body: { name, description, isPrivate },
    auth: true,
  }
}

export const getProfile = () => {
  return {
    url: `${url}/member/me`,
    method: "GET",
    auth: true,
  }
}

export const updateProfile = (firstName, lastName, avatar) => {
  const formData = new FormData()
  formData.append("first_name", firstName)
  formData.append("last_name", lastName)
  if (avatar) {
    formData.append("avatar", avatar)
  }

  return {
    url: `${url}/member/me`,
    method: "PATCH",
    body: formData,
    auth: true,
    file: true,
  }
}

export const updatePassword = (oldPassword, password) => {
  return {
    url: `${url}/member/password`,
    method: "PATCH",
    body: {
      old_password: oldPassword,
      password,
    },
    auth: true,
  }
}
