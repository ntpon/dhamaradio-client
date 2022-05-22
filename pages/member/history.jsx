import { Box } from "@chakra-ui/react"
import AudioLayout from "../../components/audio/audio-layout"
import AudioTable from "../../components/audio/audio-table"
import MainContainer from "../../components/layout/main-container"
import PageContainer from "../../components/layout/page-container"

const History = () => {
  return (
    <PageContainer title='ประวัติการฟัง'>
      <AudioLayout
        color='teal'
        title='ประวัติการฟัง'
        description='ประวัติการฟังเสียงทั้งหมด'
      >
        <AudioTable />
      </AudioLayout>
    </PageContainer>
  )
}

export default History
