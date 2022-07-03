import { Box } from "@chakra-ui/react"
import AlbumLayout from "../../components/album/album-layout"
import AlbumItem from "../../components/album/album-item"
import PageContainer from "../../components/layout/page-container"
import Empty from "../../components/empty/empty"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useHttpClient } from "../../lib/hooks/use-http"
import { getAlbumsFormSearch } from "../../lib/api"
const AlbumSearch = () => {
  const { query } = useRouter()
  const [albums, setAlbums] = useState([])
  const { isLoading, sendRequest } = useHttpClient()
  useEffect(() => {
    if (query.q) {
      const fetchAlbums = async () => {
        const response = await sendRequest(getAlbumsFormSearch(query.q))
        setAlbums(response.albums)
      }
      fetchAlbums()
    }
  }, [query.q, sendRequest])
  return (
    <PageContainer title='ผลการค้นหา'>
      <AlbumLayout title={`ผลการค้นหา : ${query.q}`} justifyContent='center'>
        {albums.length > 0 ? (
          albums?.map((album) => (
            <AlbumItem
              key={album.slug}
              name={album.name}
              image={album.coverImage}
              description={album.description}
              slug={`/album/${album.slug}`}
            />
          ))
        ) : (
          <Empty title='ไม่พบผลการค้นหา' />
        )}
      </AlbumLayout>
    </PageContainer>
  )
}

export default AlbumSearch
