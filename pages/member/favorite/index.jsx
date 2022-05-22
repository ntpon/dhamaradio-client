import AlbumItem from "../../../components/album/album-item"
import AlbumItemNew from "../../../components/album/album-item-new"
import AlbumLayout from "../../../components/album/album-layout"
import MainContainer from "../../../components/layout/main-container"

const Favorite = () => {
  return (
    <AlbumLayout title='รายการเสียงที่บันทึกไว้'>
      <AlbumItem name='รายการโปรด' description='บันทึกรายการโปรด  ' />
      <AlbumItemNew />
    </AlbumLayout>
  )
}

export default Favorite
