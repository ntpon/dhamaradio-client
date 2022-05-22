import { Box } from "@chakra-ui/react"
import AlbumLayout from "../../components/album/album-layout"
import AlbumItem from "../../components/album/album-item"
import PageContainer from "../../components/layout/page-container"
const Album = () => {
  return (
    <PageContainer title='รายการทั้งหมด'>
      <AlbumLayout title='รายการทั้งหมด' justifyContent='center'>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </AlbumLayout>
    </PageContainer>
  )
}

export default Album
