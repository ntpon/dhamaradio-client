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
const AudioTable = ({ isAction }) => {
  return (
    <TableContainer>
      <Table variant='unstyled'>
        <Thead>
          <Tr>
            <Th textAlign='center'>#</Th>
            <Th textAlign='center'>เสียง</Th>
            <Th textAlign='center'>พระอาจารย์</Th>
            <Th textAlign='center'>วันที่เพิ่มข้อมูล</Th>
            <Th textAlign='center'>
              <AiOutlineClockCircle />
            </Th>
            {isAction && <Th textAlign='center'>บันทึก</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {Array(15)
            .fill(1)
            .map((song, i) => (
              <Tr
                key={i}
                sx={{
                  transform: "all .3s",
                  "&:hover": {
                    bg: "blackAlpha.50",
                    // color: "gray.200",
                  },
                  cursor: "pointer",
                }}
              >
                <Td textAlign='center' padding='10px'>
                  {i + 1}
                </Td>
                <Td textAlign='center' padding='10px'>
                  {"เสียง sdsadasd asdasasda asdas"}
                </Td>
                <Td textAlign='center' padding='10px'>
                  {"พระอาจารย์"}
                </Td>
                <Td textAlign='center' padding='10px'>
                  {"เวลา"}
                </Td>
                <Td textAlign='center' padding='10px'>
                  {"เวลา"}
                </Td>
                {isAction && (
                  <Td textAlign='center' padding='10px'>
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
