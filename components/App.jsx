import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginSuccess, setAuthReady } from "../lib/store/auth/auth.slice"
import { getUserFromStorage } from "../lib/user"

const App = ({ children }) => {
  const dispatch = useDispatch()
  const { authReady } = useSelector((state) => state.auth)
  useEffect(() => {
    const user = getUserFromStorage()
    if (user && authReady) {
      dispatch(loginSuccess(user))
    } else {
      dispatch(setAuthReady(true))
    }
    return () => {
      setAuthReady(false)
    }
  }, [dispatch, authReady])

  return children
}

export default App
