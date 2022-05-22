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
} from "@chakra-ui/react"
import MainContainer from "../../../components/layout/main-container"
import NextLink from "next/link"
const FavoriteCreate = () => {
  return (
    <MainContainer title='สร้างรายการใหม่'>
      <Box display='flex' justifyContent='center'>
        <Box minWidth='500px'>
          <FormControl>
            <FormLabel htmlFor='name'>ชื่อรายการ</FormLabel>
            <Input id='name' type='text' placeholder='เพิ่มชื่อรายการ' />
            {/* <FormHelperText>We'll never share your <emai></emai>l.</FormHelperText> */}
          </FormControl>
          <FormControl marginTop='20px'>
            <FormLabel htmlFor='description'>
              รายละเอียด (ไม่เกิน 30 ตัวอักษร)
            </FormLabel>
            <Textarea placeholder='เพิ่มรายละเอียด' size='sm' />
          </FormControl>
          <FormControl display='flex' alignItems='center' marginTop='20px'>
            <FormLabel htmlFor='public' mb='0'>
              อนุญาติให้เผยแพร่หรือไม่ ?
            </FormLabel>
            <Switch id='public' />
          </FormControl>
          <ButtonGroup marginTop='20px' display='flex' justifyContent='center'>
            <Button colorScheme='teal' variant='solid'>
              บันทึกข้อมูล
            </Button>
            <NextLink href='/member/favorite'>
              <Button colorScheme='red' variant='solid'>
                ยกเลิก
              </Button>
            </NextLink>
          </ButtonGroup>
        </Box>
      </Box>
    </MainContainer>
  )
}

export default FavoriteCreate
