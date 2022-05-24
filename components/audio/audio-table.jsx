import { Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react"

import {
  Box,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { MdPlaylistAdd, MdFavoriteBorder } from "react-icons/md"
import { formatDate } from "../../lib/formatters"
import { useDispatch, useSelector } from "react-redux"
import {
  changeIsModalAddFavorite,
  changeIsModalLogin,
  setSelectAudioId,
} from "../../lib/store/application/application.slice"
import { useHttpClient } from "../../lib/hooks/use-http"
import { addAudioToDefaultFavoriteList } from "../../lib/api"
const AudioTable = ({ isAction, audios = [], isLoading }) => {
  const dispatch = useDispatch()
  const { userId } = useSelector((state) => state.auth)
  const toast = useToast()
  const {
    isLoading: { isLoadingNew },
    sendRequest,
    error,
  } = useHttpClient()

  const handleOpenAddFavorite = (id) => {
    if (userId) {
      dispatch(setSelectAudioId(id))
      dispatch(changeIsModalAddFavorite(true))
    } else {
      dispatch(changeIsModalLogin(true))
    }
  }

  const handleOpenAddDefaultFavorite = async (id) => {
    if (!userId) {
      dispatch(changeIsModalLogin(true))
      return
    }
    try {
      const { message, data } = await sendRequest(
        addAudioToDefaultFavoriteList(id)
      )
      toast({ title: message, status: "success", isClosable: true })
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }
  return (
    <TableContainer>
      <Table variant='unstyled'>
        <Thead>
          <Tr>
            <Th textAlign='center'>#</Th>
            <Th>เสียง</Th>
            <Th>พระอาจารย์</Th>
            {/* <Th>วันที่เพิ่มข้อมูล</Th> */}
            <Th>
              <AiOutlineClockCircle />
            </Th>
            {isAction && <Th>บันทึก</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {isLoading && (
            <Tr>
              <Td>
                <Skeleton height='20px' />
              </Td>
              <Td>
                <Skeleton height='20px' />
              </Td>
              <Td>
                <Skeleton height='20px' />
              </Td>
              <Td>
                <Skeleton height='20px' />
              </Td>
              <Td>
                <Skeleton height='20px' />
              </Td>
            </Tr>
          )}
          {!isLoading &&
            audios.map((audio, i) => (
              <Tr
                key={audio._id}
                sx={{
                  transform: "all .3s",
                  "&:hover": {
                    bg: "blackAlpha.50",
                    // color: "gray.200",
                  },
                  cursor: "pointer",
                }}
              >
                <Td padding='10px' textAlign='center'>
                  {i + 1}
                </Td>
                <Td padding='10px'>{audio.name}</Td>
                <Td padding='10px'>{audio.priest_name}</Td>
                <Td padding='10px'>{formatDate(new Date(audio.updatedAt))}</Td>
                {/* <Td  padding='10px'>
                {"เวลา"}
              </Td> */}
                {isAction && (
                  <Td padding='10px'>
                    <IconButton
                      bg='none'
                      fontSize='2xl'
                      onClick={() => handleOpenAddFavorite(audio._id)}
                    >
                      <MdPlaylistAdd />
                    </IconButton>
                    <IconButton
                      bg='none'
                      fontSize='2xl'
                      onClick={() => handleOpenAddDefaultFavorite(audio._id)}
                    >
                      <MdFavoriteBorder />
                    </IconButton>
                  </Td>
                )}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default AudioTable
