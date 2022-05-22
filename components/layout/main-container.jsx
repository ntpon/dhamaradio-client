import { Box, Center, Divider, Heading } from "@chakra-ui/react"

const MainContainer = ({ title, children }) => {
  return (
    <Box>
      <Box paddingY='15px'>
        <Center>
          <Heading fontSize='24px' fontWeight='400'>
            {title}
          </Heading>
        </Center>
      </Box>
      <Divider />
      <Box marginTop='15px'>{children}</Box>
    </Box>
  )
}

export default MainContainer
