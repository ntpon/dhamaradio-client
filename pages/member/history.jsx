import { Box } from "@chakra-ui/react"
import AudioLayout from "../../components/audio/audio-layout"
import AudioTable from "../../components/audio/audio-table"
import MainContainer from "../../components/layout/main-container"

const History = () => {
  return (
    <Box height='100%'>
      <AudioLayout
        color='teal'
        title='ประวัติการฟัง'
        description='ประวัติการฟังเสียงทั้งหมด'
      >
        <AudioTable />
      </AudioLayout>
    </Box>
  )
}

export default History
