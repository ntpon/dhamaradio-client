import { Box } from "@chakra-ui/react"
import AlbumItem from "../components/album/album-item"
import AlbumLayout from "../components/album/album-layout"
import PageContainer from "../components/layout/page-container"
import fetcher from "../lib/fetcher"
const Home = ({ response }) => {
  const { albumsRecommend, albumsPriest } = response
  return (
    <PageContainer title='หน้าแรก'>
      <AlbumLayout title='แนะนำรายการ' justifyContent='center'>
        {albumsRecommend?.map((album) => (
          <AlbumItem
            key={album.slug}
            name={album.name}
            image={album.coverImage}
            description={album.description}
            slug={`/album/${album.slug}`}
          />
        ))}
      </AlbumLayout>
      <AlbumLayout title='พุทธทาส' justifyContent='center'>
        {albumsPriest?.map((album) => (
          <AlbumItem
            key={album.slug}
            name={album.name}
            image={album.coverImage}
            description={album.description}
            slug={`/album/${album.slug}`}
          />
        ))}
      </AlbumLayout>
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher("client/home")
  return {
    props: {
      response,
    },
  }
}

export default Home
