import { Box } from "@chakra-ui/react"
import AlbumItem from "../../components/album/album-item"
import AlbumLayout from "../../components/album/album-layout"
import ArtistLayout from "../../components/artist/artist-layout"
import PageContainer from "../../components/layout/page-container"
import fetcher from "../../lib/fetcher"
const ArtistShow = ({ response }) => {
  const { albums, priest } = response.data
  return (
    <PageContainer title='รายละเอียดพระอาจารย์'>
      <ArtistLayout
        title={priest.name}
        description={priest.description}
        image={priest.avatar.url}
      >
        <AlbumLayout
          justifyContent='center'
          title={`รายการเสียงของ ${priest.name}`}
        >
          {albums.map((album) => (
            <AlbumItem
              key={album.id}
              name={album.name}
              image={album.image.url}
              description={album.description}
              slug={`/album/${album.slug}`}
            />
          ))}
        </AlbumLayout>
      </ArtistLayout>
    </PageContainer>
  )
}

export const getStaticPaths = async () => {
  const response = await fetcher("client/priest")

  const paths = response.data.priests.map((priest) => {
    return {
      params: {
        slug: priest.slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const response = await fetcher(`client/priest/${slug}`)
  return {
    props: {
      response,
    },
  }
}

export default ArtistShow
