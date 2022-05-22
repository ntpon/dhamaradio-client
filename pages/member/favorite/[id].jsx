import AudioLayout from "../../../components/audio/audio-layout"
import AudioTable from "../../../components/audio/audio-table"
import PageContainer from "../../../components/layout/page-container"

const FavoriteShow = () => {
  return (
    <PageContainer title='เสียงคู่มือมนุษย์'>
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

export default FavoriteShow
