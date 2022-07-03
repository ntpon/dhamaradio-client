import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AudioLayout from "../../../components/audio/audio-layout"
import AudioTable from "../../../components/audio/audio-table"
import Empty from "../../../components/empty/empty"
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
        setAlbum(response.playlist)
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
        {album?.audios.length > 0 ? (
          <AudioTable audios={album?.audios} isLoading={isLoading} />
        ) : (
          <Empty />
        )}
      </AudioLayout>
    </PageContainer>
  )
}
FavoriteMe.authPage = true

export default FavoriteMe
