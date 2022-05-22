import { Box, Heading } from "@chakra-ui/react"
import AlbumLayout from "../../components/album/album-layout"
import ArtistItem from "../../components/artist/artist-item"
const Artist = () => {
  return (
    <Box>
      <AlbumLayout title='พระอาจารย์'>
        <ArtistItem />
        <ArtistItem />
      </AlbumLayout>
    </Box>
  )
}

export default Artist
