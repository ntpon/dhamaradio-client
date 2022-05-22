import { Box, List, Divider } from "@chakra-ui/react"
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
} from "react-icons/md"
import NextLink from "next/link"
import SidebarItem from "./sidebar-item"
import SidebarHeader from "./sidebar-header"
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
  },
  {
    name: "ประวัติการฟัง",
    icon: MdHistory,
    route: "/member/history",
  },
  {
    name: "ข้อมูลส่วนตัว",
    icon: MdManageAccounts,
    route: "/member/profile",
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
const Sidebar = () => {
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
        <SidebarHeader name='เมนูหลัก' />
        {navMenu.map((nav) => (
          <SidebarItem {...nav} key={nav.route} />
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
  )
}

export default Sidebar
