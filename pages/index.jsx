import { Box } from "@chakra-ui/react"
import AlbumItem from "../components/album/album-item"
import AlbumLayout from "../components/album/album-layout"
import PageContainer from "../components/layout/page-container"
const Home = () => {
  return (
    <PageContainer title='หน้าแรก'>
      <AlbumLayout title='แนะนำรายการ' justifyContent='center'>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </AlbumLayout>
      <AlbumLayout title='พระพุทธทาส' justifyContent='center'>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </AlbumLayout>
    </PageContainer>
  )
}

export default Home
