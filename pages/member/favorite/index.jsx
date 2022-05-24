import { useEffect, useState } from "react"
import AlbumItem from "../../../components/album/album-item"
import AlbumItemNew from "../../../components/album/album-item-new"
import AlbumLayout from "../../../components/album/album-layout"
import MainContainer from "../../../components/layout/main-container"
import PageContainer from "../../../components/layout/page-container"
import { getFavoriteAudio } from "../../../lib/api"
import { useHttpClient } from "../../../lib/hooks/use-http"

const Favorite = () => {
  const { isLoading, sendRequest, error } = useHttpClient()
  const [albums, setAlbums] = useState()
  console.log(isLoading)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getFavoriteAudio())
        setAlbums(response.data.creatorFavorit)
      } catch (error) {}
    }
    fetchData()
  }, [sendRequest])

  return (
    <PageContainer title='รายการเสียงที่บันทึกไว้'>
      <AlbumLayout title='รายการเสียงที่บันทึกไว้' isLoading={isLoading}>
        <AlbumItem
          name='รายการโปรด'
          description='บันทึกรายการโปรด'
          slug='/member/favorite/me'
        />

        {albums &&
          albums.map((album) => (
            <AlbumItem
              key={album._id}
              name={album.name}
              description={album.description}
              slug={`/member/favorite/${album._id}`}
            />
          ))}
        <AlbumItemNew />
      </AlbumLayout>
    </PageContainer>
  )
}

export default Favorite
