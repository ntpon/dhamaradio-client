import { Box } from "@chakra-ui/react"
import AudioLayout from "../../components/audio/audio-layout"
import AudioTable from "../../components/audio/audio-table"
import PageContainer from "../../components/layout/page-container"

const AlbumShow = () => {
  return (
    <PageContainer title='คู่มือมนุษย์'>
      <AudioLayout
        color='teal'
        title='คู่มือมนุษย์'
        description='เสียงอ่านคู่มือมนุษย์ (โจโฉ)'
      >
        <AudioTable isAction />
      </AudioLayout>
    </PageContainer>
  )
}

export default AlbumShow
