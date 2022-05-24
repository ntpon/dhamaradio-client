import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Textarea,
  useToast,
  Skeleton,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import MainLayout from "../components/layout/main-container"
import PageContainer from "../components/layout/page-container"
import { useSelector } from "react-redux"
import { useHttpClient } from "../lib/hooks/use-http"
import { contact, getProfile } from "../lib/api"
const Contact = () => {
  const { userId } = useSelector((state) => state.auth)
  const toast = useToast()
  const { isLoading, sendRequest, error } = useHttpClient()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getProfile())
        const { first_name, last_name, email } = response.data.user
        setFullName(`${first_name} ${last_name}`)
        setEmail(email)
      } catch (error) {}
    }
    if (userId) {
      fetchData()
    }
  }, [sendRequest, userId])

  const reset = () => {
    setTitle("")
    setDescription("")
    setPhone("")
    if (!userId) {
      setFullName("")
      setEmail("")
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const creator = userId ? userId : null
      const { message, data } = await sendRequest(
        contact(fullName, email, phone, title, description, creator)
      )
      toast({ title: message, status: "success", isClosable: true })
      reset()
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }
  return (
    <PageContainer title='ติดต่อเรา'>
      <MainLayout title='ติดต่อเรา'>
        <Flex padding='15px'>
          <Box flex='2' display={{ base: "none", md: "block" }}>
            <Image
              src='/images/contact.jpg'
              alt='phone contact'
              objectFit='cover'
              height='100%'
            />
          </Box>
          <Flex flex='3'>
            <Box paddingX='25px' width='100%'>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor='fullName'>ชื่อ-นามสกุล</FormLabel>
                  {isLoading ? (
                    <Skeleton height='30px' />
                  ) : (
                    <Input
                      id='fullName'
                      type='text'
                      placeholder='เพิ่มชื่อ-นามสกุล'
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      disabled={userId}
                    />
                  )}
                </FormControl>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='email'>อีเมล</FormLabel>
                  {isLoading ? (
                    <Skeleton height='30px' />
                  ) : (
                    <Input
                      id='email'
                      type='email'
                      placeholder='เพิ่มอีเมล'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={userId}
                    />
                  )}
                </FormControl>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='phone'>โทรศัพท์</FormLabel>
                  {isLoading ? (
                    <Skeleton height='30px' />
                  ) : (
                    <Input
                      id='phone'
                      type='text'
                      placeholder='เพิ่มเบอร์โทรศัพท์'
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  )}
                </FormControl>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='title'>หัวข้อ / ชื่อเรื่อง</FormLabel>
                  {isLoading ? (
                    <Skeleton height='30px' />
                  ) : (
                    <Input
                      id='title'
                      type='text'
                      placeholder='เพิ่มหัวข้อหรือชื่อเรื่อง ที่ต้องการติดต่อ'
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  )}
                </FormControl>
                <FormControl marginTop='20px'>
                  <FormLabel htmlFor='messagae'>ข้อความ</FormLabel>
                  {isLoading ? (
                    <Skeleton height='50px' />
                  ) : (
                    <Textarea
                      placeholder='เพิ่มข้อความ'
                      id='messagae'
                      size='sm'
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  )}
                </FormControl>
                <Flex marginTop='15px' justifyContent='center'>
                  <Button
                    colorScheme='teal'
                    variant='solid'
                    type='submit'
                    isLoading={isLoading}
                  >
                    บันทึกข้อมูล
                  </Button>
                </Flex>
              </form>
            </Box>
          </Flex>
        </Flex>
      </MainLayout>
    </PageContainer>
  )
}

export default Contact
