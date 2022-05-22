import { Box, Heading } from "@chakra-ui/react"
import AlbumLayout from "../../components/album/album-layout"
import ArtistItem from "../../components/artist/artist-item"
import PageContainer from "../../components/layout/page-container"
const Artist = () => {
  return (
    <PageContainer title='พระอาจารย์'>
      <AlbumLayout title='พระอาจารย์'>
        <ArtistItem />
        <ArtistItem />
      </AlbumLayout>
    </PageContainer>
  )
}

export default Artist
