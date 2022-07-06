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
import { useEffect, useRef, useState } from "react"
import { getProfile, updateProfile } from "../../lib/api"
import { useHttpClient } from "../../lib/hooks/use-http"
const ProfileForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [previewUrl, setPreviewUrl] = useState("")
  const { isLoading, sendRequest, error } = useHttpClient()
  const toast = useToast()
  const [file, setFile] = useState()
  const fileRef = useRef()

  useEffect(() => {
    if (!file) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { message, user } = await sendRequest(
        updateProfile(firstName, lastName, file)
      )
      toast({ title: message, status: "success", isClosable: true })
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getProfile())
        const { firstName, lastName, avatar } = response.user
        setFirstName(firstName)
        setLastName(lastName)
        setPreviewUrl(avatar)
      } catch (error) {}
    }
    fetchData()
  }, [sendRequest])

  const pickedHandler = (event) => {
    let pickedFile
    if (event.target.files || event.target.files.length === 1) {
      pickedFile = event.target.files[0]
      setFile(pickedFile)
    } else {
      fileIsValid = false
    }
  }

  return (
    <>
      <Flex width={{ base: "100%", md: "40%" }} justifyContent='center'>
        <Box padding='25px'>
          <Box>
            {isLoading ? (
              <Skeleton>
                <Avatar size='2xl' />
              </Skeleton>
            ) : (
              <Avatar size='2xl' src={previewUrl} />
            )}
          </Box>
          <Box marginTop='15px'>
            <Button
              colorScheme='teal'
              variant='solid'
              onClick={() => fileRef.current.click()}
            >
              เปลี่ยนรูปภาพ
            </Button>
          </Box>
        </Box>
      </Flex>
      <Flex
        width={{ base: "100%", md: "60%" }}
        flexDirection='column'
        alignItems='center'
      >
        <Box padding='25px' width='100%'>
          <form onSubmit={handleSubmit}>
            <Heading
              as='h2'
              fontSize='24px'
              fontWeight='500'
              textAlign='center'
            >
              ข้อมูลส่วนตัว
            </Heading>
            <Box>
              <input
                type='file'
                style={{ display: "none" }}
                onChange={pickedHandler}
                ref={fileRef}
              />
              <FormControl marginTop='20px'>
                <FormLabel htmlFor='description'>ชื่อ</FormLabel>
                {isLoading ? (
                  <Skeleton height='30px' />
                ) : (
                  <Input
                    id='name'
                    type='text'
                    placeholder='เพิ่มชื่อ'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                )}
              </FormControl>
              <FormControl marginTop='20px'>
                <FormLabel htmlFor='description'>นามสกุล</FormLabel>
                {isLoading ? (
                  <Skeleton height='30px' />
                ) : (
                  <Input
                    id='name'
                    type='text'
                    placeholder='เพิ่มนามสกุล'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                )}
              </FormControl>
              <Flex justifyContent='center' marginTop='15px'>
                <Button colorScheme='teal' variant='solid' type='submit'>
                  บันทึกข้อมูล
                </Button>
              </Flex>
            </Box>
          </form>
        </Box>
      </Flex>
    </>
  )
}

export default ProfileForm
