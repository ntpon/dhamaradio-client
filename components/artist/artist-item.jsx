import {
  Avatar,
  Box,
  Center,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
const ArtistItem = ({ slug, image, name }) => {
  return (
    <Box margin='5px' width='170px'>
      <NextLink href={`/artist/${slug}`} passHref>
        <LinkBox cursor='pointer'>
          <LinkOverlay
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Avatar size='2xl' src={image} />
            <Text marginTop='10px' textAlign='center'>
              {name}
            </Text>
          </LinkOverlay>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export default ArtistItem
