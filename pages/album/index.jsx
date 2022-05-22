import { Box } from "@chakra-ui/react"
import AlbumLayout from "../../components/album/album-layout"
import AlbumItem from "../../components/album/album-item"
const Album = () => {
  return (
    <Box>
      <AlbumLayout title='รายการทั้งหมด' justifyContent='center'>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </AlbumLayout>
    </Box>
  )
}

export default Album
