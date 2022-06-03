import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Box, Flex, Spinner } from "@chakra-ui/react"
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
  } else {
    return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Flex>
    )
  }
}

export default ProtectLayout
