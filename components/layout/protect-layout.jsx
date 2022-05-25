import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
const ProtectLayout = ({ children }) => {
  const router = useRouter()
  const { userId } = useSelector((state) => state.auth)
  useEffect(() => {
    if (!userId) {
      router.push("/")
    }
  }, [userId, router])
  if (userId) {
    return children
  }
}

export default ProtectLayout
