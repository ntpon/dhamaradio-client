import { Box } from "@chakra-ui/react"
import AudioLayout from "../../components/audio/audio-layout"
import AudioTable from "../../components/audio/audio-table"
import PageContainer from "../../components/layout/page-container"
import fetcher from "../../lib/fetcher"

const AlbumShow = ({ response }) => {
  const { album } = response.data
  return (
    <PageContainer title={album.name}>
      <AudioLayout
        color='teal'
        title={album.name}
        description={album.description}
        image={album.image.url}
      >
        <AudioTable isAction audios={album.audios} />
      </AudioLayout>
    </PageContainer>
  )
}
export const getServerSideProps = async ({ query, req }) => {
  const response = await fetcher(`client/album/${query.slug}`)
  return { props: { response } }
}

// export const getStaticPaths = () => {
//   const path = fetcher('')
//   const paths = filePosts.map((post) => {
//     return {
//       params: {
//         slug: post.slug,
//       },
//     }
//   })
// }

// export const getStaticProps = () => {}

export default AlbumShow
