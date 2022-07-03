import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AudioLayout from "../../components/audio/audio-layout"
import AudioTable from "../../components/audio/audio-table"
import Empty from "../../components/empty/empty"
import MainContainer from "../../components/layout/main-container"
import PageContainer from "../../components/layout/page-container"
import { getHistoryAudio } from "../../lib/api"
import fetcher from "../../lib/fetcher"
import useHttp, { useHttpClient } from "../../lib/hooks/use-http"
const History = ({ response }) => {
  const { isLoading, sendRequest, error } = useHttpClient()
  const [playlist, setPlaylist] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { playlist } = await sendRequest(getHistoryAudio())
        setPlaylist(playlist)
      } catch (error) {}
    }
    fetchData()
  }, [sendRequest])
  return (
    <PageContainer title='ประวัติการฟัง'>
      <AudioLayout
        color='teal'
        title={playlist?.name}
        description={playlist?.description}
      >
        {playlist?.audios?.length > 0 ? (
          <AudioTable
            audios={playlist.audios}
            isLoading={isLoading}
            albumName='ประวัติการฟัง'
          />
        ) : (
          <Empty />
        )}
      </AudioLayout>
    </PageContainer>
  )
}
// export const getServerSideProps = async ({ query, req }) => {
//   const response = await fetcher(`member/history/audio`)
//   return { props: { response } }
// }
History.authPage = true

export default History
