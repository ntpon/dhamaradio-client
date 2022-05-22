import { Box } from "@chakra-ui/react"
import AlbumItem from "../components/album/album-item"
import AlbumLayout from "../components/album/album-layout"
const Home = () => {
  return (
    <Box>
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
    </Box>
  )
}

export default Home
