import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react"
import MainLayout from "../components/layout/main-container"
import PageContainer from "../components/layout/page-container"
const Contact = () => {
  return (
    <PageContainer title='ติดต่อเรา'>
      <MainLayout title='ติดต่อเรา'>
        <Flex padding='15px'>
          <Box flex='2'>
            <Image
              src='/images/contact.jpg'
              alt='phone contact'
              objectFit='cover'
              height='100%'
            />
          </Box>
          <Flex flex='3'>
            <Box paddingX='25px' width='100%'>
              <FormControl>
                <FormLabel htmlFor='fullName'>ชื่อ-นามสกุล</FormLabel>
                <Input
                  id='fullName'
                  type='text'
                  placeholder='เพิ่มชื่อ-นามสกุล'
                />
              </FormControl>
              <FormControl marginTop='20px'>
                <FormLabel htmlFor='email'>อีเมล</FormLabel>
                <Input id='email' type='email' placeholder='เพิ่มอีเมล' />
              </FormControl>
              <FormControl marginTop='20px'>
                <FormLabel htmlFor='phone'>โทรศัพท์</FormLabel>
                <Input
                  id='phone'
                  type='text'
                  placeholder='เพิ่มเบอร์โทรศัพท์'
                />
              </FormControl>
              <FormControl marginTop='20px'>
                <FormLabel htmlFor='title'>หัวข้อ / ชื่อเรื่อง</FormLabel>
                <Input
                  id='title'
                  type='text'
                  placeholder='เพิ่มหัวข้อหรือชื่อเรื่อง ที่ต้องการติดต่อ'
                />
              </FormControl>
              <FormControl marginTop='20px'>
                <FormLabel htmlFor='messagae'>ข้อความ</FormLabel>
                <Textarea placeholder='เพิ่มข้อความ' id='messagae' size='sm' />
              </FormControl>
              <Flex marginTop='15px' justifyContent='center'>
                <Button colorScheme='teal' variant='solid'>
                  บันทึกข้อมูล
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </MainLayout>
    </PageContainer>
  )
}

export default Contact
