import { Box } from "@chakra-ui/react"
import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box height='calc(100vh - 65px)'>
        <Sidebar />
        <Box
          marginLeft='250px'
          // paddingLeft='10px'
          // bg='gray.50'
          minHeight='100%'
          zIndex='1'
          top='65'
          position='relative'
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
