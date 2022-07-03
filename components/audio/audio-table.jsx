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
  changeActiveAlbum,
  changeActiveAudio,
  changeActiveAudios,
  changeIsModalAddFavorite,
  changeIsModalLogin,
  setSelectAudioId,
} from "../../lib/store/application/application.slice"
import { useHttpClient } from "../../lib/hooks/use-http"
import {
  addAudioToDefaultFavoriteList,
  addAudioToFavoriteList,
} from "../../lib/api"
const AudioTable = ({ isAction, audios = [], isLoading, albumName }) => {
  const dispatch = useDispatch()
  const { userId } = useSelector((state) => state.auth)
  const { activeAudio } = useSelector((state) => state.application)
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
      const { message } = await sendRequest(
        addAudioToFavoriteList("DEFAULT", id)
      )
      toast({ title: message, status: "success", isClosable: true })
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }
  const handlePlay = (activeAudio) => {
    dispatch(changeActiveAudios(audios))
    dispatch(changeActiveAudio(activeAudio))
    dispatch(changeActiveAlbum(albumName))
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
                key={audio.id}
                bg={activeAudio?.id === audio.id && "blackAlpha.50"}
                sx={{
                  transform: "all .3s",
                  "&:hover": {
                    bg: "blackAlpha.50",
                    // color: "gray.200",
                  },
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  handlePlay(audio)
                }}
              >
                <Td padding='10px' textAlign='center'>
                  {i + 1}
                </Td>
                <Td padding='10px'>{audio.name}</Td>
                <Td padding='10px'>
                  {audio.priestName || audio.album.priest.fullName || ""}
                </Td>
                <Td padding='10px'>
                  {formatDate(new Date(audio.creationDate))}
                </Td>
                {/* <Td  padding='10px'>
                {"เวลา"}
              </Td> */}
                {isAction && (
                  <Td padding='10px'>
                    <IconButton
                      bg='none'
                      fontSize='2xl'
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpenAddFavorite(audio.id)
                      }}
                      zIndex={3}
                    >
                      <MdPlaylistAdd />
                    </IconButton>
                    <IconButton
                      bg='none'
                      fontSize='2xl'
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpenAddDefaultFavorite(audio.id)
                      }}
                      // zIndex='2'
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
