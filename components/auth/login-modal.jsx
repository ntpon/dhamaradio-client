import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Box,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../lib/api"
import { useHttpClient } from "../../lib/hooks/use-http"
import {
  changeIsModalLogin,
  changeIsModalRegister,
} from "../../lib/store/application/application.slice"
import { loginSuccess } from "../../lib/store/auth/auth.slice"
const LoginModal = () => {
  const dispatch = useDispatch()
  const { isModalLogin } = useSelector((state) => state.application)
  const { isLoading, sendRequest, error } = useHttpClient()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { message, user, token } = await sendRequest(login(email, password))
      dispatch(
        loginSuccess({
          role: user.role,
          token: token,
          userId: user.id,
        })
      )
      dispatch(changeIsModalLogin(false))
      toast({ title: message, status: "success", isClosable: true })
      reset()
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }

  const reset = () => {
    setEmail("")
    setPassword("")
  }
  return (
    <Modal
      isOpen={isModalLogin}
      onClose={() => {
        dispatch(changeIsModalLogin(false))
        reset()
      }}
      isCentered
    >
      <ModalOverlay />
      <form onSubmit={handleSubmit}>
        <ModalContent width='350px'>
          <ModalHeader color='gray.700'>เข้าสู่ระบบ</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>อีเมล</FormLabel>
              <Input
                placeholder='เพิ่มอีเมล'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>รหัสผ่าน</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={showPassword ? "text" : "password"}
                  placeholder='เพิ่มรหัสผ่าน'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    onClick={() => {
                      setShowPassword((prev) => !prev)
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent='center' flexDirection='column'>
            <Button
              width='100%'
              colorScheme='teal'
              type='submit'
              isLoading={isLoading}
            >
              เข้าสู่ระบบ
            </Button>
            <Flex marginTop='15px'>
              <Text marginTop='2px'>ไม่ได้เป็นสมาชิกเว็บไซต์?</Text>
              <Button
                variant='link'
                marginLeft='10px'
                color='teal'
                onClick={() => {
                  dispatch(changeIsModalRegister(true))
                }}
              >
                สมัครสมาชิกที่นี้
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}
export default LoginModal
