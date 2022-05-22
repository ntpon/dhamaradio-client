import {
  Center,
  LinkBox,
  LinkOverlay,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"
const SidebarItem = ({ name, route, icon }) => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <ListItem
      key={name}
      marginBottom='5px'
      borderLeft={
        currentRoute === route ? "5px solid teal" : "5px solid transparent"
      }
      bg={currentRoute === route ? "gray.100" : ""}
      paddingY='7px'
      color={currentRoute === route ? "black" : "gray.600"}
    >
      <NextLink href={route} passHref>
        <LinkBox as='nav' cursor='pointer'>
          <LinkOverlay display='flex' alignItems='center'>
            <ListIcon
              as={icon}
              marginX='10px'
              fontSize='2xl'
              bg='teal'
              borderRadius='2xl'
              color='white'
              padding='5px'
            />
            <Text as='span' fontSize='16px'>
              {name}
            </Text>
          </LinkOverlay>
        </LinkBox>
      </NextLink>
    </ListItem>
  )
}

export default SidebarItem
