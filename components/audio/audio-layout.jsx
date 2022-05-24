import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  Text,
} from "@chakra-ui/react"

const AudioLayout = ({
  color,
  image = "/images/album-new.png",
  title,
  description,
  children,
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
          <Heading color='teal.600'>{title}</Heading>
          <Text>{description}</Text>
        </Box>
      </Flex>
      <Box marginTop='15px'>{children}</Box>
      <Divider />
    </Box>
  )
}

export default AudioLayout
