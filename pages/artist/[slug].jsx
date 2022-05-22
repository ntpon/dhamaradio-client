import { Box } from "@chakra-ui/react"
import AlbumItem from "../../components/album/album-item"
import AlbumLayout from "../../components/album/album-layout"
import ArtistLayout from "../../components/artist/artist-layout"
import PageContainer from "../../components/layout/page-container"

const ArtistShow = () => {
  return (
    <PageContainer title='รายละเอียดพระอาจารย์'>
      <ArtistLayout
        title='หลวงพ่อพุทธทาสภิกขุ'
        description='วัดธารน้ำไหล (สวนโมกขพลาราม) จ.สุราษฎร์ธานี'
      >
        <AlbumLayout
          justifyContent='center'
          title='รายการเสียงของ หลวงพ่อพุทธทาสภิกขุ'
        >
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
        </AlbumLayout>
      </ArtistLayout>
    </PageContainer>
  )
}
export default ArtistShow
