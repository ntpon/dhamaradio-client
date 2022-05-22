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
} from "@chakra-ui/react"
import { useState } from "react"
import MainContainer from "../../components/layout/main-container"
import PageContainer from "../../components/layout/page-container"
const Profile = () => {
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <PageContainer title='ข้อมูลส่วนตัว | ข้อมูลผู้ใช้งาน'>
      <MainContainer title='ข้อมูลส่วนตัว | ข้อมูลผู้ใช้งาน'>
        <Flex justifyContent='center'>
          <Flex width='40%' justifyContent='center'>
            <Box padding='25px'>
              <Box>
                <Avatar size='2xl' />
              </Box>
              <Box marginTop='15px'>
                <Button colorScheme='teal' variant='solid'>
                  เปลี่ยนรูปภาพ
                </Button>
              </Box>
            </Box>
          </Flex>
          <Flex width='60%' flexDirection='column' alignItems='center'>
            <Box padding='25px' width='100%'>
              <Heading
                as='h2'
                fontSize='24px'
                fontWeight='500'
                textAlign='center'
              >
                ข้อมูลส่วนตัว
              </Heading>
              <Box>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='description'>ชื่อ</FormLabel>
                  <Input id='name' type='text' placeholder='เพิ่มชื่อ' />
                </FormControl>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='description'>นามสกุล</FormLabel>
                  <Input id='name' type='text' placeholder='เพิ่มนามสกุล' />
                </FormControl>
                <Flex justifyContent='center' marginTop='15px'>
                  <Button colorScheme='teal' variant='solid'>
                    บันทึกข้อมูล
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box padding='25px' width='100%'>
              <Heading
                as='h2'
                fontSize='24px'
                fontWeight='500'
                textAlign='center'
              >
                รหัสผ่าน
              </Heading>
              <Box>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='password'>รหัสผ่านเก่า</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={showOldPassword ? "text" : "password"}
                      placeholder='รหัสผ่านเก่า'
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
                </FormControl>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='password'>รหัสผ่านใหม่</FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={showPassword ? "text" : "password"}
                      placeholder='รหัสผ่านใหม่'
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
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='password'>ยืนยันรหัสผ่าน</FormLabel>
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
                <Flex justifyContent='center' marginTop='15px'>
                  <Button colorScheme='teal' variant='solid'>
                    แก้ไขรหัสผ่าน
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </MainContainer>
    </PageContainer>
  )
}
export default Profile
