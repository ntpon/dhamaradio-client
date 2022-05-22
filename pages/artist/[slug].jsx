import { Box } from "@chakra-ui/react"
import AlbumItem from "../../components/album/album-item"
import AlbumLayout from "../../components/album/album-layout"
import ArtistLayout from "../../components/artist/artist-layout"

const ArtistShow = () => {
  return (
    <Box>
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
    </Box>
  )
}
export default ArtistShow
