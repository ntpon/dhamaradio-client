import {
  Box,
  List,
  Divider,
  Image,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react"
import {
  MdHome,
  MdAccountBox,
  MdQueueMusic,
  MdArticle,
  MdBookmark,
  MdHistory,
  MdManageAccounts,
  MdMenuBook,
  MdContactMail,
  MdClose,
} from "react-icons/md"
import NextLink from "next/link"
import SidebarItem from "./sidebar-item"
import SidebarHeader from "./sidebar-header"
import { useRouter } from "next/router"
import { useEffect } from "react"

const navMenu = [
  {
    name: "หน้าหลัก",
    icon: MdHome,
    route: "/",
  },
  {
    name: "พระอาจารย์",
    icon: MdAccountBox,
    route: "/artist",
  },
  {
    name: "รายการเสียงธรรม",
    icon: MdQueueMusic,
    route: "/album",
  },
  // {
  //   name: "คำสอนพระพุทธ",
  //   icon: MdArticle,
  //   route: "/article",
  // },
]

const navMemberMenu = [
  {
    name: "รายการที่บันทึกไว้",
    icon: MdBookmark,
    route: "/member/favorite",
    member: true,
  },
  {
    name: "ประวัติการฟัง",
    icon: MdHistory,
    route: "/member/history",
    member: true,
  },
  {
    name: "ข้อมูลส่วนตัว",
    icon: MdManageAccounts,
    route: "/member/profile",
    member: true,
  },
]

const navOtherMenu = [
  {
    name: "คำถามที่พบบ่อย",
    icon: MdMenuBook,
    route: "/reference",
  },
  {
    name: "ติดต่อเรา",
    icon: MdContactMail,
    route: "/contact",
  },
]
const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const router = useRouter()

  useEffect(() => {
    if (showSidebar) {
      setShowSidebar(false)
    }
  }, [router.asPath])
  return (
    <>
      <Box
        height='100%'
        position='fixed'
        top={{ base: "0", md: "65px" }}
        width='250px'
        bg='white'
        boxShadow='base'
        zIndex={{ base: "4", md: "2" }}
        transform={{
          base: showSidebar ? "translateX(0)" : "translateX(-250px)",
          md: "translateX(0)",
        }}
        transition='all 200ms ease-in-out;'
        borderRight={{ base: "2px solid teal", md: "none" }}
      >
        <Box
          display={{ base: "flex", md: "none" }}
          flexDirection='column'
          alignItems='center'
          marginTop='15px'
          position='relative'
        >
          <Box position='absolute' left='10px'>
            <IconButton
              bg='transparent'
              fontSize='28px'
              onClick={() => setShowSidebar(false)}
            >
              <MdClose />
            </IconButton>
          </Box>
          <Image src='/images/logo.png' height='80px' width='80px' alt='logo' />
          <Heading marginTop='15px' fontSize='20px' color='teal.600'>
            DHAMA
            <Text as='span' color='gray'>
              RADIO
            </Text>
          </Heading>
        </Box>
        <List marginTop='15px'>
          <SidebarHeader name='เมนูหลัก' />
          {navMenu.map((nav) => (
            <SidebarItem {...nav} key={nav.route} end={nav.route === "/"} />
          ))}
        </List>
        <Divider />
        <List marginTop='15px'>
          <SidebarHeader name='สมาชิก' />
          {navMemberMenu.map((nav) => (
            <SidebarItem {...nav} key={nav.route} />
          ))}
        </List>
        <Divider />
        <List marginTop='15px'>
          <SidebarHeader name='ข้อมูลอื่นๆ' />
          {navOtherMenu.map((nav) => (
            <SidebarItem {...nav} key={nav.route} />
          ))}
        </List>
      </Box>
    </>
  )
}

export default Sidebar
