import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AudioLayout from "../../../components/audio/audio-layout"
import AudioTable from "../../../components/audio/audio-table"
import Empty from "../../../components/empty/empty"
import PageContainer from "../../../components/layout/page-container"
import { getFavoriteAudioBySlug } from "../../../lib/api"
import { useHttpClient } from "../../../lib/hooks/use-http"

const FavoriteShow = () => {
  const { isLoading, sendRequest, error } = useHttpClient()
  const [album, setAlbum] = useState()
  const { query } = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getFavoriteAudioBySlug(query.slug))
        console.log(response)
        setAlbum(response.playlist)
      } catch (error) {}
    }

    if (query.slug) {
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
        {album?.audios.length > 0 ? (
          <AudioTable audios={album?.audios} isLoading={isLoading} />
        ) : (
          <Empty />
        )}
      </AudioLayout>
    </PageContainer>
  )
}
FavoriteShow.authPage = true

export default FavoriteShow
