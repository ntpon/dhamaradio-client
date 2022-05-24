import fetcher from "./fetcher"
import { getUserFromStorage } from "./user"
const url = "https://dhamaradio-backend.herokuapp.com/api"

export const login = (email, password) => {
  return { url: `${url}/auth/login`, method: "POST", body: { email, password } }
}

export const register = async (email, password, firstName, lastName) => {
  return fetcher(`/${mode}`, {
    body: { email, password, first_name: firstName, last_name: lastName },
  })
}

export const getHistoryAudio = () => {
  return {
    url: `${url}/member/history/audio`,
    method: "GET",
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
