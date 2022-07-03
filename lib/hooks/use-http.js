import { useState, useCallback, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../store/auth/auth.slice"
export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const sendRequest = useCallback(
    async (apiData, headers = { "Content-Type": "application/json" }) => {
      const { url, method, body, auth, file } = apiData
      setIsLoading(true)
      if (file) {
        headers = {}
      }
      if (auth) {
        headers["Authorization"] = "Bearer " + token
      }
      try {
        const response = await fetch(url, {
          method,
          body: file ? body : body ? JSON.stringify(body) : null,
          headers,
        })

        const responseData = await response.json()

        if (response.status === 401) {
          dispatch(logout())
        }

        if (!response.ok) {
          throw new Error(responseData.error)
        }

        setIsLoading(false)
        return responseData
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
        throw error
      }
    },
    [token]
  )

  const clearError = () => {
    setError(null)
  }

  return { isLoading, error, sendRequest, clearError }
}
