import AlbumItem from "../../../components/album/album-item"
import AlbumItemNew from "../../../components/album/album-item-new"
import AlbumLayout from "../../../components/album/album-layout"
import MainContainer from "../../../components/layout/main-container"
import PageContainer from "../../../components/layout/page-container"

const Favorite = () => {
  return (
    <PageContainer title='รายการเสียงที่บันทึกไว้'>
      <AlbumLayout title='รายการเสียงที่บันทึกไว้'>
        <AlbumItem name='รายการโปรด' description='บันทึกรายการโปรด  ' />
        <AlbumItemNew />
      </AlbumLayout>
    </PageContainer>
  )
}

export default Favorite
