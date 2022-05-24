import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react"

import { useEffect, useState } from "react"
import MainContainer from "../../components/layout/main-container"
import PageContainer from "../../components/layout/page-container"
import PasswordForm from "../../components/profile/password-form"
import ProfileForm from "../../components/profile/profile-form"
const Profile = () => {
  return (
    <PageContainer title='ข้อมูลส่วนตัว | ข้อมูลผู้ใช้งาน'>
      <MainContainer title='ข้อมูลส่วนตัว | ข้อมูลผู้ใช้งาน'>
        <Flex
          justifyContent='center'
          alignItems={{ base: "center", md: "start" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <ProfileForm />
        </Flex>
        <Flex width={{ base: "100%", md: "100%" }} justifyContent='flex-end'>
          <PasswordForm />
        </Flex>
      </MainContainer>
    </PageContainer>
  )
}
export default Profile
