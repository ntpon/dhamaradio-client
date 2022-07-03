import { useEffect, useState } from "react"
import AlbumItem from "../../../components/album/album-item"
import AlbumItemNew from "../../../components/album/album-item-new"
import AlbumLayout from "../../../components/album/album-layout"
import MainContainer from "../../../components/layout/main-container"
import PageContainer from "../../../components/layout/page-container"
import { getFavoriteAudio, getFavoriteMeList } from "../../../lib/api"
import { useHttpClient } from "../../../lib/hooks/use-http"

const Favorite = () => {
  const { isLoading, sendRequest, error } = useHttpClient()
  const [albums, setAlbums] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getFavoriteMeList())
        setAlbums(response.playlists)
      } catch (error) {}
    }
    fetchData()
  }, [sendRequest])

  return (
    <PageContainer title='รายการเสียงที่บันทึกไว้'>
      <AlbumLayout title='รายการเสียงที่บันทึกไว้' isLoading={isLoading}>
        {/* <AlbumItem
          name='รายการโปรด'
          description='รวมเสียงที่ชื่นชอบ'
          slug='/member/favorite/me'
        /> */}
        {albums?.length > 0 &&
          albums?.map((album) => (
            <AlbumItem
              key={album.slug}
              name={album.name}
              description={album.description}
              slug={`/member/favorite/${album.slug}`}
            />
          ))}
        <AlbumItemNew />
      </AlbumLayout>
    </PageContainer>
  )
}
Favorite.authPage = true

export default Favorite
