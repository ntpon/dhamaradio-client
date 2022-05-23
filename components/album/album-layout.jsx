import {
  Box,
  Image,
  Text,
  Heading,
  Center,
  Divider,
  LinkBox,
  LinkOverlay,
  Icon,
  Flex,
} from "@chakra-ui/react"
import SongItem from "./album-item"

const AlbumLayout = ({ title, children, ...othersPropsContainer }) => {
  return (
    <Box>
      <Center paddingY='20px'>
        <Heading
          as='h2'
          color='gray.600'
          fontWeight='400'
          fontSize='24px'
          textAlign='center'
        >
          {title}
        </Heading>
      </Center>
      <Divider />
      <Flex wrap='wrap' {...othersPropsContainer}>
        {children}
      </Flex>
    </Box>
  )
}

export default AlbumLayout
