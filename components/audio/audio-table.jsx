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
} from "@chakra-ui/react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { MdPlaylistAdd, MdFavoriteBorder } from "react-icons/md"
const AudioTable = ({ isAction, audios = [], isLoading }) => {
  return (
    <TableContainer>
      <Table variant='unstyled'>
        <Thead>
          <Tr>
            <Th textAlign='center'>#</Th>
            <Th>เสียง</Th>
            <Th>พระอาจารย์</Th>
            <Th>วันที่เพิ่มข้อมูล</Th>
            {/* <Th >
              <AiOutlineClockCircle />
            </Th> */}
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
                <Td padding='10px'>{audio.updatedAt}</Td>
                {/* <Td  padding='10px'>
                {"เวลา"}
              </Td> */}
                {isAction && (
                  <Td padding='10px'>
                    <IconButton bg='none' fontSize='2xl'>
                      <MdPlaylistAdd />
                    </IconButton>
                    <IconButton bg='none' fontSize='2xl'>
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
