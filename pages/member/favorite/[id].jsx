import AudioLayout from "../../../components/audio/audio-layout"
import AudioTable from "../../../components/audio/audio-table"

const FavoriteShow = () => {
  return (
    <AudioLayout
      color='teal'
      title='คู่มือมนุษย์'
      description='เสียงอ่านคู่มือมนุษย์ (โจโฉ)'
    >
      <AudioTable isAction />
    </AudioLayout>
  )
}

export default FavoriteShow
