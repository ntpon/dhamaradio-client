import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
  IconButton,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { MdMenu } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import {
  changeIsModalLogin,
  changeIsModalRegister,
} from "../../lib/store/application/application.slice"
import { logout } from "../../lib/store/auth/auth.slice"
const Navbar = ({ setShowSidebar }) => {
  const dispatch = useDispatch()
  const { userId } = useSelector((state) => state.auth)
  return (
    <Flex
      align='center'
      justify='space-between'
      width='100%'
      boxShadow='base'
      height='65px'
      padding='15px'
      position='fixed'
      zIndex='3'
      bg='white'
    >
      <Flex align='center'>
        <Box display={{ md: "none" }}>
          <IconButton
            bg='transparent'
            fontSize='24px'
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <MdMenu />
          </IconButton>
        </Box>
        <Image
          src='/images/logo.png'
          height='50px'
          width='50px'
          alt='logo'
          display={{ base: "none", md: "block" }}
        />
        <Heading
          marginLeft='5px'
          fontSize='20px'
          color='teal.600'
          display={{ base: "none", md: "block" }}
        >
          DHAMA
          <Text as='span' color='gray'>
            RADIO
          </Text>
        </Heading>
      </Flex>
      <Flex width={{ base: "50%", md: "35%" }}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='ค้นหาเสียงธรรม พระอาจารย์' />
        </InputGroup>
      </Flex>
      <Flex>
        {userId ? (
          <Button
            colorScheme='teal'
            variant='solid'
            onClick={() => {
              dispatch(logout())
            }}
          >
            ออกจากระบบ
          </Button>
        ) : (
          <>
            <Button
              colorScheme='teal'
              variant='solid'
              onClick={() => {
                dispatch(changeIsModalLogin(true))
              }}
            >
              เข้าสู่ระบบ
            </Button>
            <Box variant='solid' display={{ base: "none", md: "block" }}>
              <Divider orientation='vertical' height='100%' marginX='5px' />
            </Box>
            <Button
              colorScheme='teal'
              variant='solid'
              display={{ base: "none", md: "block" }}
              onClick={() => dispatch(changeIsModalRegister(true))}
            >
              สมัครสมาชิก
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default Navbar
