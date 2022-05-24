import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  Text,
} from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react"

const AudioLayout = ({
  color,
  image = "/images/album-new.png",
  title = "",
  description = "",
  children,
  isLoading,
}) => {
  return (
    <Box>
      <Flex alignItems='end' padding='20px' bg='blackAlpha.50' boxShadow='base'>
        <Box>
          <Image
            src={image}
            alt='album-logo'
            width='160px'
            height='160px'
            objectFit='cover'
          />
        </Box>
        <Box marginLeft='15px' lineHeight='8'>
          {isLoading ? (
            <Stack>
              <Skeleton height='50px' />
              <Skeleton height='20px' width='500px' />
            </Stack>
          ) : (
            <>
              <Heading color='teal.600'>{title}</Heading>
              <Text>{description}</Text>
            </>
          )}
        </Box>
      </Flex>

      <Box marginTop='15px'>{children}</Box>
      <Divider />
    </Box>
  )
}

export default AudioLayout
