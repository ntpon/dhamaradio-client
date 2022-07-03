import { Box } from "@chakra-ui/react"
import AlbumItem from "../../components/album/album-item"
import AlbumLayout from "../../components/album/album-layout"
import ArtistLayout from "../../components/artist/artist-layout"
import PageContainer from "../../components/layout/page-container"
import fetcher from "../../lib/fetcher"
const ArtistShow = ({ response }) => {
  const { priest } = response
  return (
    <PageContainer title='รายละเอียดพระอาจารย์'>
      <ArtistLayout
        title={priest.fullName}
        description={priest.description}
        image={priest.avatar}
      >
        <AlbumLayout
          justifyContent='center'
          title={`รายการเสียงของ ${priest.fullName}`}
        >
          {priest.albums?.map((album) => (
            <AlbumItem
              key={album.slug}
              name={album.name}
              image={album.coverImage}
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

  const paths = response.priests.map((priest) => {
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
