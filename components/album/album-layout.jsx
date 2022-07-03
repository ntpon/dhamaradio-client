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
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react"
import AlbumItem from "./album-item"
import AlbumItemNew from "./album-item-new"

const AlbumLayout = ({
  title,
  children,
  isLoading,
  ...othersPropsContainer
}) => {
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
      <Flex
        marginTop='15px'
        wrap='wrap'
        justifyContent={{ base: "center" }}
        {...othersPropsContainer}
      >
        {isLoading ? (
          <>
            <Skeleton marginLeft='10px'>
              <AlbumItemNew />
            </Skeleton>
            <Skeleton marginLeft='10px'>
              <AlbumItemNew />
            </Skeleton>
          </>
        ) : (
          children
        )}
      </Flex>
    </Box>
  )
}

export default AlbumLayout
