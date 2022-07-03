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
import { register } from "../../lib/api"
import { useHttpClient } from "../../lib/hooks/use-http"
import {
  changeIsModalLogin,
  changeIsModalRegister,
} from "../../lib/store/application/application.slice"
import { loginSuccess } from "../../lib/store/auth/auth.slice"
const RegisterModal = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { isModalRegister } = useSelector((state) => state.application)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const toast = useToast()
  const dispatch = useDispatch()
  const { isLoading, sendRequest, error } = useHttpClient()

  const reset = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast({
        title: "รหัสผ่านไม่ตรงกัน",
        status: "error",
        isClosable: true,
      })
      return
    }

    try {
      const { message, token, user } = await sendRequest(
        register(firstName, lastName, email, password)
      )
      dispatch(
        loginSuccess({
          role: user.role,
          userId: user.id,
          token: token,
        })
      )
      dispatch(changeIsModalRegister(false))
      toast({ title: message, status: "success", isClosable: true })
      reset()
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }

  return (
    <Modal
      isOpen={isModalRegister}
      onClose={() => {
        dispatch(changeIsModalRegister(false))
        reset()
      }}
      isCentered
    >
      <ModalOverlay />
      <form onSubmit={handleSubmit}>
        <ModalContent width='350px'>
          <ModalHeader color='gray.700'>สมัครสมาชิก</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>ชื่อ</FormLabel>
              <Input
                required
                placeholder='เพิ่มชื่อ'
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>นามสกุล</FormLabel>
              <Input
                required
                placeholder='เพิ่มนามสกุล'
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>อีเมล</FormLabel>
              <Input
                required
                placeholder='เพิ่มอีเมล'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>รหัสผ่าน</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder='เพิ่มรหัสผ่าน'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <FormControl mt={2}>
              <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder='ยืนยันรหัสผ่าน'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    onClick={() => {
                      setShowConfirmPassword((prev) => !prev)
                    }}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
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
              สมัครสมาชิก
            </Button>
            <Flex marginTop='15px'>
              <Text marginTop='2px'>เป็นสมาชิกอยู่แล้ว?</Text>
              <Button
                variant='link'
                marginLeft='10px'
                color='teal'
                onClick={() => {
                  dispatch(changeIsModalLogin(true))
                }}
              >
                เข้าสู่ระบบ
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}
export default RegisterModal
