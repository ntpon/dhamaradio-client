import { Box, Heading } from "@chakra-ui/react"
import AlbumLayout from "../../components/album/album-layout"
import ArtistItem from "../../components/artist/artist-item"
import PageContainer from "../../components/layout/page-container"
import fetcher from "../../lib/fetcher"
const Artist = ({ response }) => {
  const { priests } = response

  return (
    <PageContainer title='พระอาจารย์'>
      <AlbumLayout title='พระอาจารย์' justifyContent='left'>
        {priests?.map((artist) => (
          <ArtistItem
            key={artist.slug}
            name={artist.fullName}
            slug={artist.slug}
            image={artist.avatar}
          />
        ))}
      </AlbumLayout>
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher("client/priest")
  return {
    props: {
      response,
    },
  }
}
export default Artist
