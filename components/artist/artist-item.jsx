import {
  Avatar,
  Box,
  Center,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
const ArtistItem = () => {
  return (
    <Box margin='10px'>
      <NextLink href='/artist/1' passHref>
        <LinkBox cursor='pointer'>
          <LinkOverlay>
            <Avatar size='2xl' src='https://bit.ly/code-beast' />
            <Text marginTop='10px' textAlign='center'>
              พระอาจารย์
            </Text>
          </LinkOverlay>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export default ArtistItem
