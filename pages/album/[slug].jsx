import { Box } from "@chakra-ui/react"
import AudioLayout from "../../components/audio/audio-layout"
import AudioTable from "../../components/audio/audio-table"
import PageContainer from "../../components/layout/page-container"
import fetcher from "../../lib/fetcher"

const AlbumShow = ({ response }) => {
  const { album } = response
  return (
    <PageContainer title={album.name}>
      <AudioLayout
        color='teal'
        title={album.name}
        description={album.description}
        image={album.coverImage}
      >
        <AudioTable
          isAction
          audios={album.audios.map((audio) => {
            return {
              ...audio,
              priestName: album.priest.fullName,
            }
          })}
          albumName={album.name}
        />
      </AudioLayout>
    </PageContainer>
  )
}

export const getStaticPaths = async () => {
  const response = await fetcher("client/album")

  const paths = response.albums.map((album) => {
    return {
      params: {
        slug: album.slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const response = await fetcher(`client/album/${slug}`)
  return {
    props: {
      response,
    },
  }
}

export default AlbumShow
