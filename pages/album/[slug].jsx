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
        <AudioTable isAction audios={album.audios} albumName={album.name} />
      </AudioLayout>
    </PageContainer>
  )
}
// export const getServerSideProps = async ({ query, req }) => {
//   const response = await fetcher(`client/album/${query.slug}`)
//   return { props: { response } }
// }

export const getStaticPaths = async () => {
  const response = await fetcher("client/album")

  const paths = response.data.albums.map((album) => {
    console.log(album)
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

export const getStaticProps = async ({ params: { slug, album } }) => {
  const response = await fetcher(`client/album/${slug}`)
  return {
    props: {
      response,
    },
  }
}

export default AlbumShow
