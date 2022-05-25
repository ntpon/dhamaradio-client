import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AudioLayout from "../../../components/audio/audio-layout"
import AudioTable from "../../../components/audio/audio-table"
import PageContainer from "../../../components/layout/page-container"
import { getFavoriteAudio } from "../../../lib/api"
import { useHttpClient } from "../../../lib/hooks/use-http"
const FavoriteMe = () => {
  const { isLoading, sendRequest, error } = useHttpClient()
  const [album, setAlbum] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getFavoriteAudio())
        setAlbum(response.data.defaultFavorit)
      } catch (error) {}
    }
    fetchData()
  }, [sendRequest])

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
FavoriteMe.authPage = true

export default FavoriteMe
