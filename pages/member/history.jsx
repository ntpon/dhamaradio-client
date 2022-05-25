import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AudioLayout from "../../components/audio/audio-layout"
import AudioTable from "../../components/audio/audio-table"
import MainContainer from "../../components/layout/main-container"
import PageContainer from "../../components/layout/page-container"
import { getHistoryAudio } from "../../lib/api"
import fetcher from "../../lib/fetcher"
import useHttp, { useHttpClient } from "../../lib/hooks/use-http"
const History = ({ response }) => {
  const { isLoading, sendRequest, error } = useHttpClient()
  const [audios, setAudios] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getHistoryAudio())
        setAudios(
          response.data.history.map((audio) => {
            return {
              ...audio.audio,
              _id: audio._id,
              updatedAt: audio.updatedAt,
            }
          })
        )
      } catch (error) {}
    }
    fetchData()
  }, [sendRequest])
  return (
    <PageContainer title='ประวัติการฟัง'>
      <AudioLayout
        color='teal'
        title='ประวัติการฟัง'
        description='ประวัติการฟังเสียงทั้งหมด'
      >
        <AudioTable
          audios={audios}
          isLoading={isLoading}
          albumName='ประวัติการฟัง'
        />
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
