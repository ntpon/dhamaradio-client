import { Box } from "@chakra-ui/react"
import { useEffect, useLayoutEffect, useState } from "react"
import Navbar from "../navbar/navbar"
import Player from "../player/player"
import Sidebar from "../sidebar/sidebar"
import LoginModal from "../auth/login-modal"
import RegisterModal from "../auth/register-modal"
import { useSelector, useDispatch } from "react-redux"
import { getUserFromStorage } from "../../lib/user"
import { loginSuccess, setAuthReady } from "../../lib/store/auth/auth.slice"
import { useRouter } from "next/router"
import FavoriteModal from "../favorite/favorite-modal"

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  // const [loading, setLoading] = useState(true)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const user = getUserFromStorage()
  //   if (user) {
  //     dispatch(loginSuccess(user))
  //   }
  //   setLoading(false)
  // }, [dispatch])

  // if (loading) {
  //   return <></>
  // }

  return (
    <Box>
      <Navbar setShowSidebar={setShowSidebar} />
      <Box height='calc(100vh - 65px)'>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Box
          marginLeft={{ base: "0px", md: "250px" }}
          // paddingLeft='10px'
          // bg='gray.50'
          minHeight='100%'
          zIndex='1'
          top='65'
          position='relative'
          paddingBottom='100px'
        >
          {children}
        </Box>
      </Box>
      <Player />
      <LoginModal />
      <RegisterModal />
      <FavoriteModal />
    </Box>
  )
}

export default Layout
