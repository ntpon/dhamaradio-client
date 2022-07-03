import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkTokenIsExpired, setAuthReady } from "../lib/store/auth/auth.slice"
import { getUserFromStorage } from "../lib/user"

const App = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = getUserFromStorage()
    if (token) {
      dispatch(checkTokenIsExpired())
    } else {
      dispatch(setAuthReady(true))
    }
  }, [])
  return children
}

export default App
