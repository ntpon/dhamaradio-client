import { ListIcon, ListItem, Text } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

const ReferenceItem = ({ title }) => {
  return (
    <ListItem marginBottom='5px' paddingY='7px'>
      <ListIcon
        as={MdCheckCircle}
        marginX='10px'
        fontSize='4xl'
        borderRadius='2xl'
        color='teal'
        padding='5px'
      >
        <MdCheckCircle />
      </ListIcon>
      <Text as='span' fontSize='16px'>
        {title}
      </Text>
    </ListItem>
  )
}
export default ReferenceItem
