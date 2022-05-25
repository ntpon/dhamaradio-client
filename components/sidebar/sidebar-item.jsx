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
import { useSelector, useDispatch } from "react-redux"
import { changeIsModalLogin } from "../../lib/store/application/application.slice"
const SidebarItem = ({ name, route, icon, end = false, member = false }) => {
  const { userId } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()
  const currentRoute = router.pathname
  const checkIsCurrentRoute = () => {
    if (end) {
      return route === currentRoute
    } else {
      return route !== "/" && currentRoute.includes(route)
    }
  }

  const handleNavLink = () => {
    if (member && !userId) {
      dispatch(changeIsModalLogin(true))
    } else {
      router.push(route)
    }
  }
  return (
    <ListItem
      key={name}
      marginBottom='5px'
      borderLeft={
        checkIsCurrentRoute() ? "5px solid teal" : "5px solid transparent"
      }
      bg={checkIsCurrentRoute() ? "gray.100" : ""}
      paddingY='7px'
      color={checkIsCurrentRoute() ? "black" : "gray.600"}
    >
      {/* <NextLink href={route} passHref> */}
      <LinkBox as='nav' cursor='pointer' onClick={handleNavLink}>
        <LinkOverlay display='flex' alignItems='center' href={route}>
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
      {/* </NextLink> */}
    </ListItem>
  )
}

export default SidebarItem
