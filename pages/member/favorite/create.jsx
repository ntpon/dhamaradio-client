import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
  Textarea,
  useToast,
} from "@chakra-ui/react"
import MainContainer from "../../../components/layout/main-container"
import NextLink from "next/link"
import PageContainer from "../../../components/layout/page-container"
import { useState } from "react"
import { useHttpClient } from "../../../lib/hooks/use-http"
import { createFavorite } from "../../../lib/api"
import { useRouter } from "next/router"
const FavoriteCreate = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isPrivate, setIsPrivate] = useState(true)
  const toast = useToast()
  const router = useRouter()

  const { isLoading, sendRequest, error } = useHttpClient()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { message, data } = await sendRequest(
        createFavorite(name, description, isPrivate)
      )
      toast({ title: message, status: "success", isClosable: true })
      router.push("/member/favorite")
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }

  return (
    <PageContainer title='สร้างรายการใหม่'>
      <MainContainer title='สร้างรายการใหม่'>
        <Box display='flex' justifyContent='center'>
          <form onSubmit={handleSubmit}>
            <Box minWidth={{ base: "100%", md: "500px" }} padding='15px'>
              <FormControl>
                <FormLabel htmlFor='name'>ชื่อรายการ</FormLabel>
                <Input
                  id='name'
                  type='text'
                  placeholder='เพิ่มชื่อรายการ'
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
                {/* <FormHelperText>We'll never share your <emai></emai>l.</FormHelperText> */}
              </FormControl>
              <FormControl marginTop='20px'>
                <FormLabel htmlFor='description'>
                  รายละเอียด (ไม่เกิน 30 ตัวอักษร)
                </FormLabel>
                <Textarea
                  placeholder='เพิ่มรายละเอียด'
                  size='sm'
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />
              </FormControl>
              <FormControl display='flex' alignItems='center' marginTop='20px'>
                <FormLabel htmlFor='public' mb='0'>
                  อนุญาติให้เผยแพร่หรือไม่ ?
                </FormLabel>
                <Switch
                  id='public'
                  onChange={(e) => {
                    setIsPrivate(!e.target.checked)
                  }}
                />
              </FormControl>
              <ButtonGroup
                marginTop='20px'
                display='flex'
                justifyContent='center'
              >
                <Button colorScheme='teal' variant='solid' type='submit'>
                  บันทึกข้อมูล
                </Button>
                <NextLink href='/member/favorite'>
                  <Button colorScheme='red' variant='solid'>
                    ยกเลิก
                  </Button>
                </NextLink>
              </ButtonGroup>
            </Box>
          </form>
        </Box>
      </MainContainer>
    </PageContainer>
  )
}

export default FavoriteCreate
