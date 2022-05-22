import { Box, Text } from "@chakra-ui/react"

const SidebarHeader = ({ name }) => {
  return (
    <Box marginLeft='5px' marginBottom='5px'>
      <Text as='span' color='teal.500' fontWeight='600'>
        {name}
      </Text>
    </Box>
  )
}

export default SidebarHeader
