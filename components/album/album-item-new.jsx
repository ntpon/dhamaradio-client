import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"

import NextLink from "next/link"
import { MdOutlineCreateNewFolder } from "react-icons/md"

const AlbumItemNew = () => {
  return (
    <Box marginTop='10px' width='160px' height='250px' marginX='15px'>
      <NextLink href='/member/favorite/create' passHref>
        <LinkBox
          cursor='pointer'
          sx={{
            "&:hover .play-icon": {
              opacity: "1",
            },
          }}
        >
          <LinkOverlay>
            <Box position='relative'>
              <Image
                src='/images/album-new.png'
                alt='album-logo'
                width='160px'
                height='160px'
                objectFit='cover'
              />
              <Box
                bg='rgba(0, 0, 0, 0.3)'
                position='absolute'
                height='50px'
                width='100%'
                bottom='0'
                display='flex'
                alignItems='center'
                className='play-icon'
                opacity='0'
                translateY='2px'
                transition='transform 0.5s ease-out, opacity 0.5s ease;'
              >
                <MdOutlineCreateNewFolder color='#fff' fontSize='34px' />
              </Box>
            </Box>
            <Box marginTop='10px'>
              <Heading as='h3' fontSize='16px'>
                เพิ่มรายการใหม่
              </Heading>
              <Text marginTop='5px' fontSize='14px'>
                สร้างรายการใหม่ฟังภายหลัง
              </Text>
            </Box>
          </LinkOverlay>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export default AlbumItemNew
