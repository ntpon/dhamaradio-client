import { Avatar, Box, Center, Flex, Heading, Text } from "@chakra-ui/react"

const ArtistLayout = ({ title, image, description, children }) => {
  return (
    <Box>
      <Flex
        justify='center'
        alignItems='center'
        height='170px'
        boxShadow='base'
        bg='blackAlpha.50'
      >
        <Box marginRight='20px'>
          <Avatar size='2xl' src={image} />
        </Box>
        <Box lineHeight='8'>
          <Heading fontSize='24px'>{title}</Heading>
          <Text color='gray.700'>{description}</Text>
        </Box>
      </Flex>
      <Box marginTop='15px'>{children}</Box>
    </Box>
  )
}

export default ArtistLayout
