import { Box, Text } from "@chakra-ui/react"
import React from "react"

function Empty({ title = "ไม่มีรายการเสียง" }) {
  return (
    <Box paddingTop='15px'>
      <Text fontSize='24px' textAlign='center'>
        {title}
      </Text>
    </Box>
  )
}

export default Empty
