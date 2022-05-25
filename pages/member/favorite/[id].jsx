import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AudioLayout from "../../../components/audio/audio-layout"
import AudioTable from "../../../components/audio/audio-table"
import PageContainer from "../../../components/layout/page-container"
import { getFavoriteAudioById } from "../../../lib/api"
import { useHttpClient } from "../../../lib/hooks/use-http"

const FavoriteShow = () => {
  const { isLoading, sendRequest, error } = useHttpClient()
  const [album, setAlbum] = useState()
  const { query } = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getFavoriteAudioById(query.id))
        setAlbum(response.data.favorit)
      } catch (error) {}
    }
    if (query.id) {
      fetchData()
    }
  }, [sendRequest, query])

  return (
    <PageContainer title='รายการโปรดที่บันทึกไว้'>
      <AudioLayout
        color='teal'
        title={album?.name}
        description={album?.description}
        isLoading={isLoading}
      >
        <AudioTable audios={album?.audios} isLoading={isLoading} />
      </AudioLayout>
    </PageContainer>
  )
}
FavoriteShow.authPage = true

export default FavoriteShow
