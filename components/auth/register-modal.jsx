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
const RegisterModal = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent width='350px'>
        <ModalHeader color='gray.700'>สมัครสมาชิก</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>ชื่อ</FormLabel>
            <Input placeholder='เพิ่มชื่อ' type='firstName' />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>นามสกุล</FormLabel>
            <Input placeholder='เพิ่มนามสกุล' type='lastName' />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>อีเมล</FormLabel>
            <Input placeholder='เพิ่มอีเมล' type='email' />
          </FormControl>
          <FormControl mt={2}>
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
          <FormControl mt={2}>
            <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={showConfirmPassword ? "text" : "password"}
                placeholder='ยืนยันรหัสผ่าน'
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
          <Button width='100%' colorScheme='teal'>
            สมัครสมาชิก
          </Button>
          <Flex alignItem='center' marginTop='15px'>
            <Text marginTop='2px'>เป็นสมาชิกอยู่แล้ว?</Text>
            <Button variant='link' marginLeft='10px' color='teal'>
              เข้าสู่ระบบ
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default RegisterModal
