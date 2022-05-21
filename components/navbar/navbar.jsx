import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      width='100%'
      boxShadow='base'
      height='65px'
      padding='15px'
      position='fixed'
      zIndex='3'
      bg='white'
    >
      <Flex align='center'>
        <Image src='/images/logo.png' height='50px' width='50px' alt='logo' />
        <Heading marginLeft='5px' fontSize='20px' color='teal.600'>
          DHAMA
          <Text as='span' color='gray'>
            RADIO
          </Text>
        </Heading>
      </Flex>
      <Flex width='35%'>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='ค้นหาเสียงธรรม พระอาจารย์' />
        </InputGroup>
      </Flex>
      <Flex>
        <Button colorScheme='teal' variant='solid'>
          เข้าสู่ระบบ
        </Button>
        <Box>
          <Divider orientation='vertical' height='100%' marginX='5px' />
        </Box>
        <Button colorScheme='teal' variant='solid'>
          สมัครสมาชิก
        </Button>
      </Flex>
    </Flex>
  )
}

export default Navbar
