import { Box } from "@chakra-ui/react"
import AlbumLayout from "../../components/album/album-layout"
import AlbumItem from "../../components/album/album-item"
import PageContainer from "../../components/layout/page-container"
import fetcher from "../../lib/fetcher"
const Album = ({ response }) => {
  const { albums } = response.data
  return (
    <PageContainer title='รายการทั้งหมด'>
      <AlbumLayout title='รายการทั้งหมด' justifyContent='center'>
        {albums.map((album) => (
          <AlbumItem
            key={album._id}
            name={album.name}
            image={album.image.url}
            description={album.description}
            slug={`/album/${album.slug}`}
          />
        ))}
      </AlbumLayout>
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher("client/album")
  return {
    props: {
      response,
    },
  }
}

export default Album
