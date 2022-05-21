import {
  Box,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  ListIcon,
} from "@chakra-ui/react"
import { MdHome, MdSearch, MdLibraryMusic } from "react-icons/md"
import NextLink from "next/link"
import { useRouter } from "next/router"
const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
]

const Sidebar = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <Box
      height='100%'
      position='fixed'
      top='65px'
      width='250px'
      bg='white'
      boxShadow='base'
      zIndex='2'
    >
      <List marginTop='15px'>
        {navMenu.map((nav) => (
          <ListItem key={nav.name} marginBottom='10px'>
            <NextLink href={nav.route} passHref>
              <LinkBox as='nav' cursor='pointer'>
                <LinkOverlay
                  color={currentRoute === nav.route ? "black" : "gray.600"}
                >
                  <ListIcon
                    as={nav.icon}
                    marginX='15px'
                    fontSize='3xl'
                    bg='teal'
                    borderRadius='2xl'
                    color='white'
                    padding='5px'
                  />
                  {nav.name}
                </LinkOverlay>
              </LinkBox>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Sidebar
