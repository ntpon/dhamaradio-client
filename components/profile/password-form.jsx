import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { updatePassword } from "../../lib/api"
import { useHttpClient } from "../../lib/hooks/use-http"

const PasswordForm = () => {
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { isLoading, sendRequest, error } = useHttpClient()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const toast = useToast()
  const reset = () => {
    setPassword("")
    setOldPassword("")
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
      const { message, data } = await sendRequest(
        updatePassword(password, confirmPassword)
      )
      toast({ title: message, status: "success", isClosable: true })
      reset()
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }
  return (
    <Flex
      width={{ base: "100%", md: "60%" }}
      flexDirection='column'
      alignItems='center'
    >
      <Box padding='25px' width='100%'>
        <Heading as='h2' fontSize='24px' fontWeight='500' textAlign='center'>
          รหัสผ่าน
        </Heading>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl marginTop='20px'>
              <FormLabel htmlFor='password'>รหัสผ่านเก่า</FormLabel>
              {isLoading ? (
                <Skeleton height='30px' />
              ) : (
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={showOldPassword ? "text" : "password"}
                    placeholder='รหัสผ่านเก่า'
                    required
                    value={oldPassword}
                    onChange={(e) => {
                      setOldPassword(e.target.value)
                    }}
                  />

                  <InputRightElement width='4.5rem'>
                    <Button
                      h='1.75rem'
                      size='sm'
                      onClick={() => {
                        setShowOldPassword((prev) => !prev)
                      }}
                    >
                      {showOldPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              )}
            </FormControl>
            <FormControl marginTop='20px'>
              <FormLabel htmlFor='password'>รหัสผ่านใหม่</FormLabel>
              {isLoading ? (
                <Skeleton height='30px' />
              ) : (
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={showPassword ? "text" : "password"}
                    placeholder='รหัสผ่านใหม่'
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
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
              )}
            </FormControl>
            <FormControl marginTop='20px'>
              <FormLabel htmlFor='password'>ยืนยันรหัสผ่าน</FormLabel>
              {isLoading ? (
                <Skeleton height='30px' />
              ) : (
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder='ยืนยันรหัสผ่าน'
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
                    }}
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
              )}
            </FormControl>
            <Flex justifyContent='center' marginTop='15px'>
              <Button colorScheme='teal' variant='solid' type='submit'>
                แก้ไขรหัสผ่าน
              </Button>
            </Flex>
          </Box>
        </form>
      </Box>
    </Flex>
  )
}

export default PasswordForm
