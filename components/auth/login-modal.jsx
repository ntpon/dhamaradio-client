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
} from "@chakra-ui/react"
import { useState } from "react"
const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent width='350px'>
        <ModalHeader color='gray.700'>เข้าสู่ระบบ</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>อีเมล</FormLabel>
            <Input placeholder='เพิ่มอีเมล' type='email' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>รหัสผ่าน</FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={showPassword ? "text" : "password"}
                placeholder='เพิ่มรหัสผ่าน'
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
          <Button width='100%' colorScheme='teal'>
            เข้าสู่ระบบ
          </Button>
          <Flex alignItem='center' marginTop='15px'>
            <Text marginTop='2px'>ไม่ได้เป็นสมาชิกเว็บไซต์?</Text>
            <Button variant='link' marginLeft='10px' color='teal'>
              สมัครสมาชิกที่นี้
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default LoginModal
