import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getProfile } from "../lib/api"
import { loginSuccess } from "../lib/store/auth/auth.slice"
import { getUserFromStorage } from "../lib/user"
const App = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    const user = getUserFromStorage()
    if (user) {
      dispatch(loginSuccess(user))
    }
    setLoading(false)
  }, [dispatch])

  if (loading) {
    return <></>
  } else {
    return children
  }
}

export default App
