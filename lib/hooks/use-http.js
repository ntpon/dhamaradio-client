import { useState, useCallback, useRef, useEffect } from "react"
import { useSelector } from "react-redux"
export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const { token } = useSelector((state) => state.auth)

  const activeHttpRequest = useRef([])

  const sendRequest = useCallback(
    async (apiData, headers = { "Content-Type": "application/json" }) => {
      const { url, method, body, auth, file } = apiData

      setIsLoading(true)
      const httpAbortCtrl = new AbortController()
      activeHttpRequest.current.push(httpAbortCtrl)
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
          signal: httpAbortCtrl.signal,
        })

        const responseData = await response.json()
        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        )

        if (!response.ok) {
          throw new Error(responseData.message)
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

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort())
    }
  }, [])
  return { isLoading, error, sendRequest, clearError }
}
